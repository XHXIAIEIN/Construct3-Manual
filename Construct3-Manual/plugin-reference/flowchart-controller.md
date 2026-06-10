---
title: "Flowchart Controller"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/flowchart-controller"
release: 487.3
---

## On this page

- [Flowchart Controller Conditions](#flowchart-instances)

---

The **Flowchart Controller** plugin allows [flowcharts](../project-primitives/flowcharts/flowchart.md) to be controlled in event sheets.

Some of the common uses of the plugin include the following:

- Create instances of flowcharts using the **Start flowchart** or **Start flowchart (by name)** actions.
- Use the **Set flowchart** action to set an existing flowchart instance as the current one, affecting which flowchart other actions, conditions and expressions act upon.
- Use the **Go to** actions to traverse a flowchart.
- Use the **Node entered** and **Node exited** triggers to perform other project-specific actions depending on the current state of a flowchart.
- Query information from the current node of the current flowchart using expressions.

### Flowchart instances

Use the *Start flowchart* action to create an *instance* of a flowchart. This is essentially the current state of a flowchart, including the current node. Sometimes only one instance of a flowchart is necessary, which is simpler to use. However it is possible to create multiple instances of the same flowchart, and have each instance track its current node separately. This allows for more advanced uses, such as having every instance of a Sprite object have its own flowchart instance and be able to proceed through the flowchart independently, rather than sharing one flowchart state for all Sprite objects.

The *End flowchart* action is the counterpart of *Start flowchart*, and destroys a flowchart instance so it no longer consumes memory.

> **Tip**  
> Look for the [Flowcharts and Containers](https://editor.construct.net/#open=flowcharts-and-containers) example for a quick look at how to combine Flowcharts with Containers to give individual instances their own flowchart instance.

## Flowchart Controller Conditions

**On any flowchart entered**  
Triggered when any flowchart is entered. This will happen after using the **Set Flowchart** action or after using one of the actions to start a new flowchart and using the parameter to immediately set it as the current one.

**On any node entered**  
Triggered when any node is entered in the current flowchart.

**On tagged node entered**  
Triggered when a node with the specified tags is entered in the current flowchart. All the passed tags must match for the condition to be fulfilled.

**On any node entered in flowchart**  
Triggered when any node is entered in a flowchart with the specified tag.

**On tagged node entered in flowchart**  
Triggered when a node with the specified tags is entered in a flowchart with the specified tag. All the passed node tags must match for the condition to be fulfilled.

**On any flowchart exited**  
Triggered when any flowchart is exited.

**On any node exited**  
Triggered when any node in the current flowchart is exited.

**On tagged node exited**  
Triggered when a node with the specified tags in the current flowchart is exited. All the passed tags must match for the condition to be fulfilled.

**On any node exited in flowchart**  
Triggered when any node in the specified flowchart is exited.

**On tagged node exited in flowchart**  
Triggered when a node with the specified tags in the specified flowchart is exited. All the passed node tags must match for the condition to be fulfilled.

**Is at start node**  
Check if the current flowchart is at the start node.

**Is at start node in flowchart**  
Check if the specified flowchart is at the start node.

**Has flowchart**  
Check if a flowchart with the specified tag was already created by either **Start flowchart** or **Start flowchart (by name)**.

> **Tip**  
> Note this is false if the flowchart was already released by **End flowchart** or **End flowchart by tag** actions.

**Compare output count**  
Compare the output count of the current node in the current flowchart.

**Compare output name**  
Compare the output name in the current node of the current flowchart, using an index to choose the output.

**Compare default output name**  
Compare the output name in the current node of the current flowchart, checking against the default output. Only works if a default output has been set.

**Compare output value**  
Compare the output value in the current node of the current flowchart, using an index or name to choose the output.

**Compare default output value**  
Compare the output value in the current node of the current flowchart, checking against the default output. Only works if a default output has been set.

**Compare node tags**  
Compare the tags of the current node in the current flowchart. In the case of passing multiple tags as a space separated string, the current node must contain all the passed tags for the condition to be fulfilled.

**Compare node tag count**  
Compare the tag count of the current node in the current flowchart.

**Compare flowchart tag**  
Compare the tag of the current flowchart.

**Has output**  
Check if the current node of the current flowchart has an output, using an index or a name to choose the output.

**Has default output**  
Check if the current node of the current flowchart has a default output.

**Output name match regex**  
Check if an output's name in the current node of the current flowchart matches a regular expression, using an index to choose the output.

**Output value match regex**  
Check if an output's value in the current node of the current flowchart matches a regular expression, using an index or name to choose the output.

**For Each Output**  
Run a loop for each output in the current node of the current flowchart.

### Flowchart Controller Actions

**Start flowchart**  
Starts a new flowchart instance. Use the **Start node tag** parameter so the flowchart starts in that node, if left empty the flowchart's starting node set in the editor is used. The **Flowchart tag** parameter assigns the flowchart instance a tag to later identify it elsewhere in the event sheet. The **Set as current** parameter is a shortcut to immediately set the new flowchart as the current one.


> **Tip**  
> Starting a flowchart with a previously used tag will reset the existing flowchart!

**Start flowchart (by name)**  
Starts a new flowchart instance. Use the **Start node tag** parameter so the flowchart starts in that node, if left empty the flowchart's starting node set in the editor is used. The **Flowchart tag** parameter assigns the flowchart instance a tag to later identify it elsewhere in the event sheet. The **Set as current** parameter is a shortcut to immediately set the new flowchart as the current one.


> **Tip**  
> Starting a flowchart with a previously used tag will reset the existing flowchart!

**Set flowchart**  
Set the flowchart with the specified tag as the current one. All actions, conditions and expressions used after this will refer to the specified flowchart, except for the case a tag is provided to get information from a specific flowchart instance other than the current one.

**End flowchart**  
Release the current flowchart.

**End flowchart by tag**  
Release the flowchart with the specified tag.

**Reset flowchart**  
Reset the current flowchart, making the default initial node the current one.

**Reset flowchart by tag**  
Reset the specified flowchart, making the default initial node the current one in that flowchart.

**Go to next node**  
Go to the next node, using an index or a name to choose the [output](../project-primitives/flowcharts/flowchart-node-output.md) to follow.

**Go to default node**  
Go to the next node, following the default output. If no default output has been set, nothing will happen.

**Go to node**  
Go to an arbitrary node in the current flowchart using tags to find it. When passing multiple tags as a space separated string, a node must match all the tags before it can be visited.

**Go to previous node**  
Go to the previous node of the current flowchart.

**Go to parent node**  
Go to the parent node of the current node in the current flowchart, using an index or tags to find the parent node. If the node only has one parent the action will just move the flowchart to that node. When passing multiple tags as a space separated string, the parent node must match all the tags before it can be visited. If there are multiple matches, the first valid one is used.

### Flowchart Controller Expressions

**FlowchartTag**  
Return the tag of the current flowchart.

**NodeTag**  
Return the full tag string of the current node in the current flowchart.

**NodeTagAt(Index)**  
Return a tag of the current node in the current flowchart using a 0-based index to look it up.

**NodeTagCount**  
Return the amount of tags of the current node in the current flowchart.

**OutputCount**  
Return the output count of the current node in the current flowchart.

**OutputNameAt(Index)**  
Return the output name at the specified index in the current node of the current flowchart.

**OutputNameDefault**  
Return the default output name in the current node of the current flowchart. If no default output is set, an empty string is returned.

**OutputValue(IndexOrName)**  
Return the output value at the specified index or name in the current node of the current flowchart.

**OutputValueDefault**  
Return the default output value in the current node of the current flowchart. If no default output is set, an empty string is returned.

**ParentCount**  
Return the parent count of the current node in the current flowchart.

**ParentTag(ParentIndex)**  
Return the full parent tag string of the current node in the current flowchart, specifying a parent index.

**ParentTagAt(ParentIndex, TagIndex)**  
Return a parent tag of the current node in the current flowchart, specifying a parent index and a 0-based index to look up the tag.

**ParentIndex(ParentTag)**  
Return the parent node index of the current node in the current flowchart, specifying a parent tag.

**NodeTagInFlowchart(FlowchartTag)**  
Return the full tag string of the current node in the specified flowchart.

**NodeTagAtInFlowchart(FlowchartTag, TagIndex)**  
Return a tag of the current node in the specified flowchart using a 0-based index to look up the node tag.

**NodeTagCountInFlowchart(FlowchartTag)**  
Return the tag count of the current node in the specified flowchart.

**OutputCountInFlowchart(FlowchartTag)**  
Return the output count of the current node in the specified flowchart.

**OutputNameAtInFlowchart(Index, FlowchartTag)**  
Return the output name at the specified index in the current node of the specified flowchart.

**OutputNameDefaultInFlowchart(FlowchartTag)**  
Return the default output name in the current node of the specified flowchart. If no default output is set, an empty string is returned.

**OutputValueInFlowchart(IndexOrName, FlowchartTag)**  
Return the output value at the specified index or name in the current node of the specified flowchart.

**OutputValueDefaultInFlowchart(FlowchartTag)**  
Return the default output value in the current node of the specified flowchart. If no default output is set, an empty string is returned.

**ParentCountInFlowchart(FlowchartTag)**  
Return the parent count of the current node in the specified flowchart.

**ParentTagInFlowchart(ParentIndex, FlowchartTag)**  
Return the full parent tag string of the current node in the specified flowchart using an index to pick the parent.

**ParentTagAtInFlowchart(ParentIndex, FlowchartTag, tagIndex)**  
Return a parent tag of the current node in the specified flowchart using an index to pick the parent and a 0-based index to look up the parent tag.

**ParentIndexInFlowchart(ParentTag, FlowchartTag)**  
Return the parent index of the current node in the specified flowchart using a tag to pick the parent.

**CurOutputName**  
Return the current output name in a **For Each Output** loop.

**CurOutputValue**  
Return the current output value in a **For Each Output** loop.

**CurIsDefault**  
Check if the current output in a **For Each Output** loop is the default one.

> **Tip**  
> The expressions that accept a flowchart tag are useful because they offer a way to get information from a specific flowchart instance without executing any existing **node change** or **flowchart change** triggers.
