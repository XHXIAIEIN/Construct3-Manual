---
title: "IPlugin script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iplugin"
release: 495
---

## On this page

- [IPlugin APIs](#iplugin-apis)

---

The `IPlugin` script interface represents a plugin, such as the Sprite plugin. The plugin only exists once in the project: if there are multiple Sprite objects in a project, then each object type is represented with a different [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md).

## IPlugin APIs

**runtime**  
A reference back to the [IRuntime](../../../scripting/scripting-reference/iruntime.md) interface.

**id**  
A read-only string with a unique identifier for this plugin as specified by the plugin developer.

**isSingleGlobal**  
A read-only boolean indicating whether this plugin is a 'single global' type, meaning it is added to the project once and then is available globally, such as with the Mouse object.

**getSingleGlobalObjectType()**  
These calls are only permitted when `isSingleGlobal` is true. These return the single [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) and [IInstance](../../../scripting/scripting-reference/object-interfaces/iinstance.md) respectively that have been created for this plugin.

**getSingleGlobalInstance()**  
These calls are only permitted when `isSingleGlobal` is true. These return the single [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) and [IInstance](../../../scripting/scripting-reference/object-interfaces/iinstance.md) respectively that have been created for this plugin.

**isWorldType**  
A read-only boolean indicating whether this plugin is a world type, meaning it appears in layouts.

**isHTMLElementType**  
A read-only boolean indicating whether this plugin creates a HTML element.

**isRotatable**  
A read-only boolean indicating whether instances of the plugin may be rotated.

**isRotatable3d**  
A read-only boolean indicating whether instances of the plugin may use 3D rotation.

**hasEffects**  
A read-only boolean indicating whether the plugin may use effects.

**is3d**  
A read-only boolean indicating whether the plugin is 3D (i.e. has depth on the Z axis).

**supportsHierarchies**  
A read-only boolean indicating whether instances of the plugin may be used in hierarchies.

**supportsMesh**  
A read-only boolean indicating whether instances of the plugin may use the mesh distortion feature.

**static getByConstructor(ctor)**  
Return an `IPlugin` from its constructor in the `C3.Plugins` namespace, or `null` if it does not exist. For example `IPlugin.getByConstructor(C3.Plugins.Audio)` will return the `IPlugin` interface representing the Audio object, or `null` if the plugin is not used in the project.
