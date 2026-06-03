---
title: "Rotate behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/rotate"
release: 487.2
---

## On this page

- [Rotate properties](#scripting)
- [Rotate conditions](#rotate-properties)
- [Rotate actions](#rotate-conditions)
- [Rotate expressions](#rotate-actions)

---

The **Rotate behavior** makes an object spin.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IRotateBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/rotate.md).

## Rotate properties

**Speed**  
The rate of rotation, in degrees per second. Use a positive value for clockwise rotation and negative for anticlockwise rotation.

**Acceleration**  
The rate the rotation speed changes, in degrees per second per second. Use a positive value to accelerate clockwise and a negative to accelerate anticlockwise.

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

**Preview Paid plans only**  
Enable to run a preview of the behavior directly in the Layout View.

## Rotate conditions

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

## Rotate actions

**Set acceleration**  
Set the corresponding properties. See *Rotate properties*.

**Set speed**  
Set the corresponding properties. See *Rotate properties*.

**Set enabled**  
Enable or disable the movement. If disabled, the behavior will stop rotating the object.

## Rotate expressions

**Acceleration**  
Return the corresponding *Acceleration* property.

**Speed**  
Return the current rotating speed, in degrees per second. A positive value indicates clockwise rotation and a negative value indicates anticlockwise rotation.
