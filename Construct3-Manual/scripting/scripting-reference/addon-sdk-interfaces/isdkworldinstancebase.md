---
title: "ISDKWorldInstanceBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkworldinstancebase"
release: 487
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
