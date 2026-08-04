---
title: "ISDKObjectTypeBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkobjecttypebase"
release: 495
---

## On this page

- [ISDKObjectTypeBase APIs](#isdkobjecttypebase-apis)

---

The `ISDKObjectTypeBase` is used in the runtime as a base class for object types in the addon SDK. It derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md).

## ISDKObjectTypeBase APIs

**_onCreate()**  
An optional override called when the runtime starts up and creates all object types before the project starts. This call may be delayed when using a loader layout.

**getImageInfo()**  
For plugins that use an image (by calling `this._info.SetHasImage(true)` in the editor plugin code), returns an [IImageInfo](../../../scripting/scripting-reference/object-interfaces/iimageinfo.md) representing the object's image.

**async _loadTextures(renderer)**  
Optional override called by the runtime when it wants your object type's textures to be created. Use the passed [IRenderer](../../../scripting/scripting-reference/graphics-interfaces/irenderer-interface.md) to load textures. This method should return a promise that resolves when all textures have been loaded.

**_releaseTextures(renderer)**  
Optional override called by the runtime when it wants your object type's textures to be released. Use the passed [IRenderer](../../../scripting/scripting-reference/graphics-interfaces/irenderer-interface.md) to release textures. This method is synchronous. Release any textures and drop the references to them.

**_onDynamicTextureLoadComplete()**  
Optional override called by the runtime when a dynamic texture load has completed. If an object is created at runtime that does not already have its textures loaded, the runtime will call `_loadTextures()` but continue running the project while the textures are loaded asynchronously. When they finish loading, the runtime then calls this override so you have an opportunity to update any references to the newly loaded texture.

**async _preloadTexturesWithInstances(renderer)**  
Optional override called just before starting a layout once all instances are created. This provides an opportunity to load textures depending on the details of the instances on the layout. Use the passed [IRenderer](../../../scripting/scripting-reference/graphics-interfaces/irenderer-interface.md) to load textures. This may be used for purposes such as rasterizing SVG at an appropriate resolution before the layout starts.
