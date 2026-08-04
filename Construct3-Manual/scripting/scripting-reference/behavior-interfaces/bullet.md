---
title: "Bullet behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/bullet"
release: 495
---

## On this page

- [Bullet behavior APIs](#bullet-behavior-apis)

---

The `IBulletBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Bullet behavior](../../../behavior-reference/bullet.md).

## Bullet behavior APIs

**speed**  
Set or get the current speed in pixels per second. This is also the magnitude of the current motion vector.

**setVector(dx, dy, dz)**  
Set the bullet's current movement speed and direction using a 3D vector, with a speed in pixels per second on each axis. The magnitude of the vector is the overall speed, which can also be adjusted using the `speed` property.

**getVector()**  
Set the bullet's current movement speed and direction using a 3D vector, with a speed in pixels per second on each axis. The magnitude of the vector is the overall speed, which can also be adjusted using the `speed` property.

**acceleration**  
Set or get the acceleration of the movement in pixels per second per second.

**gravity**  
Set or get the acceleration caused by gravity in pixels per second per second. When a gravity vector has been specified, this sets the magnitude of the vector.

**setGravityVector(gx, gy, gz)**  
Set or get the direction of gravity with a 3D vector. By default gravity accelerates downwards on the Y axis (with a vector of 0, 1, 0). The provided vector is automatically normalized, so its magnitude does not matter - instead the `gravity` property is used to specify the magnitude of gravity. This also means the returned gravity vector may be different to the one specified as it will have been set to a unit length.

**getGravityVector()**  
Set or get the direction of gravity with a 3D vector. By default gravity accelerates downwards on the Y axis (with a vector of 0, 1, 0). The provided vector is automatically normalized, so its magnitude does not matter - instead the `gravity` property is used to specify the magnitude of gravity. This also means the returned gravity vector may be different to the one specified as it will have been set to a unit length.

**angleOfMotion**  
Set or get the current angle of movement in radians.

**bounceOffSolids**  
A boolean indicating if the *Bounce off solids* property is enabled.

**distanceTravelled**  
A number indicating the distance the bullet has travelled so far in pixels. Note this can also be set, such as to reset the counter.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
