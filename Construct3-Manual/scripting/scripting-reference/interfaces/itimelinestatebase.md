---
title: "ITimelineStateBase script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itimelinestatebase"
release: 495
---

## On this page

- [ITimelineStateBase APIs](#itimelinestatebase-apis)

---

The `ITimelineStateBase` is the base class of [ITimelineState](../../../scripting/scripting-reference/interfaces/itimelinestate.md) and [ITweenState](../../../scripting/scripting-reference/interfaces/itweenstate.md), allowing common APIs to be shared between timelines and tweens, as tweens are a kind of temporary timeline. Unless otherwise stated, where this documentation refers to a timeline, it also applies to a tween.

> **Tip**  
> Once a timeline finishes, this interface is destroyed and all its properties will throw exceptions upon access. The only exception to this is the `isReleased` property which provides a read-only boolean that indicates if the interface has been released and is now invalid.

## ITimelineStateBase APIs

**finished**  
A promise that resolves when the timeline finishes playing. This can be awaited in order to wait until the timeline finishes before proceeding to do something else.

**pause()**  
Pause or resume playback of the timeline.

**resume()**  
Pause or resume playback of the timeline.

**isPlaying**  
Read-only booleans indicating whether playback is active or paused.

**isPaused**  
Read-only booleans indicating whether playback is active or paused.

**time**  
Set or get the current playback time of the timeline in seconds.

**totalTime**  
Set or get the total time (i.e. the duration) of the timeline in seconds.

**progress**  
A read-only number representing the playback progress from 0 to 1 (i.e. the time divided by the total time).

**isLooping**  
Set or get a boolean indicating whether playback will repeat when it finishes.

**isPingPong**  
Set or get a boolean indicating whether the playback direction will alternately reverse when repeating.

**playbackRate**  
Set or get the speed of playback as a multiplier, e.g. 1 is normal speed, 2 is twice as fast, etc.

**tags**  
A read-only array of strings representing the tags for this timeline.

**hasTags(tags)**  
Return a boolean indicating if the timeline matches all the provided tags, given by a space-separated string.

**isReleased**  
A read-only boolean indicating if the interface was released, which happens after the timeline finishes. Once released accessing any other property (apart from this one) will throw an exception, as the underlying timeline state no longer exists.
