---
title: "Move To"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/move"
release: 487
---

## On this page

- [Move To properties](#scripting)
- [Move To conditions](#move-to-properties)
- [Move To actions](#move-to-conditions)
- [Move To expressions](#move-to-actions)

---

The **Move To behavior** moves an object to a position at a maximum speed with acceleration and deceleration. It also supports rotating the object so it turns towards its target, and can add multiple waypoints to move to in sequence.

[Click here to open an example of the Move To behavior.](https://editor.construct.net/#open=move-to)

> **Tip**  
> 'Move to' moves objects at a fixed speed, which means the time it takes to arrive at the target can vary. If you need to move objects in a fixed time period, use the [Tween behavior](../behavior-reference/tween.md) instead.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IMoveToBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/move.md).

## Move To properties

**Max speed**  
The maximum speed the object will move at, in pixels per second.

**Acceleration**  
The rate at which the object will accelerate to the maximum speed, in pixels per second per second. Use 0 to disable acceleration, meaning the object will immediately start moving at the maximum speed.

**Deceleration**  
The rate at which the object will decelerate towards its target, in pixels per second per second. Use 0 to disable deceleration, meaning the object will come to an abrupt stop without slowing down. The object will only slow down towards its last position; if there are further waypoints to move to, it will continue accelerating up to the maximum speed. Note that the deceleration also imposes a stopping distance during which the object must be slowing down, which in some cases may prevent the object reaching its maximum speed.

**Rotate speed**  
The rate the object will turn towards its target position, in degrees per second. Use 0 to disable turning, meaning the object will always move directly towards the target. Note a slow rotate speed results in a large turning circle, which can have awkward results if the object has to navigate through several close waypoints. For this reason it's recommended to use a high rotate speed.

**Set angle**  
When enabled, the object angle will be set to the angle it is moving at. If disabled the movement will not affect the object angle.

**Stop on solids**  
If enabled, movement will stop if the object collides with something with the [Solid](../behavior-reference/solid.md) behavior, and trigger *On hit solid*. If disabled solids are ignored.

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

## Move To conditions

**Compare speed**  
Compare the object's current speed in pixels per second.

**Is enabled**  
True if the behavior is currently enabled.

**Is moving**  
True if the object has a target position it is moving towards.

**On arrived**  
Triggered whenever the target position is reached. This is triggered for every waypoint if there are multiple waypoints to move to.

> **Tip**  
> In this trigger, *Is moving* is true if there are further waypoints to move to, and false if it arrived at the last waypoint.

**On hit solid**  
Triggered if *Stop on solids* is enabled and the object collided with a solid.

## Move To actions

**Move to position**  
Start moving towards a position, given either by layout co-ordinates or an object (or optionally an image point on the object). If *Mode* is *Direct*, any existing waypoints are removed, so the object will immediately move towards the given position. If *Mode* is *Add waypoint*, it will instead add a new waypoint to move to after all existing waypoints have been reached.

**Move to object**  
Start moving towards a position, given either by layout co-ordinates or an object (or optionally an image point on the object). If *Mode* is *Direct*, any existing waypoints are removed, so the object will immediately move towards the given position. If *Mode* is *Add waypoint*, it will instead add a new waypoint to move to after all existing waypoints have been reached.

**Move along Pathfinding path**  
This is an alternative to the [Pathfinding behavior](../behavior-reference/pathfinding.md)'s *Move along path* action. It only works with a Pathfinding behavior on the same object, and like the Pathfinding action can only be used after *On path found* triggers. The 'Move To' behavior uses a different algorithm for moving along waypoints, and this action lets you use its approach instead of the built-in Pathfinding movement.

**Move along timeline**  
Add all the points from the X and Y property tracks in a [timeline track](../project-primitives/timelines/track.md). The timing is ignored; the positions are treated only as a sequence of waypoints to move along. This is useful for using a timeline to visually design a path to follow in the Layout View. See the [Move along path](https://editor.construct.net/#open=move-along-path) and [Move along curved path](https://editor.construct.net/#open=move-along-curved-path) examples for a demonstration.

**Move along timeline (by name)**  
Add all the points from the X and Y property tracks in a [timeline track](../project-primitives/timelines/track.md). The timing is ignored; the positions are treated only as a sequence of waypoints to move along. This is useful for using a timeline to visually design a path to follow in the Layout View. See the [Move along path](https://editor.construct.net/#open=move-along-path) and [Move along curved path](https://editor.construct.net/#open=move-along-curved-path) examples for a demonstration.

**Set angle of motion**  
Set the angle the object is currently moving at, in degrees.

**Stop**  
Stop any current movement. This also removes all waypoints.

**Set speed**  
Set the current movement speed in pixels per second. Note this cannot exceed the maximum speed, nor can it exceed the current speed while within the stopping distance, since increasing the speed while decelerating would cause the object to miss its target.

**Set acceleration**  
Set the corresponding properties. For more information see *Move to properties* above.

**Set deceleration**  
Set the corresponding properties. For more information see *Move to properties* above.

**Set enabled**  
Set the corresponding properties. For more information see *Move to properties* above.

**Set max speed**  
Set the corresponding properties. For more information see *Move to properties* above.

**Set rotate speed**  
Set the corresponding properties. For more information see *Move to properties* above.

**Set stop on solids**  
Set the corresponding properties. For more information see *Move to properties* above.

## Move To expressions

**MovingAngle**  
The current angle in degrees the object is moving at.

**Speed**  
The current speed the object is moving at, in pixels per second.

**TargetX**  
The current position in layout co-ordinates that the object is moving towards. When multiple waypoints are used, this is the current waypoint.

**TargetY**  
The current position in layout co-ordinates that the object is moving towards. When multiple waypoints are used, this is the current waypoint.

**WaypointCount**  
Use these expressions to access the full list of waypoints added, given in layout co-ordinates.

**WaypointXAt(index)**  
Use these expressions to access the full list of waypoints added, given in layout co-ordinates.

**WaypointYAt(index)**  
Use these expressions to access the full list of waypoints added, given in layout co-ordinates.

**Acceleration**  
Return the corresponding properties. For more information see *Move to properties* above.

**Deceleration**  
Return the corresponding properties. For more information see *Move to properties* above.

**MaxSpeed**  
Return the corresponding properties. For more information see *Move to properties* above.

**RotateSpeed**  
Return the corresponding properties. For more information see *Move to properties* above.
