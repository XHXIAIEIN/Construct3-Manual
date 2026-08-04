---
title: "DOMInstance script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance"
release: 495
---

## On this page

- [DOMInstance APIs](#dominstance-apis)

---

The `IDOMInstance` script interface represents a single instance of an object type (represented by [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md)) that appears in a layout and represents a DOM element such as a button or other form control at runtime. It derives from the [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) script interface.

Note these methods can still be used in worker mode, since it does not directly access a DOM element.

## DOMInstance APIs

**focus()**  
Focus or blur the DOM element represented by this instance.

**blur()**  
Focus or blur the DOM element represented by this instance.

**setCssStyle(prop, val)**  
Apply a CSS style to the DOM element, using a string of the property name (in CSS format, e.g. `"background-color"` and a string of the property value (e.g. `"red"`).

**getElement()**  
Return the HTML element used to represent the object.

> **Warning**  
> Since the DOM APIs are not available in worker mode, this will throw an exception when running in a Web Worker.
