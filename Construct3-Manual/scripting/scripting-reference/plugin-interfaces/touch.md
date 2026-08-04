---
title: "Touch script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/touch"
release: 495
---

## On this page

- [Examples](#examples)
- [Events](#events)
- [Touch APIs](#touch-apis)

---

The `ITouchObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Touch plugin](../../../plugin-reference/touch.md).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.touch` instead of the named object.

## Examples

The [Tracking pointers](https://editor.construct.net/#open=tracking-pointers) example demonstrates how both mouse and touch input can be tracked simultaneously using pointer events.

## Events

To detect touch input events, use the events fired on the [Runtime script interface](../../../scripting/scripting-reference/iruntime.md), such as `"pointerdown"`. There are also `"deviceorientation"` and `"devicemotion"` events which can be used to detect device movement.

## Touch APIs

**async requestPermission(type)**  
Request permission to use device orientation or motion sensors. The `"deviceorientation"` and `"devicemotion"` events will not fire unless this method has been called and permission granted. *type* must be `"orientation"` or `"motion"`. The user may be prompted to allow permission. Note some browsers merge both types in to one permission prompt in which case only one permission request is necessary to access both orientation and motion. Returns a promise that resolves with `"granted"` if permission was allowed, else `"denied"` if the user declined.
