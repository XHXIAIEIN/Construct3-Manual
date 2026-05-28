---
title: "Anchor behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/anchor"
release: 487
---

## On this page

- [Positioning objects relative to the viewport](#scripting)
- [Relative positioning](#positioning-objects-relative-to-the-viewport)
- [Anchor conditions](#relative-positioning)
- [Anchor actions](#anchor-conditions)
- [Anchor expressions](#anchor-actions)

---

The **Anchor behavior** is useful for automatically positioning objects relative to the viewport. This is useful for [supporting multiple screen sizes](https://www.construct.net/en/tutorials/supporting-multiple-screen-17).

Objects using the Anchor behavior should also be placed on a [layer](../project-primitives/layers.md) with its parallax set to 0% x 0%. Otherwise as the game scrolls the objects may "lag" behind the screen.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IAnchorBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/anchor.md).

## Positioning objects relative to the viewport

In the top-left of the [Layout View](../interface/layout-view.md), a dotted outline represents the viewport. Anchored objects should be positioned inside the dotted viewport area, as shown below.

[![Positioning anchored objects in the layout](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/972/anchor-layout_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/972/anchor-layout.png)Positioning anchored objects in the layout

Now if the window is resized during preview, the objects maintain their relative positions, as shown below. Note this demo uses *Scale outer* fullscreen mode to allow the aspect ratio to change.

[![Anchored objects in preview](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/973/anchor-viewport_v480.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/973/anchor-viewport.png)Anchored objects in preview

This is useful for interface elements like notifications and heads-up displays (HUDs).

## Relative positioning

The *Left edge* and *Top edge* position the object relative to the viewport edges, without changing the object size. For example, if the *Left edge* is set to *Viewport right*, the object will always stay the same distance from the right edge of the viewport.

The *Right edge* and *Bottom edge* resize the object relative to the viewport edges. For example, if you want a Tiled Background to stretch wider as the window widens, set *Right edge* to *Viewport right*.

## Anchor conditions

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

## Anchor actions

**Set enabled**  
Set whether the behavior is enabled or disabled. If disabled, the behavior will not alter the size or position of the object.

## Anchor expressions

The Anchor behavior has no expressions.
