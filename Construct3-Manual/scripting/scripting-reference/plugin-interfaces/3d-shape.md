---
title: "3D shape script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/3d-shape"
release: 495
---

## On this page

- [3D Shape APIs](#3d-shape-apis)

---

The `I3DShapeInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [3D shape plugin](../../../plugin-reference/3d-shape.md).

## 3D Shape APIs

**shape**  
Set or get a string representing the the current shape being displayed. This must be one of `"box"`, `"prism"`, `"wedge"`, `"pyramid"`, `"corner-out"` and `"corner-in"`.

**setFaceVisible(face, visible)**  
Set whether a face is visible or invisible based on the boolean *visible*. The *face* parameter is a string identifying the face which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"` and `"bottom"`.

**isFaceVisible(face)**  
Return a boolean indicating whether a given face is visible. The *face* parameter is a string identifying the face which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"` and `"bottom"`.

**setFaceImage(face, image)**  
Change one of the shape faces to use one of the other face images. For example this allows swapping the front face image for the back face image. To restore the original image, use the same face for both parameters. Both parameters are strings identifying the face to use, which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"` and `"bottom"`.

> **Tip**  
> This also undoes `setFaceObject`, restoring the 3D shape's own face image instead of another object's image.

**setFaceObject(face, objectClass)**  
Replace the image used for a face of the shape with the image used by a Sprite, Tiled Background or 9-Patch object. An instance of the given object must exist on the current layout. The *face* parameter is a string identifying the face which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"` and `"bottom"`. The *objectClass* parameter is an [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) referencing the object to set for the given face. Only Sprite, Tiled Background and 9-Patch object types are supported.

> **Tip**  
> This method can be undone with `setFaceImage`.

**isBackFaceCulling**  
Set or get a boolean corresponding to the *Back face culling* property. When enabled, back face culling automatically hides faces of the shape that are pointing away from the camera.

**zTilingFactor**  
Set or get the Z tiling factor property of the 3D shape. For more information, refer to the [3D shape plugin manual entry](../../../plugin-reference/3d-shape.md).

**getImagePointCount()**  
Return the number of image points on the back face.

**getImagePointX(nameOrIndex)**  
Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getImagePoint` variant returns `[x, y]`.

**getImagePointY(nameOrIndex)**  
Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getImagePoint` variant returns `[x, y]`.

**getImagePoint(nameOrIndex)**  
Return the location of an image point on the back face in layout co-ordinates. Image points are identified either by a case-insensitive string of their name, or their index. Note image point 0 is the origin, so index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getImagePoint` variant returns `[x, y]`.

**getFaceImagePointCount(face)**  
Return the count and 3D location of image points on any of the six possible faces of the 3D shape. The face is identified by a string which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"`, `"bottom"`. Image points are identified either by a case-insensitive string of their name, or their index. Note as image point 0 refers to the origin, index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getFaceImagePoint` variant returns `[x, y, z]`.

**getFaceImagePointX(face, nameOrIndex)**  
Return the count and 3D location of image points on any of the six possible faces of the 3D shape. The face is identified by a string which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"`, `"bottom"`. Image points are identified either by a case-insensitive string of their name, or their index. Note as image point 0 refers to the origin, index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getFaceImagePoint` variant returns `[x, y, z]`.

**getFaceImagePointY(face, nameOrIndex)**  
Return the count and 3D location of image points on any of the six possible faces of the 3D shape. The face is identified by a string which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"`, `"bottom"`. Image points are identified either by a case-insensitive string of their name, or their index. Note as image point 0 refers to the origin, index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getFaceImagePoint` variant returns `[x, y, z]`.

**getFaceImagePointZ(face, nameOrIndex)**  
Return the count and 3D location of image points on any of the six possible faces of the 3D shape. The face is identified by a string which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"`, `"bottom"`. Image points are identified either by a case-insensitive string of their name, or their index. Note as image point 0 refers to the origin, index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getFaceImagePoint` variant returns `[x, y, z]`.

**getFaceImagePoint(face, nameOrIndex)**  
Return the count and 3D location of image points on any of the six possible faces of the 3D shape. The face is identified by a string which must be one of `"back"`, `"front"`, `"left"`, `"right"`, `"top"`, `"bottom"`. Image points are identified either by a case-insensitive string of their name, or their index. Note as image point 0 refers to the origin, index 1 is the first image point. If the image point is not found, this returns the origin instead. The `getFaceImagePoint` variant returns `[x, y, z]`.
