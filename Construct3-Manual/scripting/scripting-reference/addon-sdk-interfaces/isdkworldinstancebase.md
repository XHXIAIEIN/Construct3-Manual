---
title: "ISDKWorldInstanceBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkworldinstancebase"
release: 495
---

## On this page

- [ISDKWorldInstanceBase APIs](#isdkworldinstancebase-apis)

---

The `ISDKWorldInstanceBase` interface is used as a runtime base class for world instances in the addon SDK. It derives from both [ISDKInstanceBase](../../../scripting/scripting-reference/addon-sdk-interfaces/isdkinstancebase.md) and [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md).

## ISDKWorldInstanceBase APIs

**_draw(renderer)**  
An override for drawing plugins to draw their content using the passed [IRenderer](../../../scripting/scripting-reference/graphics-interfaces/irenderer-interface.md) interface.

**_handleRendererContextLoss()**  
Utility method to enable calling of the `_onRendererContextLost()` and `_onRendererContextRestored()` methods.

**_onRendererContextLost()**  
Optional overrides for handling renderer context loss. This is only necessary if your addon creates any renderer resources. These overrides are only called if your instance first calls `_handleRendererContextLoss()` (normally in the constructor to enable these callbacks for the lifetime of the instance). In a context loss event, all renderer resources have been released, so any references to them must be dropped. In a context restored event the resources may be recreated again if necessary. Alternatively they can be left released if a lazy-loading approach is used.

**_onRendererContextRestored()**  
Optional overrides for handling renderer context loss. This is only necessary if your addon creates any renderer resources. These overrides are only called if your instance first calls `_handleRendererContextLoss()` (normally in the constructor to enable these callbacks for the lifetime of the instance). In a context loss event, all renderer resources have been released, so any references to them must be dropped. In a context restored event the resources may be recreated again if necessary. Alternatively they can be left released if a lazy-loading approach is used.

**_isOriginalSizeKnown()**  
_getOriginalSize()

  Optional overrides to specify the "original size" of the instance. Typically if a plugin supports this, it is the size of the image. This enables percentage size options in the Properties Bar. The default implementation returns `false` from `_isOriginalSizeKnown()`, disabling the feature. To enable it, return `true` from `_isOriginalSizeKnown()`, and return the original size in the `_getOriginalSize()` method by returning an array with the form [width, height, depth]. For 2D content, return zero for the depth.

**_rendersToOwnZPlane()**  
An optional override to indicate if the instance renders to its own Z plane. This plane is at the base of the object for 3D objects with a depth, e.g. the back face of the 3D shape object. Typically all 2D content renders to its own Z plane and so should return `true`, which is the default when the method is not overridden. 3D content such as a 3D model that does not render to its own Z plane should return `false`. The result of this method is used to help mitigate Z-fighting.

**_setMustMitigateZFighting()**  
Call this method to specify that the instance must use Z-fighting mitigations, even when it is not rendered coplanar with another object. This can be necessary if an object renders coplanar content itself, such as a SpriteFont with overlapping characters. This method is intended for use with the addon SDK with the addon's own instances.

**_mustPreDraw()**  
An optional override to indicate to the effect compositor that this instance requires the "pre-draw" step. This step fully renders the instance to an intermediate surface before processing any effects, which adds performance overhead but may be necessary in some cases for a correct result. The default is to return `false` which means pre-draw is not required.
