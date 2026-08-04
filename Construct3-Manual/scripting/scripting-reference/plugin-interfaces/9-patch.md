---
title: "9-patch script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/9-patch"
release: 495
---

## On this page

- [9-patch APIs](#9-patch-apis)

---

The `I9PatchInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [9-patch plugin](../../../plugin-reference/9-patch.md).

## 9-patch APIs

**leftMargin**  
Set or get the margins of each side of the 9-patch in pixels. Note these margins apply to the source image, ignoring the image scale properties. By default all 9-patch instances share the same set of patch images, and so changing the margins will affect all instances, regardless of which instance was modified. However the exception to this is after the `replaceImage()` method completes, in which case the instance is using its own unique patch images, and the margins can then be changed for that instance only.

**rightMargin**  
Set or get the margins of each side of the 9-patch in pixels. Note these margins apply to the source image, ignoring the image scale properties. By default all 9-patch instances share the same set of patch images, and so changing the margins will affect all instances, regardless of which instance was modified. However the exception to this is after the `replaceImage()` method completes, in which case the instance is using its own unique patch images, and the margins can then be changed for that instance only.

**topMargin**  
Set or get the margins of each side of the 9-patch in pixels. Note these margins apply to the source image, ignoring the image scale properties. By default all 9-patch instances share the same set of patch images, and so changing the margins will affect all instances, regardless of which instance was modified. However the exception to this is after the `replaceImage()` method completes, in which case the instance is using its own unique patch images, and the margins can then be changed for that instance only.

**bottomMargin**  
Set or get the margins of each side of the 9-patch in pixels. Note these margins apply to the source image, ignoring the image scale properties. By default all 9-patch instances share the same set of patch images, and so changing the margins will affect all instances, regardless of which instance was modified. However the exception to this is after the `replaceImage()` method completes, in which case the instance is using its own unique patch images, and the margins can then be changed for that instance only.

**edges**  
Set or get the style of the edge patches as a string, which must be one of `"tile"` or `"stretch"`.

**fill**  
Set or get the style of the central patch as a string, which must be one of `"tile"`, `"stretch"` or `"transparent"`.

**seams**  
Set or get the seams mode as a string, which must be one of `"exact"` or `"overlap"`.

**imageScaleX**  
Set or get the scale of the patches drawn inside the object, as a scale factor (e.g. 1 represents 100% scale).

**imageScaleY**  
Set or get the scale of the patches drawn inside the object, as a scale factor (e.g. 1 represents 100% scale).

**async replaceImage(blob)**  
Replace the current image with the contents of a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representing an image file such as a PNG image. The blob can be locally generated or retrieved from a URL, for example:

```javascript
// Loading an image from a URL
const response = await fetch(url);
const blob = await response.blob();
await inst.replaceImage(blob);

// (adjust margins if necessary here, e.g.:)
// inst.leftMargin = 20;
```

Once this method has completed (after `await`, or the Promise resolving), the margins can then be modified for the specific instance without affecting all other instances. Be sure to only modify the margins after the returned promise resolves, otherwise it will still be using the shared patch images and so affect all other instances.
