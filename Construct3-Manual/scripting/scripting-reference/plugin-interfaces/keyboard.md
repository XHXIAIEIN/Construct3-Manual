---
title: "Keyboard script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/keyboard"
release: 495
---

## On this page

- [Examples](#examples)
- [Events](#events)
- [Keyboard APIs](#keyboard-apis)

---

The `IKeyboardObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Keyboard plugin](../../../plugin-reference/keyboard.md).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.keyboard` instead of the named object.

## Examples

See the [Simple keyboard movement](https://editor.construct.net/#open=simple-keyboard-movement) example for a basic demonstration of using the `isKeyDown()` method to move a Sprite.

## Events

To detect key press events, use the `"keyup"` and `"keydown"` events fired on the [Runtime script interface](../../../scripting/scripting-reference/iruntime.md).

## Keyboard APIs

**isKeyDown(keyStringOrWhich)**  
Return a boolean indicating if the specified keyboard key is currently being held down. The key can be specified either by its numeric code, corresponding to the [KeyboardEvent.which](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which) property, or a string identifying the physical key, corresponding to the [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) property (see also [KeyboardEvent: code values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)).

> **Tip**  
> Using numeric codes is now deprecated, so it's recommended to use a string for the key instead.
