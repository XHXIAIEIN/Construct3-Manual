---
title: "Output"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts/flowchart-node-output"
release: 487.3
---

## On this page

- [Editing outputs](#editing-outputs)
- [Output Properties](#output-properties)

---

[Nodes](../../project-primitives/flowcharts/flowchart-node.md) can have an arbitrary amount of outputs, which have a name, an associated value, and can be linked to the input of another node.

## Editing outputs

For a more complete overview on the editing tools available, look at the [Flowchart View](../../interface/flowchart-view.md) section of the manual.

## Output Properties

**Index**  
The index of an output is a read-only property and can be used by the [Flowchart Controller](../../plugin-reference/flowchart-controller.md) to query information about an output or to move to the next connected node.

**Name**  
A string of a name for the output. This can be used by the Flowchart Controller plugin to get the associated value or to move the state of the [flowchart](../../project-primitives/flowcharts/flowchart.md) to the next connected node.

**Value**  
A string  which can hold an arbitrary value with no specific purpose, to be accessed via event sheets.

**Enable**  
A boolean property indicating if the output is enabled or not. A disabled output is ignored at runtime, it can not be followed and it's information can not be queried. It is not considered when using the for loop condition to iterate the outputs of a node.

**Default**  
A boolean property indicating if the output is the default one or not. Default outputs can be targeted by the [Flowchart Controller](../../plugin-reference/flowchart-controller.md) ACEs. If a node doesn't have any explicit default output, the corresponding ACEs don't do anything. This setting can also be used together with disabled nodes to bypass them at runtime. When the runtime encounters a disabled node with a default output it will attempt to follow all bypasses until it can land in an enabled node.

**Color**  
An editor only property to help better identify links between nodes when there are many of them.

**Link mode**  
An editor only property to choose how to draw the link between nodes. Can either be a straight line or use path finding to avoid overlapping nodes. Using path finding can be useful when a link ends up going over other nodes.
