---
title: "ILayout interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/ilayout"
release: 487
---

## On this page

- [Methods](#methods)

---

The `ILayout` interface represents a layout in the project model. Note that [ILayoutView](../../reference/ui-interfaces/ilayoutview.md) represents the editor view, but ILayout represents the layout in the project.

## Methods

**GetProject()**  
Return the associated [IProject](../../reference/model-interfaces/iproject.md).

**GetName()**  
Return the name of the layout.

**GetAllLayers()**  
Return an array of [ILayer](../../reference/model-interfaces/ilayer.md) representing all the layers on this layout.

**GetEventSheet()**  
Return the [IEventSheet](../../reference/model-interfaces/ieventsheet.md) assigned for this layout. Note that layouts do not have to have an event sheet assigned, so this can return `null`.
