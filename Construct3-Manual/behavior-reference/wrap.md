---
title: "Wrap behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/wrap"
release: 495.2
---

## On this page

- [Wrap properties](#wrap-properties)
- [Wrap conditions](#wrap-conditions)

---

The **Wrap behavior** re-positions an object to the opposite side of the layout or viewport if it leaves the area. The object only wraps once it is fully outside the area, i.e. no part of its bounding box is in the layout or viewport area.

## Wrap properties

**Wrap to**  
Whether to wrap the object when it leaves the layout area, or when it leaves the visible viewport.

## Wrap conditions

**On wrap**  
Triggered when the object position is changed by wrapping. For example if the object goes past the right edge of the wrap area and so is repositioned to the left of the wrap area, then *On wrap* will trigger.
