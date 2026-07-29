---
title: "Drag & Drop behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/drag-drop"
release: 495
---

## On this page

- [Drag & Drop behavior events](#drag--drop-behavior-events)
- [Drag & Drop behavior APIs](#drag--drop-behavior-apis)

---

The `IDragDropBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Drag & Drop behavior](../../../behavior-reference/drag-drop.md).

## Drag & Drop behavior events

See [behavior instance event](../../../scripting/scripting-reference/interfaces/behavior-instance-event.md) for standard behavior instance event object properties.

**"dragstart"**  
Fired when the object starts being dragged.

**"drop"**  
Fired when the object is dropped after being dragged.

## Drag & Drop behavior APIs

**axes**  
Set or get a string indicating if the dragging is locked to a specific axes, which must be one of `"horizontal"`, `"vertical"` or `"both"`.

**drop()**  
Call while dragging to force the object to be dropped.

**isDragging**  
A read-only boolean indicating if the object is currently being dragged.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
