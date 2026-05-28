---
title: "Bullet behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/bullet"
release: 487
---

## On this page

- [Bullet behavior APIs](#bullet-behavior-apis)

---

The `IBulletBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Bullet behavior](../../../behavior-reference/bullet.md).

## Bullet behavior APIs

**speed**  
Set or get the current speed in pixels per second.

**acceleration**  
Set or get the acceleration of the movement in pixels per second per second.

**gravity**  
Set or get the downwards acceleration caused by gravity in pixels per second per second.

**angleOfMotion**  
Set or get the current angle of movement in radians.

**bounceOffSolids**  
A boolean indicating if the *Bounce off solids* property is enabled.

**distanceTravelled**  
A number indicating the distance the bullet has travelled so far in pixels. Note this can also be set, such as to reset the counter.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
