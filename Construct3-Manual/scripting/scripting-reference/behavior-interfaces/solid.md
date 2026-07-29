---
title: "Solid behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/solid"
release: 495
---

## On this page

- [Solid behavior APIs](#solid-behavior-apis)

---

The `ISolidBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Solid behavior](../../../behavior-reference/solid.md).

## Solid behavior APIs

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.

**usesInstanceTags**  
A read-only boolean reflecting the *Use instance tags* property of the Solid behavior. When this is true, the behavior's own tags APIs will have no effect, as instance tags are used instead. This mode is recommended.

**tags Deprecated**  
Set or get a list of tags for this solid behavior instance as a space-separated string. This property is deprecated - enable *Use instance tags* and use the instance tag APIs instead.

**setAllTags(iterable) Deprecated**  
Set all tags for this solid behavior instance using any iterable of strings such as an array or Set. This property is deprecated - enable *Use instance tags* and use the instance tag APIs instead.

**getAllTags() Deprecated**  
Get all tags for this solid behavior instance as a Set of strings. This property is deprecated - enable *Use instance tags* and use the instance tag APIs instead.
