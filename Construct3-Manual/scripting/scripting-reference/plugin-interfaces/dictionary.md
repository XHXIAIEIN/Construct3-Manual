---
title: "Dictionary script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/dictionary"
release: 495
---

## On this page

- [Dictionary APIs](#dictionary-apis)

---

The `IDictionaryInstance` interface derives from [IInstance](../../../scripting/scripting-reference/object-interfaces/iinstance.md) to add APIs specific to the [Dictionary plugin](../../../plugin-reference/dictionary.md).

> **Tip**  
> The Dictionary object can only use strings as keys, and strings/numbers as values, since these are the only types supported by the plugin. Use your own independent JavaScript [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to use other types.

## Dictionary APIs

**getDataMap()**  
Return the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) which is used as the underlying data storage for the Dictionary object. This allows access to add, change, remove and iterate items.

> **Warning**  
> Only use string keys, and only store number or string primitives as key values, or the plugin will cease to work correctly.
