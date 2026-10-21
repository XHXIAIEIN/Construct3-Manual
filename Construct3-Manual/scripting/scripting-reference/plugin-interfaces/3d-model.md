---
title: "3D model"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/3d-model"
release: 506.3
---

## On this page

- [3D Model APIs](#3d-model-apis)

---

The `I3DModelInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [3D model plugin](../../../plugin-reference/3d-model.md).

## 3D Model APIs

**loadModel(model, mesh, animation, playing, progress, loop)**  
Load a new [3D model object](../../../project-primitives/3d-model.md). The `"model"` argument is required and is a string with the name of an existing 3D model object. `"mesh"` is an optional string and defaults to an empty string, if provided  that mesh will be the only one being drawn, otherwise all meshes in the model will be drawn. `"animation"` is an optional string and default to an empty string, if not provided the first animation in the model will be used. `"playing"` is an optional boolean and defaults to *"false"*, if provided the model will start playing an animation as soon as possible. `"progress"` is an optional number and defaults to *"0"*. It accepts a value in the range **[0 - 1]** that indicates where the current animation will start playing from. `"loop"` is an optional boolean, defaults to *"false"* and decides if the model will loop if it's playing.

**onLoad**  
This function is not defined by default. When defined it is executed after loading of a new 3D model object is complete.

**onError**  
This function is not defined by default. When defined it is executed if there is any problem during the process of loading a new 3D model object.

**loadTextureFromURL(url, mesh, target)**  
Load a texture from a url into a mesh. The *"target"* parameter indicates which instances will be affected, *"object-type"* will affect all instances of the same object type while *"instance"* will only affect the instance used to call this function. The function returns a promise that resolves when the texture is loaded and is rejected if loading fails.

**unloadTextures(model, mesh)**  
Unload dynamically loaded textures from the provided 3D model and mesh. The function returns a promise that resolves when unloading completes and is rejected if there is any problem unloading.

**modelName**  
Returns the value of the current 3D model object in use. When set it acts as a shortcut for **loadModel** where only a 3D model name is provided.

**meshNames**  
Returns an array with all the meshes that are currently enabled. When set all the passed in mesh names will be enabled and any other meshes will be disabled.

**animationName**  
Returns the primary animation. When set, the animation changes to the start of the new animation and doesn't play. Any other playing animations are removed.

**animationNames**  
Returns an array with the names of all the playing animations. When set, All the animations in the array are set to progress 0 and not playing and the final mix of all the animations is displayed by the model. The first animation in the array becomes the primary one.

**animationProgress**  
Returns the progress of the primary animation. When set it updates the progress of the primary animation.

**getAnimationProgress(animation)**  
Returns the progress of the specified animation.

**setAnimationProgress(progress, animation)**  
Sets the progress of the specified animation.

**isPlaying**  
Returns if any animation in the 3D model is playing. Setting affects all the animations in the 3D model.

**isAnimationPlaying(animation)**  
Check if a specific animation is playing.

**setAnimationPlaying(playing, animation)**  
Set the playing state of a specific animation.

**isLooping**  
Returns if any animation in the 3D model is looping. Setting affects all the animations in the 3D model.

**isAnimationLooping(animation)**  
Check if a specific animation is looping.

**setAnimationLooping(playing, animation)**  
Set the looping state of a specific animation.

**meshRenderMode**  
Returns or changes the current render mode. It accepts these values: `"hierarchy"` to draw the enabled meshes as they where authored in the model file and `"isolate"` to draw the enabled meshes as if they where the only ones in the model file.

**cullingMode**  
Returns or changes the current culling mode. It accepts these values: `"none"` which applies no culling to all mesh, `"back"` which culls back faces in all meshes, `"front"` which culls front faces in all meshes and `"model"` which applies culling per mesh as the setting appears in the imported 3D model file.

**animationBlendMode**  
Returns or changes the current animation blend mode. It accepts these values: `"average"` which averages the influences of all playing animations on all nodes, and `"mask"` which ensures that each node in a model is only affected by animations that explicitly modify them.

**onAnimationFinished**  
If set this callback executes when an animation finishes, it has one string argument which is the name of the animation that finished playing.

**onAnimationLooped**  
If set this callback executes when an animation loops, it has one string argument which is the name of the animation that loopped.

**offsetX**  
Return or set the current offset of the 3D model in relation to the position of the corresponding [instance](../../../project-primitives/objects/instances.md).

**offsetY**  
Return or set the current offset of the 3D model in relation to the position of the corresponding [instance](../../../project-primitives/objects/instances.md).

**offsetZ**  
Return or set the current offset of the 3D model in relation to the position of the corresponding [instance](../../../project-primitives/objects/instances.md).

**scaleX**  
Return or set the current scale of the 3D model. These values are compounded with the scale of the corresponding instance.

**scaleY**  
Return or set the current scale of the 3D model. These values are compounded with the scale of the corresponding instance.

**scaleZ**  
Return or set the current scale of the 3D model. These values are compounded with the scale of the corresponding instance.

**modelX**  
`[read-only]`  Properties to get the final world translation components of a 3D model.

**modelY**  
`[read-only]`  Properties to get the final world translation components of a 3D model.

**modelZ**  
`[read-only]`  Properties to get the final world translation components of a 3D model.

**modelRotationX**  
`[read-only]`  Properties to get the final world radian rotation components of a 3D model.

**modelRotationY**  
`[read-only]`  Properties to get the final world radian rotation components of a 3D model.

**modelRotationZ**  
`[read-only]`  Properties to get the final world radian rotation components of a 3D model.

**modelQuaternionX**  
`[read-only]`  Properties to get the final world rotation quaternion components of a 3D model.

**modelQuaternionY**  
`[read-only]`  Properties to get the final world rotation quaternion components of a 3D model.

**modelQuaternionZ**  
`[read-only]`  Properties to get the final world rotation quaternion components of a 3D model.

**modelQuaternionW**  
`[read-only]`  Properties to get the final world rotation quaternion components of a 3D model.

**modelScaleX**  
`[read-only]`  Properties to get the final world scale components of a 3D model.

**modelScaleY**  
`[read-only]`  Properties to get the final world scale components of a 3D model.

**modelScaleZ**  
`[read-only]`  Properties to get the final world scale components of a 3D model.

**modelScaleW**  
`[read-only]`  Properties to get the final world scale components of a 3D model.

**getTransform(type)**  
Returns an object with `"x"` `"y"` and `"z"` properties representing the current model offsets. `"type"`, can be either *"offset"* *"rotation"* or *"scale"*.

**getWorldTransform(type)**  
Returns an object with `"x"` `"y"` and `"z"` properties representing the final model world transform. `"type"`, can be either *"offset"* *"rotation"* or *"scale"*.

**setTransform(x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**addTransform(x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**subTransform(x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**mulTransform(x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**divTransform(x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**getNodeTransform(nodeType, nodeName, type)**  
Returns an object with `"x"` `"y"` and `"z"` properties representing the selected node's local transform. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"type"`, can be either *"offset"* *"rotation"* or *"scale"*.

**getNodeWorldTransform(nodeType, nodeName, type)**  
Returns an object with `"x"` `"y"` and `"z"` properties representing the selected node's final world transform. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"type"`, can be either *"offset"* *"rotation"* or *"scale"*.

**setNodeTransform(nodeType, nodeName, x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**addNodeTransform(nodeType, nodeName, x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**subNodeTransform(nodeType, nodeName, x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**mulNodeTransform(nodeType, nodeName, x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**divNodeTransform(nodeType, nodeName, x, y, z, type)**  
These methods are used to apply changes on the three axes of a 3D model node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node. `"x"` `"y"` and `"z"` are the main values that will be applied and `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**resetNodeTransform(nodeType, nodeName, type)**  
Reset the local transformation of a node in a 3D model. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node.`"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**resetAllNodeTransforms(type)**  
Reset the local transformation of all nodes in a 3D model. `"type"` refers to the properties that will be affected, can be either *"offset"* *"rotation"* or *"scale"*.

**setModelQuaternion(x, y, z, w)**  
Set the 3D model's rotation quaternion.

**getModelQuaternion()**  
Get an object representing the rotation quaternion of a  3D model.

**setNodeQuaternion(nodeType, nodeName, x, y, z, w)**  
Set the rotation quaternion of a node in the 3D model. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node.

**getNodeQuaternion(nodeType, nodeName)**  
Get an object representing the rotation quaternion of a  3D model's node. `"nodeType"` (which can be either *"mesh"* or *"bone"*) and `"nodeName"` (which is the name of a node as found in the imported 3D model file) are used to target a specific node.

**getAnimationDuration(animation)**  
Returns the duration in seconds of the provided animation.

**getAllMeshes**  
Returns an array of strings with all the meshes in the current 3D model.

**getAllAnimations()**  
Returns an array of strings with all the animations in the current 3D model.

**setMeshEnabled(mesh, enable)**  
Enable or disable the provided mesh.

**setAllMeshesEnabled(enable)**  
Enable or disable all the meshes.

**isMeshEnabled(mesh)**  
Returns `"true"` or `"false"` depending on if the passed in mesh is enabled or not.

**areAllMeshesEnabled()**  
Returns `"true"` or `"false"` depending on if all the meshes are enabled or not.

**meshExists(mesh)**  
Returns `"true"` or `"false"` if the passed in mesh exists in the current 3D model or not.

**play(animationName, progress, transitionDuration, loop)**  
Play an animation. `"animationName"` is an optional string and default to an empty string, if not provided or if the name does not correspond to any animation, the method will defaults to the primary animation. `"progress"` is an optional number and defaults to *"0"*. It accepts a value in the range **[0 - 1]** that indicates where the animation will start playing from. `"transitionDuration"` is optional and defaults to *"0"*, it is the amount of time, in seconds, to spend transitioning smoothly from the last animation into the new one. `"loop"` is optional and defaults to *"false"*.

**Blend(animationName, progress, targetWeight, fadeDuration, loop)**  
blend an animation into the currently playing ones. `"animationName"` is an optional string and default to an empty string, if not provided or if the name does not correspond to any animation, the method default to the primary animation. `"progress"` is an optional number and defaults to *"0"*. It accepts a value in the range **[0 - 1]** that indicates where the animation will start playing from. `"targetWeight"` is an optional number and defaults to *"1"*, it indicates how much influence the animation will have in the final mix. `"fadeDuration"` is optional and defaults to *"0"*, it is the amount of time, in seconds, the animation will take before it's contributing it's total weight. `"loop"` is optional and defaults to *"false"*.

**stop()**  
Stop the current animation, resets progress to 0.

**pause()**  
Pause the current animation, progress is unchanged.

**resume()**  
Resume a paused animation from the current progress

**setMeshObject(mesh, objectClass)**  
Replace the texture of the given mesh in a 3D model with the image used by a [Sprite](../../../plugin-reference/sprite.md) or [Drawing canvas](../../../plugin-reference/drawing-canvas.md). An instance of the given object must exist on the current layout.
