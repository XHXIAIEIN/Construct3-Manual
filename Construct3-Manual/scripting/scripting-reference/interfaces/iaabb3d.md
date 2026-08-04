---
title: "AABB3D script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/iaabb3d"
release: 495
---

## On this page

- [AABB3D APIs](#aabb3d-apis)

---

The `IAABB3D` interface represents an **axis-aligned bounding box** in 3D. It contains a minimum and maximum extent on the X, Y and Z axes. It is returned by the [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) method `getBoundingBox3d()`.

## AABB3D APIs

**constructor(left, top, back, right, bottom, front)**  
Create a new IAABB3D with the specified properties. Any parameters may be omitted in which case they will default to 0.

**left**  
The minimum extent on the X, Y and Z axes respectively.

**top**  
The minimum extent on the X, Y and Z axes respectively.

**back**  
The minimum extent on the X, Y and Z axes respectively.

**right**  
The maximum extent on the X, Y and Z axes respectively.

**bottom**  
The maximum extent on the X, Y and Z axes respectively.

**front**  
The maximum extent on the X, Y and Z axes respectively.

**clone()**  
Return a new IAABB3D which is a copy of this one.

**copy(other)**  
Set this object's properties according to another IAABB3D.

**set(left, top, back, right, bottom, front)**  
Set all the properties with one call.
