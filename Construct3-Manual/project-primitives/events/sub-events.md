---
title: "Sub-events"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/sub-events"
release: 487.2
---

## On this page

- [Triggers in sub-events](#triggers-in-sub-events)
- [Adding and removing sub-events](#adding-and-removing-sub-events)

---

                **Sub-events** appear indented beneath other events. They **carry on picking instances** from where the "parent" event left off. They run after the parent event's [actions](../../project-primitives/events/actions.md) have finished. An example is below.

[![Example of sub-events in Construct](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/940/sub-events_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/940/sub-events.png)

This event runs like so:

1. Test if any *Monster* [instances](../../project-primitives/objects/instances.md) are overlapping *Player*. If so, the instances involved are remembered.
2. The top event's actions would run next, but it doesn't have any.
3. The second event (note it is indented) then tests if the *Player*'s **ShieldEnabled** [instance variable](../../project-primitives/objects/instance-variables.md) is set. If so, it subtracts 1 from the *health* of the Monster overlapping the player.
4. The third event (also indented) tests if the *Player*'s **ShieldEnabled** instance variable is not set (see [inverting conditions](../../project-primitives/events/conditions.md)). If so, it subtracts 1 from the health of the *Player*.

In other words, monsters hurt the player when they touch, unless the player's **ShieldEnabled** instance variable is set, in which case the monsters are hurt instead.

This works because the objects picked by the top event are remembered and also used for sub-events. If the second and third events were not sub-events (not appearing indented) the second event would subtract 1 from the health of *all* Monsters, because it was not referenced in the event. (See *Unreferenced objects* in [How events work](../../project-primitives/events/how-events-work.md) for more on this.)

Sub-events can have other sub-events too, which makes sub-events very powerful and flexible for setting up advanced game logic.

Note sub-events run after the actions only if the actions run - in the above example, if no monsters are overlapping the player, neither the actions of that event nor its sub-events run at all.

## Triggers in sub-events

If a trigger is in a sub-event, **all** of its parent event's conditions must be true at the time the trigger fires, otherwise the event will not run.

There can also only be one trigger in a single branch of sub-events. In other words, one of the events above a trigger cannot also contain a trigger.

## Adding and removing sub-events

To add a sub-event, **right-click** the event margin and choose `Add › Add sub-event`. Alternatively choose the `Add sub-event` option from the **Add...** link on the right, or press the <kbd>S</kbd> [keyboard shortcut](../../interface/keyboard-shortcuts.md).

Adding and editing conditions to sub-events works identically to ordinary events. You can also create more deeply nested sub-events by adding a sub-event to a sub-event.
