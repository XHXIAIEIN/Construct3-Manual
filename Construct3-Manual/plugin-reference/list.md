---
title: "List"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/list"
release: 487.2
---

## On this page

- [Layering HTML objects](#scripting)
- [Styling lists](#layering-html-objects)
- [List properties](#styling-lists)
- [List conditions](#list-properties)
- [List actions](#list-conditions)
- [List expressions](#list-actions)

---

The **List** object creates either a **dropdown list** or **list box** form control. A dropdown list only shows one item but can be expanded to show the full list; a list box shows multiple items at once. The image below shows a dropdown list on the left (which has been expanded), and a list box on the right.

[![List types](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1005/list-types.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1005/list-types.png)List types

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [IListInstance script interface](../scripting/scripting-reference/plugin-interfaces/list.md).

## Layering HTML objects

This object displays using a HTML element rather than drawing in to the canvas. This means its layering works differently to other objects. To learn more about how to layer HTML objects, see [HTML layers](../tips-and-guides/html-layers.md).

## Styling lists

As List objects are HTML elements, their appearance can be customised using CSS (Cascading Style Sheets). The *ID* and *Class* properties can be used to identify the HTML element, and a CSS [project file](../project-primitives/files.md) added to apply some styles to it.

## List properties

**Items**  
A list of the initial items to display in the list, with one item per line. Click the button to the right of the property to open a multi-line text box in a dialog to edit this more conveniently. The property field cannot show line breaks,

 so instead represents lines with the special **\n** escape sequence.

**Tooltip**  
A tooltip that appears in most browsers if the user hovers the mouse over the button and waits. Leave blank for no tooltip.

**Initially visibile**  
Whether or not the control is initially visible in the layout.

**Enabled**  
Whether the control is initially enabled. If disabled, the control will appear greyed out and the selection cannot be modified.

**Type**  
Choose between the *List box* and *Dropdown list* control styles. An image displaying the two types is shown above.

**Multi-select**  
Allow more than one item to be selected when *Type* is *List box*. This has no effect for dropdown lists.

**Auto font size**  
Automatically set the font-size property of the element according to the layout and layer scale. This will prevent the *font-size* CSS property being manually set with the *Set CSS style* action. Disable if you intend to use *Set CSS style* to adjust the *font-size* property.

**ID Optional**  
An optional *id* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

**Class Optional**  
An optional *class* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

## List conditions

See [common conditions](../plugin-reference/common-features/common-conditions.md) for features shared between form control objects.

**Compare item text at**  
Compare the text of a given item in the list.

**Compare selected item text**  
Compare the text of the currently selected item in the list.

**Compare selection**  
Compare the zero-based index of the currently selected item.

**On clicked**  
Triggered when the control is clicked.

**On double-clicked**  
Triggered when the control is double-clicked.

**On selection changed**  
Triggered whenever the chosen selection in the control is changed. This can be by any means of input (such as a mouse click, keyboard press, or touch input on mobile).

## List actions

See [common actions](../plugin-reference/common-features/common-actions.md) for features shared between form control objects.

**Add item**  
Append a new item to the end of the list of available choices.

**Add item at**  
Insert a new item to the list of available choices at a certain zero-based index.

**Clear**  
Remove all the available choices from the list.

**Remove**  
Delete an item at a specific index.

**Set item text**  
Change the text of an item at a specific index.

**Set selection**  
Set the item at a specific index as selected.

**Set tooltip**  
Set the *Tooltip* property of the object, displayed by most browsers when hovering the mouse over the control.

## List expressions

**ItemCount**  
The current number of items in the list.

**ItemTextAt**  
Return the text of an item at a zero-based index in the list.

**SelectedCount**  
The number of currently selected items. This will always be either 0 or 1 unless a list box with *Multi-select* enabled is used.

**SelectedIndex**  
The zero-based index of the currently selected item. For multi-select lists, use *SelectedIndexAt* instead.

**SelectedIndexAt**  
The index of a selected item out of all the selected items. In other words, *SelectedIndexAt* with numbers 0 to `SelectedCount - 1` gives the indices of all the selected items.

**SelectedText**  
The text of the currently selected item. For multi-select lists, use *SelectedTextAt* instead.

**SelectedTextAt**  
The text of a selected item out of all the selected items. In other words, *SelectedTextAt* with numbers 0 to `SelectedCount - 1` gives the text of each selected item.
