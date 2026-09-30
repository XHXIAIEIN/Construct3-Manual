---
title: "Editor scripts"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/guide/editor-scripts"
release: 495.2
---

## On this page

- [Do not access the DOM in editor scripts](#do-not-access-the-dom-in-editor-scripts)

---

Plugin and behavior addons have separate scripts that run in the context of the editor rather than the runtime (the Construct game engine).

> **Tip**  
> Effects don't use editor scripts. They only provide shader code.

Most addons do not need complex editor scripts. However some editor features are available for things like specifying dependencies and importing assets. These are documented in the [Editor API reference](../reference.md) section of the Addon SDK manual.

## Do not access the DOM in editor scripts

The editor DOM, including all HTML, CSS styles, and event handlers, are considered internal details. Do not develop addons that access or modify these in any way. Such addons risk breaking at any time, including permanently breaking with no workaround, and in this event Scirra will not provide support. In future editor addons are likely to be sandboxed, in which case all unsupported features will become unavailable anyway.
