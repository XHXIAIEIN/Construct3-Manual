---
title: "Timeline controller"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/timeline-controller"
release: 487.3
---

## On this page

- [Tagging](#tagging)
- [Setting instances to play](#setting-instances-to-play)
- [About picking](#about-picking)
- [Omitting the track ID](#omitting-the-track-id)
- [Unsetting all instances](#a-timeline-with-only-one-track)
- [Timeline controller conditions](#a-timeline-that-will-have-all-of-its-instances-replaced)
- [Timeline controller actions](#unsetting-all-instances)
- [Timeline controller expressions](#timeline-controller-conditions)
- [Built-in ease names](#timeline-controller-actions)

---

The **Timeline controller** object allows [timelines](../project-primitives/timelines.md) to be controlled in event sheets.

## Tagging

Much like [tweens](../behavior-reference/tween.md), timelines can be optionally tagged when they are played using one of the **Play** actions. Tags are useful to later control a timeline (or multiple timelines sharing the same tags) with some of the other actions, conditions or expressions.

## Setting instances to play

In the simplest case, a timeline will affect the instances that were used to create the timeline in the editor. Using the **Set Instance** action it is possible to use different instances to the ones used in the editor. Below are some short examples to help illustrate how this action works.

In the below example the timeline plugin **Play** action is used by itself on startup. This plays the timeline affecting the instances used in the editor to create the timeline. The timeline is tagged **"new-timeline"**.

[![timeline plugin manual 02](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31240/timeline-plugin-manual-02.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31240/timeline-plugin-manual-02.png)

In this example the timeline plugin **Play** action is used together with the system plugin **Create Object** action and the timeline plugin **Set Instance** action. This plays the timeline affecting the newly created instance. The new instance will be used in the [track](../project-primitives/tracks.md) with ID **"a-track-id"** and the timeline is tagged **"new-timeline"**

[![timeline plugin manual 01](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31241/timeline-plugin-manual-01.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31241/timeline-plugin-manual-01.png)

This example is similar to the last one, but instead of creating a new instance from scratch, the one picked by a collision event is used.

[![timeline plugin manual 03](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31242/timeline-plugin-manual-03.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31242/timeline-plugin-manual-03.png)

## About picking

When using the **Play** action after one or more **Set Instance** actions, it is possible that one or more similar timelines will start playing. This will depend on the amount of currently picked instances for each given object type.

In the example below a timeline will be played for each group of instances.

This is the preview of the timeline in the editor. It has two different tracks and placeholder instances.

Using the **Set Instance** action we specify to play a timeline for each picked group of instances at the start of the layout

[![timeline plugin manual 04](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31246/timeline-plugin-manual-04.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/31246/timeline-plugin-manual-04.png)

Lastly the preview of the layout shows that two different timelines where created to accommodate for the four instances found at the start of the layout.

## Omitting the track ID

There are a couple of cases in which it is possible to ignore using the **track ID** property of a [track](../project-primitives/tracks.md) as well as omit using the **track ID** parameter of the **Set Instance** action.

### A timeline with only one track

In this case it is possible to not use the **track ID**, as there is only one instance so there is no need to make any choice. The track ID must be empty in both the timeline track and the **Set Instance** action.


### A timeline that will have all of its instances replaced

In the case it is needed to replace all of the instance of a timeline using the **Set Instance** action, it is possible to skip using a **track ID** for each track and on each call to **Set Instance**. If there is one **Set Instance** action for each track in the timeline, the instances will be replaced in the same order they appear in the timeline.

The images bellow show how a timeline and it's properties might look in in this case.

| Template timeline |
| --- |
| [![set intance no track id 2](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47783/set-intance-no-track-id-2.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47783/set-intance-no-track-id-2.png) |

| First instance properties | Second instance properties |
| --- | --- |
| [![set intance no track id 3](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47784/set-intance-no-track-id-3.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47784/set-intance-no-track-id-3.png) | [![set intance no track id 4](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47785/set-intance-no-track-id-4.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47785/set-intance-no-track-id-4.png) |

| Events |
| --- |
| [![set intance no track id 1](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47786/set-intance-no-track-id-1.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/47786/set-intance-no-track-id-1.png) |

In this particular case the **octopus** [sprite](../plugin-reference/sprite.md) is used in the first track while the **toster** sprite is used in the second track. Because no track IDs are used, order is assumed to be the same as that defined in the editor.

## Unsetting all instances

Sometimes it might be necessary to clear the state the **Timeline Controller** uses in order to use different instances in a timeline. You might find that some state was previously set but no timeline was played to use it. Such a scenario is likely to cause subsequent uses of **Set instance** and **Play** to produce unexpected results. In those cases use the **Unset instances** action to clear the **Timeline Controller** before attempting to use **Set Instance** and **Play** together again.

## Timeline controller conditions

**Is any playing**  
True if any timeline is playing.

**Is playing**  
True if a specified timeline is playing, given by its tag.

**Is any paused**  
True if any timeline is paused.

**Is paused**  
True if a specified timeline is paused, given by its tag.

**On started**  
Triggered when a timeline starts playing, given by its tag. Use the **"Type"** parameter to specify when the trigger should take place. *"Any"* will execute the trigger any time a timeline is started, *"Starting"* will execute the trigger only  on the initial playback of the timeline and *"Resuming"* will execute the trigger only when the timeline is resumed after being paused.

**On any started**  
Triggered when any timeline starts playing. Use the **"Type"** parameter to specify when the trigger should take place. *"Any"* will execute the trigger any time a timeline is started, *"Starting"* will execute the trigger only  on the initial playback of the timeline and *"Resuming"* will execute the trigger only when the timeline is resumed after being paused.

**On finished**  
Triggered when a timeline finishes playback, given by its tag.

**On any finished**  
Triggered when any timeline finishes playback.

**On keyframe reached**  
Triggered when a [master keyframe](../project-primitives/timelines/master-keyframe.md) with certain tags is reached during playback. The keyframe can be identified by whether it matches any of the given tags, or if it has all of the given tags. Separate tags with spaces.

**On any keyframe reached**  
Triggered when any master keyframe is reached during playback. The *KeyframeTags* expression has a string of the keyframe's *Tags* property.

**On time set**  
Triggered when the time of a timeline is set with the **Set Time** action.

## Timeline controller actions

**Play**  
Start playing a timeline, with tags to identify this playback.

**Play all**  
Play all the timelines in the layout.

**Pause**  
Pause a timeline by its tag. Paused timelines can subsequently be resumed.

**Pause all**  
Pause all currently playing timelines.

**Resume**  
Resume a paused timeline by its tag.

**Resume all**  
Resume all paused timelines.

**Stop**  
Stop a timeline and reset it to its initial state.

**Stop all**  
Stop all timelines, resetting them all to their initial state.

**Set time**  
Set the current playback time of a timeline in seconds. **Note:** you can also use a string with a keyframe tag for the *Time* parameter, in which case the time is set to the position of that keyframe. If the timeline is playing when its time is set, playback is stopped.

**Set playback rate**  
Set the playback rate of a timeline. 1 is normal speed, 0.5 is half speed, etc. Negative numbers will play in reverse.

**Set instance**  
Set an instance to be used for the next timeline playback. The instance can be of a different type to the one used in the editor. The instance will be set to the track with the corresponding track ID. The track ID can also be left empty in which case it uses the first track in the timeline. It can also be used repeatedly with an empty ID to keep setting the tracks in the timeline in sequence. When the timeline is played it will then affect this instance instead of the one used in the editor. Playback can be controlled by using unique tags when playing the timeline.

**Unset instances**  
Clears all state associated with calls to **Set instance**.

## Timeline controller expressions

**Time(nameOrTags)**  
Retrieve the current time of the first matching timeline by either name or tags.

**Progress(nameOrTags)**  
Retrieve the progress of the first matching timeline by either name or tags, returning a value in the range [0, 1].

**TotalTime(nameOrTags)**  
The total time of the first matching timeline by either name or tags.

**KeyframeTags**  
In a On keyframe reached or On any keyframe reached trigger, a string with the Tags property of the keyframe that was reached.

**KeyframeTime**  
Get the time of a keyframe providing a timeline name (or tags) and keyframe tags.

**TimelineName**  
In a trigger, a string with the name of the relevant timeline.

**TimelineTags**  
In a trigger, a string with the tags of the relevant timeline.

**Value(timelineNameOrTags, valueTrackNameOrId)**  
Retrieve the value of a [value track](../project-primitives/timelines/track/value-track.md) by specifying a timeline name or tags and a value track name or track id. If no matching value track is found, the expression returns 0.

**Ease(easeName, value)**  
Return the result of an ease function at a given value in the range 0-1. The ease name can be either a built-in ease, or the name of a custom ease in the project. A list of the names of built-in eases is included below.

## Built-in ease names

These are the names for built-in ease functions that can be used with the TimelineController *Ease* expression.

| `"linear"` |  |  |
| --- | --- | --- |
| `"in-sine"` | `"out-sine"` | `"in-out-sine"` |
| `"in-elastic"` | `"out-elastic"` | `"in-out-elastic"` |
| `"in-back"` | `"out-back"` | `"in-out-back"` |
| `"in-bounce"` | `"out-bounce"` | `"in-out-bounce"` |
| `"in-cubic"` | `"out-cubic"` | `"in-out-cubic"` |
| `"in-quadratic"` | `"out-quadratic"` | `"in-out-quadratic"` |
| `"in-quartic"` | `"out-quartic"` | `"in-out-quartic"` |
| `"in-quintic"` | `"out-quintic"` | `"in-out-quintic"` |
| `"in-circular"` | `"out-circular"` | `"in-out-circular"` |
| `"in-exponential"` | `"out-exponential"` | `"in-out-exponential"` |
