/**
 * Autonomous Construct 3 Documentation Scraper v3
 *
 * Scrapes both Construct 3 Manual and Addon SDK documentation.
 * Auto-discovers URLs from sidebar navigation.
 * Converts absolute links to relative paths.
 *
 * Usage:
 *   node autonomous-scraper.js [target] [options]
 *
 * Targets:
 *   manual         Scrape Construct 3 Manual (default)
 *   addon-sdk      Scrape Addon SDK documentation
 *   all            Scrape both
 *
 * Options:
 *   --resume       Resume from last saved state
 *   --force        Re-scrape all pages even if files exist
 *   --batch=N      Process N URLs per run (default: all)
 *   --delay=N      Delay between pages in ms (default: 800)
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

// ─── Targets ─────────────────────────────────────────────────────────

const TARGETS = {
  manual: {
    name: 'Construct 3 Manual',
    basePath: '/en/make-games/manuals/construct-3',
    outputDir: 'Construct3-Manual',
    stateFile: 'scrape-state-manual.json',
  },
  'addon-sdk': {
    name: 'Addon SDK',
    basePath: '/en/make-games/manuals/addon-sdk',
    outputDir: 'Construct3-Addon-SDK',
    stateFile: 'scrape-state-addon-sdk.json',
  },
  'game-services': {
    name: 'Game Services',
    basePath: '/en/game-services/manuals/game-services',
    outputDir: 'Construct3-Game-Services',
    stateFile: 'scrape-state-game-services.json',
  },
};

// ─── Configuration ───────────────────────────────────────────────────

const BASE_URL = 'https://www.construct.net';
const REPO_ROOT = path.join(__dirname, '..');
const CHROME_PATH = findChrome();

// ─── CLI Args ────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const getArg = (name, defaultVal) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : defaultVal;
};
const hasFlag = (name) => args.includes(`--${name}`);

// Determine targets
const targetArg = args.find(a => !a.startsWith('--')) || 'manual';
const targetKeys = targetArg === 'all'
  ? Object.keys(TARGETS)
  : [targetArg];

const RESUME = hasFlag('resume');
const FORCE = hasFlag('force');
const BATCH_SIZE = parseInt(getArg('batch', '0')) || Infinity;
const DELAY = parseInt(getArg('delay', '800'));

// ─── State Management ───────────────────────────────────────────────

function loadState(stateFile) {
  try {
    if (fs.existsSync(stateFile)) {
      return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    }
  } catch (e) {
    console.error('Error loading state:', e.message);
  }
  return newState();
}

function newState() {
  return {
    version: 3,
    lastUpdated: null,
    savedWithRelease: null,
    totalUrls: 0,
    completedUrls: [],
    failedUrls: [],
    currentIndex: 0,
    status: 'pending',
    stats: { success: 0, failed: 0, skipped: 0 },
  };
}

function saveState(state, stateFile) {
  state.lastUpdated = new Date().toISOString();
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
}

// ─── Link Conversion ────────────────────────────────────────────────

/**
 * Build a lookup from basePath to target for link conversion.
 * Sorted longest-first so longer paths match before shorter ones.
 */
const TARGET_BY_BASEPATH = Object.values(TARGETS)
  .sort((a, b) => b.basePath.length - a.basePath.length);

/**
 * Convert absolute construct.net links to relative paths within markdown.
 * Dynamically matches all targets defined in TARGETS.
 */
