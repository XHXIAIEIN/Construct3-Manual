---
title: "Reference Node"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/reference-node"
release: 487.3
---

## On this page

- [Creating reference nodes](#creating-reference-nodes)
- [Node properties](#node-properties)

---

The reference node is a secondary type of node that can be added to a [flowchart](../../project-primitives/flowcharts/flowchart.md).

Unlike regular [nodes](../../project-primitives/flowcharts/flowchart/node.md), which represent a state and can have information, these are placeholders for other flowcharts. When the flow reaches one, a new instance of the corresponding flowchart is created and control is transferred to it.

This type of nodes are meant to help splitting up flowcharts in case they become too large or if it's necessary for unique portions of a larger flowchart to be available individually.

## Creating reference nodes

To create a reference node in a flowchart, open a [Flowchart View](../../interface/flowchart-view.md) for it from the [Project Bar](../../interface/bars/project-bar.md) and then right-click in any empty space of the Flowchart View and select the **Add reference node** option from the context menu. Doing that will create a node at the position of the pointer.

For more information on further editing of nodes, see the [Flowchart View](../../interface/flowchart-view.md) section of the manual.

## Node properties

**Tags**  
A string used to identify a node at runtime. Multiple different tags can be assigned by separating them with a space. The Flowchart Controller plugin has several actions, conditions and expressions that can be used with one or multiple tags to target specific nodes.

**Enable**  
A boolean property indicating if the reference node is enabled or not. A disabled node is ignored at runtime and the flowchart state will not go past it.

**Reference flowchart**  
The flowchart that should be created upon reaching this node.

**Reference start node**  
The tags of the node that should visited in the referenced flowchart. The first node found that matches all passed tags will be used as the starting position of the flowchart. If left empty the default start node set in the editor is used.

**Runtime tag**  
The tag given to the referenced flowchart at runtime to be able to identify it. This is analogous to the tag a flowchart can be given when it is instantiated through the [Flowchart Controller's](../../plugin-reference/flowchart-controller.md) **Start flowchart** action. If left empty a unique tag is assigned.

**Caption**  
An editor-only property. This is an optional name that can be given to a reference node to help distinguish it from others.

**Color**  
An editor-only property. This is an optional color that will be applied to the border of the node.

**Parent Index**  
In the case a node is connected to multiple parent nodes, this property appears and displays an index that can be given to each parent. Used by some actions and expressions in the case a node has more than one parent.
