---
title: "3D Model"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/3d-model"
release: 506.3
---

## On this page

- [3D model properties](#importing-3d-model-files)

---

                **3D model objects** are created after importing a **.gltf**, **.glb**, **.fbx** or a **.obj** model file and act as data containers which are later used by a [3D model plugin](../plugin-reference/3d-model.md) [instance](../project-primitives/objects/instances.md) to display it in a [Layout View](../interface/layout-view.md).

> **Tip**  
> .fbx and .obj formats are supported because, being older, are very easy to come by. .gltf and .glb are preferred.

### Importing 3D model files

From the context menu of the **3D Models** [project](../project-primitives/projects.md) folder in the [Project Bar](../interface/bars/project-bar.md) choose one of the following options:

- **`Import › From folder`:** Use this option when loading a file which has external references. All external reference files used should exist in the same folder the main model file is. If there is more than one model file in the selected folder, an intermediate dialog will appear to choose the model file that should be loaded.
- **`Import › From file`:** Use this option to import self contained files. Self contained model files are ones which don't reference external files and instead have all necessary information embedded.

> **Tip**  
> **`Import with options`** adds an additional dialog to   the import workflow where it is possible to choose additional importing options.

#### Drag & drop

- Drop a self-contained **3D model** file into the Layout View. This will import the model into the 3D model Project Bar folder, create an [object type](../project-primitives/objects/object-types.md) and create an [instance](../project-primitives/objects/instances.md) in the Layout View.
- After using one of the methods that only imports a model into the 3D model Project Bar folder, drag it from the Project Bar into the Layout View to create an object type and create an instance in the Layout View.

> **Tip**  
> **`Import › From folder`** is only available if the system supports it. If the option doesn't appear and you have a model file with external references, you can pack it and all related files in a **.zip** file and then load it using the **`Import › From file`** option.

> **Tip**  
> Self contained model files refers to model files with no external references.

### Replace 3D model files

Existing models can be replaced by bringing up the context menu of a **3D model** object. There are two options **`Replace`** and  `Replace with options`, which work just like the corresponding import options, but instead will replace the selected models.

Multiple models can be replaced at the same time. To do so:

1. Select all the models that need to be updated from the Project bar.
2. Bring up the context menu.
3. Select all the necessary files.
4. In the case of replacing multiple models and selecting multiple files an additional dialog will appear to pair all the existing models with the selected files.

## 3D model properties

**Name**  
The name of the 3D model. Used to reference the model elsewhere.

**Data**  
Only relevant in the [Properties Bar](../interface/bars/properties-bar.md), click it to import different model data in an existing 3D model object.

**Textures**  
Only relevant in the Properties Bar, click to open the [Animations Editor](../interface/animations-editor.md) to edit the textures used by the model. The Animations Editor can also be opened by double clicking in the 3D model item in the project bar or by double clicking on the 3D model plugin instance using the 3D model object.

**Offset**  
A default offset applied to all 3D model plugin instances that use the 3D model object.

**Rotation**  
A default rotation applied to all 3D model plugin instances that use the 3D model object.

**Scale**  
A default scale applied to all 3D model plugin instances that use the 3D model object.
