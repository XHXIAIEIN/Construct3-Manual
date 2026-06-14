---
title: "Behaviors"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/behaviors"
release: 487.3
---

Behaviors add extra capabilities to [object types](../../project-primitives/objects/object-types.md). They can be added with the **Object Behaviors dialog**. See the [behavior reference section](../../behavior-reference.md) for more information on individual behaviors.

An example of a behavior is the **8 direction** behavior. This instantly allows an object to be moved around with the arrow keys. This helps speed up development and increase productivity. Behaviors are not intended to do everything in your game for you: the [events](../../project-primitives/events.md) are where the majority of your game logic will be defined. Behaviors are essentially time-savers and shortcuts. Most behaviors can be replicated with events, but it simply is far more time consuming to do so. Behaviors are very customisable, but if a behavior isn't doing quite what you want it to, you can usually resort to reproducing it in a customised way with events.

All [instances](../../project-primitives/objects/instances.md) of an object type use its behaviors. You cannot add a behavior to only some of the instances - they all use the behavior - although you may be able to enable or disable the behavior for individual instances.

Some behaviors add their own properties to the [Properties Bar](../../interface/bars/properties-bar.md). See the behavior reference for each behavior's properties

Some behaviors also extend the objects they are added to with their own [conditions](../../project-primitives/events/conditions.md), [actions](../../project-primitives/events/actions.md) and [expressions](../../project-primitives/events/expressions.md). These are shown alongside the object's own conditions, actions and expressions in the **Add Condition or Action dialog** and **Expressions dictionary**.

Behaviors can also be added to [Families](../../project-primitives/objects/families.md)  `[Paid plans only]` . All the object types in the family then *inherit* the behavior.
