---
title: "'Bound to' behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/bound-to"
release: 487.3
---

## On this page

- ['Bound to' properties](#bound-to-properties)

---

The **'Bound to' behavior** prevents an object leaving the edge of the layout or viewport.

This behavior has no conditions, actions or expressions - just the following properties.

## 'Bound to' properties

**Bound by**  
Set to *Edge* to prevent any part of the object leaving the specified region. The object will stop at the position shown below:

[![Bound to](https://construct-static.com/images/v1748/r/uploads/articleuploadobject/0/images/974/boundtolayout-edge_v290.png)](https://construct-static.com/images/v1748/uploads/articleuploadobject/0/images/974/boundtolayout-edge.png)

Set to *Origin* to only prevent the object's origin leaving the region. The result depends on where the origin is placed on the object, but with a centred origin the object will stop in a position similar to the image shown below:

[![Bound to](https://construct-static.com/images/v1748/r/uploads/articleuploadobject/0/images/975/boundtolayout-origin_v290.png)](https://construct-static.com/images/v1748/uploads/articleuploadobject/0/images/975/boundtolayout-origin.png)

**Region**  
Choose whether the area the object is bound to is the layout area, or the viewport.
