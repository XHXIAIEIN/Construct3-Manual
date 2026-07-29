---
title: "Billboard behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/billboard"
release: 495
---

## On this page

- [Billboard properties](#scripting)
- [Billboard conditions](#billboard-properties)
- [Billboard actions](#billboard-conditions)
- [Billboard expressions](#billboard-actions)

---

The **Billboard behavior** automatically rotates an object to point towards the camera. It is generally used with the [3D camera object](../plugin-reference/3d-camera.md), and is often useful with 2D objects like Sprite to make them always appear flat against the camera with a 3D view.

There are alternative ways to achieve a billboard-style appearance without using this behavior. See the [Billboard styles example](https://editor.construct.net/#open=billboard-styles) for a demonstration.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IBillboardBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/billboard.md).

## Billboard properties

**Offset X**  
Additional 3D rotation in degrees to apply around the X, Y and Z axes after orienting the object directly towards the camera.

**Offset Y**  
Additional 3D rotation in degrees to apply around the X, Y and Z axes after orienting the object directly towards the camera.

**Offset Z**  
Additional 3D rotation in degrees to apply around the X, Y and Z axes after orienting the object directly towards the camera.

**Enabled**  
Whether the behavior is initially enabled. When disabled, it will not alter the object's orientation.

## Billboard conditions

**Is enabled**  
True if the behavior is currently enabled.

## Billboard actions

**Set enabled**  
Set whether the behavior is currently enabled.

**Set offset**  
Set the offset X/Y/Z properties.

## Billboard expressions

**OffsetX**  
Return the corresponding behavior properties.

**OffsetY**  
Return the corresponding behavior properties.

**OffsetZ**  
Return the corresponding behavior properties.
