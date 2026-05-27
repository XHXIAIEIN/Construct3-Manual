---
title: "The Tilemap Brush Editor"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/tilemap-bar/tilemap-brush-editor"
release: 487
---

## On this page

- [The tilemap brush editor](#using-the-editor-with-auto-tiling-brushes)

---

## The tilemap brush editor

This editor is used to create, edit and delete auto-tiling and patch brushes for use with the [Tilemap Bar](../../../interface/bars/tilemap-bar.md).

There are three types of brushes supported, the 16 tile auto tiling brush, the 47 tile auto tiling brush and the patch brush. Brushes are created by default with each instance of the [Tilemap plugin](../../../plugin-reference/tilemap.md). The default brushes are setup to work correctly with the default tilemap image.

When the editor is opened from the auto tiling tool it will show the first auto tiling brush in the corresponding [object type](../../../project-primitives/objects/object-types.md). If it is opened from the patch brush tool, it will show the first patch brush in the corresponding object type. This is just for convenience as both types of brushes can be edited regardless from which part of the UI the editor was opened from.

### Using the editor with auto tiling brushes

Here is a short summary on how to create, edit and use an auto tiling brush.

#### Step 1: Open the editor

Click the **Edit brushes** option from the dropdown menu of the auto tiling tool button in the Tilemap Bar toolbar.

[![tilemap brush editor manual 0](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130573/tilemap-brush-editor-manual-0.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130573/tilemap-brush-editor-manual-0.png)

#### Step 2: Create (or edit) a brush

Click the **Add** option from the editor's toolbar.

[![step2](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35961/step2.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35961/step2.png)

If you don't need to create a new brush, one of the existing ones can be picked from the first dropdown in the editor's toolbar.

[![step3](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35962/step3.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35962/step3.png)

> **Tip**  
> Make sure the **Type** dropdown is either **Auto 16** or **Auto 47** if you want to create or edit an auto tiling brush!

#### Step 3: Make changes to an auto tiling brush

In order to properly set up an auto tiling brush, you will need to choose which tiles of the tileset will go in each position of the template. To do that, click on the tile you want to change in the template **(left pane)**. If this is a new brush it's best to start with the top left tile. After clicking the template tile, it will become highlighted. Then choose the tile from the tileset **(right pane)** that will go in that position.

After doing that, the selected tile will be assigned to that position and the next tile in the template will be highlighted. From here, all that needs to be done is to repeat the process until all the tiles in the template have a value assigned to them.

After you are done you can use the **"Toggle tiles"** button in the toolbar to quickly review what tiles have been assigned to each position of the template.

| Toogle tiles button |
| --- |
| [![toolbar 1](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127652/toolbar-1.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127652/toolbar-1.png) |

| Neutral Template Tiles | Assigned Template Tiles |
| --- | --- |
| [![step4a](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35968/step4a.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35968/step4a.png) | [![step4b](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35969/step4b.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/35969/step4b.png) |

#### Step 4: Using an auto tiling brush

Click the brush you want to use from the dropdown menu of the auto tiling tool button in the Tilemap Bar toolbar.

[![tilemap brush editor manual 0](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130582/tilemap-brush-editor-manual-0.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130582/tilemap-brush-editor-manual-0.png)

Make sure the auto tiling tool is activated (by clicking the main part of the button) and start drawing on the tilemap instance as you would with any other tilemap tool.

### Using the editor with patch brushes

Creating and editing patch brushes is similar to auto tiling brushes, but since they perform different tasks there are a few differences in the UI.

When the type of a brush is changed to **"Patch"** the top toolbar will include **"Width"** and **"Height"** fields to set the size of the patch. The **"Toggle tiles"** button is not present when editing a patch brush.

Asides from that, the process of selecting tiles for each position of the patch is the same as with auto tiling brushes.

### Interface

This dialog is separated into 5 different panes which are described below.

[![main](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127653/main.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127653/main.png)

#### Panes

- **Template:** located in the top left, this pane shows the template of the auto tiling brush being edited. Its purpose is to select the tile of the template to be modified. Clicking on a template tile will update the **Current tile**, **Assigned tiles** and **Tile properties** panes. The template shown will change depending on the type of the current brush.
- **Tileset:** located in the top right, this pane shows the tiles being used by the tilemap object type. Its purpose is to select tiles to assign to the currently selected template tile. Just selecting a tile from here will assign it to the current template tile and move to the next. If you bring up the context menu of a tile (e.g. by right-clicking), it is possible to assign multiple tiles to the same template tile. The use of this feature is discussed later.
- **Current tile:** located in the bottom left, this pane shows the current template tile. It is only a visual aid and serves no other purpose. This pane is not shown when editing a patch brush.
- **Assigned tiles:** located in between the **Current tile** and **Tile properties** panes, this pane shows all the tiles assigned to a template tile. Selecting a tile from the list will update the **Tile properties** panes with the appropriate values. From this pane it is possible to remove an assigned tile using a context menu option.
- **Tile properties:** located in the bottom right, this pane shows the properties of the currently selected tile in the **Assigned tiles** pane. Tile properties are the following:


  - **Probability:** in the case there is more than one tile assigned to a template position, the auto tiling and patch tools will pick one of the available tiles at random. This value dictates the probability of a tile being picked over the others.

#### Toolbar

From left to right these are all the tools in the main toolbar.

[![toolbar 0](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127654/toolbar-0.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127654/toolbar-0.png)

- **Brush**: dropdown to select a brush to edit from the existing ones.
- **Options**: the button next to the brush dropdown, has three basic options to manage brushes: **Add**, **Rename** and **Delete**.
- **Type**: change the type of the current brush. Currently two types are supported: **Auto 16**, **Auto 47** and **Patch**. Changing this setting will update the contents of the **Template** pane.
- **Width**: The width in tiles of the patch brush being edited. This button is only present when editing patch brushes.
- **Height**: The height in tiles of the patch brush being edited. This button is only present when editing patch brushes.
- **Undo**: reverts the last change.
- **Redo**: applies the last change.
- **Tiles toggle**: this is a visual aid to quickly see the first tile assigned to each template tile. If a template tile has nothing assigned the toggle will make no changes. This button is only present when editing auto tiling brushes.
- **Background toggle**: change the background color of the **Template** and **Tileset** panes between a light and dark color.
- **Zoom in**: zoom in the **Template** and **Tileset** panes.
- **Zoom out**: zoom out the **Template** and **Tileset** panes.
- **Zoom reset**: reset the zoom of the **Template** and **Tileset** panes.

#### Context Menus

- **Template pane**


  - **Zoom in**
  - **Zoom out**
  - **Zoom reset**
  - **Help**
- **Tileset pane**


  - **Add tile(s)**: Add additional tiles to be used in a template position in addition to the first one. Multiple tiles might be added and will be visible in the **Assigned tiles** pane
  - **Set brush with selection**: Set all the tiles in the template at once with the current selection. This option clears any previous existing tiles in the template.
  - **Zoom in**
  - **Zoom out**
  - **Zoom reset**
  - **Help**
- **Assigned tiles pane**


  - **Remove Tile**: Remove the selected tile from the list of tiles available to the corresponding template tile.
  - **Help**

### Using multiple tiles on a template position

As mentioned earlier, it is possible to assign multiple tiles to a template position. The result of this is that for the positions where multiple tiles have been chosen, the auto tiling and patch tools will pick one of them at random when needed. This is useful to create more varied tilemap layouts without having to manually edit tiles one at a time.

The following image shows how would you add an additional tile to the selected template position.

[![add tiles 0](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127655/add-tiles-0.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127655/add-tiles-0.png)

Next you can see how the editor would look like after adding multiple tiles to the same template position.

[![add tiles 1](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127656/add-tiles-1.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/127656/add-tiles-1.png)

Using the **Probability** property of each tile, found in the **Tile properties** pane, it is possible to adjust which of the tiles is more or less likely to be chosen by the auto tiling and patch tools.

Keep in mind that all tiles with the same probability value will have the same chance of being chosen. For example, two tiles with 100% probability results in each tile having 50% chance of being chosen when using the auto tiling or patch tools.
