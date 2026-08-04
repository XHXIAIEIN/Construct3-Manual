---
title: "The Layers Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/layers-bar"
release: 495
---

## On this page

- [The Layers list](#the-layers-list)
- [Sub-layers](#sub-layers)
- [Object Z ordering](#object-z-ordering)

---

The **Layers Bar** is used to add, edit and remove [layers](../../project-primitives/layers.md) in a [layout](../../project-primitives/layouts.md). A layer is like a sheet of glass objects are painted on to. This allows easy arrangement of which objects display in front of other objects, for example showing foreground objects in front of the background sprites. It also allows for interesting depth effects like Z elevation or parallax, and layers can be individually scaled and rotated as well.

Layers can be **dragged and dropped** in the Layers Bar to change their order. Layers at the **bottom** of the list are displayed **at the back** (e.g. background objects), and layers at the **top** of the list are displayed **at the front** (e.g. HUD objects).

Selecting a layer displays its properties in the [Properties Bar](../../interface/bars/properties-bar.md) and also sets it as the **active layer** which new objects are inserted in to.

[![The Layers Bar](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/864/layers-bar_v300.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/864/layers-bar.png)The Layers Bar

## The Layers list

Each layer in the list has the following:

- A **checkbox** to toggle whether the layer is **visible in the editor** (this does not affect the game when previewing or exporting)
- A **padlock icon.** Clicking this toggles the layer's **locked** status. If a layer is locked, objects on that layer cannot be selected in the editor. This is useful to prevent accidental selections on rarely-used layers like backgrounds.
- An optional **globe icon** to denote global layers.
- An optional **tag icon** to denote [HTML layers](../../tips-and-guides/html-layers.md).
- A **number** to the right. This is a zero based index of the layer (the first layer is number 0, not 1). If you need to enter a layer number in the event system, this is the corresponding number. You can also enter layer names in the event system, which is often more convenient since unlike the numbers, the names don't change if you reorder layers.

You can **right click** a layer to see a menu of additional options, such as to add a new layer, rename or delete layers, or shortcuts to show, hide, lock or unlock all layers (or all but the selected one). Layers which are showing content from a global layer will show a context menu option to go to the layout where the original global layer is in.

## Sub-layers

Layers can also be added as sub-layers of another layer. They can be added as sub-layers or moved to be sub-layers via drag-and-drop. Sub-layers appear indented in the Layers Bar to show they come under another layer, and the layer they belong to can be expanded or collapsed to show or hide all its sub-layers.

Sub-layers can be used solely to help organize long layer lists, acting like layer folders. However applying an effect to a layer will also affect all its sub-layers. This allows for more efficiently processing effects (instead of having to add the same effect repeatedly to several layers), as well as more advanced effect composition across different groups of layers.

## Object Z ordering

To modify the Z order (front-to-back order) of individual objects on a layer, use the [Z Order Bar](../../interface/bars/z-order-bar.md)  `[Paid plans only]` .
