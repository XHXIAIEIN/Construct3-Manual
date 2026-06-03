---
title: "The Event Sheet View"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/event-sheet-view"
release: 487.2
---

## On this page

- [Diagram of an event](#diagram-of-an-event)
- [Creating events](#creating-events)
- [Modifying events](#modifying-events)
- [Scrolling and scale](#scrolling-and-scale)
- [Finding in events](#finding-in-events)
- [Opening multiple views](#find-all-references)

---

The **Event Sheet View** is where events can be added, viewed and edited in an [event sheet](../project-primitives/events/event-sheets.md) using the event system - Construct's alternative to traditional programming.

The event system has a lot of features, so the event system has its own [section of the manual](../project-primitives/events.md). This section will simply cover the basics of using the Event Sheet View.

[![The Event Sheet View](https://construct-static.com/images/v1767/r/uploads/articleuploadobject/0/images/873/event-sheet-view_v700.png)](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/873/event-sheet-view.png)The Event Sheet View

## Diagram of an event

The following image illustrates the key parts of an event.

[![Diagram of an event in Construct](https://construct-static.com/images/v1767/r/uploads/articleuploadobject/0/images/876/event-diagram_v650.png)](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/876/event-diagram.png)

Events are made up of three major sections:

1. The **event block**, which contains the conditions. Notice the margin to the left of the condition which allows you to select the entire event.
2. The **[conditions](../project-primitives/events/conditions.md)**, which are each listed inside the event block.
3. The **[actions](../project-primitives/events/actions.md)**, which are listed to the right of the event block.

Conditions and actions can be selected by clicking on them. The entire event can be selected (which also selects all its conditions and actions) by clicking the **event margin**, or the bottom part of the event block. The event margin can also be right-clicked to access a menu allowing things like adding conditions or sub-events.

As with the Layout View, multiple selections can be made by holding <kbd>Control</kbd> and clicking different items. However, you can only have either events, conditions or actions selected at a time (e.g. you can't have both a condition and action selected at once). You can also hold <kbd>Shift</kbd> and click an event, condition or action to select all the items in a line between the selection and clicked item.

## Creating events

There are a number of ways to add a new event:

- **Double-click** a space in the event sheet, or **right-click** in a space to see a menu of things to add
- Click the **Add event** link which comes after the last event in a sheet or group, or click the **Add...**

 link on the right

- **Right-click an event's margin** and choose an item from the `Add` menu

When you add a new event, the dialog that appears is for adding the first **condition** (see the [Add Condition dialog](../interface/dialogs/add-condition-action.md)). To add more conditions to an event, right-click the margin or an existing condition and select **Add another condition**, or use the **Add...** link on the right of the *Add action* link.

Actions can be added by clicking the **Add action** link (if it has not been hidden in the ribbon), or right-clicking the margin or an existing action and selecting **Add another action**. See also the [Add Action dialog](../interface/dialogs/add-condition-action.md).

## Modifying events

**Double-click** or select and press <kbd>Enter</kbd> on condition or action to edit it.

Events, conditions and actions can be **dragged and dropped** around the event sheet. Holding <kbd>Control</kbd> and dragging will duplicate the dragged event, condition or action. Event items can also be **cut, copied and pasted**.

You may find it convenient to organise events in to [groups](../project-primitives/events/groups.md), which can also be activated and deactivated as a whole.

Press <kbd>R</kbd> or right-click and use the `Replace object` option to quickly swap objects referenced in the selection. Note that objects with references to instance variables or behaviors in the selection can only be swapped with other objects with the same instance variables and behaviors which have the same names and types.

## Scrolling and scale

There are several ways to scroll in the Event Sheet View:

- **The vertical scrollbar** to the right of the view
- Scrolling the **mouse wheel**
- **Middle-clicking** to pan the view
- Pressing <kbd>Space</kbd>, **up/down** arrows or **page up/down**

There are some options to adjust the text size in this view as well:

- Hold <kbd>Control</kbd> and **scroll the mouse wheel**
- Press <kbd>Control</kbd> + <kbd>+</kbd> or <kbd>-</kbd>
- Right-click and use the `Event sheet › Font size` menu
- Use the browser's zoom feature, but note this scales the whole of Construct, not just the text scale in the Event Sheet View.

## Finding in events

`[Paid plans only]`  You can search for some text in an event sheet by pressing <kbd>Ctrl</kbd> + <kbd>F</kbd> or right-clicking and selecting `Event sheet › Find...`. This opens a dialog that allows you to enter text to search for, with options to look in the current sheet or the entire project, and whether to make it a case-sensitive search. (Case sensitive searches count uppercase and lowercase characters as different, e.g. "SPRITE" and "sprite" are different with a case-sensitive search.) When you click *Find*, the results are displayed in the [Find Results Bar](../interface/bars/find-results-bar.md).

### Find all references

`[Paid plans only]`  Text search is not always appropriate for finding in events. For example if you want to find all events referring to an object named **Sprite**, searching for the text *Sprite* will also return results for other names like **Sprite2**, since they also include the search term. To solve this, you can use the **Find all references** feature. This is available in many places in Construct for various kinds of things like behaviors and instance variables as well. For objects, you can right-click an object in the [Project Bar](../interface/bars/project-bar.md) and select *Find all references*. This will open the [Find Results Bar](../interface/bars/find-results-bar.md) with a comprehensive and precise list of all references to that object, excluding any other references that happen to include the object name. This is a great way to easily review your project with confidence the results are what you want.

## Opening multiple views

You can open multiple Event Sheet Views for the same Event Sheet. Right-click anywhere inside the event sheet and choose `Evnet sheet › Open additional`. You can then drag and drop the additional view somewhere else in the user interface so you can see it at the same time. This can be useful for reviewing one part of a long event sheet while modifying another. When you make changes in either view, it will automatically update any other views.
