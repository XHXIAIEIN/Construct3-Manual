---
title: "IImageInfo script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iimageinfo"
release: 495
---

## On this page

- [IImageInfo APIs](#iimageinfo-apis)

---

The `IImageInfo` interface represents an image in the project. It is also the base class of [IAnimationFrame](../../../scripting/scripting-reference/object-interfaces/ianimationframe.md).

## IImageInfo APIs

**width**  
Read-only numbers specifying the dimensions of the image in pixels. The method returns both values at the same time.

**height**  
Read-only numbers specifying the dimensions of the image in pixels. The method returns both values at the same time.

**getSize()**  
Read-only numbers specifying the dimensions of the image in pixels. The method returns both values at the same time.

**async toCanvas()**  
Extract the image content for this image to either a HTMLCanvasElement (in DOM mode) or OffscreenCanvas (in worker mode). The method is async and so returns a Promise that resolves with the canvas.
