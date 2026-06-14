/**
 * Construct 3 Release Changelog Scraper
 *
 * Builds a per-branch changelog history from construct.net release notes.
 *
 * Data sources:
 *   - https://editor.construct.net/versions.json
 *       → current latest release per branch (Beta / Stable / LTS). Minimal metadata.
 *   - https://www.construct.net/en/make-games/releases/page-N
 *       → paginated index of ALL releases (branch, version, short description, link).
 *   - https://www.construct.net/en/make-games/releases/{branch}/{slug}
 *       → full release page: rich-text notes + categorized changelog entries.
 *
 * Output (repo root):
 *   releases/<branch>.json   one file per branch, newest first
 *   releases/index.json      summary + latest-per-branch
 *
 * Usage:
 *   node scrape-releases.js [options]
 *
 * Options:
 *   --autoConnect   Attach to an already-running Chrome (read from its
 *                   DevToolsActivePort) instead of launching a fresh instance.
 *                   Reuses the existing session, so Cloudflare is already passed.
 *   --beta          With --autoConnect: target the Chrome Beta profile.
 *   --channel=NAME  With --autoConnect: target a specific channel's profile
 *                   (stable | beta | dev | canary). Overrides --beta.
 *   --ws=URL        With --autoConnect: connect to an explicit browser WS URL.
 *   --force         Re-fetch detail pages even if already present in the JSON.
 *   --branch=NAME   Only scrape a single branch (beta | stable | lts).
 *   --max-pages=N   Stop discovery after N index pages (default: auto-detect).
 *   --limit=N       Only fetch detail for the first N pending releases (testing).
 *   --delay=N       Delay between detail pages in ms (default: 500).
 *   --discover-only Only build/refresh release stubs from the index; skip details.
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

// ─── Chrome Detection ────────────────────────────────────────────────

function findChrome() {
  const envPath = process.env.CHROME_PATH;
  if (envPath && fs.existsSync(envPath)) return envPath;

  const candidates = process.platform === 'win32' ? [
    path.join(process.env.PROGRAMFILES || '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(process.env['PROGRAMFILES(X86)'] || '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
  ] : process.platform === 'darwin' ? [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ] : [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  throw new Error('Chrome not found. Set CHROME_PATH environment variable.');
}

// ─── Configuration ───────────────────────────────────────────────────

const BASE_URL = 'https://www.construct.net';
const RELEASES_PATH = '/en/make-games/releases';
// The index renders differently depending on session (public marketing layout
// `ul.latestReleases > li.<branch>` vs. the logged-in `.titleContainer` feed),
// but both expose pagination and the same release links. Wait on any of them.
const INDEX_SELECTOR = '.paginationWrap, ul.latestReleases, .titleContainer';
const VERSIONS_JSON = 'https://editor.construct.net/versions.json';
const REPO_ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(REPO_ROOT, 'releases');

// Display name + sort order for known branches. Unknown branches still work.
const BRANCH_META = {
  beta:   { name: 'Beta',   order: 0 },
  stable: { name: 'Stable', order: 1 },
  lts:    { name: 'LTS',    order: 2 },
};
function branchName(slug) {
  return BRANCH_META[slug]?.name || (slug.charAt(0).toUpperCase() + slug.slice(1));
}

// Release slug (e.g. "r487-3") derived from a detail URL. Not persisted — it's
// fully recoverable from viewDetailsURL / launchURL.
function slugFromURL(url) {
  const m = (url || '').match(/\/releases\/[^/]+\/([^/?#]+)/);
  return m ? m[1] : '';
}

// ─── CLI Args ────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const getArg = (name, def) => {
  const a = args.find(x => x.startsWith(`--${name}=`));
  return a ? a.split('=')[1] : def;
};
const hasFlag = (name) => args.includes(`--${name}`);

const FORCE = hasFlag('force');
const DISCOVER_ONLY = hasFlag('discover-only');
const ONLY_BRANCH = getArg('branch', null);
const MAX_PAGES = parseInt(getArg('max-pages', '0')) || Infinity;
const LIMIT = parseInt(getArg('limit', '0')) || Infinity;
const DELAY = parseInt(getArg('delay', '500'));
const AUTO_CONNECT = hasFlag('autoConnect') || hasFlag('auto-connect');
const CHANNEL = getArg('channel', hasFlag('beta') ? 'beta' : 'stable');
const WS_URL = getArg('ws', null);

// ─── Connect to a running Chrome via its DevToolsActivePort ──────────
//
// chrome-devtools-mcp (and Chrome launched with --remote-debugging-port)
// writes "<port>\n<wsPath>" to DevToolsActivePort inside the user-data-dir.
// We read it to build a browser WebSocket endpoint and attach a second CDP
// client — no need to relaunch Chrome or re-pass Cloudflare.

function channelUserDataDir(channel) {
  const local = process.env.LOCALAPPDATA || '';
  const home = process.env.HOME || process.env.USERPROFILE || '';
  if (process.platform === 'win32') {
    const map = {
      stable: 'Google/Chrome/User Data',
      beta:   'Google/Chrome Beta/User Data',
      dev:    'Google/Chrome Dev/User Data',
      canary: 'Google/Chrome SxS/User Data',
    };
    return path.join(local, map[channel] || map.stable);
  }
  if (process.platform === 'darwin') {
    const map = {
      stable: 'Google/Chrome', beta: 'Google/Chrome Beta',
      dev: 'Google/Chrome Dev', canary: 'Google/Chrome Canary',
    };
    return path.join(home, 'Library/Application Support', map[channel] || map.stable);
  }
  const map = {
    stable: 'google-chrome', beta: 'google-chrome-beta',
    dev: 'google-chrome-unstable', canary: 'google-chrome-canary',
  };
  return path.join(home, '.config', map[channel] || map.stable);
}

function readDevToolsEndpoint(channel) {
  const file = path.join(channelUserDataDir(channel), 'DevToolsActivePort');
  if (!fs.existsSync(file)) {
    throw new Error(`DevToolsActivePort not found for channel "${channel}" at ${file}. `
      + 'Is Chrome running with remote debugging (e.g. via chrome-devtools-mcp)?');
  }
  const [port, wsPath] = fs.readFileSync(file, 'utf8').trim().split('\n');
  // Chrome's /json HTTP endpoints reject non-localhost Host headers, so build
  // the browser WS endpoint directly from the port + path it advertises.
  return `ws://127.0.0.1:${port}${wsPath || ''}`;
}

// ─── Per-branch JSON store ───────────────────────────────────────────

function branchFile(slug) {
  return path.join(OUTPUT_DIR, `${slug}.json`);
}

function loadBranch(slug) {
  const file = branchFile(slug);
  if (fs.existsSync(file)) {
    try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* fall through */ }
  }
  return [];
}

