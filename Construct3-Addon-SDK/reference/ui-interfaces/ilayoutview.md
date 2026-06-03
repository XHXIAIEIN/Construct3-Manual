---
title: "ILayoutView interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/ui-interfaces/ilayoutview"
release: 487.2
---

## On this page

- [Methods](#methods)

---

The `ILayoutView` interface provides access to a Layout View from the SDK. Note that this interface represents the editor view; the [ILayout](../../reference/model-interfaces/ilayout.md) interface provides the interface to the actual layout in the project model.

## Methods

**GetProject()**  
Return the [IProject](../../reference/model-interfaces/iproject.md) representing the project associated with this Layout View.

**GetLayout()**  
Return an [ILayout](../../reference/model-interfaces/ilayout.md) representing the layout in the project model that this Layout View is showing.

**GetActiveLayer()**  
Return an [ILayer](../../reference/model-interfaces/ilayer.md) representing the current active layer selected in this Layout View.

**GetZoomFactor()**  
Return the current zoom factor of the Layout View. For example 1 represents 100% zoom, 0.5 represents 50% zoom, etc.

**LayoutToClientDevice(x, y)**  
Convert from layout co-ordinates to device pixel co-ordinates in the layout view canvas. This is useful for rendering at device pixel sizes after calling `SetDeviceTransform()`. Returns the result co-ordinates as an array of `[x, y]`.

**SetDeviceTransform(iRenderer)**  
Set the given [IWebGLRenderer](../../reference/graphics-interfaces/iwebglrenderer.md) to a device pixel co-ordinate transform. This means co-ordinates used for rendering are based on device pixel co-ordinates relative to the layout view canvas, rather than layout co-ordinates.

**SetDefaultTransform(iRenderer)**  
Set the given IWebGLRenderer to a layout co-ordinate transform. This is the default and should be restored after using `SetDeviceTransform()`.

**Refresh()**  
Schedules the layout view to be redrawn at the next animation frame. Avoid unnecessarily refreshing the layout view, such as refreshing on a timer, since this can waste battery life.

**GetViewMode()**  
Returns either the string `"2d"` or `"3d"` depending on the current view mode of the Layout View.
