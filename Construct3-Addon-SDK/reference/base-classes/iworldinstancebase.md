---
title: "IWorldInstanceBase interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/base-classes/iworldinstancebase"
release: 487
---

## On this page

- [Methods](#methods)

---

The `IWorldInstanceBase` interface is used as the base class for instances in the SDK for "world" type plugins. It derives from [IInstanceBase](../../reference/iinstancebase.md).

`IWorldInstanceBase` cannot be directly constructed; it should only be used as a base class.

## Methods

**OnPlacedInLayout()**  
Optional override called when an instance is explicitly placed in the layout by the user. This is the right time to set any additional defaults such as the initial size or origin.

**Draw(iRenderer, iDrawParams)**  
Called when Construct wants the instance to draw itself in the Layout View. `iRenderer` is an [IWebGLRenderer](../../reference/graphics-interfaces/iwebglrenderer.md) interface, used for issuing draw commands. `iDrawParams` is an [IDrawParams](../../reference/graphics-interfaces/idrawparams.md) interface, used for providing additional information to the draw call.

**GetTexture(animationFrame)**  
Load a texture from an [IAnimationFrame](../../reference/object-interfaces/ianimationframe.md). Texture loading is asynchronous and is started in the first call. The method will return `null` while the texture is loading. Construct will automatically refresh the Layout View when the texture finishes loading, at which point the method will return an [IWebGLTexture](../../reference/graphics-interfaces/iwebgltexture.md) interface that can be used for rendering. Plugins typically render a placeholder of a semitransparent solid color while the texture is loading.

**GetTexRect()**  
When a texture has successfully loaded, returns an [SDK.Rect](../../reference/geometry-interfaces/rect.md) indicating the dimensions of the image to render in texture co-ordinates. Note that due to Construct's in-editor spritesheeting engine, this is usually a subset of a texture.

**HadTextureError()**  
Returns true to indicate texture loading failed. Plugins typically switch the placeholder to a red color in this circumstance.

**IsOriginalSizeKnown()**  
Optional overrides to specify the "original size" of the instance. Typically if a plugin supports this, it is the size of the image. This enables percentage size options in the Properties Bar. The default implementation returns `false` from `IsOriginalSizeKnown()`, disabling the feature. To enable it, return `true` from `IsOriginalSizeKnown()`, and return the original size in the `GetOriginalWidth()` and `GetOriginalHeight()` methods.

**GetOriginalWidth()**  
Optional overrides to specify the "original size" of the instance. Typically if a plugin supports this, it is the size of the image. This enables percentage size options in the Properties Bar. The default implementation returns `false` from `IsOriginalSizeKnown()`, disabling the feature. To enable it, return `true` from `IsOriginalSizeKnown()`, and return the original size in the `GetOriginalWidth()` and `GetOriginalHeight()` methods.

**GetOriginalHeight()**  
Optional overrides to specify the "original size" of the instance. Typically if a plugin supports this, it is the size of the image. This enables percentage size options in the Properties Bar. The default implementation returns `false` from `IsOriginalSizeKnown()`, disabling the feature. To enable it, return `true` from `IsOriginalSizeKnown()`, and return the original size in the `GetOriginalWidth()` and `GetOriginalHeight()` methods.

**HasDoubleTapHandler()**  
Optional override which is called when the user double-clicks or double-taps an instance in the Layout View. This also enables an *Edit* option in the context menu, which also calls the double-tap handler. Typically plugins with an image use this handler to edit the image. The default implementation returns `false` from `HasDoubleTapHandler()`, disabling the feature. To enable it, return `true` from `HasDoubleTapHandler()` and then override `OnDoubleTap()` to perform a task.

**OnDoubleTap()**  
Optional override which is called when the user double-clicks or double-taps an instance in the Layout View. This also enables an *Edit* option in the context menu, which also calls the double-tap handler. Typically plugins with an image use this handler to edit the image. The default implementation returns `false` from `HasDoubleTapHandler()`, disabling the feature. To enable it, return `true` from `HasDoubleTapHandler()` and then override `OnDoubleTap()` to perform a task.
