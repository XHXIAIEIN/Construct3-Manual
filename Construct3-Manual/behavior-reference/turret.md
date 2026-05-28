---
title: "Turret behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/turret"
release: 487
---

## On this page

- [How Turrets work](#scripting)
- [Predictive aim](#how-turrets-work)
- [Turret properties](#predictive-aim)
- [Turret conditions](#turret-properties)
- [Turret actions](#turret-conditions)
- [Turret expressions](#turret-actions)

---

The **Turret behavior** can automatically detect objects within a certain range and rotate towards them. It optionally includes features to determine when to fire, as well as **predictive aim**.

For examples of the Turret behavior, search for *Turret* in the [Example Browser](../overview/example-browser.md).

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [ITurretBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/turret.md).

## How Turrets work

Before a turret will target anything, you must use the *Add object to target* action so the object knows which objects to look for. Calling this once on the start of layout is sufficient. You can also give the turret a [Family](../project-primitives/objects/families.md)  `[Paid plans only]`  to target, allowing it to easily target a collection of different objects.

Once one of these objects enters the Turret's range (the distance between the objects is lower than the *Range* property), and the turret does not already have a target, then the turret acquires that object as a target. *On target acquired* is triggered, and if *Rotate* is enabled the object will start rotating towards the target. Once the turret is pointing in the direction of the target, *On shoot* will trigger at the frequency determined by the *Rate of fire* property. If you want the turret to fire upon the target, spawn a projectile in the *On shoot* event.

If the target leaves the turret's range, the turret will lose the target and stop firing. If another target is already in range, it will immediately acquire that; otherwise it will simply wait until the next target enters range. Also note if *Target mode* is set to *Nearest*, the turret may switch to another target before the current target leaves range, if the new target comes closer than the existing target.

## Predictive aim

A useful feature of the Turret behavior is the ability to use **predictive aim**. For an interactive demonstration of this see the *Turret predictive aim* example in the Start dialog.

Normally turrets aim directly at a target. This often means moving targets are never hit, because by the time the projectile arrives, the object has moved somewhere else. Predictive aim solves this by aiming the turret at where the object will be by the time the projectile arrives, *if* it maintains the same velocity. In order for this to work, the Turret behavior must have the speed of the projectile set in its *Projectile speed* property, so it can determine how long it will take for the projectile to arrive. The projectile must also use a fixed speed, and not have any acceleration or deceleration.

It is still possible for targets to dodge predictive aiming turrets, by changing direction or speed while the projectile travels towards it. However this is considerably more difficult compared to not using predictive aim, and the overall accuracy of the turret will be significantly improved.

## Turret properties

**Range**  
The range, in pixels, that the turret can detect targets in. Any targets further away from the turret than this distance will be ignored.

**Rate of fire**  
The rate at which to trigger *On shoot*, when the turret has both acquired a target and rotated to point in the direction of the target.

**Rotate**  
Whether to automatically set the object's angle according to the angle of the turret.

**Rotate speed**  
The speed at which the turret can rotate towards targets, in degrees per second.

**Target mode**  
If *First in range*, the turret will always track the same target until it leaves range, even if other targets come in range. If *Nearest*, the turret may switch to a different target before its current target leaves range, if another target comes closer.

**Predictive aim**  
Whether to enable predictive aim or not. If enabled, you must set the correct *Projectile speed* for the predictive aim to work correctly. For more information see the section on *Predictive aim* above.

**Projectile speed**  
If *Predictive aim* is enabled, this must be set to the projectile speed in pixels per second for the predictive aim to work correctly. For more information, see the section on *Predictive aim* above.

**Use collision cells**  
Whether to use the [collision cells optimisation](https://www.construct.net/en/blogs/ashleys-blog-2/collision-cell-optimisation-914) when looking for targets that are within range. Usually this is faster, but with extremely long ranges it can sometimes be slower.

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

## Turret conditions

**Has target**  
True if the turret currently has a target acquired.

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

**On shoot**  
Triggered at the frequency given by the *Rate of fire* property, when the turret both has a target and has rotated to point towards it. If the turret is to fire upon the target, you should spawn a projectile from the turret in this trigger.

**On target acquired**  
Triggered when the turret has no target, but acquires one as it enters range.

## Turret actions

**Acquire target**  
Target a specific object if it is in range. If the object is out of range, the action is ignored. If in range, the turret will switch to targeting the given object, even if it already has a different target. Note if *Target mode* is *Nearest*, the turret may still immediately switch to a nearer target.

**Add object to target**  
Use on startup to tell the turret which objects it should target. Use a [Family](../project-primitives/objects/families.md)  `[Paid plans only]`   to conveniently target a whole group of objects.

**Clear targets**  
Remove all targets added using the *Add object to target* action. The turret will no longer target any objects at all.

**Unacquire target**  
Tell the turret to forget its existing target, even if it is in range. This frees it up to target a different object, but it may choose to immediately target the same object again unless the *Acquire target* action is used immediately afterwards.

**Set enabled**  
Enable or disable the behavior. If disabled, the behavior will not detect targets, rotate the object, or run any triggers.

**Set predictive aim**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set projectile speed**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set range**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set rate of fire**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set rotate**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set rotate speed**  
Set the corresponding properties. For more information, see *Turret properties*.

**Set target mode**  
Set the corresponding properties. For more information, see *Turret properties*.

## Turret expressions

**Range**  
Retrieve the corresponding properties. For more information, see *Turret properties*.

**RateOfFire**  
Retrieve the corresponding properties. For more information, see *Turret properties*.

**RotateSpeed**  
Retrieve the corresponding properties. For more information, see *Turret properties*.

**TargetUID**  
Get the UID of the currently targeted object, if any. For more information about UIDs, see [instances](../project-primitives/objects/instances.md).
