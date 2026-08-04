---
title: "Flash behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/flash"
release: 495
---

## On this page

- [Flash conditions](#scripting)
- [Flash actions](#flash-conditions)

---

The **Flash behavior** makes an object blink by toggling its visibility on and off for a period of time.

Simply adding the Flash behavior to an object does not do anything. You must use the *Flash* action to make the object flash.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IFlashBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/flash.md).

## Flash conditions

**Is flashing**  
True if the object is currently within a flash duration.

**On flash ended**  
Triggered when the end of the flash duration is reached, and the object has returned to visible.

## Flash actions

**Flash**  
Make the object flash by toggling its visibility on and off. The *On* time is the duration in seconds the object remains visible. The *Off* time is the duration in seconds the object remains invisible. The object will alternate between these two states for the given duration in seconds. The object is always set back to visible after the flash duration finishes.

**Stop flashing**  
If the object is currently flashing, this stops the flashing and sets the object back to visible. If the object is not currently flashing this action has no effect.
