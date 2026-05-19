---
title: "SVG Picture"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/svg-picture"
release: 476.3
---

## On this page

- [Importing an SVG image](#scripting)
- [Other ways to use SVG](#importing-an-svg-image)
- [SVG Picture properties](#other-ways-to-use-svg)
- [SVG Picture conditions](#svg-picture-properties)
- [SVG Picture actions](#svg-picture-conditions)
- [SVG Picture conditions](#svg-picture-actions)

---

The **SVG Picture** object can display a [Scalable Vector Graphics](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) (SVG) file in your project.

SVG Picture currently does not support animations and only shows a static image.

> **Tip**  
> Animated SVGs can be displayed with the [HTML Element](../plugin-reference/html-element.md) object.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [ISVGPictureInstance script interface](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/svg-picture).

## Importing an SVG image

The easiest way to add an SVG file you your project is to **drag-and-drop an SVG file in to the Layout View**. This will automatically import the SVG file as a project file, create an SVG Picture object, and set the SVG Picture to display the imported file.

Alternatively you can follow this process manually:

1. Import the SVG file as a [project file](../project-primitives/files.md)
2. Create an SVG Picture object
3. Set the *SVG file* property to the imported SVG file

## Other ways to use SVG

You can also import SVG files in the [Animations Editor](../interface/animations-editor.md) for use in other objects like Sprite. This will rasterize them, which means converting them to a bitmap image at a fixed size. This loses some of the benefits of scaling SVGs, but allows them to be used in other objects, including as a part of Sprite animations, and provides other features such as customizing the collision polygon.

## SVG Picture properties

**SVG file**  
Choose the SVG file to display. The SVG file must have been imported as a project file in the *Files* folder.

**Image**  
When an SVG file is selected, the *View* link provides a shortcut to preview or edit it. This is the same view you get when double-clicking the SVG file in the Project Bar.

**Initially visible**  
Choose whether the object is shown (visible) or hidden (invisible) when the layout starts.

**Origin**  
Choose the position of the origin of the object relative to its unrotated bounding rectangle.

## SVG Picture conditions

SVG Picture does not have any of its own conditions. For conditions in common to other objects, see [Common conditions](https://www.construct.net/make-games/manuals/construct-3/plugin-reference/common-features/common-conditions).

## SVG Picture actions

**Set image**  
Set the SVG file being displayed by the object, either by a dropdown list or by an expression of the filename.

**Set image (by name)**  
Set the SVG file being displayed by the object, either by a dropdown list or by an expression of the filename.

## SVG Picture conditions

SVG Picture does not have any of its own expressions. For expressions in common to other objects, see [Common expressions](../plugin-reference/common-features/common-expressions.md).
