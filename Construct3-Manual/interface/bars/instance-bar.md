---
title: "Instances Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/instance-bar"
release: 495
---

## On this page

- [Folders](#folders)
- [Hierarchies](#hierarchies)
- [Context menu options](#context-menu-options)
- [Icons](#common)
- [Locking and Visibility](#folder)
- [Global Layers](#instances)
- [Searching](#icons)
- [Drag & Drop](#locking-and-visibility)
- [UI state in project folders](#global-layers)

---

The **Instances Bar** shows all the [instances](../../project-primitives/objects/instances.md) in the current [layout](../../project-primitives/layouts.md) at a glance, it can be very useful in large or busy layouts to quickly find specific instances.

You can also use folders to group related instances together. [Hierarchies](../../interface/layout-view.md#internalH1Link4) are shown as a tree structure to quickly tell which instances are where in complex structures.

[![overview](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124586/overview.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124586/overview.png)

To open the Instances Bar tick the check at `Menu › View › Bars › Instances Bar`.

## Folders

To add a folder right-click anywhere in the bar and choose the appropriate option from the context menu.

[![instancesbar context menu 1](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121772/instancesbar-context-menu-1.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121772/instancesbar-context-menu-1.png)

Once a folder is created you can drag & drop instances in and out of them by dragging the items in the bar.

It is also possible to drag instances into a folder directly from the [Layout View](../../interface/layout-view.md).

The order in which instances appear in the bar can also be altered by dragging and dropping.

> **Tip**  
> The order of the instances and the folder structure shown by the Instances Bar are only relevant for visual organization in the editor, it doesn't matter at runtime.

## Hierarchies

Hierarchies can be set directly in the bar by dragging and dropping items on top of each other. Dragging an instance from the Layout View on top of an item in the bar will also work for this purpose.

| Hierarchy in the Instances bar | Hierarchy in the Layout View |
| --- | --- |
| [![hierarchy overview 1](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124593/hierarchy-overview-1.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124593/hierarchy-overview-1.png) | [![instancesbar 2](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121774/instancesbar-2.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121774/instancesbar-2.png) |

## Context menu options

### Common

These options are shown with any context menu in the bar.

[![instancesbar context menu 0](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121775/instancesbar-context-menu-0.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121775/instancesbar-context-menu-0.png)

- **Add folder:** adds a new folder.
- **Expand / Collapse: ** expand or collapse all items with nested content.
- **Show more information:** show additional information about each instance.



  - **Hierarchies:** show an icon next to instances which have children. In the case an instance has a parent in a different layout (which can happen when working with global layers), that layout will also be shown next to the item.
  - **Meshes:** show an icon next to instances which have a mesh and also show the horizontal and vertical size of the mesh.
  - **Layers & Layouts:** show an icon indicating if the [layer](../../project-primitives/layers.md) is global and the name of the layer the instance belongs to. If the layer is not part of the current layout, also shows the layout the layer is coming from.

> **Tip**  
> Clicking the layer name will make it the currently active layer.

  - **Plugin:** show the icon and the name of the [plugin](../../project-primitives/objects/plugins.md).
  - **Templates:** [template](../../project-primitives/objects/templates.md) and replica instances show a unique icon as well as the corresponding template name.
  - **Timelines:** show an icon next to instances belonging to a [timeline](../../project-primitives/timelines/timeline.md) as well as the names of the timelines the instance belongs too.


> **Tip**  
> Clicking the lower part of the bar also shows this menu.

    [![instancesbar 3](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121777/instancesbar-3.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/121777/instancesbar-3.png)

### Folder

These options are shown when showing a context menu for a folder.

[![folder context menu](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124579/folder-context-menu.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124579/folder-context-menu.png)

- **Rename:** rename the selected folder.
- **Delete:** delete the selected folders.
- **Select all instances:** select all the instances in the folder.

### Instances

These options are shown when showing a context menu for an instance or group of instances. Some are equivalent to the context menu options with the same names found on context menus of the Layout View.

[![instance context menu](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124581/instance-context-menu.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124581/instance-context-menu.png)

- **Timeline:** shown for all instances as long as there is a timeline in the [project](../../project-primitives/projects.md). Will have different options depending on how the instance relates to the current timeline. This is the same as the equivalent Layout View context menu option.
- **Tilemap:** only shown for Tilemap plugin instances. This is the same as the equivalent Layout View context menu option.
- **Z Order:** shown for all instances. This is the same as the equivalent Layout View context menu option.
- **Hierarchy:** shown for instances that are already part of a hierarchy or when selecting multiple instances. This is the same as the equivalent Layout View context menu option.
- **Template:** shown only for instances which are either a template or a replica. This is the same as the equivalent Layout View context menu option.
- **Mesh:** shown for all instances that support meshes. This is the same as the equivalent Layout View context menu option.
- **Flash selection:** will make the current selection blink in the Layout View.
- **Scroll selection into view:** scroll the Layout View to show the selected instances.

> **Tip**  
> Double clicking the item in the bar will also trigger this action.


> **Tip**  
> The Layout View context menu has a related option **Find in Instances bar**.

- **Lock / Unlock layer:** toggle the lock state of the layer the selected instance belongs to.
- **Toggle layer visibility:** toggle the visible state of the layer the selected instance belongs to.
- **Select layer:** select the layer which the selected instance belongs to. This is the same as selecting a layer through the [Layers bar](../../interface/bars/layers-bar.md).
- **Delete:** delete the the selection of instances.
- **Cut, Copy and Paste:** these options do the same as the ones in the Layout view context menu.
- **Find all references:** searches the whole project for the selected instance.

## Icons

Depending on what **Show more information for** option is selected, additional icons might be shown next to an instance to better identify it.

The **layer visibility checkbox** and **layer lock icon** are shown at all times to change the corresponding visibility and locked states of each instance individually at any time.

[![icons overview](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124594/icons-overview.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124594/icons-overview.png)

## Locking and Visibility

Locking instances through the Instances bar is similar to locking them using the Layout View context menu option **Lock selection**. This means this locked state is independent from the locked state of the corresponding layer.

Toggling visibility of an instance works in a similar way to the locked state in that it is independent to the visibility state of the corresponding layer.


## Global Layers

When a layout is showing instances that are coming from a global layer a few unique items will appear in the bar to make it more clear where those instances are coming from.

In the image below you can see the special **Global instances** folder and a **Layout** item showing which instances are coming from a global layer.

[![global layers overview](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124590/global-layers-overview.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124590/global-layers-overview.png)

In that example the current layout is **OtherLayout** and the bar is showing that some instances shown are coming from a global layer in the **Game** layout. At the bottom you can see the **Layers & Layouts** option is toggled so all instances are showing which layer they belong too.

The globe icon next to some instances indicates they are part of a global layer. Instances which don't have a globe are not part of any global layer in the current layout.

Instances highlighted in red are shown in the bar because they belong to the **Game** layout, but are not in any global layer in the current layout.

| Instances from a global layer | Instances not in any global layer |
| --- | --- |
| [![global layers overview 0](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124591/global-layers-overview-0.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124591/global-layers-overview-0.png) | [![global layers overview 1](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124592/global-layers-overview-1.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/124592/global-layers-overview-1.png) |

## Searching

Use the search field at the top of the bar to filter instances. Items are filtered using the following criteria and order:

1. Any match with the item name as shown in the bar.
2. Any match with the [Object type](../../project-primitives/objects/object-types.md) name.
3. Any match with the plugin name.
4. Any match with any of the tags an instance might have.
5. Any match with the template name an instance might have.
6. Using the special **"mesh" (or it's translated form)** string will match all instances which have a mesh.
7. Using the special **"hierarchy" (or it's translated form)** string will match all instances which are part of a hierarchy.

## Drag & Drop

As mentioned earlier it is possible to drag & drop instances within the bar to arrange them in which ever way is more useful.

It is also possible to drag instances from the bar into the Layout View, which will create clones of the dragged instances in the dropped position.

Dragging instances from the Layout View into the Instances Bar has the same effect as dragging the corresponding items within the Instances bar.

## UI state in project folders

The UI state for the Instance Bar is saved to independent JSON files for each Layout under the `"layouts/uistate"` folder so they can be ignored or kept when working with source control.
