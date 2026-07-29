---
title: "Instance events"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/instance-event"
release: 495
---

## On this page

- [Standard instance event properties](#standard-instance-event-properties)

---

Events fired on [IInstance](../../../scripting/scripting-reference/object-interfaces/iinstance.md) (or its derivatives) pass an event object as a parameter to the handler function, and this event object has the following standard properties. Each type of event may add other properties - refer to the documentation for each event to identify any further properties that are available.

## Standard instance event properties

**instance**  
A reference to the `IInstance` (or derivative) which fired the event.
