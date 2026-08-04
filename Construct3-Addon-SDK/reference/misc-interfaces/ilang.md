---
title: "ILang interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/misc-interfaces/ilang"
release: 495
---

## On this page

- [Methods](#methods)

---

The `ILang` interface allows for looking up translated strings in the language file.

> **Warning**  
> Only look up language strings from your own addon. Any other strings in the language file are subject to change at any time.

## Methods

**PushContext(prefix)**  
Push a prefix to the context stack. For example `PushContext("foo")` followed by `Get(".bar")` will return the same string as if `Get("foo.bar")` were used. Pushing a context beginning with a dot will append to the current prefix, but pushing an entry not beginning with a dot will reset the current prefix. **Note:** be sure to always call `PopContext()` afterwards.

**PopContext()**  
Pop a prefix from the context stack.

**Get(context)**  
Look up a string in the language file. If the context begins with a dot, it is relative to the current context prefix. Otherwise it is treated as an absolute context.

> **Tip**  
> For convenience Construct also adds this method as a global function `self.lang()`.
