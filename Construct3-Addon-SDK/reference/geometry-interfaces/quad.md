---
title: "Quad interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/geometry-interfaces/quad"
release: 487
---

## On this page

- [Constructor](#constructor)
- [Methods](#methods)

---

The `Quad` interface represents a shape made from four points in the SDK. Typically it is used to represent rotated rectangles. It is also the main primitive used for rendering, by passing object's bounding quads to the WebGL renderer.

## Constructor

```javascript
new SDK.Quad();
new SDK.Quad(tlx, tly, trx, try_, brx, bry, blx, bly);
```

A `Quad` can be constructed with no parameters, which defaults all co-ordinates to zero, or with given positions for each point. The naming convention is **tl** for the "top-left" point, **tr** for the "top-right" point, **br** for the "bottom-right" point, and **bl** for the "bottom-left" point, followed by "x" or "y" for each component of the point. Note that the points can appear at any orientation for rotated quads; the names only correspond to their actual position when the quad is set to an unrotated rectangle.

> **Tip**  
> The name `try` is a keyword in JavaScript, so the "top-right Y" component is named with an underscore as `try_` to avoid colliding with the keyword.

## Methods

**set(tlx, tly, trx, try_, brx, bry, blx, bly)**  
Set all four points of the quad in a single call.

**setRect(left, top, right, bottom)**  
Set the quad's points to represent an axis-aligned rectangle using the given positions. Note that this is only useful if you subsequently make further modifications to the quad, else you may as well use the [Rect](../../reference/geometry-interfaces/rect.md) interface.

**copy(quad)**  
Set all points of the quad by copying another `SDK.Quad`.

**setTlx(n)**  
Set each point of the quad individually.

**setTly(n)**  
Set each point of the quad individually.

**setTrx(n)**  
Set each point of the quad individually.

**setTry(n)**  
Set each point of the quad individually.

**setBrx(n)**  
Set each point of the quad individually.

**setBry(n)**  
Set each point of the quad individually.

**setBlx(n)**  
Set each point of the quad individually.

**setBly(n)**  
Set each point of the quad individually.

**getTlx()**  
Get each point of the quad individually.

**getTly()**  
Get each point of the quad individually.

**getTrx()**  
Get each point of the quad individually.

**getTry()**  
Get each point of the quad individually.

**getBrx()**  
Get each point of the quad individually.

**getBry()**  
Get each point of the quad individually.

**getBlx()**  
Get each point of the quad individually.

**getBly()**  
Get each point of the quad individually.

**setFromRect(rect)**  
Set the points of the quad to an axis-aligned rectangle given by an [SDK.Rect](../../reference/geometry-interfaces/rect.md). Note that this is only useful if you subsequently make further modifications to the quad, else you may as well use the Rect interface directly.

**setFromRotatedRect(rect, angle)**  
Set the points of the quad to a rotated rectangle given by an [SDK.Rect](../../reference/geometry-interfaces/rect.md), rotated about the origin by `angle` in radians.

**getBoundingBox(rect)**  
Calculate the bounding box of the quad, and store the result by writing to a given [SDK.Rect](../../reference/geometry-interfaces/rect.md).

**midX()**  
Return the average of the four points in the quad on each axis.

**midY()**  
Return the average of the four points in the quad on each axis.

**intersectsSegment(x1, y1, x2, y2)**  
Test if a segment, given as the line between points (x1, y1) and (x2, y2), intersects this quad, returning a boolean.

**intersectsQuad(quad)**  
Test if another SDK.Quad intersects this quad, returning a boolean.

**containsPoint(x, y)**  
Test if the given point is inside the bounds of this quad, returning a boolean.
