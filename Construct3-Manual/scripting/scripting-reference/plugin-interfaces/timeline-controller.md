---
title: "Timeline controller script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/timeline-controller"
release: 506.3
---

## On this page

- [Timeline controller APIs](#timeline-controller-apis)

---

The `ITimelineControllerObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Timeline Controller plugin](../../../plugin-reference/timeline-controller.md).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.timelineController` instead of the named object.

## Timeline controller APIs

**play(timeline, tags)**  
Start playback of a timeline specified by a string of its name. The tags to associate with this playback are optional, and can be specified as a space-separated string, or an array of strings. The method returns an [ITimelineState](../../../scripting/scripting-reference/interfaces/itimelinestate.md) representing the playback state of the timeline. If more than one timeline starts playing as a result of calling this method an array of ITimelineState is returned instead.

**playInRange(timeline, tags, start, end)**  
Start playback of a timeline specified by a string of its name. The tags to associate with this playback are optional, and can be specified as a space-separated string, or an array of strings. The start and ending times can be given as either numeric values corresponding to the time in the timeline or as keyframe tags which are translated into time values. The method returns an ITimelineState representing the playback state of the timeline. If more than one timeline starts playing as a result of calling this method an array of ITimelineState is returned instead.

**setInstances(instances, trackId)**  
Set one or more instances to be used for the next timeline playback. The `instances` parameter can be either an `IWorldInstance` or an array of `IWorldInstance` in order to set multiple instances. The instances can be different to the ones used in the editor. The instance will be set to the track with the corresponding `trackId`, specified as a string. The `trackId` is also optional: if omitted it uses the first track in the timeline. It can also be used repeatedly omitting the `trackId` to keep setting the tracks in the timeline in sequence. When the timeline is played it will then affect the specified instances instead of the ones used in the editor. This method is equivalent to the *Set instance* action; for more information see the [Timeline Controller manual entry](../../../plugin-reference/timeline-controller.md).

***allTimelines()**  
Iterates all [ITimelineState](../../../scripting/scripting-reference/interfaces/itimelinestate.md) representing all the currently playing timelines.

***timelinesByTags(tags)**  
Iterates [ITimelineState](../../../scripting/scripting-reference/interfaces/itimelinestate.md)s matching the specified tags, which can be specified as either a space-separated string, or an array of strings.
