---
title: "Car behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/car"
release: 487.2
---

## On this page

- [Car properties](#scripting)
- [Car conditions](#car-properties)
- [Car actions](#car-conditions)
- [Car expressions](#car-actions)

---

The **Car behavior** allows an object to accelerated forwards and backwards and have steering. It also has a simple "drift" feature where the object can "skid" around corners (by pointing in a different direction to that it is moving in). For an example of the Car behavior see the *Driving* example in the [Start Page](../overview/start-page.md).

By default the object is controlled by the arrow keys on the keyboard (Up to accelerate, down to brake, left and right to steer). To set up custom or automatic controls, see the [behavior reference summary](../behavior-reference.md).

The Car behavior will bounce off any objects with the [Solid behavior](../behavior-reference/solid.md). The effect on the movement depends on the angle of impact - glancing collisions nudge the car off its current path, whereas head-on collisions stop it more or less dead. The amount of speed lost depends on the *Friction* property.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [ICarBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/car.md).

## Car properties

**Max speed**  
The maximum speed, in pixels per second, the car can accelerate to.

**Acceleration**  
The rate the car accelerates at, in pixels per second per second.

**Deceleration**  
The rate the car brakes at, in pixels per second per second.

**Steer speed**  
The rate the car rotates at when steering, in degrees per second.

**Drift recover**  
The rate the car recovers from drifts, in degrees per second. In other words, this is the rate the angle of motion catches up with the object angle. The angle of motion can never be more than 90 degrees off the object angle. If the drift recover is greater or equal to the *Steer speed*, no drifting ever occurs. The lower the drift recover, the more the car will drift on corners.

**Friction**  
The amount of speed lost when colliding with a solid, from 0 (stop dead) to 1 (speed not affected at all). For example, to slow the speed down by half when colliding with a solid, set *Friction* to 0.5.

**Turn while stopped**  
Set whether or not the object can rotate while not moving. When enabled, the rotate speed is always the same regardless of the speed. When disabled, the rotate speed adjusts with the movement speed resulting in a fixed turning circle, which also means the object cannot rotate while stopped.

**Set angle**  
If enabled, the behavior will set the object's angle, otherwise the behavior never changes the object's angle.

**Default controls**  
If enabled, the car movement is controlled by the arrow keys on the keyboard. Disable to set custom controls. For more information see the [behavior reference summary](../behavior-reference.md).

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

## Car conditions

**Compare speed**  
Compare the current speed of the car, in pixels per second.

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

**Is moving**  
True if the current speed is non-zero. Invert to test if the car is stopped.

## Car actions

**Set acceleration**  
Set the corresponding properties. See *Car properties* for more information.

**Set deceleration**  
Set the corresponding properties. See *Car properties* for more information.

**Set default controls**  
Set the corresponding properties. See *Car properties* for more information.

**Set drift recover**  
Set the corresponding properties. See *Car properties* for more information.

**Set friction**  
Set the corresponding properties. See *Car properties* for more information.

**Set max speed**  
Set the corresponding properties. See *Car properties* for more information.

**Set steer speed**  
Set the corresponding properties. See *Car properties* for more information.

**Set turn while stopped**  
Set the corresponding properties. See *Car properties* for more information.

**Set enabled**  
Enable or disable the movement. If disabled, the movement no longer has any effect on the object.

**Set ignoring input**  
Set whether input is being ignored. If input is ignored, pressing any of the control keys has no effect. However, unlike disabling the behavior, the object can continue to move.

**Set speed**  
Set the current speed the object is moving at, in pixels per second.

**Simulate control**  
Simulate one of the movement controls being held down. Useful when disabling *Default controls*. See the [behavior reference summary](../behavior-reference.md) for more information.

**Stop**  
A shortcut for setting the speed to zero.

## Car expressions

**Acceleration**  
Return the corresponding properties. See *Car properties* for more information.

**Deceleration**  
Return the corresponding properties. See *Car properties* for more information.

**DriftRecover**  
Return the corresponding properties. See *Car properties* for more information.

**Friction**  
Return the corresponding properties. See *Car properties* for more information.

**MaxSpeed**  
Return the corresponding properties. See *Car properties* for more information.

**SteerSpeed**  
Return the corresponding properties. See *Car properties* for more information.

**MovingAngle**  
Get the current angle of motion (which can be different to the object's angle), in degrees.

**Speed**  
Get the current object's movement speed, in pixels per second.

**VectorX**  
Get the object's current speed on each axis, in pixels per second. For example, if the object is moving to the left at 100 pixels per second, *VectorX* is -100 and *VectorY* is 0.

**VectorY**  
Get the object's current speed on each axis, in pixels per second. For example, if the object is moving to the left at 100 pixels per second, *VectorX* is -100 and *VectorY* is 0.
