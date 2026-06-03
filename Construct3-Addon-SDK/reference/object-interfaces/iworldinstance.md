---
title: "IWorldInstance interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/iworldinstance"
release: 487.2
---

## On this page

- [Methods](#methods)

---

The `IWorldInstance` interface represents an instance of a "world" type plugin in Construct. It derives from [IObjectInstance](../../reference/object-interfaces/iobjectinstance.md).

## Methods

**GetLayer()**  
Return the [ILayer](../../reference/model-interfaces/ilayer.md) this instance belongs to.

**GetLayout()**  
Return the [ILayout](../../reference/model-interfaces/ilayout.md) this instance belongs to.

**GetBoundingBox()**  
Returns an [SDK.Rect](../../reference/geometry-interfaces/rect.md) representing the bounding box of the instance in the layout.

**GetQuad()**  
Returns an [SDK.Quad](../../reference/geometry-interfaces/quad.md) representing the bounding quad of the instance in the layout.

**GetColor()**  
Returns an [SDK.Color](../../reference/geometry-interfaces/color.md) representing the premultiplied color of the instance. This combines the instance's color tint with its opacity in the alpha channel.

**SetOpacity(o)**  
Set or get the alpha component of the instance's color, representing its opacity, in the 0-1 range.

**GetOpacity()**  
Set or get the alpha component of the instance's color, representing its opacity, in the 0-1 range.

**SetX(x)**  
Set and get the X and Y co-ordinates of this instance.

**SetY(y)**  
Set and get the X and Y co-ordinates of this instance.

**SetXY(x, y)**  
Set and get the X and Y co-ordinates of this instance.

**GetX()**  
Set and get the X and Y co-ordinates of this instance.

**GetY()**  
Set and get the X and Y co-ordinates of this instance.

**GetXY()**  
Set and get the X and Y co-ordinates of this instance.

**SetZ(z)**  
Set and get the Z position of this instance. Note this is relative to the Z elevation of the layer the instance is on.

**GetZ()**  
Set and get the Z position of this instance. Note this is relative to the Z elevation of the layer the instance is on.

**SetXYZ(x, y, z)**  
Set and get the X, Y and Z co-ordinates of this instance.

**GetXYZ()**  
Set and get the X, Y and Z co-ordinates of this instance.

**GetTotalZ()**  
Get the total Z elevation of this instance, which is its own Z position added to the Z elevation of the layer it is on.

**SetAngle(a)**  
Set and get the angle of the instance, in radians.

**GetAngle()**  
Set and get the angle of the instance, in radians.

**SetWidth(w)**  
Set and get the size of the instance, in pixels.

**SetHeight(h)**  
Set and get the size of the instance, in pixels.

**SetSize(w, h)**  
Set and get the size of the instance, in pixels.

**GetWidth()**  
Set and get the size of the instance, in pixels.

**GetHeight()**  
Set and get the size of the instance, in pixels.

**SetDepth(d)**  
Set and get the depth (size on the Z axis) of the instance, in pixels. Note this is only applicable for 3D objects (2D objects have a depth of zero).

**GetDepth()**  
Set and get the depth (size on the Z axis) of the instance, in pixels. Note this is only applicable for 3D objects (2D objects have a depth of zero).

**SetOriginX(x)**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**SetOriginY(y)**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**SetOrigin(x, y)**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**GetOriginX()**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**GetOriginY()**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**ApplyBlendMode(iRenderer)**  
Sets the current blend mode of the given [IWebGLRenderer](../../reference/graphics-interfaces/iwebglrenderer.md) according to the *Blend mode* property of the instance in Construct. This is only relevant if the plugin specifies that it supports effects. Use this in the `Draw()` method to set the correct blend mode.

**SetSampling(sampling)**  
Set or get a string of the instance's sampling mode, which is one of `"auto"`, `"nearest"`, `"bilinear"` or `"trilinear"`.

**GetSampling()**  
Set or get a string of the instance's sampling mode, which is one of `"auto"`, `"nearest"`, `"bilinear"` or `"trilinear"`.

**GetActiveSampling()**  
Get a string of the instance's active sampling mode. This is only different to `GetSampling()` when the sampling mode is `"auto"`: in this case the active sampling mode is inherited from the project, layout, layer, or hierarchy. This is the sampling mode with which this instance will be rendered.

**SetMustMitigateZFighting()**  
Specify that the instance must use Z-fighting mitigations, even when it is not rendered coplanar with another object. This can be necessary if an object renders coplanar content itself, such as a SpriteFont with overlapping characters. This method is intended for use with the addon SDK with the addon's own instances.
