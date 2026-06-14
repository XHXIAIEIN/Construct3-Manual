"""
Fix missing trailing spaces for Markdown soft line breaks in ACE documentation.

Pattern: **BoldItemName** followed by description text on next line
needs two trailing spaces on the bold line for proper rendering.
"""

import re
import glob
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "Construct3-Manual")

# Pattern: entire line is bold text (possibly with params in parens)
# e.g. **ItemValue**, **KeyAt(index)**, **On any item get**, **In-memory only**
BOLD_LINE = re.compile(r'^\*\*[^*]+\*\*$')

# Lines that should NOT be treated as descriptions (next line filters)
NOT_DESCRIPTION = re.compile(r'^($|#|\*\*|>|-|\|)')

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = 0
    new_lines = []

    for i, line in enumerate(lines):
        stripped = line.rstrip('\n').rstrip('\r')

        # Check if this line is a bold item (without trailing spaces already)
        if BOLD_LINE.match(stripped) and not stripped.endswith('  '):
            # Check next line exists and is description text
            if i + 1 < len(lines):
                next_stripped = lines[i + 1].rstrip('\n').rstrip('\r')
                if next_stripped and not NOT_DESCRIPTION.match(next_stripped):
                    # Add two trailing spaces
                    new_lines.append(stripped + '  \n')
                    changed += 1
                    continue

        new_lines.append(line)

    if changed > 0:
        with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
            f.writelines(new_lines)

    return changed

def main():
    dirs = [
        os.path.join(BASE, "plugin-reference"),
        os.path.join(BASE, "behavior-reference"),
        os.path.join(BASE, "system-reference"),
        os.path.join(BASE, "plugin-reference", "common-features"),
    ]

    total_files = 0
    total_fixes = 0

    for d in dirs:
        if not os.path.isdir(d):
            continue
        for filepath in sorted(glob.glob(os.path.join(d, "*.md"))):
            fixes = fix_file(filepath)
            if fixes > 0:
                total_files += 1
                total_fixes += fixes
                print(f"  Fixed {fixes:3d} lines in {os.path.relpath(filepath, BASE)}")

    print(f"\nTotal: {total_fixes} lines fixed across {total_files} files")

if __name__ == "__main__":
    main()
