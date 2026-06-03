---
title: "'Destroy outside' behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/destroy-outside"
release: 487.2
---

## On this page

- ['Destroy outside' properties](#destroy-outside-properties)

---

The **'Destroy outside' behavior** automatically destroys an object if it leaves the layout or viewport area. It only destroys the object if it is entirely outside the region (i.e. no part of its bounding box is inside the layout or viewport).

This behavior is often useful to prevent bullets and other projectiles flying off the layout forever. For example, without this behavior, if the user shoots some enemies and misses, the bullets could carry on flying off outside the layout forever. As the game goes on, more and more bullets build up over time, all moving further away forever. This gradually uses up more and more memory and CPU power causing the game to slow down. This can easily be avoided by adding this behavior to the bullets, so they are automatically removed when they leave the layout area.

The 'Destroy outside' behavior has no conditions, actions or expressions. It has the following properties.

## 'Destroy outside' properties

**Region**  
Choose whether the area the object is destroyed outside of is the layout area, or the viewport.
