/**
 * Keep the previous values of generated sample data in JSON code blocks.
 *
 * Game Services pages render their example JSON on every request with new
 * UUIDs, timestamps and short random codes. Without this step every scrape
 * rewrites those values, and the update PR fills with changes that carry no
 * documentation content.
 *
 * A changed line keeps its old text only when both lines have the same key and
 * both values are volatile of the same kind. Any other change goes through.
 */

const VOLATILE = [
  ['uuid', /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i],
  ['datetime', /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?$/],
  // Five random characters, such as "mPURt" or "P14O6", but not a word like "Hello"
  ['code', /^(?![A-Z]?[a-z]{4,}$)[A-Za-z0-9]{5}$/],
];

const LINE = /^(\s*"[^"]+":\s*)"([^"]*)"(,?)$/;

function volatileKind(value) {
  const hit = VOLATILE.find(([, re]) => re.test(value));
  return hit ? hit[0] : null;
}

function keepOldLine(oldLine, newLine) {
  const o = oldLine.match(LINE);
  const n = newLine.match(LINE);
  if (!o || !n || o[1] !== n[1] || o[3] !== n[3]) return false;
  const kind = volatileKind(o[2]);
  return kind !== null && kind === volatileKind(n[2]);
}

function jsonBlocks(lines) {
  const blocks = [];
  let start = -1;
  lines.forEach((line, i) => {
    if (start < 0 && line.trim() === '```json') start = i + 1;
    else if (start >= 0 && line.trim() === '```') {
      blocks.push([start, i]);
      start = -1;
    }
  });
  return blocks;
}

/**
 * Return `newMd` with volatile JSON sample values taken from `oldMd`.
 * Blocks are paired by position and only when both files have the same
 * number of JSON blocks and the paired blocks have the same line count.
 */
function stabilizeSamples(oldMd, newMd) {
  if (!oldMd) return newMd;
  const oldLines = oldMd.split('\n');
  const newLines = newMd.split('\n');
  const oldBlocks = jsonBlocks(oldLines);
  const newBlocks = jsonBlocks(newLines);
  if (oldBlocks.length !== newBlocks.length) return newMd;

  newBlocks.forEach(([ns, ne], b) => {
    const [os, oe] = oldBlocks[b];
    if (ne - ns !== oe - os) return;
    for (let i = 0; i < ne - ns; i++) {
      const oldLine = oldLines[os + i];
      const newLine = newLines[ns + i];
      if (oldLine !== newLine && keepOldLine(oldLine, newLine)) newLines[ns + i] = oldLine;
    }
  });
  return newLines.join('\n');
}

module.exports = { stabilizeSamples };
