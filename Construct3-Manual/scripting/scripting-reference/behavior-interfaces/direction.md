---
title: "8 Direction behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/direction"
release: 495
---

## On this page

- [8 direction behavior APIs](#8-direction-behavior-apis)

---

The `I8DirectionBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [8 direction behavior](../../../behavior-reference/8-direction.md).

## 8 direction behavior APIs

**stop()**  
Stop the movement, setting the speed to 0.

**reverse()**  
Invert the direction of motion. Useful as a simple way to bounce the object off an obstacle.

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
Set or get the X and Y components of the movement in pixels per second. The methods allow setting or getting both values at the same time.

**vectorY**  
Set or get the X and Y components of the movement in pixels per second. The methods allow setting or getting both values at the same time.

**setVector(vectorX, vectorY)**  
Set or get the X and Y components of the movement in pixels per second. The methods allow setting or getting both values at the same time.

**getVector()**  
Set or get the X and Y components of the movement in pixels per second. The methods allow setting or getting both values at the same time.

**isAllowSliding**  
A boolean indicating if the behavior is allowed to slide along solids (corresponding to the *Allow sliding* property).

**isDefaultControls**  
A boolean indicating if the default controls (using the arrow keys) are enabled.

**isIgnoringInput**  
A boolean indicating if input is currently being ignored. If input is ignored, pressing any of the control keys has no effect. However, unlike disabling the behavior, the object can continue to move.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
