"""
Unwrap construct.net/out?u=<encoded> redirect links to their real destination.

Example:
  https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2f...
  -> https://developer.mozilla.org/...
"""

import os
import re
import sys
from urllib.parse import unquote

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ROOTS = [
    "Construct3-Manual",
    "Construct3-Addon-SDK",
    "Construct3-Game-Services",
]

# Capture everything after u= up to the next markdown-link / whitespace / quote boundary.
# In markdown the URL ends at ')'; in HTML at '"' or '''; otherwise at whitespace.
REDIRECT_RE = re.compile(
    r'https?://(?:www\.)?construct\.net/out\?u=([^)\s"\'<>]+)',
    re.IGNORECASE,
)


def unwrap(match: re.Match) -> str:
    encoded = match.group(1)
    # Some links may be double-encoded; one pass of unquote matches what the
    # scraper captured (it stores the value as-is from the href attribute).
    decoded = unquote(encoded)
    return decoded


def process(path: str) -> int:
    with open(path, "r", encoding="utf-8") as f:
        original = f.read()

    new, n = REDIRECT_RE.subn(unwrap, original)
    if n == 0:
        return 0

    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(new)
    return n


def main() -> int:
    total_files = 0
    total_subs = 0
    for root in ROOTS:
        root_path = os.path.join(BASE, root)
        if not os.path.isdir(root_path):
            continue
        for dirpath, _dirnames, filenames in os.walk(root_path):
            for name in filenames:
                if not name.endswith(".md"):
                    continue
                fp = os.path.join(dirpath, name)
                subs = process(fp)
                if subs:
                    total_files += 1
                    total_subs += subs
                    rel = os.path.relpath(fp, BASE)
                    print(f"  {subs:3d} in {rel}")
    print(f"\nTotal: {total_subs} links unwrapped across {total_files} files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