function compareReleases(a, b) {
  // Newest first: by publishDate when known, else by version number desc.
  if (a.publishDate && b.publishDate) return b.publishDate - a.publishDate;
  return cmpVersion(b.releaseName, a.releaseName);
}

function cmpVersion(a, b) {
  const pa = String(a).replace(/^r/, '').split('.').map(Number);
  const pb = String(b).replace(/^r/, '').split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

// Canonical top-level field order: identity → summary → time → links → content.
const FIELD_ORDER = [
  'branchName', 'releaseName', 'shortDescription',
  'publishDate', 'publishDateISO',
  'viewDetailsURL', 'launchURL',
  'notes', 'changelog',
];
function orderEntry(e) {
  const out = {};
  for (const k of FIELD_ORDER) if (k in e) out[k] = e[k];
  for (const k of Object.keys(e)) if (!(k in out)) out[k] = e[k]; // keep extras
  return out;
}

function saveBranch(slug, list) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  list.sort(compareReleases);
  const ordered = list.map(orderEntry);
  fs.writeFileSync(branchFile(slug), JSON.stringify(ordered, null, 2) + '\n');
}

// ─── Index page discovery ────────────────────────────────────────────

async function discoverMaxPage(page) {
  await navigateWithRetry(page, `${BASE_URL}${RELEASES_PATH}`, INDEX_SELECTOR);
  return page.evaluate(() => {
    let max = 1;
    document.querySelectorAll('.paginationWrap a[data-page-id]').forEach(a => {
      const n = parseInt(a.getAttribute('data-page-id'));
      if (!isNaN(n) && n > max) max = n;
    });
    return max;
  });
}

