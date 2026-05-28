---
title: "Node"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/flowchart-node"
release: 487
---

## On this page

- [Creating nodes](#creating-nodes)
- [Node properties](#node-properties)

---

The node is the main component of a [flowchart](../../project-primitives/flowcharts/flowchart.md). It represents a state the flowchart can get into and can hold arbitrary data in the form of [outputs](../../project-primitives/flowcharts/flowchart-node-output.md), similar to having a small amount of [Dictionary](../../plugin-reference/dictionary.md) data in each node.

The information a node holds can be queried at runtime using the [Flowchart Controller](../../plugin-reference/flowchart-controller.md) plugin.

## Creating nodes

To create a node in a flowchart, open a [Flowchart View](../../interface/flowchart-view.md) for it from the [Project Bar](../../interface/bars/project-bar.md) and then right-click in any empty space of the Flowchart View and select the **Add** option from the context menu. Doing that will create a node at the position of the pointer.

For more information on further editing of nodes, see the [Flowchart View](../../interface/flowchart-view.md) section of the manual.

## Node properties

**Tags**  
A string used to identify a node at runtime. Multiple different tags can be assigned by separating them with a space. The Flowchart Controller plugin has several actions, conditions and expressions that can be used with one or multiple tags to target specific nodes.

**Start node**  
A boolean property specifying the first node a flowchart will be in once it is instantiated at runtime.

**Enable**  
A boolean property indicating if the node is enabled or not. A disabled node is ignored at runtime and the flowchart state will not go past it. A disabled node can be bypassed at runtime if it has a default output set.

**Caption**  
An editor-only property. This is an optional name that can be given to a node to help distinguish it from others.

**Color**  
An editor-only property. This is an optional color that will be applied to the border of the node.

**Preset**  
An editor-only property. Indicates if the node is a preset or not. Preset nodes can be used as a base to create new nodes.

**Outputs**  
A list of the outputs each node has.

**Parent Index**  
In the case a node is connected to multiple parent nodes, this property appears and displays an index that can be given to each parent. Used by some actions and expressions in the case a node has more than one parent.
