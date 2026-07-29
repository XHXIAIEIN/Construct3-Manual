---
title: "Button script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/button"
release: 495
---

## On this page

- [Button events](#button-events)
- [Button APIs](#button-apis)

---

The `IButtonInstance` interface derives from [IDOMInstance](../../../scripting/scripting-reference/object-interfaces/idominstance.md) to add APIs specific to the [Button plugin](../../../plugin-reference/button.md).

## Button events

See [instance event](../../../scripting/scripting-reference/interfaces/instance-event.md) for standard instance event object properties.

**"click"**  
Fired when the button is clicked, or the checkbox state is toggled.

## Button APIs

**text**  
The string currently displayed as the button or checkbox label.

**tooltip**  
The string used as the tooltip for the button or checkbox.

**isEnabled**  
A boolean indicating if the control is enabled or disabled.

**isChecked**  
A boolean indicating if the checkbox is checked. For button style controls this is always false.
