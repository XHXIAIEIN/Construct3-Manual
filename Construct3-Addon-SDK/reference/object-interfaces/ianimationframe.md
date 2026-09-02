---
title: "IAnimationFrame interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/ianimationframe"
release: 495.2
---

## On this page

- [Methods](#methods)

---

The `IAnimationFrame` interface represents an image for an object type. Despite the name, this interface is also used if the plugin uses a single image, like Tiled Background does.

Note `IAnimationFrame` cannot be directly rendered. You must first create a texture from it.

> **Tip**  
> This interface provides methods for loading a texture, but you don't normally need to use them. Simply pass the `IAnimationFrame` to [IWorldInstanceBase](../../reference/base-classes/iworldinstancebase.md)'s `GetTexture()` method, which provides a default implementation using these methods.

## Methods

**GetObjectType()**  
Return the associated [IObjectType](../../reference/object-interfaces/iobjecttype.md) interface.

**GetWidth()**  
Return the size of the image, in pixels.

**GetHeight()**  
Return the size of the image, in pixels.

**GetCachedWebGLTexture()**  
Return an [IWebGLTexture](../../reference/graphics-interfaces/iwebgltexture.md) interface if the texture is already loaded, else `null`.

**GetTexRect()**  
Return an [SDK.Rect](../../reference/geometry-interfaces/rect.md) representing the texture co-ordinates of this image on the loaded texture. This can only be called if `GetCachedWebGLTexture()` returned a texture.

**async LoadWebGLTexture()**  
Start asynchronously loading a texture for this image. This should only be used if `GetCachedWebGLTexture()` returned `null`. Returns a promise that resolves with a [IWebGLTexture](../../reference/graphics-interfaces/iwebgltexture.md) representing the loaded texture.

**GetBlob()**  
Return a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representing the current image content of the animation frame as a compressed image in PNG, WebP or AVIF format.

**ReplaceBlobAndDecode(blob)**  
Replace the image content of the animation frame with the given blob. The blob will be decoded as an image and the previous content of the animation frame overwritten with the image content of the blob. This may also change the size of the frame. Returns a promise that resolves when the image content has been updated.

**SetDuration(d)**  
Set and get the individual frame duration. This is a multiplier, e.g. 1 for normal speed, 2 for twice as long, etc.

**GetDuration()**  
Set and get the individual frame duration. This is a multiplier, e.g. 1 for normal speed, 2 for twice as long, etc.

**SetOriginX(x)**  
Set and get the origin for this image. The origin is specified in texture co-ordinates, i.e. from 0 to 1. The default is 0.5, indicating the middle of the image.

**SetOriginY(y)**  
Set and get the origin for this image. The origin is specified in texture co-ordinates, i.e. from 0 to 1. The default is 0.5, indicating the middle of the image.

**GetOriginX()**  
Set and get the origin for this image. The origin is specified in texture co-ordinates, i.e. from 0 to 1. The default is 0.5, indicating the middle of the image.

**GetOriginY()**  
Set and get the origin for this image. The origin is specified in texture co-ordinates, i.e. from 0 to 1. The default is 0.5, indicating the middle of the image.

**GetImagePoints()**  
Return an array of [IImagePoint](../../reference/object-interfaces/iimagepoint.md) representing the image points added to the image.

**AddImagePoint(name, x, y)**  
Add a new image point to the image with the specified name and position. As with the origin, image point positions are specified in texture co-ordinates, i.e. from 0 to 1. Returns an [IImagePoint](../../reference/object-interfaces/iimagepoint.md) representing the added image point.

**GetCollisionPoly()**  
Return the [ICollisionPoly](../../reference/object-interfaces/icollisionpoly.md) representing the image's collision polygon.

**Delete()**  
Immediately deletes this frame from its animation without any confirmation prompt. This cannot be undone.

> **Tip**  
> The last frame is not allowed to be deleted. Construct requires that animations have at least one frame.


> **Warning**  
> Use this with care as it does not warn the user and cannot be undone.
