---
title: "Move To behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/move"
release: 495
---

## On this page

- [Example](#example)
- [Move To behavior events](#move-to-behavior-events)
- [Move To behavior APIs](#move-to-behavior-apis)

---

The `IMoveToBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Move To behavior](../../../behavior-reference/move.md).

## Example

Below is a sample code snippet demonstrating moving `inst` (assumed to be an instance with the Move To behavior) to a position and logging to the console when it arrives.

```javascript
// Handle "arrived" event which logs to console when
// movement has finished
inst.behaviors.MoveTo.addEventListener("arrived", e =>
{
  console.log("Arrived!");
});

// Start the Move To behavior moving to (100, 100)
inst.behaviors.MoveTo.moveToPosition(100, 100);
```

## Move To behavior events

See [behavior instance event](../../../scripting/scripting-reference/interfaces/behavior-instance-event.md) for standard behavior instance event object properties.

**"arrived"**  
Fired when the object arrives at its destination.

**"hitsolid"**  
If *Stop on solids* is enabled, fired when the object hits a solid and stops.

## Move To behavior APIs

**moveToPosition(x, y, isDirect = true)**  
Start moving the object to a target position in layout co-ordinates. If `isDirect` is true, any existing waypoints will be cleared so the object moves directly to this position; otherwise it will add a waypoint to the queue.

**getTargetX()**  
Return the current target position in layout co-ordinates that the object is moving to. The `getTargetPosition()` variant returns `[x, y]`.

**getTargetY()**  
Return the current target position in layout co-ordinates that the object is moving to. The `getTargetPosition()` variant returns `[x, y]`.

**getTargetPosition()**  
Return the current target position in layout co-ordinates that the object is moving to. The `getTargetPosition()` variant returns `[x, y]`.

**getWaypointCount()**  
Return the number of waypoints that have been added.

**getWaypointX(index)**  
Return the position in layout co-ordinates of a waypoint at a given zero-based index. The `getWaypoint()` variant returns `[x, y]`.

**getWaypointY(index)**  
Return the position in layout co-ordinates of a waypoint at a given zero-based index. The `getWaypoint()` variant returns `[x, y]`.

**getWaypoint(index)**  
Return the position in layout co-ordinates of a waypoint at a given zero-based index. The `getWaypoint()` variant returns `[x, y]`.

**stop()**  
Stop any current movement, and clear all waypoints.

**isMoving**  
Read-only boolean indicating whether the object is currently moving.

**speed**  
Set or get the current movement speed in pixels per second.

**maxSpeed**  
Set or get the maximum movement speed in pixels per second.

**acceleration**  
Set or get the acceleration and deceleration of the movement in pixels per second per second.

**deceleration**  
Set or get the acceleration and deceleration of the movement in pixels per second per second.

**angleOfMotion**  
Set or get the current angle the object is moving at, in radians.

**rotateSpeed**  
Set or get the rate the object can turn at, in radians per second.

**isStopOnSolids**  
Set or get a boolean indicating whether the *Stop on solids* property is enabled. When enabled the object will stop its movement, clear all waypoints and fire the `"hitsolid"` event if it touches an object with the Solid behavior during movement.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
