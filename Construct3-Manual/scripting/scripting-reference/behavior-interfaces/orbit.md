---
title: "Orbit behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/orbit"
release: 495
---

## On this page

- [Orbit behavior APIs](#orbit-behavior-apis)

---

The `IOrbitBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Orbit behavior](../../../behavior-reference/orbit.md).

## Orbit behavior APIs

**setTargetPosition(x, y)**  
Set the position in the layout that the movement will orbit around.

**getTargetPosition()**  
Return the current target position in the layout as a two-element array in the form `[x, y]`.

**pin(iWorldInst)**  
Pass an [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to set the behavior to always orbit around that object's position.

**speed**  
Set or get the current rotation speed in radians per second.

**acceleration**  
Set or get the current rotation acceleration in radians per second per second.

**rotation**  
Set or get the current orbit position by its angle relative to the target position in radians.

**offsetAngle**  
For elliptical orbits, set or get the rotation of the ellipse in radians. For circular orbits, this does not affect the orbit path (since rotating a circle has no effect), but it changes the initial angle the orbit starts from.

**primaryRadius**  
Set or get the distance of the orbit from its target position. The primary radius is in the direction of the offset angle, and the secondary radius is perpendicular to the offset angle. For a circular orbit set both values to the same radius; for an elliptical orbit set them to different values.

**secondaryRadius**  
Set or get the distance of the orbit from its target position. The primary radius is in the direction of the offset angle, and the secondary radius is perpendicular to the offset angle. For a circular orbit set both values to the same radius; for an elliptical orbit set them to different values.

**isMatchRotation**  
Set or get a boolean indicating if the behavior will also alter the object's angle to match the direction of travel.

**totalRotation**  
Set or get the total accumulated rotation in radians. These values do not wrap upon completing a full rotation. The `totalRotation` value will decrease for counter-clockwise rotation, whereas `totalAbsoluteRotation` increases regardless of the direction of rotation.

**totalAbsoluteRotation**  
Set or get the total accumulated rotation in radians. These values do not wrap upon completing a full rotation. The `totalRotation` value will decrease for counter-clockwise rotation, whereas `totalAbsoluteRotation` increases regardless of the direction of rotation.

**getDistanceToTarget()**  
Return the distance from the object to the target position.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
