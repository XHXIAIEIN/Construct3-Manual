---
title: "Tiled Background script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tiled-background"
release: 495
---

## On this page

- [Tiled Background APIs](#tiled-background-apis)

---

The `ITiledBackgroundInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [Tiled Background plugin](../../../plugin-reference/tiled-background.md).

## Tiled Background APIs

**imageWidth**  
The original dimensions of the Tiled Background's current image in pixels. This does not include tiling - it returns the size as shown in Construct's image editor. The method allows retrieving both values at the same time.

**imageHeight**  
The original dimensions of the Tiled Background's current image in pixels. This does not include tiling - it returns the size as shown in Construct's image editor. The method allows retrieving both values at the same time.

**getImageSize()**  
The original dimensions of the Tiled Background's current image in pixels. This does not include tiling - it returns the size as shown in Construct's image editor. The method allows retrieving both values at the same time.

**imageOffsetX**  
The offset of the displayed Tiled Background image in pixels. The methods allow setting or getting both values at the same time.

**imageOffsetY**  
The offset of the displayed Tiled Background image in pixels. The methods allow setting or getting both values at the same time.

**setImageOffset(imageOffsetX, imageOffsetY)**  
The offset of the displayed Tiled Background image in pixels. The methods allow setting or getting both values at the same time.

**getImageOffset()**  
The offset of the displayed Tiled Background image in pixels. The methods allow setting or getting both values at the same time.

**imageScaleX**  
The scale of the displayed Tiled Background image, defaulting to 1 for original size. The methods allow setting or getting both values at the same time.

**imageScaleY**  
The scale of the displayed Tiled Background image, defaulting to 1 for original size. The methods allow setting or getting both values at the same time.

**setImageScale(imageScaleX, imageScaleY)**  
The scale of the displayed Tiled Background image, defaulting to 1 for original size. The methods allow setting or getting both values at the same time.

**getImageScale()**  
The scale of the displayed Tiled Background image, defaulting to 1 for original size. The methods allow setting or getting both values at the same time.

**imageAngle**  
The angle of the displayed Tiled Background image in radians. If this is changed, `imageAngleDegrees` updates accordingly.

**imageAngleDegrees**  
The angle of the displayed Tiled Background image in degrees. If this is changed, `imageAngle` updates accordingly.

**enableTileRandomization**  
A boolean indicating whether tile randomization is enabled.

**tileXRandom**  
When tile randomization is enabled, the amount of random horizontal and vertical offset to use, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**tileYRandom**  
When tile randomization is enabled, the amount of random horizontal and vertical offset to use, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**setTileRandom(tileXRandom, tileYRandom)**  
When tile randomization is enabled, the amount of random horizontal and vertical offset to use, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**getTileRandom()**  
When tile randomization is enabled, the amount of random horizontal and vertical offset to use, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**tileAngleRandom**  
When tile randomization is enabled, the amount of random rotation to use, as a percentage in the range 0-1.

**tileBlendMarginX**  
When tile randomization is enabled, the percentage of the tile width or height which will fade in to the adjacent tile, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**tileBlendMarginY**  
When tile randomization is enabled, the percentage of the tile width or height which will fade in to the adjacent tile, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**setTileBlendMargin(tileBlendMarginX, tileBlendMarginY)**  
When tile randomization is enabled, the percentage of the tile width or height which will fade in to the adjacent tile, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**getTileBlendMargin()**  
When tile randomization is enabled, the percentage of the tile width or height which will fade in to the adjacent tile, as a percentage in the range 0-1. The methods allow setting or getting both values at the same time.

**async replaceImage(blob)**  
Replace the current image with the contents of a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representing an image file such as a PNG image. The blob can be locally generated or retrieved from a URL, for example:

```javascript
// Loading an image from a URL
const response = await fetch(url);
const blob = await response.blob();
await tbInst.replaceImage(blob);
```
