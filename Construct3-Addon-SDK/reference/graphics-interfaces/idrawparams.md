---
title: "IDrawParams interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/graphics-interfaces/idrawparams"
release: 495.2
---

## On this page

- [Methods](#methods)

---

The `IDrawParams` interface provides additional parameters to a `Draw()` call in the SDK.

This interface cannot be directly constructed. It is only available in the `Draw()` call.

## Methods

**GetDt()**  
Return delta-time, the time since the last frame, in seconds. This is typically approximately 1/60th of a second (0.01666...). This value is only valid when the Layout View is continually scrolling, such as when dragging an instance to the edge of the Layout View window. Any other time it will be set to a dummy non-zero value, since there wasn't a frame immediately preceding the current one.

**GetLayoutView()**  
Return an [ILayoutView](../../reference/ui-interfaces/ilayoutview.md) interface representing the current Layout View being drawn. This allows access to features of the Layout View in drawing code.