function convertLinks(markdown, currentUrl, target) {
  const currentPath = currentUrl.replace(BASE_URL, '').replace(target.basePath + '/', '').replace(target.basePath, '');
  const currentDir = currentPath.includes('/')
    ? currentPath.substring(0, currentPath.lastIndexOf('/'))
    : '';

  // Build regex that matches any target's basePath (with /en/ prefix optional)
  const basePathAlts = TARGET_BY_BASEPATH.map(t => {
    const withoutEn = t.basePath.replace(/^\/en/, '');
    return `(?:\\/en)?${withoutEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`;
  }).join('|');
  const linkRegex = new RegExp(
    `\\[([^\\]]*)\\]\\((https:\\/\\/www\\.construct\\.net(?:${basePathAlts}))(\\/[^)]*)?\\)`,
    'g'
  );

  return markdown.replace(linkRegex, (match, text, baseUrl, subPath) => {
    // Find which target this link points to (match with or without /en/)
    const linkTarget = TARGET_BY_BASEPATH.find(t => {
      const withoutEn = t.basePath.replace(/^\/en/, '');
      return baseUrl.endsWith(t.basePath) || baseUrl.endsWith(withoutEn);
    });
    if (!linkTarget) return match;

    const rawPath = (subPath || '').replace(/^\//, '');
    const hashIdx = rawPath.indexOf('#');
    const linkPath = hashIdx >= 0 ? rawPath.substring(0, hashIdx) : rawPath;
    const fragment = hashIdx >= 0 ? rawPath.substring(hashIdx) : '';

    if (linkTarget === target) {
      // Same doc: use relative path
      if (!linkPath) return `[${text}](index.md${fragment})`;
      if (currentDir) {
        const upLevels = currentDir.split('/').length;
        const prefix = '../'.repeat(upLevels);
        return `[${text}](${prefix}${linkPath}.md${fragment})`;
      }
      return `[${text}](${linkPath}.md${fragment})`;
    } else {
      // Cross-doc link: use relative path to sibling directory
      const otherDir = linkTarget.outputDir;
      const upLevels = (currentDir ? currentDir.split('/').length : 0) + 1;
      const prefix = '../'.repeat(upLevels);
      if (!linkPath) return `[${text}](${prefix}${otherDir}/index.md${fragment})`;
      return `[${text}](${prefix}${otherDir}/${linkPath}.md${fragment})`;
    }
  });
}

// ─── URL Discovery ──────────────────────────────────────────────────

async function discoverUrls(page, target) {
  console.log(`Discovering URLs for ${target.name}...`);
  await page.goto(BASE_URL + target.basePath, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.waitForSelector('.manualContent', { timeout: 30000 });

  const urls = await page.evaluate((basePath) => {
    const links = document.querySelectorAll(`nav a[href*="${basePath}"]`);
    const urlSet = new Set();
    links.forEach(a => {
      const href = a.href.split('#')[0].split('?')[0];
      if (href.includes(basePath)) urlSet.add(href);
    });
    return [...urlSet].sort();
  }, target.basePath);

  // Ensure index page is included
  const indexUrl = BASE_URL + target.basePath;
  if (!urls.includes(indexUrl)) urls.unshift(indexUrl);

  console.log(`  Found ${urls.length} pages`);
  return urls;
}

// ─── Version Detection ──────────────────────────────────────────────

async function detectVersion(page) {
  console.log('Detecting Construct 3 version...');
  try {
    // Navigate directly to versions.json (avoids CORS issues with cross-origin fetch)
    // Format: [{ branchName: "Stable", releaseName: "r476.3", ... }, ...]
    await page.goto('https://editor.construct.net/versions.json', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    const version = await page.evaluate(() => {
      try {
        const data = JSON.parse(document.body.innerText);
        if (Array.isArray(data)) {
          const stable = data.find(v => v.branchName === 'Stable');
          if (stable?.releaseName) return stable.releaseName;
        }
      } catch (e) {}
      return null;
    });
    if (version) {
      console.log(`  Version: ${version} (from versions.json)`);
      return version;
    }

    console.log('  Could not parse versions.json');
    return 'unknown';
  } catch (e) {
    console.log('  Could not detect version:', e.message);
    return 'unknown';
  }
}

// ─── Content Extraction ─────────────────────────────────────────────

async function extractContent(page) {
  return page.evaluate(() => {
    const BASE_URL = 'https://www.construct.net';
    const h1 = document.querySelector('.manualContent h1');
    const title = h1 ? h1.textContent.trim() : document.title.split(' - ')[0];

    const toc = [];
    const tocNav = document.querySelector('.onThisPageWrap nav');
    if (tocNav) {
      tocNav.querySelectorAll('a').forEach(link => {
        toc.push({ text: link.textContent.trim(), href: link.getAttribute('href') });
      });
    }

    const contentDiv = document.querySelector('.manualContent > div > div');
    if (!contentDiv) return { error: 'Content not found' };

    // Track if this is the first h1 (to skip duplicate per MD025)
    let seenH1 = false;

    function nodeToMd(node, depth = 0) {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent;
      if (node.nodeType !== Node.ELEMENT_NODE) return '';
      const tag = node.tagName.toLowerCase();
      const children = () => Array.from(node.childNodes).map(c => nodeToMd(c, depth)).join('');

      if (tag === 'button') return '';
      if (tag === 'a' && node.classList.contains('internalNavLink')) return '';
      if (tag === 'span' && node.classList.contains('ilTag'))
        return ` \`[${node.textContent.trim()}]\` `;
      if (tag === 'span' && node.classList.contains('navWrap'))
        return `\`${node.textContent.replace(/►/g, ' › ').trim()}\``;

      switch (tag) {
        // MD025: skip duplicate h1 (title is in frontmatter)
        case 'h1': {
          if (!seenH1) { seenH1 = true; return ''; }
          return `## ${node.textContent.trim()}\n\n`;
        }
        case 'h2': return `## ${node.textContent.trim()}\n\n`;
        case 'h3': return `### ${node.textContent.trim()}\n\n`;
        case 'h4': return `#### ${node.textContent.trim()}\n\n`;
        case 'h5': return `##### ${node.textContent.trim()}\n\n`;
        case 'h6': return `###### ${node.textContent.trim()}\n\n`;
        case 'p': return `${children().trim()}\n\n`;
        case 'br': return '\n';
        case 'strong': case 'b': return `**${children()}**`;
        case 'em': case 'i': return `*${children()}*`;
        case 'code':
          if (node.parentElement?.tagName === 'PRE') return node.textContent;
          return `\`${node.textContent}\``;
        case 'kbd': return `<kbd>${node.textContent}</kbd>`;
        // MD031: blank lines around fenced code blocks
        case 'pre': {
          const code = node.querySelector('code');
          let lang = code?.className?.match(/language-(\w+)/)?.[1] || '';
          // Infer language from content when no meaningful class is set
          if (!lang || lang === 'none') {
            const text = (code || node).textContent.trim();
            if (/^\s*[\[{]/.test(text) && /[\]}]\s*$/.test(text)) lang = 'json';
            else if (/^\s*<[a-zA-Z!?]/.test(text)) lang = 'html';
            else if (/^\s*(import |from |def |class |if __name__)/.test(text)) lang = 'python';
            else if (/^\s*(const |let |var |function |import |export |=>)/.test(text)) lang = 'js';
            else if (/^\s*(GET |POST |PUT |PATCH |DELETE |HEAD |OPTIONS )\/?/.test(text)) lang = 'http';
            else if (/^\s*\$ /.test(text)) lang = 'sh';
            else if (/^\s*(SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP )/i.test(text)) lang = 'sql';
            else if (/^\s*#(include|define|pragma)/.test(text)) lang = 'c';
          }
          return `\n\`\`\`${lang}\n${(code || node).textContent.trim()}\n\`\`\`\n\n`;
        }
        case 'a': {
          let href = node.getAttribute('href') || '';
          const text = children().trim();
          if (!text) return '';
          if (href.startsWith('/')) href = BASE_URL + href;
          if (href.startsWith('#')) return `[${text}](${href})`;
          // Unwrap construct.net/out?u=<encoded> redirect to the real destination
          const redirectMatch = href.match(/^https?:\/\/(?:www\.)?construct\.net\/out\?u=([^&#]+)/i);
          if (redirectMatch) {
            try { href = decodeURIComponent(redirectMatch[1]); } catch { /* keep original */ }
          }
          return `[${text}](${href})`;
        }
        case 'img': {
          let src = node.getAttribute('src') || '';
          if (src.startsWith('/')) src = BASE_URL + src;
          let alt = node.getAttribute('alt') || '';
          if (!alt) alt = src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ');
          return `![${alt}](${src})\n\n`;
        }
        // MD032: blank lines around lists
        case 'ul':
          return '\n' + Array.from(node.children)
            .filter(c => c.tagName === 'LI')
            .map(li => `${'  '.repeat(depth)}- ${nodeToMd(li, depth).trim()}`)
            .join('\n') + '\n\n';
        case 'ol': {
          let i = 0;
          return '\n' + Array.from(node.children)
            .filter(c => c.tagName === 'LI')
            .map(li => `${'  '.repeat(depth)}${++i}. ${nodeToMd(li, depth).trim()}`)
            .join('\n') + '\n\n';
        }
        case 'li': {
          const parts = [];
          node.childNodes.forEach(c => {
            if (c.tagName === 'UL' || c.tagName === 'OL')
              parts.push('\n' + nodeToMd(c, depth + 1));
            else parts.push(nodeToMd(c, depth));
          });
          return parts.join('');
        }
        case 'table': {
          const rows = node.querySelectorAll('tr');
          if (!rows.length) return '';
          let md = '\n';
          rows.forEach((row, i) => {
            const cells = row.querySelectorAll('th, td');
            const texts = Array.from(cells).map(c =>
              nodeToMd(c).replace(/\|/g, '\\|').replace(/\n/g, ' ').trim()
            );
            md += '| ' + texts.join(' | ') + ' |\n';
            if (i === 0) md += '| ' + Array(cells.length).fill('---').join(' | ') + ' |\n';
          });
          return md + '\n';
        }
        case 'aside': {
          const notice = node.querySelector('.notice');
          let type = 'Note';
          if (notice?.classList.contains('tip')) type = 'Tip';
          else if (notice?.classList.contains('warning')) type = 'Warning';
          else if (notice?.classList.contains('info')) type = 'Info';
          const h4 = node.querySelector('h4');
          if (h4) type = h4.textContent.trim();
          let content = nodeToMd(notice || node).trim().replace(/\n+/g, '\n> ');
          return `\n> **${type}**  \n> ${content}\n\n`;
        }
        case 'blockquote': return `\n> ${children().trim()}\n\n`;
        case 'hr': return '\n---\n\n';
        case 'dl': {
          let result = '\n';
          const items = Array.from(node.children);
          const pendingDts = [];

          function formatDt(dt) {
            // Game Services: <dt>name <span class="dataType">type</span> <span class="requiredLabel">Required</span></dt>
            const dataType = dt.querySelector('.dataType');
            const reqLabel = dt.querySelector('.requiredLabel');
            if (dataType) {
              const name = Array.from(dt.childNodes)
                .filter(n => n.nodeType === 3)
                .map(n => n.textContent.trim())
                .filter(Boolean)[0] || '';
              const link = dataType.querySelector('a');
              const typeName = dataType.textContent.trim();
              const type = link ? `[\`${typeName}\`](${link.href})` : `\`${typeName}\``;
              const req = reqLabel ? ` *${reqLabel.textContent.trim()}*` : '';
              return `**${name}** ${type}${req}`;
            }
            return `**${dt.textContent.trim()}**`;
          }

          items.forEach(child => {
            if (child.tagName === 'DT') {
              pendingDts.push(child);
            } else if (child.tagName === 'DD') {
              const desc = nodeToMd(child).trim();
              pendingDts.forEach(dt => {
                result += `${formatDt(dt)}\n${desc}\n\n`;
              });
              pendingDts.length = 0;
            }
          });
          // Handle trailing DTs without DD
          pendingDts.forEach(dt => {
            result += `${formatDt(dt)}\n\n`;
          });
          return result;
        }
        default: return children();
      }
    }

    return { title, toc, content: nodeToMd(contentDiv), html: contentDiv.innerHTML, url: window.location.pathname };
  });
}

// ─── File Operations ─────────────────────────────────────────────────

function urlToFilePath(url, target) {
  let relPath = url.replace(BASE_URL, '').replace(target.basePath + '/', '').replace(target.basePath, '');
  if (relPath.startsWith('/')) relPath = relPath.substring(1);
  if (!relPath) relPath = 'index';
  const parts = relPath.split('/');
  const fileName = parts.pop() + '.md';
  return path.join(REPO_ROOT, target.outputDir, ...parts, fileName);
}

function outputExists(url, target) {
  return fs.existsSync(urlToFilePath(url, target));
}

// ─── Raw Data Persistence ────────────────────────────────────────────

function saveRawData(url, data, target, version) {
  const versionDir = path.join(__dirname, 'data', version, target.outputDir);
  let relPath = url.replace(BASE_URL, '').replace(target.basePath + '/', '').replace(target.basePath, '');
  if (relPath.startsWith('/')) relPath = relPath.substring(1);
  if (!relPath) relPath = 'index';
  const jsonPath = path.join(versionDir, relPath + '.json');
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  const { content, ...rest } = data;
  const rawData = { ...rest, savedWithRelease: version, scrapeDate: new Date().toISOString() };
  fs.writeFileSync(jsonPath, JSON.stringify(rawData, null, 2));
}

/**
 * Generate heading slug (matches GitHub/markdownlint anchors)
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\- ]/g, '')
    .replace(/ /g, '-');
}

function saveMarkdown(url, data, target, savedWithRelease) {
  const filePath = urlToFilePath(url, target);
  const dirPath = path.dirname(filePath);
  fs.mkdirSync(dirPath, { recursive: true });

  // MD025: title in frontmatter only, no duplicate h1
  const release = (savedWithRelease || '').replace(/^r/, '');
  let md = `---\ntitle: "${data.title.replace(/"/g, '\\"')}"\nsource: "${BASE_URL}${data.url}"\nrelease: ${release}\n---\n\n`;

  // Build heading slug map for MD051 (internalH1Link -> real slug)
  const headingSlugs = [];
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(data.content)) !== null) {
    const text = match[2].trim();
    if (text !== 'On this page') {
      headingSlugs.push(slugify(text));
    }
  }

  if (data.toc?.length > 0) {
    md += '## On this page\n\n';
    data.toc.forEach((item, i) => {
      // MD051: replace #internalH1LinkN with actual heading slug
      let href = item.href;
      const linkMatch = href.match(/^#internalH1Link(\d+)$/);
      if (linkMatch && headingSlugs[parseInt(linkMatch[1])]) {
        href = '#' + headingSlugs[parseInt(linkMatch[1])];
      }
      md += `- [${item.text}](${href})\n`;
    });
    md += '\n---\n\n';
  }

  md += data.content;

  // Convert absolute links to relative paths
  md = convertLinks(md, url, target);

  // ─── Markdownlint compliance cleanup ───
  let lines = md.split('\n');
  const result = [];
  let inCodeBlock = false;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Track frontmatter
    if (i === 0 && line.trim() === '---') { inFrontmatter = true; result.push(line); continue; }
    if (inFrontmatter && line.trim() === '---') { inFrontmatter = false; result.push(line); continue; }
    if (inFrontmatter) { result.push(line); continue; }

    // Track code blocks
    if (line.trim().startsWith('```')) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    // Fix leading whitespace (HTML indentation leaking into text)
    const trimmed = line.trimStart();
    if (line.match(/^ {2,}\S/) &&
        !trimmed.startsWith('-') && !trimmed.startsWith('*') &&
        !trimmed.startsWith('>') && !trimmed.startsWith('|') &&
        !trimmed.match(/^\d+\./)) {
      line = trimmed;
    }

    // MD032: blank line before list items
    const isListItem = /^\s*[-*+]\s/.test(line) || /^\s*\d+\.\s/.test(line);
    if (isListItem && result.length > 0) {
      const prev = result[result.length - 1];
      const prevIsList = /^\s*[-*+]\s/.test(prev) || /^\s*\d+\.\s/.test(prev);
      if (prev.trim() !== '' && !prevIsList && !prev.startsWith('#')) {
        result.push('');
      }
    }

    // MD032: blank line after list ends
    if (!isListItem && line.trim() !== '' && result.length > 0) {
      const prev = result[result.length - 1];
      if (/^\s*[-*+]\s/.test(prev) || /^\s*\d+\.\s/.test(prev)) {
        result.push('');
      }
    }

    // Blank line before blockquotes
    if (line.startsWith('>') && result.length > 0) {
      const prev = result[result.length - 1];
      if (prev.trim() !== '' && !prev.startsWith('>')) {
        result.push('');
      }
    }

    // Blank line before **term** lines (definition lists)
    if (line.startsWith('**') && result.length > 0) {
      const prev = result[result.length - 1];
      if (prev.trim() !== '' && !prev.startsWith('#') && prev.trim() !== '---') {
        result.push('');
      }
    }

    result.push(line);
  }

  md = result.join('\n')
    .replace(/\n{3,}/g, '\n\n')       // MD012: no multiple consecutive blank lines
    .replace(/[ \t]+$/gm, '')         // MD009: no trailing spaces
    .replace(/\t/g, '  ')             // MD010: no hard tabs
    // Restore trailing two spaces for soft line breaks on definition lines
    // Matches: **name**, **name** `type`, **name** `type` *Required*, **name** [type](...) *Required*
    .replace(/^(\*\*.+[*`)])$/gm, '$1  ')
    .replace(/^(> \*\*.+[*`)])$/gm, '$1  ')
    .trim() + '\n';                   // MD047: file ends with single newline

  fs.writeFileSync(filePath, md, 'utf8');
  return filePath;
}

// ─── Navigation with Retry ──────────────────────────────────────────

async function navigateWithRetry(page, url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await new Promise(r => setTimeout(r, 300));
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForSelector('.manualContent', { timeout: 30000 });
      return true;
    } catch (err) {
      if (attempt < maxRetries) {
        console.log(`  Retry ${attempt}/${maxRetries}: ${err.message}`);
        await new Promise(r => setTimeout(r, 2000 * attempt));
      } else {
        throw err;
      }
    }
  }
}

// ─── Scrape a Single Target ──────────────────────────────────────────

async function scrapeTarget(page, targetKey, savedWithRelease) {
  const target = TARGETS[targetKey];
  const stateFile = path.join(__dirname, target.stateFile);
  const state = RESUME ? loadState(stateFile) : newState();
  state.savedWithRelease = savedWithRelease;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Scraping: ${target.name}`);
  console.log(`Output:   ${target.outputDir}/`);
  console.log('='.repeat(60));

  // Discover URLs
  const allUrls = await discoverUrls(page, target);
  state.totalUrls = allUrls.length;

  // Filter pending URLs
  const completedSet = new Set(state.completedUrls);
  const pendingUrls = allUrls.filter(url => {
    if (!FORCE && completedSet.has(url)) return false;
    if (!FORCE && outputExists(url, target)) {
      if (!completedSet.has(url)) {
        state.completedUrls.push(url);
        state.stats.skipped++;
      }
      return false;
    }
    return true;
  });

  console.log(`Total: ${allUrls.length} | Pending: ${pendingUrls.length} | Skipped: ${state.stats.skipped}`);

  if (pendingUrls.length === 0) {
    console.log('All pages up to date!');
    state.status = 'completed';
    saveState(state, stateFile);
    return state;
  }

  const batchUrls = pendingUrls.slice(0, BATCH_SIZE);
  console.log(`Processing ${batchUrls.length} pages...\n`);

  let processed = 0;
  for (const url of batchUrls) {
    processed++;
    const shortPath = url.replace(BASE_URL + target.basePath, '') || '/index';
    const progress = `[${processed}/${batchUrls.length}]`;

    try {
      console.log(`${progress} ${shortPath}`);
      await navigateWithRetry(page, url);
      const data = await extractContent(page);

      if (data.error) {
        console.log(`${progress} Error: ${data.error}`);
        state.failedUrls.push(url);
        state.stats.failed++;
      } else {
        saveRawData(url, data, target, savedWithRelease);
        const filePath = saveMarkdown(url, data, target, savedWithRelease);
        console.log(`${progress} → ${path.relative(REPO_ROOT, filePath)}`);
        state.completedUrls.push(url);
        state.stats.success++;
      }

      await new Promise(r => setTimeout(r, DELAY));
    } catch (err) {
      console.log(`${progress} Error: ${err.message}`);
      state.failedUrls.push(url);
      state.stats.failed++;
    }

    state.currentIndex = allUrls.indexOf(url) + 1;
    if (processed % 10 === 0) saveState(state, stateFile);
  }

  state.status = pendingUrls.length <= batchUrls.length ? 'completed' : 'paused';
  saveState(state, stateFile);
  return state;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log('='.repeat(60));
  console.log('Construct 3 Documentation Scraper v3');
  console.log(`Targets: ${targetKeys.join(', ')}`);
  console.log('='.repeat(60));

  // Launch browser
  console.log(`Chrome: ${CHROME_PATH}`);
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800'],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  );
  await page.setViewport({ width: 1280, height: 800 });

  // Cloudflare warmup
  const warmupTarget = TARGETS[targetKeys[0]] || TARGETS.manual;
  console.log('Cloudflare verification...');
  try {
    await page.goto(BASE_URL + warmupTarget.basePath, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.waitForSelector('.manualContent', { timeout: 30000 });
    console.log('Cloudflare passed!');
  } catch (e) {
    console.log('Please complete Cloudflare challenge manually...');
    console.log('Waiting 30 seconds...');
    await new Promise(r => setTimeout(r, 30000));
  }

  // Detect version
  const savedWithRelease = await detectVersion(page);

  // Scrape each target
  const results = {};
  for (const key of targetKeys) {
    results[key] = await scrapeTarget(page, key, savedWithRelease);
  }

  await browser.close();

  // Final summary
  console.log('\n' + '='.repeat(60));
  console.log(`Construct 3 ${savedWithRelease} | ${new Date().toISOString().split('T')[0]}`);
  console.log('='.repeat(60));
  for (const [key, state] of Object.entries(results)) {
    const t = TARGETS[key];
    console.log(`\n${t.name} (${t.outputDir}/):`);
    console.log(`  Success: ${state.stats.success} | Failed: ${state.stats.failed} | Skipped: ${state.stats.skipped}`);
    console.log(`  Total: ${state.completedUrls.length}/${state.totalUrls}`);
    if (state.failedUrls.length > 0) {
      console.log('  Failed:');
      state.failedUrls.forEach(u => console.log('    ' + u.replace(BASE_URL, '')));
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
