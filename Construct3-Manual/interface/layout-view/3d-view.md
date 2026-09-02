---
title: "The Layout View 3D view"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/layout-view/3d-view"
release: 495.2
---

## On this page

- [Status bar](#status-bar)
- [Modifying objects](#modifying-objects)
- [Moving the camera](#move-move)
- [Camera orientation](#scale-mode)

---

The **3D view** of the [Layout View](../../interface/layout-view.md) has features that are more suitable for editing 3D content.

[![The Layout View with its 3D view.](https://construct-static.com/images/v1771/r/uploads/articleuploadobject/0/images/144351/layout-view-3d-view_v650.png)](https://construct-static.com/images/v1771/uploads/articleuploadobject/0/images/144351/layout-view-3d-view.png)The Layout View with its 3D view.

In the 3D view, the camera can move freely around and look anywhere. There are no scrollbars in this view mode as they are not applicable - instead use the mouse and keyboard interactions described below to move the view.

## Status bar

In the 3D view, in addition to the active layer the status bar shows the current camera position in the layout. You can copy the position by right-clicking the camera position in the status bar and choosing `Copy`, or using the `Copy camera co-ordinates` option from the view menu in the top toolbar.

## Modifying objects

The last clicked selected object shows some controls. This tool is sometimes referred to as the *gizmo*.

[![The gizmo in the Layout View.](https://construct-static.com/images/v1771/r/uploads/articleuploadobject/0/images/144352/3d-gizmo_v380.png)](https://construct-static.com/images/v1771/uploads/articleuploadobject/0/images/144352/3d-gizmo.png)The gizmo in the Layout View.

The current gizmo mode can be set in the view menu in the top toolbar.

### Move move

When the gizmo is in move mode, the ends of lines appear as arrows. **Click and drag** the arrows to move all the selected objects along one axis: **red** for the **X axis**, **green** for the **Y axis** and **blue** for the **Z axis**. (To help you remember, note the color scheme goes in RGB order, which is the same as color notation.)

The small squares allow movement on a plane. For example the blue square is between the X and Y axes, and so clicking and dragging that allows moving the selection on the XY plane. You can also **hold** <kbd>Shift</kbd> for *axis lock*: the object will only move on diagonals from its starting position.

**Hold** <kbd>Control</kbd> while dragging an arrow or square to clone the selection.

### Scale mode

When the gizmo is in scale mode, the ends of the lines appear as boxes. This mode works much like move mode, except that now clicking and dragging the arrows will resize all the selected objects along that axis. Similarly the small squares allow for resizing on two axes, and much like the 2D editor, you can hold <kbd>Shift</kbd> for a proportional resize. In scale mode an additional box appears at the origin of the gizmo. This box can be clicked and dragged to scale the object proportionally (resizing on all three axes at the same time).

Note if you select a 2D object in scale mode, then only the X and Y axes handles will appear, as 2D objects cannot be resized on the Z axis.

## Moving the camera

There are several ways to move the camera in the 3D view. You can **hold the right mouse button** and then use the <kbd>W</kbd> and <kbd>S</kbd> keys to move forwards and backwards, <kbd>A</kbd> and <kbd>D</kbd> to move left and right, and <kbd>E</kbd> and <kbd>Q</kbd> to move up and down. Alternative keys for these movements are the arrow keys and page up/down. To allow movement with these keys without having to hold down a mouse button, select `Enter free look mode` from the View menu. Press <kbd>Escape</kbd> to end free look mode. While the camera is moving, hold <kbd>Shift</kbd> to move more slowly, or <kbd>Alt</kbd> to move more quickly.

Select an object and press <kbd>F</kbd> to "focus" the view on that object. This moves the camera to be looking directly at it. Then you can **hold the middle mouse button** and move the mouse to **orbit** around the focused object. An alternative shortcut for this is to hold <kbd>Alt</kbd> and drag the right mouse button, which may be useful for devices like laptop trackpads which lack a middle mouse button.

You scroll the **mouse wheel** to move the camera forwards and backwards, similar to the <kbd>W</kbd> and <kbd>S</kbd> keys. **Hold** <kbd>Shift</kbd> and **click and drag the middle mouse button** to pan the view, similar to using the <kbd>A</kbd> and <kbd>D</kbd> keys to move side to side and <kbd>E</kbd> and <kbd>Q</kbd> to move up and down.

## Camera orientation

By default the camera orientation is in "top down" mode, where up is the negative Y axis direction. This is similar to the 2D view and works well with things like a 2D platform game with 3D graphics. Depending on the type of project you may wish to change the camera orientation to "parallel to layout" mode, where up is the positive Z axis direction. This works better with content like the [First-person shooter example](https://editor.construct.net/#open=template-first-person-shooter) where the player also views the layout with that orientation. You can change the camera orientation using the view menu in the top toolbar.
