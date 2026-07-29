---
title: "The Layout View 2D view"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/layout-view/2d-view"
release: 495
---

## On this page

- [Status bar](#status-bar)
- [Modifying objects](#modifying-objects)
- [Scrolling and zooming](#scrolling-and-zooming)

---

The **2D view** of the [Layout View](../../interface/layout-view.md) has features that are more suitable for editing 2D content.

[![The Layout View with its 2D view.](https://construct-static.com/images/v1768/r/uploads/articleuploadobject/0/images/144345/layout-view-2d-view_v650.png)](https://construct-static.com/images/v1768/uploads/articleuploadobject/0/images/144345/layout-view-2d-view.png)The Layout View with its 2D view.

In the 2D view, the camera is always pointing down at the layout. Zooming moves the camera up and down on the Z axis. 3D content will still preview correctly when using the 2D view, as the view is still looking at a 3D world - the main difference is the camera is limited to a 2D-style perspective and the editing tools are designed for working with 2D content.

## Status bar

In the 2D view, in addition to the active layer the status bar shows the current mouse position in the layout and the current zoom level. You can copy the position by the mouse by right-clicking and choosing the menu option `View › Copy co-ordinates`.

## Modifying objects

Clicking and dragging a selected object will move all selected objects. Hold <kbd>Control</kbd> while dragging a selected object to clone all the selected instances. While dragging selected instances, you can also hold <kbd>Shift</kbd> for *axis lock*: the object will only move horizontally, vertically, or on a diagonal from its starting position. You can also use the **arrow keys** to "nudge" an object 1px at a time in each direction. Hold <kbd>Shift</kbd> to move the object 10px at a time instead.

The last clicked selected object will also show resize handles around the sides.

[![Resize handles for a selected instance in the Layout View](https://construct-static.com/images/v1768/r/uploads/articleuploadobject/0/images/868/resize-handles_v160.png)](https://construct-static.com/images/v1768/uploads/articleuploadobject/0/images/868/resize-handles.png)

**Click and drag** a resize handle to resize all selected objects in the direction of the handle. **Hold** <kbd>Shift</kbd> to proportionally resize the object. **Hold** <kbd>Control</kbd> to resize relative to the object origin, which appears as a small dot on the selected object.

Rotatable objects like Sprite can be rotated by **moving the mouse just outside the resize handles**, away from the object. When you do this the mouse cursor will **change to a rotation arrow**. When you see this, **click and drag** to rotate the object.

Sometimes the resize handles, or rotate cursor, can get in the way of other objects. If this happens, **hold** <kbd>Alt</kbd> to temporarily hide the resize handles and disable rotation. This allows you to select another object instead of modify the selected object.

## Scrolling and zooming

There are a few ways to move the view around in the 2D mode:

- **The vertical and horizontal scrollbars** at the edges of the view
- **Scroll the mouse wheel** to scroll vertically. You can also hold <kbd>Shift</kbd> to scroll horizontally.
- **Hold the middle mouse button** and drag the mouse to pan the view
- **Hold** <kbd>Space</kbd> and move the mouse as another way to pan the view (useful for laptops with track pads)

On desktop systems, middle-mouse dragging is probably the most convenient way to move around the layout.

Zooming is useful to focus on a small area or see an overview of the entire layout. There are several ways to zoom:

- The Zoom options in the **View** menu when right-clicking in the Layout View
- **Hold** <kbd>Control</kbd> and **scroll the mouse wheel**. Hold both <kbd>Control</kbd> + <kbd>Shift</kbd> to double or halve the zoom (e.g. 100%, 200%, 400%...)
- **Ctrl and + or -** on the keyboard. Hold <kbd>Shift</kbd> to double or halve the zoom.

Press <kbd>Control</kbd> + <kbd>0</kbd> to return to 100% zoom.
