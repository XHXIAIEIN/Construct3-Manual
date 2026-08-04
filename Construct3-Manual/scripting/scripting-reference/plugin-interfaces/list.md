---
title: "List script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/list"
release: 495
---

## On this page

- [List events](#list-events)
- [List APIs](#list-apis)

---

The `IListInstance` interface derives from [IDOMInstance](../../../scripting/scripting-reference/object-interfaces/idominstance.md) to add APIs specific to the [List plugin](../../../plugin-reference/list.md).

## List events

See [instance event](../../../scripting/scripting-reference/interfaces/instance-event.md) for standard instance event object properties.

**"click"**  
Fired when the list is clicked.

**"dblclick"**  
Fired when the list is double-clicked.

**"selectionchange"**  
Fired when there is any change to the selected item or items.

## List APIs

**addItem(text)**  
Append a new item with the given text to the end of the list.

**insertItem(index, text)**  
Insert a new item at a zero-based index in the list with the given text.

**setItemText(index, text)**  
Set the item text at a zero-based index in the list.

**getItemText(index)**  
Return a string of the current item text at a zero-based index in the list.

**removeItem(index)**  
Delete an item at a zero-based index from the list.

**clear()**  
Remove all items from the list, leaving the list empty.

**itemCount**  
A read-only number representing how many items are in the list.

**selectedIndex**  
Set or get a number indicating the zero-based index of the currently-selected list item.

**selectedCount**  
A read-only number with the number of selected items. This is usually only useful with multi-select lists.

**getSelectedIndexAt(index)**  
Return the item index or the item text of a selected item by its index up to `selectedCount`. This is usually only useful with multi-select lists.

**getSelectedTextAt(index)**  
Return the item index or the item text of a selected item by its index up to `selectedCount`. This is usually only useful with multi-select lists.

**tooltip**  
A tooltip that appears if the user hovers the mouse over the list and waits. An empty string indicates no tooltip.
