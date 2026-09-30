---
title: "Events"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events"
release: 495.2
---

## On this page

- [Scripting](#scripting)

---

Events are one of Construct's main features: instead of complicated scripting or programming languages with fiddly syntax and difficult errors, you can define how your project works using a simpler block system. The blocks are collectively referred to as events, although there are several kinds of block making up an [event sheet](../project-primitives/events/event-sheets.md).

Construct's event system is likely to be unfamiliar to new users. Read [How Events Work](../project-primitives/events/how-events-work.md) for a summary of how to use them. Events are not cookie-cutter blocks that limit what you can do. Instead they are designed to provide the basic tools you need to create sophisticated content.

The basic concept of events is that [conditions](../project-primitives/events/conditions.md) **filter** the instances meeting the condition, then the [actions](../project-primitives/events/actions.md) run for *those instances only*. This allows you to control instances independently, especially when used with [instance variables](../project-primitives/objects/instance-variables.md). A common misconception is that all instances of an object type must act the same. That is not the case: the fundamental way events work is to filter out individual instances, and run actions on just those that met the conditions.

Events are edited in the [Event Sheet View](../interface/event-sheet-view.md) using the [Add Condition/Action dialog](../interface/dialogs/add-condition-action.md), the [Parameters dialog](../interface/dialogs/parameters.md) and [Expressions dictionary](../interface/dialogs/expressions-dictionary.md).

A diagram of a simple event is shown below. (This does not include every feature of events - the rest are explained in this section.)

[![Diagram of an event in Construct](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/876/event-diagram_v650.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/876/event-diagram.png)

**Events** typically consist of **conditions** that must be met, **actions** that run if so, and optionally further [sub-events](../project-primitives/events/sub-events.md) that test more conditions, run more actions, etc. A simple way to think about events is "If the conditions are true, then run the actions". However remember that a key feature is that it also filters the instances matching the condition. For example if the condition *Bullet collides with alien* is met, the action *Destroy alien* will run, and the *Destroy* action affects only the instance involved in the condition.

Once you are familiar with events, you will likely find it useful to also use [Functions](../project-primitives/events/functions.md) to help manage events as your project gets larger.

## Scripting

You can use Construct's event system exclusively and still make complex projects with sophisticated logic. However if you are interested in learning a programming language, you can also use JavaScript coding in Construct. You can also mix and match code and event blocks, such as using a line of JavasScript code in the place of an action. To find out more see the manual section on [Scripting](../scripting/overview.md).

If you already have programming experience, you may be interested in extending Construct using the [Addon SDK](../../Construct3-Addon-SDK/index.md).
