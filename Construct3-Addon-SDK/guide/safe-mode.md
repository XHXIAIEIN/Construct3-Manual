---
title: "Safe mode"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/guide/safe-mode"
release: 487.3
---

For normal addon development, you should use [addon testing mode](../guide/using-developer-mode.md). This allows quick iteration and you can easily fix addons even if they crash Construct 3 on startup. However in some cases you may build a .c3addon package which accidentally still crashes the editor on startup. To remove this addon, you can clear your browser storage. Alternatively you can use Safe Mode in Construct 3, which does not load third-party addons but still lists them in the Addon Manager so they can be uninstalled.

To use Safe Mode, add **?safe-mode** to the URL, e.g. [editor.construct.net/?safe-mode](https://editor.construct.net/?safe-mode). Note all third-party addons are disabled in this mode. You should immediately open the Addon Manager, uninstall the problematic addon, and then restart Construct 3. Be sure to remove the ?safe-mode part of the URL to re-enable loading third-party addons.

It is not recommended to open any projects or try to do any actual work in safe mode: it exists only so you can reach the Addon Manager dialog to uninstall the addon.
