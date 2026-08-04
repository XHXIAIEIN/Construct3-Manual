---
title: "IBehaviorType script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviortype"
release: 495
---

## On this page

- [IBehaviorType APIs](#ibehaviortype-apis)

---

The `IBehaviorType` interface represents a behavior added to an object class. For example if SpriteA and SpriteB both have the Bullet behavior added to them, then there are two behavior types, one for each object type.

## IBehaviorType APIs

**runtime**  
A reference back to the [IRuntime interface](../../../scripting/scripting-reference/iruntime.md).

**behavior**  
A reference to the [IBehavior](../../../scripting/scripting-reference/object-interfaces/ibehavior.md) of the associated behavior.

**name**  
A read-only string of the behavior type name.
