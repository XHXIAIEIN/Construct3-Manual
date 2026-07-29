---
title: "Create new object type dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/create-new-object"
release: 495
---

The **Create New Object Type dialog** typically appears after **double-clicking** a space in a [Layout View](../../interface/layout-view.md). It allows you to choose the kind of object type to add to the project. Each kind is known as a [plugin](../../project-primitives/objects/plugins.md). Selecting a plugin then creates a new [object type](../../project-primitives/objects/object-types.md) based on that plugin. See [Project Structure](../../overview/project-structure.md) for a description of the difference between object types and instances. The [plugin reference section](../../plugin-reference.md) of the manual includes documentation for each plugin.

[![The Create New Object Type dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/953/createnewobjecttype_v700.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/953/createnewobjecttype.png)

Plugins are categorised in to related groups. Within each group they are arranged alphabetically. Selecting an item will display a brief description summarising what the plugin does at the bottom of the dialog. Typing in the **search box** in the top right can quickly filter down the list to help you find what you are looking for.

If you regularly use the same few plugins, you can **right-click** them and choose **Pin to top**, and it will be kept at the top of the dialog for quicker access. If you change your mind, you can right-click a pinned plugin and choose **Unpin** to return it to its usual location. This also works for adding behaviors and effects.

The **Name** field indicates what the name of the object type in the project will be after you add it. By default this will be a numbered version of the plugin name e.g. *Sprite2*, *Sprite3* etc. It is a good idea to give objects descriptive names so you don't get confused when working on your project. You can enter a descriptive name in this field which the object will use when added, but if you don't you can still easily rename objects via the [Properties Bar](../../interface/bars/properties-bar.md) or [Project Bar](../../interface/bars/project-bar.md).

**Double-click** an item to add it to the project. If the object can be placed in a layout and a Layout View is open, **the cursor turns to a crosshair** for you to place the first instance of that object. For objects with images or animations (like Sprite), after you have placed this instance the [Animations editor](../../interface/animations-editor.md) will appear to design the image or animations for the object.

Other kinds of object (like the Keyboard and Audio object) do not need placing in a layout. After adding one of these objects, the dialog closes but there is no need to place it anywhere. Instead, a notification appears indicating that it is available to the entire project. This type of object can only be added once, and will show as disabled in the list if the dialog is brought up again.