async function scrapeIndexPage(page, pageNum) {
  const url = pageNum === 1
    ? `${BASE_URL}${RELEASES_PATH}`
    : `${BASE_URL}${RELEASES_PATH}/page-${pageNum}`;
  await navigateWithRetry(page, url, INDEX_SELECTOR);
  return page.evaluate((BASE_URL) => {
    const out = [];
    const seen = new Set();
    document.querySelectorAll('a[href*="/make-games/releases/"]').forEach(a => {
      let href = a.getAttribute('href') || '';
      const m = href.match(/\/make-games\/releases\/(beta|stable|lts|legacy)\/([^/?#]+)/i);
      if (!m) return;
      const branch = m[1].toLowerCase();
      const slug = m[2];
      const key = branch + '/' + slug;
      if (seen.has(key)) return;
      seen.add(key);
      const abs = href.startsWith('http') ? href.split('#')[0] : BASE_URL + href.split('#')[0];
      out.push({ branch, slug, viewDetailsURL: abs });
    });
    return out;
  }, BASE_URL);
}

// ─── Detail page extraction ──────────────────────────────────────────

async function scrapeDetail(page, url) {
  // Wait for the actual release content — NOT a bare `h1`, which also matches
  // the site header and would let evaluate() run before the body is parsed.
  await navigateWithRetry(page, url, '.releaseTop, .changelogsWrap');
  return page.evaluate(() => {
    // ── inline HTML → Markdown (preserves bold, italics, links, lists) ──
    function nodeToMd(node) {
      if (node.nodeType === 3) return node.textContent.replace(/\s+/g, ' ');
      if (node.nodeType !== 1) return '';
      const tag = node.tagName.toLowerCase();
      const kids = () => Array.from(node.childNodes).map(nodeToMd).join('');
      switch (tag) {
        case 'br': return '\n';
        case 'strong': case 'b': { const t = kids().trim(); return t ? `**${t}**` : ''; }
        case 'em': case 'i': { const t = kids().trim(); return t ? `*${t}*` : ''; }
        case 'code': return `\`${node.textContent.trim()}\``;
        case 'p': return `${kids().trim()}\n\n`;
        case 'ul':
          return '\n' + Array.from(node.children).filter(c => c.tagName === 'LI')
            .map(li => `- ${nodeToMd(li).trim()}`).join('\n') + '\n\n';
        case 'ol': {
          let i = 0;
          return '\n' + Array.from(node.children).filter(c => c.tagName === 'LI')
            .map(li => `${++i}. ${nodeToMd(li).trim()}`).join('\n') + '\n\n';
        }
        case 'a': {
          let href = node.getAttribute('href') || '';
          const text = kids().trim();
          if (!text) return '';
          if (href.startsWith('#') || href.startsWith('javascript:')) return text;
          if (href.startsWith('/')) href = 'https://www.construct.net' + href;
          const m = href.match(/^https?:\/\/(?:www\.)?construct\.net\/out\?u=([^&#]+)/i);
          if (m) { try { href = decodeURIComponent(m[1]); } catch { /* keep */ } }
          return `[${text}](${href})`;
        }
        case 'img': {
          let src = node.getAttribute('src') || '';
          if (src.startsWith('/')) src = 'https://www.construct.net' + src;
          const alt = node.getAttribute('alt') || '';
          return `![${alt}](${src})`;
        }
        default: return kids();
      }
    }
    const clean = (s) => s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

    const result = { shortDescription: '', publishDate: null, publishDateISO: null, notes: '', changelog: [] };

    // Title / version
    const h1 = document.querySelector('h1');
    if (h1) {
      const vm = h1.textContent.match(/\br[\d.]+\b/);
      if (vm) result.releaseName = vm[0];
    }

    // Short description + publish date from .releaseTop
    const top = document.querySelector('.releaseTop');
    if (top) {
      const h1t = top.querySelector('.h1Text');
      if (h1t) result.shortDescription = h1t.textContent.trim();
      const time = top.querySelector('time[datetime]');
      if (time) {
        const dt = time.getAttribute('datetime');
        const ms = Date.parse(dt);
        if (!isNaN(ms)) {
          result.publishDate = Math.floor(ms / 1000);
          result.publishDateISO = new Date(ms).toISOString();
        }
      }
    }

    // Notes: content between the "Notes" heading and the next heading
    const notesH = [...document.querySelectorAll('h2, h3')].find(h => h.textContent.trim() === 'Notes');
    if (notesH) {
      const parts = [];
      let el = notesH.nextElementSibling;
      while (el && !['H1', 'H2', 'H3'].includes(el.tagName)) {
        parts.push(nodeToMd(el));
        el = el.nextElementSibling;
      }
      result.notes = clean(parts.join(''));
    }

    // Changelog: one group per .changelogColWrapper (category heading + entries)
    document.querySelectorAll('.changelogsWrap .changelogColWrapper').forEach(col => {
      const h = col.querySelector('h3, h2, h4');
      const category = h ? h.textContent.trim() : 'Other';
      const items = [];
      col.querySelectorAll('.singleChangelog').forEach(sc => {
        const contentDiv = [...sc.children].find(c => !c.classList.contains('favouriteWrap'));
        const text = contentDiv ? clean(nodeToMd(contentDiv)) : clean(nodeToMd(sc));
        if (text) items.push(text);
      });
      if (items.length) result.changelog.push({ category, items });
    });

    return result;
  });
}

// ─── versions.json (current latest per branch) ───────────────────────

async function fetchVersionsJson(page) {
  try {
    await page.goto(VERSIONS_JSON, { waitUntil: 'domcontentloaded', timeout: 30000 });
    return await page.evaluate(() => {
      try { return JSON.parse(document.body.innerText); } catch { return null; }
    });
  } catch {
    return null;
  }
}

// ─── Navigation with retry ───────────────────────────────────────────

async function navigateWithRetry(page, url, selector, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await new Promise(r => setTimeout(r, 200));
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      if (selector) await page.waitForSelector(selector, { timeout: 30000 });
      return true;
    } catch (err) {
      if (attempt < maxRetries) {
        console.log(`  retry ${attempt}/${maxRetries}: ${err.message}`);
        await new Promise(r => setTimeout(r, 2000 * attempt));
      } else {
        throw err;
      }
    }
  }
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('='.repeat(60));
  console.log('Construct 3 Release Changelog Scraper');
  console.log('='.repeat(60));

  let browser, page;
  const connected = AUTO_CONNECT;

  if (connected) {
    const ws = WS_URL || readDevToolsEndpoint(CHANNEL);
    console.log(`Attaching to running Chrome (${CHANNEL}): ${ws}`);
    browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
    // Open our own tab so the user's existing tabs are left untouched.
    page = await browser.newPage();
  } else {
    const chromePath = findChrome();
    console.log(`Launching Chrome: ${chromePath}`);
    browser = await puppeteer.launch({
      headless: false,
      executablePath: chromePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900'],
    });
    page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    );
    await page.setViewport({ width: 1280, height: 900 });
  }

  // Cloudflare warmup (a connected session has usually already passed it)
  console.log('Cloudflare verification...');
  try {
    await navigateWithRetry(page, `${BASE_URL}${RELEASES_PATH}`, INDEX_SELECTOR);
    console.log('Cloudflare passed!');
  } catch {
    console.log('Complete Cloudflare challenge manually... waiting 30s');
    await new Promise(r => setTimeout(r, 30000));
  }

  // Leave the user's browser running when we merely attached to it; only the
  // throwaway scraping tab is closed.
  const cleanup = async () => {
    try {
      if (connected) { await page.close(); browser.disconnect(); }
      else { await browser.close(); }
    } catch { /* ignore */ }
  };

  // Pull versions.json so we can attach the canonical launchURL for the
  // current head of each branch (older releases get a derived launchURL).
  const versions = await fetchVersionsJson(page);
  const launchByKey = {};
  if (Array.isArray(versions)) {
    versions.forEach(v => {
      const m = (v.viewDetailsURL || '').match(/\/releases\/([^/]+)\/([^/?#]+)/);
      if (m) launchByKey[`${m[1].toLowerCase()}/${m[2]}`] = v.launchURL;
    });
  }

  // ── Phase 1: discover all release stubs from the index ──
  console.log('\nDiscovering release index...');
  const maxPage = Math.min(await discoverMaxPage(page), MAX_PAGES);
  console.log(`  index pages: ${maxPage === Infinity ? '?' : maxPage}`);

  const stubs = [];
  const stubKeys = new Set();
  for (let p = 1; p <= maxPage; p++) {
    const rows = await scrapeIndexPage(page, p);
    let added = 0;
    for (const r of rows) {
      const key = `${r.branch}/${r.slug}`;
      if (stubKeys.has(key)) continue;
      stubKeys.add(key);
      stubs.push(r);
      added++;
    }
    console.log(`  page ${p}/${maxPage}: +${added} (total ${stubs.length})`);
    await new Promise(r => setTimeout(r, DELAY));
  }

  // ── Merge stubs into per-branch stores ──
  const branches = {};
  const branchSlugs = [...new Set(stubs.map(s => s.branch))]
    .filter(b => !ONLY_BRANCH || b === ONLY_BRANCH);

  for (const slug of branchSlugs) {
    const existing = loadBranch(slug);
    const byKey = new Map(existing.map(e => [slugFromURL(e.viewDetailsURL), e]));
    for (const stub of stubs.filter(s => s.branch === slug)) {
      if (!byKey.has(stub.slug)) {
        byKey.set(stub.slug, {
          branchName: branchName(slug),
          releaseName: stub.slug.replace(/-/g, '.'),
          viewDetailsURL: stub.viewDetailsURL,
        });
      }
    }
    branches[slug] = [...byKey.values()];
    saveBranch(slug, branches[slug]);
    console.log(`  ${slug}: ${branches[slug].length} releases known`);
  }

  if (DISCOVER_ONLY) {
    console.log('\n--discover-only: skipping detail pages.');
    await finalize(branches);
    await cleanup();
    return;
  }

  // ── Phase 2: fetch detail pages for releases missing notes ──
  console.log('\nFetching detail pages...');
  let pending = [];
  for (const slug of branchSlugs) {
    for (const rel of branches[slug]) {
      // Pending when never fetched, or when a previous fetch came back empty
      // (no notes AND no changelog) — e.g. a transient load race.
      const isEmpty = !rel.notes && (!rel.changelog || rel.changelog.length === 0);
      if (FORCE || rel.notes === undefined || isEmpty) pending.push({ slug, rel });
    }
  }
  pending = pending.slice(0, LIMIT);
  console.log(`  pending: ${pending.length}`);

  let done = 0;
  for (const { slug, rel } of pending) {
    done++;
    const relSlug = slugFromURL(rel.viewDetailsURL);
    const tag = `[${done}/${pending.length}] ${slug}/${relSlug}`;
    try {
      const detail = await scrapeDetail(page, rel.viewDetailsURL);
      Object.assign(rel, {
        shortDescription: detail.shortDescription || rel.shortDescription || '',
        publishDate: detail.publishDate ?? rel.publishDate ?? null,
        publishDateISO: detail.publishDateISO ?? rel.publishDateISO ?? null,
        launchURL: launchByKey[`${slug}/${relSlug}`]
          || `https://editor.construct.net/${relSlug}/`,
        notes: detail.notes || '',
        changelog: detail.changelog || [],
      });
      if (detail.releaseName) rel.releaseName = detail.releaseName;
      const counts = detail.changelog.reduce((n, c) => n + c.items.length, 0);
      console.log(`${tag} → ${counts} entries`);
    } catch (err) {
      console.log(`${tag} ERROR: ${err.message}`);
    }
    // Persist incrementally so long runs are crash-safe / resumable.
    if (done % 10 === 0) saveBranch(slug, branches[slug]);
    await new Promise(r => setTimeout(r, DELAY));
  }

  for (const slug of branchSlugs) saveBranch(slug, branches[slug]);
  await finalize(branches);

  await cleanup();
  console.log('\nDone.');
}

// ─── index.json summary ──────────────────────────────────────────────

async function finalize(branches) {
  // Re-read every branch file so the index reflects on-disk truth even when
  // only a subset of branches was scraped this run.
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const allSlugs = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.json') && f !== 'index.json')
    .map(f => f.replace(/\.json$/, ''));

  const index = {
    generated: new Date().toISOString(),
    source: `${BASE_URL}${RELEASES_PATH}`,
    branches: {},
  };
  for (const slug of allSlugs) {
    const list = loadBranch(slug);
    list.sort(compareReleases);
    const latest = list[0];
    index.branches[slug] = {
      name: branchName(slug),
      count: list.length,
      latest: latest ? {
        releaseName: latest.releaseName,
        shortDescription: latest.shortDescription || '',
        publishDate: latest.publishDate || null,
        viewDetailsURL: latest.viewDetailsURL,
      } : null,
    };
  }
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n');
  console.log('\nindex.json:');
  for (const [slug, b] of Object.entries(index.branches)) {
    console.log(`  ${b.name}: ${b.count} releases, latest ${b.latest?.releaseName || '-'}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
