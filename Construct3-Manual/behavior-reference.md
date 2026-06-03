---
title: "Behavior reference"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference"
release: 487.2
---

## On this page

- [Custom controls](#custom-controls)

---

This section provides a reference of all the official [behaviors](project-primitives/objects/behaviors.md) that come with Construct. Each has an overview of its use, a list of its properties, and a detailed list of the actions, conditions and expressions specific to that behavior. Behaviors add their actions, conditions and expressions to the object they are added to, appearing alongside the object's own features in the [Add condition/action dialog](interface/dialogs/add-condition-action.md) and [Expressions dictionary](interface/dialogs/expressions-dictionary.md).

Behaviors can be added and removed from objects via the [Properties Bar](interface/bars/properties-bar.md).

## Custom controls

By default, user-controlled movement behaviors use a standard set of controls (usually based around the arrow keys). To change these, disable the *Default controls* property, and set up some events using the *Simulate control* action. The following events show how to use the <kbd>W</kbd>, <kbd>A</kbd> and <kbd>D</kbd> keys to control the Platform movement.

[![Events to customise controls for the Platform behavior](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/971/simulate-controls_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/971/simulate-controls.png)

> **Tip**  
> Note that the input events must be continually true, i.e. using *Key is down* and **not** *On key pressed*.

The *Simulate control* action does not have to be used with keyboard input. For example, it can be used with touch input to create on-screen touch controls, or with [Gamepad](plugin-reference/gamepad.md) input. Alternatively, you can set up events to automatically control objects with the *Simulate control* action. This allows you to set up computer-controlled enemies or non-player characters (NPCs), sometimes loosely referred to as "AI".
