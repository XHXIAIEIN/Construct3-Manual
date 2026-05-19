---
title: "Mouse script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/mouse"
release: 476.3
---

## On this page

- [Examples](#examples)
- [Events](#events)
- [Mouse APIs](#mouse-apis)

---

The `IMouseObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Mouse plugin](../../../plugin-reference/mouse.md).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.mouse` instead of the named object.

## Examples

The [Shooting code example](https://editor.construct.net/#open=scripting-shooting) demonstrates pointing the player at the mouse cursor and shooting bullets towards it.

The [Tracking pointers](https://editor.construct.net/#open=tracking-pointers) example also demonstrates how both mouse and touch input can be tracked simultaneously using pointer events.

## Events

To detect mouse button events, use the events fired on the [Runtime script interface](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/iruntime), such as `"mousedown"` or `"pointerdown"`.

## Mouse APIs

**getMouseX(layerNameOrIndex)**  
Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. `getMousePosition()` returns both the X and Y position as `[x, y]`.

**getMouseY(layerNameOrIndex)**  
Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. `getMousePosition()` returns both the X and Y position as `[x, y]`.

**getMousePosition(layerNameOrIndex)**  
Return the current position of the mouse cursor on a layer, given by a case-insensitive string of its name or zero-based index. The parameter can be omitted for the default mouse position, which does not take in to account any specific layer's transformations. `getMousePosition()` returns both the X and Y position as `[x, y]`.

**isMouseButtonDown(button)**  
Return a boolean indicating if the given mouse button is currently down. The button is specified the same way as the [MouseEvent.button](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button) property, i.e. 0 for left, 1 for middle, and 2 for right.

**setCursorStyle(style)**  
Set the appearance of the mouse cursor to a string of a CSS `cursor` style value, e.g. `"crosshair"`. See [cursor styles on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) for some possible values.

**setCursorObjectClass(objectClass)**  
Set the appearance of the mouse cursor to the current image of an [IObjectClass](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass). Various limitations apply: the object image is used as it appears in the image editor, not taking in to account size or rotation in the layout; the image cannot be too large (64x64 is usually the limit); the cursor may not be applied close to the edges of the browser window; and support varies depending on browser and OS. Some sample code for this method is shown below.

```javascript
runtime.mouse.setCursorObjectClass(runtime.objects.Sprite);
```
