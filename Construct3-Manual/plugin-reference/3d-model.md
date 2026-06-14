---
title: "3D Model"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-model"
release: 487.3
---

## On this page

- [3D model properties](#scripting)
- [3D model conditions](#collisions)
- [3D model actions](#3d-model-properties)
- [3D model expressions](#3d-model-conditions)

---

The **3D model** [plugin](../project-primitives/objects/plugins.md) can be used to display models from a **.gltf** or **.glb** file in the [Layout View](../interface/layout-view.md), along with playing their animations.

Check the [3D model object](../project-primitives/3d-model.md) manual entry for information about how to import model files.

Refer to the [3D shape](../plugin-reference/3d-shape.md) manual entry for information about working with 3D in Construct 3 which is also relevant to this plugin.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [I3DModelInstance script interface](../scripting/scripting-reference/plugin-interfaces/3d-model.md).

### Collisions

Similarly to 3D Shape collisions for 3D models still happen in 2D.

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

**X rotation**  
The rotation in the X axis.

**Y rotation**  
The rotation in the Y axis.

**Z rotation**  
The rotation in the Z axis. This is added to the angle of the corresponding instance.

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

**Back face culling**  
Enable or disable back face culling.

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
Checks if there is an animation playing.

**Is looping**  
Checks if animations are set to loop.

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

**Is back face culling enabled**  
Checks if back face culling is enabled.

**On animation finished**  
Triggers when the provided animation finishes.

**On animation looped**  
Triggers when the provided animation loops.

**On any animation finished**  
Triggers when any animation finishes.

**On any animation looped**  
Triggers when any animation loops.

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
Change the current animation. Choose if the animation should play using the **"Playing"** parameter, use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**.

**Set looping**  
Choose if animations should loop or not.

**Set progress**  
Set the progress of the current animation using a value in the range **[0 - 1]**.

**Set origin**  
Set the transformation origin on all three axes.

**Set transform**  
Change the transformation values of the model. **"Transform X"**, **"Transform Y"**, **"Transform Z"** correspond to each axis. Use the **"Operation"** parameter to choose which operation to do on the values, either *Set*, *Add*, *Subtract*, *Multiply * or *Divide*. Use the **"Type"** parameter to choose which transformation to affect, either *Offset*, *Rotation* or *Scale*.

**Set quaternion**  
Change the rotation of the **3D model** providing the **"X"**, **"Y"**, **"Z"** and **"W"** components of a quaternion.

**Play**  
Start playing the specified animation, use the **"Loop"** parameter to choose if the animation should loop and use the **"Progress"** parameter to choose where the animation should start from, using a value in the range **[0 - 1]**.

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

**Set back face culling**  
Change the state of back face culling.

## 3D model expressions

For expressions common to other objects, see [common expressions](../plugin-reference/common-features/common-expressions.md).

**Error3dModelName**  
The name of the last 3D model object that failed to load.

**Name**  
The name of the 3D model object.

**Meshes**  
A comma separated string with all the currently enabled mesh names.

**Animation**  
The current animation.

**AnimationDuration(Animation)**  
The total duration of the specified animation.

**Progress**  
The progress of the current animation as a value in the range **[0 - 1]**.

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

**RotationX**  
The rotation in the X axis.

**RotationY**  
The rotation in the Y axis.

**RotationZ**  
The rotation in the Z axis. This value is added to the angle of the corresponding instance.

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

**QuaternionX**  
Get the rotation quaternion X component.

**QuaternionY**  
Get the rotation quaternion Y component.

**QuaternionZ**  
Get the rotation quaternion Z component.

**QuaternionW**  
Get the rotation quaternion W component.
