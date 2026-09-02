---
title: "Trigger Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/triggers/concepts"
release: 495.2
---

## On this page

- [What is the Triggers Service?](#internalH1Link0)

---

## What is the Triggers Service?

The triggers service allows you to achieve interesting and unique actions without needing to write any code or manage your own backend.

> **Tip**  
> Have any suggestions for new trigger types or actions?  Drop us an email, we'll do our best to add them in if it's possible!

When defining a trigger, you define [when](../triggers/when.md) the trigger should be checked.  When the trigger is checked, the trigger [conditions](../triggers/conditions.md) are checked.  If these conditions are met, then the triggers [actions](../triggers/actions.md) are executed.

Triggers are only checked when the underlying request relates to player.  Any actions run are then run against this player.

Any actions run when a trigger is fired will not cause re-triggers.  For example, if you have a trigger that awards players XP, when this trigger is fired and the XP is awarded any triggers that check for XP changes will not be checked.  This is by design to prevent infitine loops.

There is sometimes a little nuance with certain whens and conditions, so it is recommended to read the documentation on each when implementing them into your game.
