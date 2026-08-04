---
title: "Behavior instance event"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/behavior-instance-event"
release: 495
---

## On this page

- [Standard instance event properties](#standard-instance-event-properties)

---

Events fired on [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) (or its derivatives) pass an event object as a parameter to the handler function, and this event object has the following standard properties. Each type of event may add other properties - refer to the documentation for each event to identify any further properties that are available.

## Standard instance event properties

**instance**  
A reference to the [IInstance](../../../scripting/scripting-reference/object-interfaces/iinstance.md) (or derivative) associated with the behavior instance which fired the event.

**behaviorInstance**  
A reference to the `IBehaviorInstance` which fired the event.
