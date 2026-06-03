---
title: "IEventParentRow interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/ieventparentrow"
release: 487.2
---

## On this page

- [Methods](#methods)

---

The `IEventParentRow` interface is a base class representing any row in the event sheet that can have other events nested beneath it. For example an event group is a parent row since it can have other events nested inside it, but an event comment is not a parent row, because nothing can be nested inside it. Note that the root node of the event sheet is a parent row.

## Methods

**async AddEventBlock()**  
Add an empty child event block, with no conditions or actions. Returns a promise resolving with the created [IEventBlock](../../reference/model-interfaces/ieventblock.md).
