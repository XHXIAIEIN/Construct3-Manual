---
title: "The Layout View"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/layout-view"
release: 487.2
---

## On this page

- [View modes](#view-modes)
- [Selecting objects](#selecting-objects)
- [Adding and deleting objects](#adding-and-deleting-objects)
- [Using tilemaps](#using-tilemaps)
- [Selection wrapping](#selection-wrapping)
- [Setting up a hierarchy](#containers)
- [Editing meshes](#setting-up-a-hierarchy)
- [Importing 3D models](#editing-meshes)
- [Other](#importing-3d-models)

---

The **Layout View** is a visual designer for your objects. It allows you to set up a pre-arranged *layout* of objects, such as a game level, menu or title screen. In other tools, *layouts* may be referred to as *scenes*, *rooms*, *frames* or *stages*. It supports both **2D** and **3D** editing modes. See also the manual section on [layouts](../project-primitives/layouts.md).

[![The Layout View](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/144340/layout-view_v600.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/144340/layout-view.png)The Layout View

The dashed rectangle in the top left of the layout area indicates the **viewport size** in the layout. By default the viewport appears in the top left of the layout, so to align something relative to the viewport, it should be placed inside this rectangle.

In the corner of the view appears a small **status bar** with some helpful information. Different information is shown depending on the view mode, but it always shows the current **active layer**. This is important since it is **the [layer](../project-primitives/layers.md) new object instances are added to.** The active layer can be changed by selecting a different layer in the [Layers Bar](../interface/bars/layers-bar.md).

## View modes

The Layout View supports both a **2D** and **3D** view mode. Each mode is adapted to suit the type of content, adjusting the way you move the view and interact with objects, as well as the available options and keyboard shortcuts. The view mode can be changed using the top toolbar. The third button opens a menu with additional view options.

Each view mode has its own sub-section in the manual with the details specific to that view. See:

- [2D view](../interface/layout-view/2d-view.md) for details specific to using the 2D view mode
- [3D view](../interface/layout-view/3d-view.md) for details specific to using the 3D view mode

The rest of this section covers things in common to both modes.

## Selecting objects

Click an object to select it. You can **hold** <kbd>Control</kbd> or <kbd>Shift</kbd> and click another object to select multiple objects. You can also **click and drag** from a space to create a selection box. When releasing the drag, everything inside the selection box will be selected. Selected objects show with a blue outline (and in the 2D view, a blue tint inside the selection box).

Objects cannot be selected if the object or its layer is locked. If you cannot select something, unlock its layer from the Layers Bar if the layer is locked, or right-click and choose the menu option `Lock › Unlock all` to make all objects selectable again (but note that does not override a locked layer).

If you have overlapping objects, you can normally only select the one in front. However if you **hold** <kbd>Tab</kbd> while clicking the selected object, it will instead select the next object underneath. You can keep doing this to cycle the selection through all the overlapping objects.

The Properties Bar displays properties for *all* currently selected objects. Changing a property updates it for every selected object.

## Adding and deleting objects

**Double-click a space** in the layout or right-click and select `Insert new object` to add a new object type. This will bring up the [Create New Object Type dialog](../interface/dialogs/create-new-object.md).

There are various ways to create new [instances](../project-primitives/objects/instances.md) of an existing object type: **control + drag**, copy and paste, or drag and drop from the [Project Bar](../interface/bars/project-bar.md). (Make sure you're clear on the difference between Object Types and Instances as described in [Project Structure](../overview/project-structure.md).) When dragging and dropping from the Project Bar, you can also use [templates](../project-primitives/objects/templates.md) to define the default properties of the instance that is created.

A shortcut for importing image files as Sprite objects is to **drag and drop image files** in to the Layout View. This automatically creates a new Sprite object type with the dragged image. If multiple image files are dragged, the Sprite is assigned an animation with the dragged images as animation frames. Where supported, animated image file formats like GIF and APNG can also be dragged and dropped in and will be used as a Sprite animation. (Animated image file formats can also be imported to the Animations Editor where they will also be split out in to separate frames.)

> **Tip**  
> Chrome and Edge support importing animated image file formats this way, but other browsers may not support it, in which case they will only be able to use the first frame.

SVG files can also be drag-and-dropped in and a [SVG Picture object](../plugin-reference/svg-picture.md) will be created for it.

The **Delete** key or right-click `Delete` option deletes instances. Deleting all instances of an object does **not** remove the [object type](../project-primitives/objects/object-types.md) from the project. To entirely remove an object from the project it should be deleted via the Project Bar.

## Using tilemaps

If you are designing a tile-based game, you can insert the [Tilemap object](../plugin-reference/tilemap.md) and edit tiles in the Layout View. To find out more, see the manual entry on the [Tilemap Bar](../interface/bars/tilemap-bar.md).

## Selection wrapping

If you select two or more objects, you can wrap the selection by pressing <kbd>Enter</kbd> or right-clicking and selecting `Wrap selection`. This allows you to rotate and stretch the selection as a whole.

Wrapped selections appear with a different color selection box, as shown below:

[![Wrapping a selection in the Layout View](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/870/selection-wrapping_v310.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/870/selection-wrapping.png)Wrapping a selection in the Layout View

Wrapped selections can be resized and rotated as if they are one large object. For example the selection can be enlarged and rotated, and all objects maintain their position relative to each other.

[![Wrapped selections resize and rotate as one](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/871/selection-wrap-edit_v310.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/871/selection-wrap-edit.png)Wrapped selections resize and rotate as one

While a selection is wrapped, click any of the objects in the wrapped selection to make that object the rotation origin.

### Containers

Objects that are grouped in to [Containers](../project-primitives/objects/containers.md) highlight yellow in the Layout View. Containers can also be set to automatically wrap their selection. If you still need to select an individual object in an automatically wrapped selection, **hold** <kbd>Alt</kbd> and click one of the objects.

## Setting up a hierarchy

You can connect objects together in a hierarchy - also known as a *scene graph* - in the Layout View. This works similarly to using the [Add child](../plugin-reference/common-features/common-actions.md#internalH1Link2) hierarchy action, but set up in the editor.

To set up a hierarchy, select multiple objects, and then right-click the object you wish to be the parent (i.e. above the others in the hierarchy) and select `Hierarchy › Add selection to this instance`. Arrows will appear pointing from the parent to the children to indicate the hierarchy.

[![Scene graph hierarchy displayed in the Layout View](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/53909/editor-hierarchy_v480.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/53909/editor-hierarchy.png)

When the children are selected, a new hierarchy section appears in the [Properties Bar](../interface/bars/properties-bar.md) allowing you to choose which properties the child transforms with, such as the position, angle, and whether the child destroys with the parent. At runtime the child will follow any changes to the parent (for the enabled properties) - often giving a visual appearance that the objects are connected, or form a single larger object.

Once a hierarchy is set up, other options also appear to detach objects: *Remove from parent* to remove a child from its parent, and *Remove all children* to detach the entire hierarchy below that object.

The root instance also has a *Select mode* property that, similar to containers, allows automatically selecting the entire hierarchy, also optionally with selection wrapping. If this is enabled, you can always hold <kbd>Alt</kbd> and click an instance to select it individually regardless of the select mode. The layout's editor properties also include a *Show hierarchy* option that lets you toggle whether or not arrows indicating the hierarchy, pointing from parents to children, are shown on top of objects.

The layout view will preview hierarchies both when previewing [timelines](../project-primitives/timelines.md) and when previewing [behaviors](../behavior-reference.md) that support previewing.

## Editing meshes

You can create meshes for certain kinds of objects in the Layout View, as the editor counterpart to the mesh distortion feature. This lets you do things like create fluid level designs as shown in the [Mesh platforms example](https://editor.construct.net/#open=mesh-platforms). Meshes also affect collisions, so behaviors like Platform interact with them as they appear.

To create a mesh, right-click an instance and choose `Mesh › Create mesh...`. You must specify a mesh size of at least 2x2. Once created, the mesh appears highlighted in green, with new green handles that you can click and drag to adjust the mesh. The mesh starts in a simple grid that does not alter the appearance of the object - once you move a mesh point it will start to change from its default appearance.

[![Mesh editor in Layout View](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/53908/mesh_v380.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/53908/mesh.png)

You can also **hold Shift** while dragging a mesh point to move it without distorting the image. This can create a kind of mask or cut-out appearance.

When you click a mesh point, it will also appear selected and display properties for that mesh point in the [Properties Bar](../interface/bars/properties-bar.md). This allows precise control over the exact details of the mesh point, as well as providing informational values such as the mesh column and row. The **Z elevation** of the mesh point can also be modified in the Properties Bar, allowing for 3D mesh distortion. To learn more, see the tutorial [Using 3D features in Construct](https://www.construct.net/en/tutorials/using-3d-construct-2746).

Once an object has a mesh you can access some new options in the *Mesh* sub-menu:

- **Set mesh size**: change the number of columns and rows in the mesh.
- **Reset mesh**: resets the mesh back to its default grid, which does not alter the appearance of the object.
- **Stop editing mesh**: removes the green handles so the mesh can no longer be edited, restoring the default selection for standard move and resize interactions with the object. Once selected you can use the **Edit mesh** option to go back to editing the mesh.
- **Remove mesh**: removes the mesh entirely, reverting the object to not using a mesh.

The layout's editor properties also include a *Show meshes* option that lets you toggle whether or not the green mesh outline is shown on top of objects with meshes.

## Importing 3D models

Drop a self-contained **3D model** file *(.glb or .gltf)* into the Layout View. This will import the model into the 3D model Project Bar folder, create an [object type](../project-primitives/objects/object-types.md) and create an [instance](../project-primitives/objects/instances.md) in the Layout View.

> **Tip**  
> Self contained model files refers to model files with no external references!

## Other

To go to the associated event sheet, press <kbd>Ctrl</kbd> + <kbd>E</kbd> or right-click and select `Edit event sheet`.

The Z order of objects within a layer can be adjusted by right-clicking and selecting `Z Order › Send to top of layer` or `Z Order › Send to bottom of layer`. You can also open the [Z Order Bar](../interface/bars/z-order-bar.md)  `[Paid plans only]`  for advanced control. The Z order is most significant for 2D content, but it can also sometimes adjust the draw order of 3D content.

Objects can be snapped to a grid for tiled placement, and the collision polygons of the displayed objects can also be outlined. These features can be enabled in the [layout's properties](../project-primitives/layouts.md).

The right-click menu in the Layout View also provides some alignment tools under the `Align` sub-menu. These allow you to quickly space objects equally or align objects along their edges. When aligning, the objects are aligned to the particular object you right-clicked.

The [Animations editor](../interface/animations-editor.md) can be brought up by **double-clicking** objects with images or animations like Tiled Background and Sprite. You can also double-click Text objects to edit their initial text in a dialog.

[Effects](../project-primitives/objects/effects.md) will be displayed in the layout view if enabled in [project properties](../project-primitives/projects.md).
