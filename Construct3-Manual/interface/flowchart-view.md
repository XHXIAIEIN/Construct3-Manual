---
title: "The Flowchart View"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/flowchart-view"
release: 487.3
---

## On this page

- [Adding and deleting nodes](#adding-and-deleting-nodes)
- [Editing nodes](#editing-nodes)
- [Sorting outputs in a node](#sorting-outputs-in-a-node)
- [Connecting nodes](#connecting-nodes)
- [Unlinking nodes](#unlinking-nodes)
- [Connecting many outputs to the same input](#connecting-many-outputs-to-the-same-input)
- [Moving and resizing nodes](#moving-and-resizing-nodes)
- [Multi-selection](#multi-selection)
- [Rectangle selection tool](#rectangle-selection-tool)
- [Cut, copy and paste](#cut-copy-and-paste)
- [Scrolling and Zooming](#scrolling-and-zooming)
- [Managing complex flowcharts](#managing-complex-flowcharts)
- [Preset nodes](#preset-nodes)
- [Disabling nodes and outputs](#disabling-nodes-and-outputs)
- [Default outputs](#default-outputs)

---

The **Flowchart View** allows visually editing a [flowchart](../project-primitives/flowcharts/flowchart.md) by setting up [nodes](../project-primitives/flowcharts/flowchart-node.md), making connections between the nodes to form a tree structure and adding information that will be associated with each node. See also the manual section for [flowcharts](../project-primitives/flowcharts.md).

[![The Flowchart View](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/124636/overview_v600.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124636/overview.png)The Flowchart View

Asides from showing the nodes and the connections between them, there is also a **status bar** at the bottom which displays the current **zoom level**, the **caption** of the last selected node and the **index**, and the **name** and **value** of the last selected [output](../project-primitives/flowcharts/flowchart-node-output.md).

## Adding and deleting nodes

To add new nodes, right-click in any empty space of the flowchart view and tap the `Add node` option.

[![Context menu option to add a node](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124628/add-node-1.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124628/add-node-1.png)Context menu option to add a node

To delete a node you can do one of two things:

- Right-click on the caption of a node or any part which is not an output and choose the `Delete` option.
- Press <kbd>Backspace</kbd> or <kbd>Delete</kbd> after a node has been selected.

[![Context menu option to delete a node](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/130612/flowchart-node-contextmenu_v470.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130612/flowchart-node-contextmenu.png)Context menu option to delete a node

## Editing nodes

Once a node has been created, there are a number of things that can be edited about them, including:

**Adding outputs**  
This can be done by:


- Right-clicking on the node and choosing the `Add` option from the context menu.
- Clicking on the `Add` link at the bottom left of each node.
- Clicking the `Add` link in the [Properties Bar](../interface/bars/properties-bar.md) when it is showing properties for a node.

**Deleting outputs**  
This can be done by:


- Right-clicking on the output and choosing the `Delete` option from the context menu.
- Clicking the corresponding `Remove` link in the Properties bar when it is showing properties for a node.

**Editing the tags**  
This can be done by:


- Typing in the labelled text box in the node itself.
- Editing the corresponding property in the Properties bar.

**Editing an output's name**  
This can be done by:


- Double clicking on an output's name.
- Right-clicking on an output's name and choosing the `Edit` option.
- Editing the corresponding property in the Properties bar.

**Editing an output's value**  
This can be done by:


- Double clicking on an output's value.
- Right-clicking on an output's value and choosing the `Edit` option.
- Clicking on the button next to the value.
- Editing the corresponding property in the Properties bar.

The **Caption** of a node can be edited from the Properties bar, by right clicking it and choosing the `Edit caption` option or by double clicking it on the corresponding node.

A few properties of nodes can only be edited from the Properties Bar, such as **Start node** and **Color**.

## Sorting outputs in a node

After an output is added to a node it is possible to change its position by clicking and dragging it to be on top or below another output in the same node.

## Connecting nodes

To connect two nodes click an **output** icon and then drag to the **input** of another node. This can be done the other way around too, clicking and dragging from an **input** icon into an **output** icon.

| Input Icon | Output Icon |
| --- | --- |
| [![node input](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124695/node-input.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124695/node-input.png) | [![node output](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124696/node-output.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124696/node-output.png) |

> **Tip**  
> Clicking and dragging from an **output** and letting go over empty space in the flowchart will show a context menu to add nodes. If any option is picked a new and already connected node will be created.

## Unlinking nodes

To remove the connection between two nodes, right click on the corresponding **output** or **input** and choose the `Unlink` option from the context menu.

Links can also be selected by clicking on them (the cursor changes when clicking will select it), when a link is selected it will show as a *"marching ants"* animation and at that point it can be deleted by using the <kbd>Backspace</kbd> or <kbd>Delete</kbd> keys in the keyboard.

| Unlink from Output Icon |
| --- |
| [![nodes unlink v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/124699/nodes-unlink_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124699/nodes-unlink.png) |

## Connecting many outputs to the same input

In the case of connecting multiple outputs to the same input, each of the parent nodes will start showing a **Parent Index** property, both in the node and the Properties bar.

The **Parent Index** can be used with some actions and expressions that need to choose which parent to use in the case a node has more than one.

| Parent Index in node | Properties Bar |
| --- | --- |
| [![nodes parent index v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/124702/nodes-parent-index_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124702/nodes-parent-index.png) | [![flowchart node properties bar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130628/flowchart-node-properties-bar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130628/flowchart-node-properties-bar.png) |

## Moving and resizing nodes

Nodes can be moved by clicking and dragging from the caption and can be resized by clicking and dragging from the borders.

The columns in each node can also be resized by clicking and dragging between them.

| Move drag | Resize drag | Column resize drag |
| --- | --- | --- |
| [![node move area](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124708/node-move-area.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124708/node-move-area.png) | [![node resize area](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124709/node-resize-area.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124709/node-resize-area.png) | [![node resize columns](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124710/node-resize-columns.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124710/node-resize-columns.png) |

> **Tip**  
> The position, size and column size of the nodes in a flowchart is only for display purposes and has no effect at runtime.

## Multi-selection

By holding <kbd>Shift</kbd> while selecting nodes and outputs it is possible to select multiple elements at the same time.

Doing this it is possible to delete multiple nodes and outputs at the same time as well as moving multiple nodes at the same time.

## Rectangle selection tool

Clicking and dragging in empty space will trigger the appearance of a selection rectangle. Any nodes overlapping the rectangle when the pointer is released will be selected. If <kbd>Shift</kbd> is held down the nodes will be added to any existing selection.

## Cut, copy and paste

Cut, copy and paste of nodes is supported through context menu options and the common keyboard shortcuts. Cutting or copying when there is an active multi-selection will perform the appropriate action on the whole selection.

Once there is flowchart content on the clipboard it is also possible to paste it in a different flowchart to the original.

## Scrolling and Zooming

There are a few ways to scroll in the Flowchart View:

- Use the vertical and horizontal scrollbars at the edges of the view.
- Scroll the mouse wheel to scroll vertically. You can also hold <kbd>Shift</kbd> to scroll horizontally.
- Hold the middle mouse button and drag the mouse.
- Hold <kbd>Space</kbd> and move the mouse.

On desktop systems, middle-mouse dragging is probably the most convenient way to move around the flowchart.

To zoom hold <kbd>Control</kbd> (<kbd>Meta</kbd> on Mac) and scroll the mouse wheel.

Make sure to check the [Keyboard shortcuts](../interface/keyboard-shortcuts.md) section of the manual for a complete list.

## Managing complex flowcharts

When flowcharts start becoming large it can be difficult to keep track of what is going on just by looking at it.

These are a few features that can help with that:

**Node colors**  
All nodes can be given a unique color which is applied to it's border. Helps highlight important nodes.

**Output link colors**  
Each output can be given a unique color that is used to draw it's corresponding link. This can help to differentiate between links when it starts getting crowded. This property can only be changed from the properties of an output shown in the Properties Bar.

**Output link mode**  
Each output can use two different methods to draw it's corresponding link. It can be either a straight line (default method), or it can use path finding so the link avoids overlapping other nodes. This can help in cases were a straight link is overlapping other nodes making the flowchart look messy. This property can only be changed from the properties of an output shown in the Properties Bar

**Reference nodes**  
This types of nodes are used as a placeholder for a different flowchart. Can be useful to split up large flowcharts in more manageable chunks.

**Comment nodes**  
This types of nodes are used to place comments directly in a flowchart.

## Preset nodes

Nodes can be saved to be used later as a base to create new nodes.

This can be useful in more complex use cases as it is likely that in any given project all of the existing flowchart nodes will follow a similar structure so they can be easily processed by an [Event Sheet](../project-primitives/events/event-sheets.md).

Manually adding all the outputs and editing the names of the outputs so they match the format being used every single time a node is created can quickly become tedious and also error prone.

Identifying the format of the nodes that are going to be used more often and saving them as presets can save time, avoid errors and just make the experience of editing a flowchart a little bit more enjoyable.

Saving a node as a preset is easy, you can either change the corresponding property in the Properties bar or use the `Preset › Add to presets` context menu option of a node.

| Preset Context Menu | Properties Bar |
| --- | --- |
| [![flowchart node contextmenu](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130629/flowchart-node-contextmenu.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130629/flowchart-node-contextmenu.png) | [![flowchart node properties bar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130630/flowchart-node-properties-bar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130630/flowchart-node-properties-bar.png) |

Once there are some nodes set as presets, a new option to create nodes will appear among the context menu options to create nodes.

[![node contextmenu add preset](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124713/node-contextmenu-add-preset.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124713/node-contextmenu-add-preset.png)

Clicking on it will show a dialog with all the preset nodes in the current project.

[![preset node picker](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124714/preset-node-picker.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/124714/preset-node-picker.png)

The **Preset node picker** dialog shows all the preset nodes as a tree with the flowchart they belong to as their top most parent. The tree like other similar controls in Construct allows to, create folders, delete, rename and rearrange items as needed.

The name used for the items in the tree is the caption of the corresponding node, so renaming an item in the picker dialog will change the caption of the corresponding node.

> **Tip**  
> Once a new node is created from a preset, the base node and the new node are independent. Modifying the base won't have any effect on the new node!

> **Tip**  
> All preset nodes are available to be used in any flowchart of the same project.

## Disabling nodes and outputs

When editing a flowchart it can be useful to disable nodes or outputs to try out runtime changes without outright deleting elements of the flowchart. This can be thought as commenting lines of code in traditional programming, a method to make changes that are not yet final.

Nodes and outputs can be disabled using the corresponding context menu options or by means of the Properties bar.

| Node Context Menu | Output Context Menu | Properties Bar |
| --- | --- | --- |
| [![flowchart node contextmenu v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/130636/flowchart-node-contextmenu_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130636/flowchart-node-contextmenu.png) | [![flowchart node output](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130637/flowchart-node-output.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130637/flowchart-node-output.png) | [![flowchart node properties bar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130638/flowchart-node-properties-bar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130638/flowchart-node-properties-bar.png) |

Both disabled nodes and outputs give feedback of the state in the main view to make them easily identifiable.

| Disabled Node | Disabled Output |
| --- | --- |
| [![disabled node](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130639/disabled-node.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130639/disabled-node.png) | [![disabled output](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130640/disabled-output.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130640/disabled-output.png) |

At runtime, a disabled node is treated as if it's not there, so if the state of the flowchart tries to advance into a disabled node, it won't happen, effectively cutting off any nodes past the disabled one.

Similarly a disabled output is treated as if it doesn't exist at runtime, it can't be followed, it's information can't be queried and it's not considered in the for each loop that iterates through outputs.

## Default outputs

Outputs can be set as the default one in their node by a context menu option or through the Properties bar.

| Context Menu | Properties Bar |
| --- | --- |
| [![flowchart node output](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130643/flowchart-node-output.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130643/flowchart-node-output.png) | [![flowchart node properties bar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130644/flowchart-node-properties-bar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130644/flowchart-node-properties-bar.png) |

The two use cases of this setting are the following:

1. A default output can be chosen at runtime using the [Flowchart Controller](../plugin-reference/flowchart-controller.md) ACEs that specifically target them. This allows to more easily manage a default option in each node without the need of enforcing a convention when designing the nodes.
2. In the case of a node being disabled, the runtime follows default outputs automatically if the state of the flowchart falls in a disabled node. If the following node is also disabled the runtime will attempt to continue following default outputs until it lands on a node which is not disabled.

[![Disabled and Bypassed node](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/130647/flowchart-node-bypass_v160.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/130647/flowchart-node-bypass.png)Disabled and Bypassed node

> **Tip**  
> If a node doesn't have an explicit default output set, the Flowchart Controller ACEs that target default outputs don't do anything.



> **Tip**  
> The editor doesn't allow to form infinite loops of disabled nodes with default outputs because it would crash the runtime. The editor will give feedback if such a structure is attempted to be setup and revert the changes.
