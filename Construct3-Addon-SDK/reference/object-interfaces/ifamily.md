---
title: "IFamily interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/ifamily"
release: 495.2
---

## On this page

- [Methods](#methods)

---

The `IFamily` interface represents a family in Construct, which is a group of object types that can be treated as one. All object types in the family must be from the same plugin. It derives from [IObjectClass](../../reference/object-interfaces/iobjectclass.md). Families can be created in the SDK using [IProject](../../reference/model-interfaces/iproject.md).`CreateFamily()`.

## Methods

**GetMembers()**  
Return an array of [IObjectType](../../reference/object-interfaces/iobjecttype.md) representing the object types in the family.

**SetMembers(objectTypes)**  
Set the members of the family by passing an array of [IObjectType](../../reference/object-interfaces/iobjecttype.md). Note all the specified object types must be compatible with the family, including using the same plugin, and not having any naming conflicts between instance variables, behaviors and effects.
