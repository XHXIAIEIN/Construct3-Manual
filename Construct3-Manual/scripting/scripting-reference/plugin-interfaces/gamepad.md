---
title: "Gamepad script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/gamepad"
release: 495
---

## On this page

- [Events](#events)
- [Gamepad APIs](#gamepad-apis)

---

The `IGamepadObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Gamepad plugin](../../../plugin-reference/gamepad.md).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.objects.Gamepad` directly.

When writing code you can interact with the browser [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) directly. However the browser API is only available when the project runs in DOM mode. This script interface allows accessing gamepad features in worker mode too. The script interface is designed to work similarly to the browser Gamepad API.

## Events

**"gamepadconnected"**  
Fired when a gamepad is connected. The event object includes the properties `id` for a string identifying the gamepad, and `index` for the zero-based index of the gamepad.

**"gamepaddisconnected"**  
Fired when a gamepad is disconnected. The event object includes the property `index` for the zero-based index of the gamepad.

**"gamepadinputupdate"**  
Fired when Construct's internal gamepad polling returns data. This event contains data about the current input state of all gamepads. The event object contains a property `gamepads` which is an array of all connected gamepad states. Each gamepad state is an object with the following properties:

- `index`: the zero-based index of the gamepad
- `id`: a string identifying the gamepad
- `axes`: an array of numbers representing the gamepad axis positions in the range [-1, 1].
- `buttons`: an array of objects representing the gamepad button states. Each object has the properties `pressed`, which is a boolean indicating whether the button is currently pressed, and `value`, which is the pressed amount in the range [0-1] for buttons that support it.

Note that all data represents raw input with no dead zone or input mapping applied. Detecting button press events also requires writing code to observe input updates and identifying when a button changes from unpressed to pressed state.

## Gamepad APIs

**deadZone**  
Read-only number representing the deadzone property of the Gamepad object in the range 0-1.
