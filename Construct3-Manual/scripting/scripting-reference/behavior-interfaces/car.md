---
title: "Car behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/car"
release: 495
---

## On this page

- [Car behavior APIs](#car-behavior-apis)

---

The `ICarBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Car behavior](../../../behavior-reference/car.md).

## Car behavior APIs

**stop()**  
Stop the movement, setting the speed to 0.

**simulateControl(control)**  
Simulate one of the movement controls being held down. Useful when *isDefaultControls* is disabled. The control is provided as a string and must be one of `"left"`, `"right"`, `"up"`, `"down"`.

**speed**  
Set or get the current speed in pixels per second. Note this cannot exceed `maxSpeed`.

**maxSpeed**  
Set or get the maximum speed in pixels per second.

**acceleration**  
Set or get the acceleration/deceleration of the movement in pixels per second per second.

**deceleration**  
Set or get the acceleration/deceleration of the movement in pixels per second per second.

**vectorX**  
Get the read-only X and Y components of the movement in pixels per second. The method returns both values at the same time.

**vectorY**  
Get the read-only X and Y components of the movement in pixels per second. The method returns both values at the same time.

**getVector()**  
Get the read-only X and Y components of the movement in pixels per second. The method returns both values at the same time.

**angleOfMotion**  
The read-only current angle of the movement in radians.

**steerSpeed**  
Set or get the rate the car rotates at when steering, in radians per second.

**driftRecover**  
Set or get the rate the car recovers from drifts, in radians per second. In other words, this is the rate the angle of motion catches up with the object angle. The angle of motion can never be more than 90 degrees off the object angle. If the drift recover is greater or equal to *steerSpeed*, no drifting ever occurs. The lower the drift recover, the more the car will drift on corners.

**friction**  
Set or get the amount of speed lost when colliding with a solid, from 0 (stop dead) to 1 (speed not affected at all). For example, 0.5 will slow the speed down by half when colliding with a solid.

**turnWhileStopped**  
A boolean indicating if the *Turn while stopped* behavior property is enabled. When enabled, it allows rotation while not moving.

**isDefaultControls**  
A boolean indicating if the default controls (using the arrow keys) are enabled.

**isIgnoringInput**  
A boolean indicating if input is currently being ignored. If input is ignored, pressing any of the control keys has no effect. However, unlike disabling the behavior, the object can continue to move.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
