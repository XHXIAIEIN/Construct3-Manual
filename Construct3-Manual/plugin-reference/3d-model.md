---
title: "3D Model"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-model"
release: 506.3
---

## On this page

- [3D model properties](#scripting)
- [3D model conditions](#collisions)
- [3D model actions](#limitations)
- [3D model expressions](#animation-blending)

---

The **3D model** [plugin](../project-primitives/objects/plugins.md) can be used to display models from a **.gltf**, **.glb**, **.fbx** or **.obj** file in the [Layout View](../interface/layout-view.md), along with playing their animations if any.

> **Tip**  
> **.fbx** and **.obj** formats are supported because, being older, are very easy to come by. **.gltf** and **.glb** are preferred.

Check the [3D model manual entry](../project-primitives/3d-model.md) for information about how to import model files.

Refer to the [3D shape](../plugin-reference/3d-shape.md) manual entry for information about working with 3D in Construct 3 which is also relevant to this plugin.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [I3DModelInstance script interface](../scripting/scripting-reference/plugin-interfaces/3d-model.md).

### Collisions

Similarly to 3D Shape collisions for 3D models still happen in 2D.

### Limitations

C3 supports a subset of a fully fledged 3D renderer. Following is a short list of the major limitations.

- Only one texture is supported on each mesh of a given model. During the import process the *"Diffuse"* texture will be used,  and in the case of that not being available the *"Emissive"* one will be chosen. In the case of using the *"Emissive"* texture it will be used in place of the *"Diffuse"* one at runtime, with no additional transformations.
- In the case of no texture being available, a mesh will be drawn using a flat color.
- Morph targets are not supported, trying to import such models will show an error feedback.

### Animation blending

Blending animations to produce unique animations is supported. When doing this, multiple animations are effectively playing at the same time, for this reason many actions, conditions and expressions that deal with the state of animations can optionally receive an **"Animation"** parameter to check for the state of a specific one. In many cases the parameter can be left empty, in which case the animation that is checked is the primary animation. The primary animation is set every time the **"Set Animation"** and **"Play"** actions (and corresponding scripting API methods) are used.

## 3D model properties

**3D Model**  
The 3D model object the [instance](../project-primitives/objects/instances.md) will use.

**Initially visible**  
If the model should be visible or not when the [layout](../project-primitives/layouts.md) starts.

**X offset**  
The offset in the X axis in relation to the corresponding instance.

**Y offset**  
The offset in the Y axis in relation to the corresponding instance.

**Z offset**  
The offset in the Z axis in relation to the corresponding instance.

**X scale**  
The scale in the X axis. This is compounded with the scale of the corresponding instance.

**Y scale**  
The scale in the Y axis. This is compounded with the scale of the corresponding instance.

**Z scale**  
The scale in the Z axis. This is compounded with the scale of the corresponding instance.

**X origin**  
The transformation origin in the X axis.

**Y origin**  
The transformation origin in the Y axis.

**Z origin**  
The transformation origin in the Z axis.

**Transform mode**  
How the model transforms when the corresponding instance is resized. *"Fit"* mode preserves the model's proportions. *"Stretch"* mode scales each axis to fit in the instance bounds. *"Legacy"* mode exists for backwards compatibility, the other modes are preferred.

**Meshes**  
Toggle which meshes to show.

**Animation**  
The initial animation.

**Loop**  
Check so they animation loops.

**Mesh render mode**  
The mesh render mode. Can be *"hierarchy"* to draw meshes using the hierarchy defined in the model file, *"isolate"* will draw the enabled models as if they where the only ones in the model file.

**Initially playing**  
If the model should start playing an animation or not when the layout starts.

**Initial animation progress**  
The initial animation progress.

**Enable collisions**  
If the instance should collide or not.

**Culling mode**  
Set which polygon faces to cull. **"No culling"**, **"Back faces"** and **"Front faces"** are applied to all meshes. **"Model settings"** is the preferred value and applies per mesh culling as set in the imported file.

**Animation blend mode**  
Set how poses are blended together when playing multiple animations simultaneously. **"Average"** averages all the influences of each playing animation on a given node of the 3D model. **"Layered"** makes it so that independent nodes are only affected by animations which are explicitly modifying them.

**Bounding box**  
An editor only property to display the bounding box of the 3D model.

**Bounding box color**  
An editor only property to change the color of the bounding box of the 3D model.

## 3D model conditions

For conditions in common to other objects, see [Common conditions](../plugin-reference/common-features/common-conditions.md).

**On model loaded**  
Triggered when a new 3D model object is loaded.

**On model load error**  
Triggered when there is an error loading a 3D model object.

**For each mesh**  
Loop through all the meshes in the 3D model.

**For each animation**  
Loop through all the animations in the 3D model.

**Is playing**  
Checks if there is an animation playing. Use the **"Animation"** parameter to target a specific animation, if left empty the primary animation will be checked.

**Is looping**  
Checks if an animation is looping. Use the **"Animation"** parameter to target a specific animation, if left empty the primary animation will be checked.

**Render mode**  
The render mode indicates how the meshes are displayed. If *"hierarchy"* is used, all the displayed meshes are drawn following the authored hierarchy in the model file. If *"isolate"* is used, the displayed meshes are drawn as if they where the only ones in the model file.

**Is mesh enabled**  
Checks if the provided mesh name is being drawn or not.

**Are all meshes enabled**  
Checks if all the meshes in the model are being drawn.

**Mesh exists**  
Checks if a mesh exists in the model.

**Enable collisions**  
Checks if collisions are enabled.

**Culling mode**  
Checks the culling mode.

**Animation blend mode**  
Checks the animation blend mode.

**On animation finished**  
Triggers when the provided animation finishes.

**On animation looped**  
Triggers when the provided animation loops.

**On any animation finished**  
Triggers when any animation finishes.

**On any animation looped**  
Triggers when any animation loops.

**On texture URL loaded**  
Triggered after 'Load texture from URL' when the texture has finished loading.

**On texture URL failed**  
Triggered after 'Load texture from URL' if the texture fails to load.

**On all textures released**  
Triggered after unload dynamic textures completes.

## 3D model actions

For actions common to other objects, see [Common actions](../plugin-reference/common-features/common-actions.md).

**Set 3D model**  
Start loading a new 3D model object. The **"Mesh"** parameter can optionally be used to draw a single mesh, if the parameter is left empty all the meshes will be drawn. Use the **"Animation"** parameter to choose the starting animation, if left empty the first animation is used. Choose if the animation should start playing using the **"Playing"** parameter, use the **"Loop"** parameter to choose if the animation should loop and the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**.

**Set 3D model (by name)**  
This is the same as **"Set 3D model"** but the 3D model object is specified using a string.

**Set mesh enabled**  
Choose if a mesh is drawn or hidden.

**Set all meshes enabled**  
Choose if all meshes are drawn or hidden.

**Set animation**  
Change the current animation. Choose if the animation should play using the **"Playing"** parameter, use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**. The **"Transition duration"** parameter can be used to smoothly transition from the last playing animation into the next over the specified period of time in seconds.

**Blend animation**  
Blend in a new animation into the currently playing ones to produce a unique animation. Choose if the animation should play using the **"Playing"** parameter, use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**. The **"Weight"** parameter indicates how much this animation will contribute to the final mix and it is a value in the range **[0 - 1]**. **"Blend duration"** indicates how much time, in seconds, it will take for the animation to contribute it's total weight into the mix.

**Set looping**  
Choose if animations should loop or not. Use the **"Animation"** parameter to target a specific animation, if left empty the primary animation will be affected.

**Set progress**  
Set the progress of the current animation using a value in the range **[0 - 1]**. Use the **"Animation"** parameter to target a specific animation, if left empty the primary animation will be affected.

**Set origin**  
Set the transformation origin on all three axes.

**Set transform**  
Change the transformation values of the model. **"Transform X"**, **"Transform Y"**, **"Transform Z"** correspond to each axis. Use the **"Operation"** parameter to choose which operation to do on the values, either *Set*, *Add*, *Subtract*, *Multiply * or *Divide*. Use the **"Type"** parameter to choose which transformation to affect, either *Offset*, *Rotation* or *Scale*.

**Set node transform**  
Change the transformation values of a node in a 3D model. Use **"Node type"** and **"Node name"** to target a specific node. **"Transform X"**, **"Transform Y"**, **"Transform Z"** correspond to each axis. Use the **"Operation"** parameter to choose which operation to do on the values, either *Set*, *Add*, *Subtract*, *Multiply * or *Divide*. Use the **"Type"** parameter to choose which transformation to affect, either *Offset*, *Rotation* or *Scale*.

**Set node quaternion**  
Change the rotation quaternion of a node in a 3D model. Use **"Node type"** and **"Node name"** to target a specific node. **"Component X"**, **"Component Y"**, **"Component Z"** and **"Component W"** correspond to each component of the quaternion.

**Reset node transform**  
Reset the transformation of a node in a 3D model. Use **"Node type"** and **"Node name"** to target a specific node. Use **"Type"** to choose which transformation to reset, either *Offset*, *Rotation*, *Scale* or *All*.

**Reset all node transforms**  
Reset the transformations of all nodes in a 3D model. Use **"Type"** to choose which transformation to reset, either *Offset*, *Rotation*, *Scale* or *All*.

**Play**  
Start playing the specified animation, use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**. The **"Transition duration"** parameter can be used to smoothly transition from the last playing animation into the next over the specified period of time in seconds.

**Blend**  
Blend in a new animation into the currently playing ones to produce a unique animation. Use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**. The **"Weight"** parameter indicates how much this animation will contribute to the final mix and it is a value in the range **[0 - 1]**. **"Blend duration"** indicates how much time, in seconds, it will take for the animation to contribute it's total weight into the mix.

**Stop**  
Stop the current animation. The progress is reset to 0.

**Pause**  
Pause the current animation. The progress stays as is.

**Resume**  
Resume a paused animation.

**Set mesh render mode**  
Change the render mode of the model. Either *"hierarchy"* or *"isolate"*.

**Set collisions enabled**  
Change the collision state.

**Set culling mode**  
Set which polygon faces to cull. **"No culling"**, **"Back faces"** and **"Front faces"** are applied to all meshes. **"Model settings"** is the preferred value and applies per mesh culling as set in the imported file.

**Set animation blend mode**  
Change how animations are blending when multiple are playing at the same time. **"Average"** averages all the influences of each playing animation on a given node of the 3D model. **"Layered"** makes it so that independent nodes are only affected by animations which are explicitly modifying them.

**Load texture from URL**  
Replace the currently loaded texture into the specified mesh. Use the *"Target"* parameter to choose which instances are affected, "Object type" will affect all the instances of the picked object type that are using the same 3D model, "Picked instances" will only affected the picked instances in the current action block that are using the same 3D model.

**Unload all dynamic textures**  
Unload all dynamically loaded textures.

**Unload some dynamic textures**  
Unload dynamically loaded textures from a 3D model's mesh.

**Unload some dynamic textures (by name)**  
Unload dynamically loaded textures from a 3D model's mesh, providing the 3D model as a string name.

**Set mesh object**  
Replace the texture of a given mesh in a 3D model with the image used by a [Sprite](../plugin-reference/sprite.md) or [Drawing canvas](../plugin-reference/drawing-canvas.md). An instance of the given object must exist on the current layout.

## 3D model expressions

For expressions common to other objects, see [common expressions](../plugin-reference/common-features/common-expressions.md).

**Error3dModelName**  
The name of the last 3D model object that failed to load.

**Name**  
The name of the 3D model object.

**Meshes**  
A comma separated string with all the currently enabled mesh names.

**Animation**  
The current animation. If many animations are being blended together, returns the primary animation.

**Animations**  
A comman separated string with all the names of the animations currently playing.

**AnimationDuration(animation)**  
The total duration of the specified animation.

**Progress(animation)**  
The progress of the specified animation as a value in the range **[0 - 1]**. If an animation is not supplied, the progress of the primary animation is returned.

**MeshCount**  
The amount of meshes in the current model.

**MeshAt(Index)**  
The mesh at the specified index.

**AnimationCount**  
The total amount of animations in the model.

**AnimationAt(Index)**  
The animation at the specified index.

**CurMesh**  
The current mesh in the **"For each mesh"** looping condition.

**CurAnimation**  
The current animation in the **"For each animation"** looping condition.

**OffsetX**  
The offset in the X axis in relation to the corresponding instance.

**OffsetY**  
The offset in the Y axis in relation to the corresponding instance.

**OffsetZ**  
The offset in the Z axis in relation to the corresponding instance.

**ScaleX**  
The scale in the X axis. This is compounded with the scale of the corresponding instance.

**ScaleY**  
The scale in the Y axis. This is compounded with the scale of the corresponding instance.

**ScaleZ**  
The scale in the Z axis. This is compounded with the scale of the corresponding instance.

**OriginX**  
The transformation origin in the X axis.

**OriginY**  
The transformation origin in the Y axis.

**OriginZ**  
The transformation origin in the Z axis.

**ModelX**  
These expressions return the final world transformation of the 3D model.

**ModelY**  
These expressions return the final world transformation of the 3D model.

**ModelZ**  
These expressions return the final world transformation of the 3D model.

**ModelRotationX**  
These expressions return the final world transformation of the 3D model.

**ModelRotationY**  
These expressions return the final world transformation of the 3D model.

**ModelRotationZ**  
These expressions return the final world transformation of the 3D model.

**ModelQuaternionX**  
These expressions return the final world transformation of the 3D model.

**ModelQuaternionY**  
These expressions return the final world transformation of the 3D model.

**ModelQuaternionZ**  
These expressions return the final world transformation of the 3D model.

**ModelQuaternionW**  
These expressions return the final world transformation of the 3D model.

**ModelScaleX**  
These expressions return the final world transformation of the 3D model.

**ModelScaleY**  
These expressions return the final world transformation of the 3D model.

**ModelScaleZ**  
These expressions return the final world transformation of the 3D model.

**NodeX(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeY(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeZ(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeRotationX(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeRotationY(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeRotationZ(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeQuaternionX(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeQuaternionY(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeQuaternionZ(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeQuaternionW(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeScaleX(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeScaleY(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.

**NodeScaleZ(nodeType, nodeName)**  
These expressions return the final world transformation of a specific node in a 3D model. **"nodeType"** can be either *"mesh"* or *"bone"* and **"nodeName"** is the name of the node as it appears in the imported 3D model file.
