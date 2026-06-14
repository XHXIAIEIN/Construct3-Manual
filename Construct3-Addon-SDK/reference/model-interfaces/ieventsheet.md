---
title: "IEventSheet interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/ieventsheet"
release: 487.3
---

## On this page

- [Methods](#methods)

---

The `IEventSheet` interface represents an event sheet in the project model.

> **Tip**  
> Since events can be nested underneath each other, they are represented as a tree. `GetRoot()` returns the root node of the tree.

## Methods

**GetProject()**  
Return the associated [IProject](../../reference/model-interfaces/iproject.md).

**GetName()**  
Return the name of the event sheet.

**GetRoot()**  
Return the root node of the event sheet. This is an [IEventParentRow](../../reference/model-interfaces/ieventparentrow.md) representing the top level of the event sheet.
