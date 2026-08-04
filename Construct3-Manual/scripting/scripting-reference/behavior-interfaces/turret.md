---
title: "Turret behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/turret"
release: 495
---

## On this page

- [Turret behavior events](#turret-behavior-events)
- [Turret behavior APIs](#turret-behavior-apis)

---

The `ITurretBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Turret behavior](../../../behavior-reference/turret.md).

## Turret behavior events

See [behavior instance event](../../../scripting/scripting-reference/interfaces/behavior-instance-event.md) for standard behavior instance event object properties.

**"targetacquired"**  
Fired when the turret behavior acquires a target. The `targetInst` property of the event object contains a reference to the instance that was acquired as a target.

**"shoot"**  
Fired when the turret behavior has a target acquired in range and that it is aiming at, with a frequency up to the given rate of fire. The `targetInst` property of the event object contains a reference to the instance that is the current target.

## Turret behavior APIs

**currentTarget**  
A reference to the instance currently acquired as a target, else `null` if o target is acquired. This property can also be assigned in order to ask the behavior to switch to targeting that specific instance; however this may have no effect if the assigned target is out of range.

**range**  
Set or get the range that the turret can detect targets in. Any targets further away from the turret than this distance will be ignored.

**rateOfFire**  
Set or get the rate in seconds at which the `"shoot"` event fires, when the turret has both acquired a target and rotated to point in the direction of the target.

**isRotateEnabled**  
A boolean indicating whether the behavior will control the angle of the object.

**rotateSpeed**  
Set or get the speed at which the turret can rotate towards targets, in radians per second.

**targetMode**  
A string of either `"first"` or `"nearest"` indicating the targeting mode. `"first"` will always track the same target until it is destroyed or leaves range; `"nearest"` may switch to a different target if a new target comes closer than the current target.

**isPredictiveAimEnabled**  
A boolean indicating whether predictive aim is enabled. If it is enabled, the projectile speed must also be specified in pixels per second. For more information see the section on predictive aim in the [Turret behavior manual entry](../../../behavior-reference/turret.md).

**projectileSpeed**  
A boolean indicating whether predictive aim is enabled. If it is enabled, the projectile speed must also be specified in pixels per second. For more information see the section on predictive aim in the [Turret behavior manual entry](../../../behavior-reference/turret.md).

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
