---
title: "3D Model"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/3d-model"
release: 495.2
---

## On this page

- [3D model properties](#importing-3d-model-files)

---

                **3D model objects** are created after importing a **.gltf** or **.glb** model file and act as data containers which are later used by a [3D model plugin](../plugin-reference/3d-model.md) [instance](../project-primitives/objects/instances.md) to display it in a [Layout View](../interface/layout-view.md).

### Importing 3D model files

From the context menu of the **3D Models** [project](../project-primitives/projects.md) folder in the [Project Bar](../interface/bars/project-bar.md) choose one of the following options:

- **`Import › From folder`:** Use this option when loading a **.gltf** or **.glb** file which has external references. All external reference files used should exist in the same folder the main model file is. If there is more than one model file in the selected folder, an intermediate dialog will appear to choose the model file that should be loaded.
- **`Import › From file`:** Use this option to import self contained **.gltf** or **.glb** files. Self contained model files are ones which don't reference external files and instead have all necessary information embedded.

#### Drag & drop

- Drop a self-contained **3D model** file *(.glb or .gltf)* into the Layout View. This will import the model into the 3D model Project Bar folder, create an [object type](../project-primitives/objects/object-types.md) and create an [instance](../project-primitives/objects/instances.md) in the Layout View.
- After using one of the methods that only imports a model into the 3D model Project Bar folder, drag it from the Project Bar into the Layout View to create an object type and create an instance in the Layout View.

> **Tip**  
> **`Import › From folder`** is only available if the system supports it. If the option doesn't appear and you have a model file with external references, you can pack it and all related files in a **.zip** file and then load it using the **`Import › From file`** option.

> **Tip**  
> Self contained model files refers to model files with no external references.

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
