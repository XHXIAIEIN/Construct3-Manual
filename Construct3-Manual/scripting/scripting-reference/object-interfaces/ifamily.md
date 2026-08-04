---
title: "IFamily script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ifamily"
release: 495
---

## On this page

- [Getting an IFamily](#getting-an-ifamily)
- [Family APIs](#family-apis)

---

The `IFamily` script interface represents a family in the project, e.g. a family of Sprite object types created in the Project Bar.

`IFamily` derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) which is a base class shared with object types ([IObjectType](../../../scripting/scripting-reference/object-interfaces/iobjecttype.md)).

## Getting an IFamily

As with object types, references to the project's families are typically accessed through the [IRuntime](../../../scripting/scripting-reference/iruntime.md) interface `objects` property. For example `runtime.objects.Family1` would refer to the `IFamily` interface for the family *Family1*, assuming it was added to the project.

## Family APIs

**getAllObjectTypes()**  
Returns an array of all the [IObjectType](../../../scripting/scripting-reference/object-interfaces/iobjecttype.md) members of this family.

***objectTypes()**  
Iterates over all the members of this family (as [IObjectType](../../../scripting/scripting-reference/object-interfaces/iobjecttype.md)).

**hasObjectType(objectType)**  
Returns a boolean indicating whether the specified `IObjectType` is a member of this family.
