---
title: "Flowcharts"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/flowcharts"
release: 495
---

[Flowcharts](../project-primitives/flowcharts/flowchart.md) allow you to arrange information in a tree like structure and establish logical connections between each [node](../project-primitives/flowcharts/flowchart-node.md) in the tree. Additionally each node can hold an arbitrary amount of information in the form of  [outputs](../project-primitives/flowcharts/flowchart-node-output.md).

In the editor flowcharts are edited using the  [Flowchart View](../interface/flowchart-view.md).

At runtime the [Flowchart Controller](../plugin-reference/flowchart-controller.md) plugin is used to query the current node of a flowchart for information, to navigate to different nodes and to react to changes in the state of the flowchart and have the application respond accordingly (e.g. moving from one node to the next one).

> **Tip**  
> Flowcharts themselves don't have any means to perform logic. Since [event sheets](../project-primitives/events/event-sheets.md) are already very good at managing logic, flowcharts are primarily meant as a tool to represent a tree structure in a way which makes it easier to understand the relationship between the nodes.
