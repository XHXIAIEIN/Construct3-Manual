---
title: "Add condition/action dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/add-condition-action"
release: 495
---

## On this page

- [Step 1: Choose the object](#step-1-choose-the-object)
- [Step 2: Choose the condition or action](#step-2-choose-the-condition-or-action)
- [Step 3: Enter parameters](#step-3-enter-parameters)

---

The **Add Condition dialog** and **Add Action dialog** are very similar so they are both documented here. These dialogs allow you to add or edit a [condition](../../project-primitives/events/conditions.md) or [action](../../project-primitives/events/actions.md) in an [event sheet](../../project-primitives/events/event-sheets.md).

Adding a condition or action takes three steps:

1. **Choose the [object type](../../project-primitives/objects/object-types.md)** that has the condition or action
2. **Choose the condition or action** in that object type
3. **Enter parameters**, if any, such as the X and Y co-ordinate for *Set Position*.

The **Next** and **Back** buttons can be used to move forwards and backwards through these steps.

## Step 1: Choose the object

In this step a list of all the object types in the project is shown. The **System object** (which represents built-in features) always appears first, and the rest of the objects are listed in alphabetical order. If object types are arranged in to subfolders  `[Paid plans only]`  in the [Project Bar](../../interface/bars/project-bar.md), then folders also appear in this dialog.

[![Picking an object in the condition/action dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/951/acdialog-step1_v700.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/951/acdialog-step1.png)

**Double-click** an object to choose it, or a folder to open it. Typing in the **search box** in the top-right can quickly filter the list if there are many objects. Searching lists results from all folders.

The conditions and actions each object contains is related to the kind of object it is (e.g. Sprite, Keyboard or Audio). For example, to locate the *Play sound* action in the Add Action dialog, first double-click the Audio object. Remember the System object contains some conditions which can be used for any object, such as *Pick random* and *For Each*.

## Step 2: Choose the condition or action

In this step a list of all the **conditions** or **actions** available for the chosen object is displayed. They are arranged in to related categories. Below a list of the System object's conditions is shown.

[![A list of System object conditions in the condition/action dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/952/acdialog-step2_v700.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/952/acdialog-step2.png)

Some conditions and actions are very commonly used, such as *Start of layout* or *On collision*. To help you identify these quickly, commonly used conditions and actions are highlighted with a yellow background.

**Double-click** a condition or action to choose it. As before, typing in the **search box** can help quickly locate a condition or action in the list.

For more information on each condition or action, see the reference section of the manual. If the chosen object has any [behaviors](../../project-primitives/objects/behaviors.md), they may add extra conditions and actions in to the dialog as well.

Some conditions and actions require **parameters**. For example, the *Set position* action for a Sprite requires the X and Y co-ordinates to be entered. This is done in the Parameters dialog in the next step. However, some conditions and actions do not use any parameters, such as the *Destroy* action. In this case once the condition or action is chosen the process is complete.

[Functions](../../project-primitives/events/functions.md) and [custom actions](../../project-primitives/events/custom-actions.md) both provide ways to add your own items to the list of available actions.

## Step 3: Enter parameters

If the chosen condition or action requires parameters, the **Parameters dialog** appears for the parameters to be entered in to. For more information, see the manual entry for the [Parameters dialog](../../interface/dialogs/parameters.md).
