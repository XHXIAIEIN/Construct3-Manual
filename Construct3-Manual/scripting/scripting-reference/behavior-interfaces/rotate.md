---
title: "Rotate behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/rotate"
release: 495.2
---

## On this page

- [Rotate behavior APIs](#rotate-behavior-apis)

---

The `IRotateBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Rotate behavior](../../../behavior-reference/rotate.md).

## Rotate behavior APIs

**speed**  
Set or get the rotation speed in radians per second. Positive values rotate clockwise and negative values rotate counter-clockwise.

**acceleration**  
Set or get the rotation acceleration rate in radians per second per second.

**rotationType**  
Set or get the current rotation type. This is a string which may be one of `"2d"` for 2D rotation (altering the angle), or `"rotation-x"`, `"rotation-y"` or `"rotation-z"` for 3D rotation around a particular axis.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
