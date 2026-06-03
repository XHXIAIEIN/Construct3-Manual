---
title: "Persist behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/persist"
release: 487.2
---

The **Persist behavior** makes the object remember its state when going to a different layout, then coming back. If a layout has objects with the Persist behavior, it is also referred to as a *persistent layout*. For an interactive example of its use, [click here to open the *Persistent Layouts* example.](https://editor.construct.net/#open=persistent-layouts)

Normally if you leave a layout then come back, all non-global objects reset to their initial design in the [Layout View](../interface/layout-view.md). However for many games this is undesirable; powerups come back, enemies respawn and return to full health, and so on. Adding the Persist behavior to certain objects means that they are restored to the same state you left them in when returning to a layout. Any objects that were previously destroyed remain destroyed; any new objects that were created will come back; and all properties such as instance variables are remembered. This is important for allowing the user to return to previous areas without having to redo the whole section.
