---
title: "SVG Picture script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/svg-picture"
release: 495
---

## On this page

- [SVG Picture APIs](#svg-picture-apis)

---

The `ISVGPictureInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [SVG Picture plugin](../../../plugin-reference/svg-picture.md).

## SVG Picture APIs

**svgUrl**  
Get the path to the SVG image to display in the object.

> **Tip**  
> This property can also be assigned, but updating the image is actually asynchronous, so it is preferable to use `setSvgUrl()` which returns a promise.

**async setSvgUrl(url)**  
Set the path to the SVG image to display in the object. Note that updating the image is asynchronous, so this is an async method and can be awaited to ensure the image has been updated.
