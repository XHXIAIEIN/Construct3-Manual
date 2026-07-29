---
title: "Text Input script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/text-input"
release: 495
---

## On this page

- [Text Input events](#text-input-events)
- [Text Input APIs](#text-input-apis)

---

The `ITextInputInstance` interface derives from [IDOMInstance](../../../scripting/scripting-reference/object-interfaces/idominstance.md) to add APIs specific to the [Text Input plugin](../../../plugin-reference/text-input.md).

## Text Input events

See [instance event](../../../scripting/scripting-reference/interfaces/instance-event.md) for standard instance event object properties.

**"click"**  
Fired when the control is clicked or double-clicked.

**"dblclick"**  
Fired when the control is clicked or double-clicked.

**"change"**  
Fired when user input causes the `text` property to change.

## Text Input APIs

**text**  
The current string entered in the input field.

**placeholder**  
A string of text that appears faintly when the field is empty. This can be used for hints for what the field is for, e.g. *Username*.

**tooltip**  
A tooltip that appears if the user hovers the mouse over the text box and waits. An empty string indicates no tooltip.

**isEnabled**  
A boolean indicating if the control is enabled or disabled.

**isReadOnly**  
A boolean indicating if the input field is read-only, which means the text cannot be modified but can still be selected. This is different to disabling the field, where text cannot be selected.

**scrollToBottom()**  
Scroll to the bottom of the control. Only has an effect when set to the *textarea* type, since it is the only multiline mode. This is useful for chat or log style textareas.

**maxLength**  
Set or get the maximum number of characters allowed to be entered in the field. The value -1 indicates no limit, which is the default.
