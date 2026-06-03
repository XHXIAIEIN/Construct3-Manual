---
title: "Script minification"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/guide/script-minification"
release: 487.2
---

Projects exported with *Minify script* enabled will run all script through an advanced minifier. This includes "property mangling" (renaming object properties and methods) to achieve maximum compression, and increase the difficulty of reverse engineering.

JavaScript in addons needs to be specially written to take in to account the minifier if they use external APIs that are not processed by the same minifier. Once you are familiar with what the minifier does, this is a straightforward process. **Be sure to test your addon with minification** to ensure it won't be broken when users export with minification enabled.

This process also affects JavaScript code that users write in Construct the same way as it affects your addon. Therefore for details on how to handle script minification, refer to the [guide on exporting with advanced minification](../../Construct3-Manual/scripting/guides/advanced-minification.md) from the scripting section of the Construct manual.
