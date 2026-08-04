---
title: "The Tilemap bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/tilemap-bar"
release: 495
---

## On this page

- [Basic usage](#basic-usage)
- [Toolbar tools](#toolbar-tools)
- [Editing tile collision polygons](#editing-tile-collision-polygons)
- [Tilemap brushes in project folders](#bulk-editing)
- [The Tilemap object](#tilemap-brushes-in-project-folders)

---

The **Tilemap Bar** allows editing tilemaps in the **Tilemap object** from the [Layout View](../../interface/layout-view.md). It provides a toolbar with various tools and options, and a view of the current tileset image.

[![The Tilemap Bar](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/130572/tilemap-manual-0_v210.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/130572/tilemap-manual-0.png)The Tilemap Bar

## Basic usage

To add a tilemap and start editing it, follow these steps:

1. Add a [Tilemap object](../../plugin-reference/tilemap.md) to the layout and make sure it is selected
2. Choose the Pencil or Rectangle tool from the Tilemap bar's toolbar
3. Select a tile in the tileset showing in the Tilemap bar
4. Click inside the Tilemap object to start drawing the selected tile

You can **hold shift** and **right-click** a tile in the Layout View to pick that tile to draw with. You can also hold shift and drag the right mouse button over a range of tiles to select that range of tiles as a patch you can stamp out.

To stop editing the tilemap's tiles and return to normal layout editing, click the mouse cursor on the Tilemap bar's toolbar to restore normal layout view selection. This also allows you to move and resize the entire tilemap object.

If you have multiple tilemap objects, only the selected tilemap is edited. It is often useful to layer tilemap objects directly on top of each other, in which case the tilemap to edit can be most easily selected using the [Z Order Bar](../../interface/bars/z-order-bar.md)  `[Paid plans only]`  or hiding/locking layers with the [Layers Bar](../../interface/bars/layers-bar.md).

If you are dealing with small tiles, you can also zoom the tileset image using the toolbar buttons. You can also access some of these options via a menu when right-clicking inside the Tilemap Bar.

There are a range of keyboard shortcuts that can be used when editing tilemaps. For more information, see the manual entry on [Keyboard shortcuts](../../interface/keyboard-shortcuts.md).

If the bar is not visible anywhere in the UI, it can be opened by doing either of these:

1. In the main menu button make sure the `View › Bars › Tilemap Bar` option is ticked
2. Right-click on a tilemap instance in the Layout View and choose the option `Tilemap › Open Tilemap bar...`

## Toolbar tools

The Tilemap Bar's toolbar has the following options:

- **Normal layout view selection:** stop editing tiles and select the Tilemap object like any other object.
- **Pencil tile tool:** draw tiles with the mouse. You can also select an area of tiles by dragging across several tiles in the displayed tileset, and then use this tool to stamp that region of tiles in to the tilemap. You can also hold shift and right-click to drag an area over the Tilemap object to select a region of tiles to copy, or use the selection tool to do the same.
- **Erase tile tool:** erase tiles from the tilemap so they appear as transparent space. Larger areas can be erased by selecting a larger area of tiles in the tileset. A shortcut for erasing single tiles is to right-click while another tool is selected.
- **Rectangle tile tool:** draw a rectangular area of tiles by clicking and dragging in the Tilemap object. You can also select a 3x3 area of tiles in the displayed tileset, and the tool will **automatically nine-patch** the tiles. This also works for drawing single rows or columns with smaller selections such as 1x3 or 3x1, where the first and last tile are the first and last in the selection, and the rest are the middle tile repeated.
- **Fill tool:** much like using a fill tool in an image editor, this allows filling a continuous area with a new kind of tile. If multiple tiles are selected in the tileset, they are repeated over the fill area.
- **Select tool:** click and drag to select a range of tiles to use in the Tilemap object. Then switch to another tool to use that selection. For example switching to the **Pencil** tool allows you to stamp out copies of the selected range. A shortcut for this is to hold shift and right click and drag an area while the Pencil tool is selected. The individual tiles in the selection will be highlighted in the **Tilemap bar**
- **Auto tile tool:** this tool uses predefined brushes to automatically place the correct tile as you draw. Just pick the brush from the dropdown menu next to the tool's button and start using it. The brushes that are created by default are configured to work properly with the default tileset image. To create or modify brushes for use with different tilesets use the [Tilemap Brush Editor](../../interface/bars/tilemap-bar/tilemap-brush-editor.md).
- **Patch tool:** this tool uses brushes to draw a predefined set of tiles. Just pick the brush from the dropdown menu next to the tool's button and start using it. The brushes that are created by default work correctly with the default tileset image. To create or modify brushes for use with different tilesets use the [Tilemap Brush Editor](../../interface/bars/tilemap-bar/tilemap-brush-editor.md).
- **Mirror:** when using the Pencil tool, tiles will be placed flipped horizontally. This can also apply to an entire patch of tiles.
- **Flip:** when using the Pencil tool, tiles will be placed flipped vertically. This can also apply to an entire patch of tiles.
- **Rotate anti-clockwise:** when using the Pencil tool, tiles will be rotated 90° anti-clockwise. This can also apply to an entire patch of tiles. Click repeatedly to keep rotating tiles another 90°.
- **Rotate clockwise:** when using the Pencil tool, tiles will be rotated 90° clockwise. This can also apply to an entire patch of tiles. Click repeatedly to keep rotating tiles another 90°.
- **Reset transformation:** restores tiles to no mirror, no flip and no rotation.
- **Zoom in**, **Zoom out**, **Reset zoom**: adjust the zoom of the source tileset image displayed in the Tilemap Bar. This is useful if you are dealing with particularly small tiles.
- **Save to TMX:** export a zip with the current tileset image and the current tiles as a .tmx file (as used by the Tiled editor). Note that Construct does not support all of Tiled's features, so importing then exporting a TMX may lose some data, such as terrain definitions. Also since in Construct a Tilemap object represents a single layer of tiles, the exported TMX file will also only ever have one layer.
- **Load TMX**: import a .tmx tilemap as used by Tiled. All the tiles in the object are replaced with tile data from the TMX file. In Construct a Tilemap object represents a single layer of tiles, so if the TMX file has multiple layers you will be asked which layer to import. To import all layers, create a different tilemap object for each layer and import them separately. The tileset image can also be replaced by choosing a new image file.

Note you can also **drag-and-drop** individual .tmx files, image files, and .zip files of both, in to the Tilemap Bar. This opens the load TMX dialog with all relevant fields already filled in, so you only need to press *OK*.

## Editing tile collision polygons

Each tile can have an individual collision polygon which is used when testing for collisions with the tilemap object. To edit a tile's collision polygon, **double-click the tile** in the Tilemap Bar. The [Animations Editor](../../interface/animations-editor.md) will open to edit that tile. You can use the **collision polygon tool** to edit the tile's collision polygon. While the tool is active, you can also right-click and choose **Toggle collision polygon** to disable collisions for that tile entirely, such as if it is for decorative purposes only.

You can also use the image editing features of the Animations Editor to alter the image of the tile.

When hovering the mouse over a tile in the Tilemap Bar, its collision polygon is shown as an outline, if it has one. This helps you to quickly review the collision polygon set for each tile.

### Bulk editing

There are four context menu options to toggle the state of multiple collision polygons at the same time, they are the following:

- **Enable selected tile collisions:** enable the collision polygon of all the tiles highlighted in the **Tilemap bar**.
- **Disable selected tile collisions:** disable the collision polygon of all the tiles highlighted in the **Tilemap bar**.
- **Enable all tile collisions:** enable all the collision polygons of the tilemap.
- **Disable all tile collisions:** disable all the collision polygons of the tilemap.

> **Tip**  
> Using the **Select tool** will highlight the individual tiles in the **Tilemap Bar**, so it is easy to toggle the collision polygon state of a group of related tiles after making a selection in the tilemap instance.

## Tilemap brushes in project folders

Tilemap brushes are saved to independent JSON files under the `"tilemapBrushes"` folder so they can be ignored or kept when working with source control.

## The Tilemap object

For more information on how to use tilemaps, see the manual entry on the [Tilemap object](../../plugin-reference/tilemap.md).
