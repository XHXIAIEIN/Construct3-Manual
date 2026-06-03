---
title: "3D shape"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-shape"
release: 487.2
---

## On this page

- [Transparency](#scripting)
- [3D shape properties](#transparency)
- [3D shape conditions](#3d-shape-properties)
- [3D shape actions](#3d-shape-conditions)
- [3D shape expressions](#3d-shape-actions)

---

The **3D shape** object can add basic elements of 3D to your project, such as a 3D box. Six images can be drawn to cover each face of the shape.

Try out the [3D shape tour example](https://editor.construct.net/#open=3dshape-tour) for a visual demonstration of what the 3D shape object can do. The Start Page has a number of other examples under the *3D* tag.

You can learn more about 3D shape and how it works with other 3D features in the tutorial [Using 3D in Construct](https://www.construct.net/en/tutorials/using-3d-construct-2746).

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [I3DShapeInstance script interface](../scripting/scripting-reference/plugin-interfaces/3d-shape.md).

## Transparency

Due to the way 3D rendering works, transparency may not work as expected in 3D shape objects. To correctly render 3D features, Construct must use a [depth buffer](https://en.wikipedia.org/wiki/Z-buffering), but this only fully supports opaque surfaces. Therefore **3D shape objects will work best with opaque images.**

Making individual faces invisible works as expected, as this means the face skips drawing entirely, rather than drawing content that is assumed to be opaque.

For more information, refer to the section on transparency in the tutorial [Using 3D features in Construct](https://www.construct.net/en/tutorials/using-3d-construct-2746).

## 3D shape properties

**Images**  
Click the *Edit* link to edit the six images the object uses for face images, one for each face of a cube. Not all shapes use all six images. Some images may also be cropped according to the shape of the face it appears on. For example the *Prism* shape has triangular end faces, so the images at these ends are cropped to only show a triangular portion of the image.

**Shape**  
Select from one of a few pre-defined shapes that the object will use. Not all shapes use all six images, since some have fewer than six faces. The available shapes are:

- **Box:** a six-sided cube or cuboid shape.
- **Prism:** a five-sided prism shape, like a tent. The front face is not used.
- **Wedge:** a five-sided shape like a cuboid cut in half diagonally, sloping up to the right. The front face is not used.
- **Pyramid:** a five-sided square-based pyramid, with the peak of the pyramid centered over the base. The front face is not used.
- **Corner (out):** a five-sided shape similar to a pyramid with the peak aligned to the upper-right corner. The front face is not used. The name derives from the fact this shape can join rows of *Wedge* shapes at an outside corner.
- **Corner (in):** a six-sided shape similar to a box where the front and back faces join in the bottom-left. The front face is used, but slopes down in the bottom-left half of the image. The name derives from the fact this shape can join rows of *Wedge* shapes at an inside corner.

**Z origin**  
The location of the origin on the Z axis. This defaults to *Back* meaning the object extends up from its Z position.

**Initially visibile**  
Set whether the object is shown (visible) or hidden (invisible) when the layout starts.

**Face visibility (Back/Front/Left/Right/Top/Bottom)**  
Set whether each of the six faces of the shape is initially visible.

> **Tip**  
> The *Back* face is hidden by default, as normally it cannot be seen and so may as well skip drawing. If you make another face invisible, you may wish to make the back face visible again.

**Back face culling**  
Automatically hides faces of the shape that are pointing away from the camera. This helps optimize performance if the shape is fully opaque, as those faces will never be seen anyway. If the shape is semitransparent (e.g. the opacity is less than 100%) then this mode can be useful to stop the faces pointing away from the camera from still being visible. Whether or not that is desirable depends on your art style.

**Use object image for faces (Back/Front/Left/Right/Top/Bottom)**  
Optionally choose a Sprite, Tiled Background or 9-Patch object to display instead of the 3D shape's own face images for a given face of the shape. An instance of the object must be placed in the same layout for this to work. The properties of this instance can also be used to control the appearance of the face on the 3D shape. This allows using animated face images (via Sprite), or varieties of tiled/repeating images for face images (via Tiled Background and 9-Patch).

**Z tiling factor**  
A scale factor to apply on the Z axis when showing a Tiled Background object as one of the faces. This should be set to 1 when the project Z axis scale is 'Regular'. This property exists only to adjust the tiling on the Z axis when the project Z axis scale is 'Normalized'. Both 'Normalized' mode and this property are now listed as [superseded features](../tips-and-guides/superseded-features.md) and will be removed in future.

## 3D shape conditions

For conditions in common to other objects, see [Common conditions](../plugin-reference/common-features/common-conditions.md).

**Compare shape**  
Compare the current shape that is in use. This can be changed by the *Set shape* action.

**Is face visible**  
Check if one of the six faces of the shape is currently set to visible. Note this only checks whether the visibility is currently enabled, either in the object's properties or with the *Set face visible* action - it does not test whether the face is really showing on-screen.

## 3D shape actions

For actions common to other objects, see [Common actions](../plugin-reference/common-features/common-actions.md).

**Set back face culling**  
Change the *Back face culling* property. See above for more details.

**Set face image**  
Change one of the shape faces to use one of the other face images. For example this allows swapping the front face image for the back face image. To restore the original image, use the same face for both parameters, e.g. set back face to use image of back face.

> **Tip**  
> This also undoes *Set face object*, restoring the 3D shape's own face image instead of another object's image.

**Set face object**  
Replace the image used for a face of the shape with the image used by a Sprite, Tiled Background or 9-Patch object. An instance of the given object must exist on the current layout. See the property *Use object image for faces* for more information.

> **Tip**  
> This action can be undone with *Set face image*.

**Set face visible**  
Enable or disable the visibility of one of the faces of the shape. See the *Face visibility* properties for more information.

**Set shape**  
Change the shape currently used by the object. See the *Shape* property for more information.

**Set Z tiling factor**  
Change the multiple used for tiling images along the Z axis of the object. See the *Z tiling factor* property for more information.

## 3D shape expressions

For expressions common to other objects, see [common expressions](../plugin-reference/common-features/common-expressions.md).

**FaceImagePointCount(Face)**  
Retrieve the 3D position of an image point on any of the 3D shape's faces. The face is a zero-based index of the face as shown in the image editor, i.e.:

- 0: Back
- 1: Front
- 2: Left
- 3: Right
- 4: Top
- 5: Bottom

 The image point is specified by the name or number of the image point. When using a number, note that as per other image point expressions,  the first image point is number 1, as 0 refers to the origin.

**FaceImagePointX(Face, ImagePoint)**  
Retrieve the 3D position of an image point on any of the 3D shape's faces. The face is a zero-based index of the face as shown in the image editor, i.e.:

- 0: Back
- 1: Front
- 2: Left
- 3: Right
- 4: Top
- 5: Bottom

 The image point is specified by the name or number of the image point. When using a number, note that as per other image point expressions,  the first image point is number 1, as 0 refers to the origin.

**FaceImagePointY(Face, ImagePoint)**  
Retrieve the 3D position of an image point on any of the 3D shape's faces. The face is a zero-based index of the face as shown in the image editor, i.e.:

- 0: Back
- 1: Front
- 2: Left
- 3: Right
- 4: Top
- 5: Bottom

 The image point is specified by the name or number of the image point. When using a number, note that as per other image point expressions,  the first image point is number 1, as 0 refers to the origin.

**FaceImagePointZ(Face, ImagePoint)**  
Retrieve the 3D position of an image point on any of the 3D shape's faces. The face is a zero-based index of the face as shown in the image editor, i.e.:

- 0: Back
- 1: Front
- 2: Left
- 3: Right
- 4: Top
- 5: Bottom

 The image point is specified by the name or number of the image point. When using a number, note that as per other image point expressions,  the first image point is number 1, as 0 refers to the origin.

**ZTilingFactor**  
Return the current Z tiling factor property. See the documentation on the corresponding property above for more information.
