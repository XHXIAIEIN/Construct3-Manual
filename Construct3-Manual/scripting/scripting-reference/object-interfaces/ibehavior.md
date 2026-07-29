---
title: "IBehavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehavior"
release: 495
---

## On this page

- [IBehavior APIs](#ibehavior-apis)

---

The `IBehavior` interface represents a kind of behavior, such as Solid, Physics or Pin. Some behaviors derive from this class to add extra options that are global to the entire behavior, such as the physics world properties in the Physics behavior. This interface is usually accessed through the [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) `behavior` property.

## IBehavior APIs

**runtime**  
A reference back to the [IRuntime](../../../scripting/scripting-reference/iruntime.md) interface.

**id**  
A read-only string with a unique identifier for this behavior as specified by the behavior developer.

**getAllInstances()**  
Return an array of all instances that have this kind of behavior, for example every object with the Solid behavior. Note the returned instances may come from a range of different object types.

**static getByConstructor(ctor)**  
Return an `IBehavior` from its constructor in the `C3.Behaviors` namespace, or `null` if it does not exist. For example `IBehavior.getByConstructor(C3.Behaviors.Bullet)` will return the `IBehavior` interface representing the Bullet behavior, or `null` if the behavior is not used in the project.
