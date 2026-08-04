---
title: "Timeline script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itimelinestate"
release: 495
---

## On this page

- [Timeline APIs](#timeline-apis)

---

The `ITimelineState` represents an actively running timeline. It derives from [ITimelineStateBase](../../../scripting/scripting-reference/interfaces/itimelinestatebase.md) which implements APIs in common between timelines and tweens. Many general playback APIs are part of `ITimelineStateBase`; the `ITimelineState` interface only provides APIs specific to timelines that do not also apply to tweens.

Timelines can be created using the `play()` method on the [Timeline Controller script interface](../../../scripting/scripting-reference/plugin-interfaces/timeline-controller.md).

> **Tip**  
> Once a timeline finishes, this interface is destroyed and all its properties will throw exceptions upon access. The only exception to this is the `isReleased` property which provides a read-only boolean that indicates if the interface has been released and is now invalid.

## Timeline APIs

**name**  
A read-only string with the name of the timeline.
