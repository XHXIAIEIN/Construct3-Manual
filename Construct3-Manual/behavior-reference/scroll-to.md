---
title: "Scroll To behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/scroll-to"
release: 487
---

## On this page

- [Scroll To properties](#scroll-to-properties)
- [Scroll To conditions](#scroll-to-conditions)
- [Scroll To actions](#scroll-to-actions)
- [Scroll To expressions](#scroll-to-expressions)

---

The **Scroll To behavior** centers the view on the object with the behavior. It is a shortcut for the *Scroll to object* [system action](../system-reference/system-actions.md). However, it also provides a *Shake* action to shake the screen, and if multiple objects have the Scroll To behavior, it will center the view in between all of them.

If you need more advanced scrolling, e.g. limited to certain regions or following the player after a delay, scroll to an invisible object which you control through events.

To scroll, the size of the [layout](../project-primitives/layouts.md) must be bigger than the project's viewport size, or the layout's *Unbounded scrolling* property must be enabled. Otherwise there is nowhere to scroll to and scrolling will have no effect.

## Scroll To properties

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

## Scroll To conditions

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

## Scroll To actions

**Set enabled**  
Enable or disable the behavior. When disabled, the scrolling will not be affected.

**Shake**  
Shake the screen for a duration of time, by randomly offsetting the scroll position every tick. The *Magnitude* is the maximum distance in pixels from the scrolled position the view will be offset. The *Duration* is how long the shake will last in seconds. In *Reducing magnitude* mode, the *Magnitude* will gradually reduce to zero by the end of the shake duration. In *Constant magnitude* mode, the *Magnitude* will stay the same throughout the full duration of the shake, ending abruptly.

## Scroll To expressions

The Scroll To behavior has no expressions.
