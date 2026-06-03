---
title: "Tiled Background"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/tiled-background"
release: 487.2
---

## On this page

- [Tile randomization](#scripting)
- [Tiled Background properties](#tile-randomization)
- [Tiled Background conditions](#tiled-background-properties)
- [Tiled Background actions](#tiled-background-conditions)
- [Tiled Background expressions](#tiled-background-actions)

---

The **Tiled Background** object can display an image in a repeating pattern, as shown below.

[![A Tiled Background object](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/986/tiled-background.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/986/tiled-background.png)A Tiled Background object

This pattern can be achieved with a single Tiled Background object, and it is much faster (and more convenient to edit) than using multiple Sprite objects arranged in a grid. Always prefer using Tiled Background objects wherever an image repeats.

Tiled Backgrounds cannot have a collision polygon. They always collide according to their bounding rectangle.

Tiled Backgrounds can have effects applied. For more information, see [Effects](../project-primitives/objects/effects.md).

If you wish to have a tile-based project where each tile can be different, consider using a [Tilemap](../plugin-reference/tilemap.md) object instead.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [ITiledBackgroundInstance script interface](../scripting/scripting-reference/plugin-interfaces/tiled-background.md).

## Tile randomization

If you tile a small image, or zoom out, then the repetitive appearance can become obvious. One easy way to solve this is to enable **Tile randomization** in the Tiled Background properties. The image below shows the effect this can have. See also the interactive [Tile Randomization example](https://editor.construct.net/#open=tile-randomization).

[![Left: standard tiling. Right: randomized tiling.](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/92710/tile-randomization_v800.jpg)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/92710/tile-randomization.jpg)Left: standard tiling. Right: randomized tiling.

## Tiled Background properties

**Image**  
Click the *Edit* link to edit the Tiled Background's image in the [Animations Editor](../interface/animations-editor.md).

**Initially visibile**  
Choose whether the object is shown (visible) or hidden (invisible) when the layout starts.

**Origin**  
Choose the position of the origin of the object relative to its unrotated bounding rectangle.

**Wrap horizontal**  
Choose how the image repeats on each axis. *Mirrored repeat* alternately mirrors/flips the image for each repeat. *Clamp to edge* can be used to prevent wrapping on one axis, for example to wrap an image vertically only, choose *Clamp to edge* for *Wrap horizontal*. This is useful to avoid unwanted artefacts due to wrapping on the other axis.

**Wrap vertical**  
Choose how the image repeats on each axis. *Mirrored repeat* alternately mirrors/flips the image for each repeat. *Clamp to edge* can be used to prevent wrapping on one axis, for example to wrap an image vertically only, choose *Clamp to edge* for *Wrap horizontal*. This is useful to avoid unwanted artefacts due to wrapping on the other axis.

**Image offset X**  
Offset the displayed Tiled Background image by a number of pixels on each axis.

**Image offset Y**  
Offset the displayed Tiled Background image by a number of pixels on each axis.

**Image scale X**  
Stretch the displayed Tiled Background image by a percentage on each axis.

**Image scale Y**  
Stretch the displayed Tiled Background image by a percentage on each axis.

**Image angle**  
Rotate the displayed Tiled Background image by a number of degrees, relative to the offset position.

**Enable tile randomization**  
By default a Tiled Background repeats its image identically in a grid. However this can make the image repetition obvious. Enabling tile randomization helps avoid this by randomly offsetting and rotating each individual tile, and blending the edges to keep the appearance seamless. There are several tile randomization properties that can be changed to adjust the effect and better suit different types of artwork.

**X random**  
When using tile randomization, adjust the amount of random horizontal and vertical offset for each tile. This is set as a percentage from 0% (no offset) to 100% (offset up to a full tile's width/height).

**Y random**  
When using tile randomization, adjust the amount of random horizontal and vertical offset for each tile. This is set as a percentage from 0% (no offset) to 100% (offset up to a full tile's width/height).

**Angle random**  
When using tile randomization, adjust the amount of random rotation for each tile. This is set as a percentage from 0% (no rotation) to 100% (rotate up to 360°).

**Blend margin X**  
When using tile randomization, adjust the area over which tiles will blend in to the adjacent tile. If these are set to 0% then there is no edge blending and so usually hard edges are visible where tiles join. Using a value like 5% means that the first and last 5% of the tile's width/height will fade in to the adjacent tile. Using 50% will provide a full blend across the entire tile, as each half will be blending in to an adjacent tile, but high values can make the artwork look blurry. Usually the lowest value that does not produce visible edges is the best setting.

**Blend margin Y**  
When using tile randomization, adjust the area over which tiles will blend in to the adjacent tile. If these are set to 0% then there is no edge blending and so usually hard edges are visible where tiles join. Using a value like 5% means that the first and last 5% of the tile's width/height will fade in to the adjacent tile. Using 50% will provide a full blend across the entire tile, as each half will be blending in to an adjacent tile, but high values can make the artwork look blurry. Usually the lowest value that does not produce visible edges is the best setting.

## Tiled Background conditions

For conditions in common to other objects, see [Common conditions](../plugin-reference/common-features/common-conditions.md).

**Is tile randomization enabled**  
True if tile randomization is currently enabled. See the *Enable tile randomization* property for more details.

**On image URL loaded**  
Triggered when *Load image from URL* finishes downloading the image and is ready to display it, or if the load fails.

**On image URL failed to load**  
Triggered when *Load image from URL* finishes downloading the image and is ready to display it, or if the load fails.

## Tiled Background actions

For actions common to other objects, see [Common actions](../plugin-reference/common-features/common-actions.md).

**Set image angle**  
Change the *Image angle* property, rotating the displayed Tiled Background image by a number of degrees.

**Set image X offset**  
Change the *Image offset X* and *Image offset Y* properties, offsetting the displayed tiled background image.

> **Tip**  
> Avoid indefinitely increasing the image offset, such as by always adding to it. In some cases a very large image offset can start to exhibit rendering glitches due to precision issues on the GPU. You can avoid this by wrapping the image offset back to 0 after it exceeds the image size.

**Set image Y offset**  
Change the *Image offset X* and *Image offset Y* properties, offsetting the displayed tiled background image.

> **Tip**  
> Avoid indefinitely increasing the image offset, such as by always adding to it. In some cases a very large image offset can start to exhibit rendering glitches due to precision issues on the GPU. You can avoid this by wrapping the image offset back to 0 after it exceeds the image size.

**Set image X scale**  
Change the *Image scale X* and *Image scale Y* properties, stretching the displayed tiled background image by a percentage on each axis.

**Set image Y scale**  
Change the *Image scale X* and *Image scale Y* properties, stretching the displayed tiled background image by a percentage on each axis.

**Set tile randomization enabled**  
Set whether tile randomization is currently enabled. See the *Enable tile randomization* property for more details.

**Set angle random**  
When tile randomization is enabled, set the relevant tile randomization properties. See the corresponding properties above for more details.

**Set position random**  
When tile randomization is enabled, set the relevant tile randomization properties. See the corresponding properties above for more details.

**Set tile blend margin**  
When tile randomization is enabled, set the relevant tile randomization properties. See the corresponding properties above for more details.

**Load image from URL**  
Load an image from a given URL. It is not shown until the image has finished downloading, and *On image URL loaded* triggers. Images loaded from different domains are subject to the same cross-domain restrictions as AJAX requests - for more information see the section on cross-domain in the [AJAX](../plugin-reference/ajax.md) object. Data URIs can also be passed as an image, e.g. from a canvas snapshot or camera image.

## Tiled Background expressions

For expressions common to other objects, see [common expressions](../plugin-reference/common-features/common-expressions.md).

**ImageWidth**  
The original dimensions of the tiled background's current image in pixels. Since tiled backgrounds can be extended over large areas causing the normal Width and Height expressions to return different values, these can be used to get the original size of the source image regardless of the object size.

**ImageHeight**  
The original dimensions of the tiled background's current image in pixels. Since tiled backgrounds can be extended over large areas causing the normal Width and Height expressions to return different values, these can be used to get the original size of the source image regardless of the object size.

**ImageAngle**  
Return the *Image angle* property, in degrees.

**ImageOffsetX**  
Return the *Image offset X* and *Image offset Y* properties, in pixels.

**ImageOffsetY**  
Return the *Image offset X* and *Image offset Y* properties, in pixels.

**ImageScaleX**  
Return the *Image scale X* and *Image scale Y* properties, as a percentage.

**ImageScaleY**  
Return the *Image scale X* and *Image scale Y* properties, as a percentage.

**TileAngleRandom**  
These expressions return the current tile randomization settings. See the corresponding properties above for more details.

**TileBlendMarginX**  
These expressions return the current tile randomization settings. See the corresponding properties above for more details.

**TileBlendMarginY**  
These expressions return the current tile randomization settings. See the corresponding properties above for more details.

**TileXRandom**  
These expressions return the current tile randomization settings. See the corresponding properties above for more details.

**TileYRandom**  
These expressions return the current tile randomization settings. See the corresponding properties above for more details.
