---
title: "ICollisionPoly interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/icollisionpoly"
release: 487.2
---

## On this page

- [Methods](#methods)

---

The `ICollisionPoly` interface represents the collision polygon for an [IAnimationFrame](../../reference/object-interfaces/ianimationframe.md). It is represented as a list of numbers representing points connected in a loop. As with image points, the collision polygon points are specified in texture co-ordinates, i.e. from 0 to 1.

## Methods

**Reset()**  
Reset the collision polygon to the default, which matches the bounding box of the object.

**IsDefault()**  
Return a boolean indicating if the collision polygon is set to the default, matching the bounding box of the object.

**GetPoints()**  
Return an array of numbers representing the points in the collision polygon. The array elements are alternating X and Y components for the points, so its size is always even. The collision polygon is guaranteed to have at least three points.

**SetPoints(arr)**  
Set the collision polygon points by passing an array of numbers. The array elements must be alternating X and Y components for the points, so its size must be even. There must be at least three points in a collision polygon, therefore the passed array must have at least 6 elements.
