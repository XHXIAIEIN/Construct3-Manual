---
title: "IObjectType interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/iobjecttype"
release: 487.3
---

## On this page

- [Methods](#methods)

---

The `IObjectType` interface represents an object type in Construct. It derives from [IObjectClass](../../reference/object-interfaces/iobjectclass.md).

## Methods

**GetImage()**  
Return an [IAnimationFrame](../../reference/object-interfaces/ianimationframe.md) representing the object type's image. The plugin must have specified `SetHasImage(true)` in [IPluginInfo](../../reference/iplugininfo.md).

**EditImage()**  
Open the Animations Editor in Construct to edit the object's image. The plugin must have specified `SetHasImage(true)`.

**GetAnimations()**  
Return an array of [IAnimation](../../reference/object-interfaces/ianimation.md) representing the animations in the object type. Note this is only applicable to animated plugin types, e.g. Sprite.

**AddAnimation(animName, frameBlob, frameWidth, frameHeight)**  
Add a new animation to the object type. The object type's plugin must be animated (e.g. the Sprite plugin). Animations must have at least one frame, so this method also adds an animation frame. The *frameBlob*, *frameWidth* and *frameHeight* parameters are all optional: if they are omitted, Construct will add a default empty animation frame. If they are provided they are interpreted the same way as [IAnimation.AddFrame()](../../reference/object-interfaces/ianimation.md); see the linked documentation for more details. The call returns a promise that resolves with the newly created [IAnimation](../../reference/object-interfaces/ianimation.md).

**GetAllInstances()**  
Return an array of all [IObjectInstances](../../reference/object-interfaces/iobjectinstance.md) or [IWorldInstances](../../reference/object-interfaces/iworldinstance.md) of this object type in the project.

> **Tip**  
> The returned instances may be placed on different layouts.

**CreateWorldInstance(layer)**  
Create a new instance from this object type, and add it to the given [ILayer](../../reference/model-interfaces/ilayer.md). Returns a new [IWorldInstance](../../reference/object-interfaces/iworldinstance.md) interface representing the new instance. Note this method is only applicable to `"world"` type plugins.

**IsInContainer()**  
Return a boolean indicating if the object type belongs to a container.

**GetContainer()**  
Return the [IContainer](../../reference/object-interfaces/icontainer.md) the object type belongs to if any, else `null`.

**CreateContainer(initialObjectTypes)**  
Create a new container using an array of [IObjectType](../../reference/object-interfaces/iobjecttype.md) for the members of the container. The array must include the IObjectType this call is made on, must contain at least two elements, and the object type must not already be in a container. Returns an [IContainer](../../reference/object-interfaces/icontainer.md) representing the created container.
