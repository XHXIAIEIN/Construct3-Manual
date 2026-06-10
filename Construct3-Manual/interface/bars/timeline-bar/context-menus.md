---
title: "Context menus"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar/context-menus"
release: 487.3
---

## On this page

- [Elements context menus](#timeline-bar-context-menu)
- [Timeline bar context menu](#internalH1Link1)

---

## Elements context menus

All the [timeline](../../../project-primitives/timelines/timeline.md) elements have context menu options that will come up by right-clicking on them.

Right-clicking on any part of the [Timeline Bar](../../../interface/bars/timeline-bar.md) which does not reference any particular element, such as the section showing the name of the current timeline or the time ruler, will bring up a menu with options that affect the timeline itself, rather than any of its elements.

Here is a list with all the available options for each element. The more obvious ones such as **Delete** are not be described.

- **Timeline:**


  - **`Timeline › Add timelines`** Bring up a dialog to add nested timelines to the root of the current timeline.
  - **`Timeline › Add subfolder`** Add a [timeline folder](../../../project-primitives/timelines/timeline-folder.md) to the root of the current timeline.
  - **`Track › Add instances`** Bring up a dialog to add [instances](../../../project-primitives/objects/instances.md) that don't already belong to the current timeline.
  - **`Track › Add value`** Add a [value track](../../../project-primitives/timelines/track/value-track.md) to the root of the current timeline.
  - **`Track › Add audio`** Add an [audio track](../../../project-primitives/timelines/track/audio-track.md) to the root of the current timeline.
  - **`Track › Add subfolder`** Add a [track folder](../../../project-primitives/timelines/track-folder.md) at the root of the current timeline.
  - **Delete:** Only shown for nested timelines. Deletes the timeline from the parent, but not from the project.
  - **Focus:** Only shown for nested timelines. Gives focus to the timeline in the nested structure.
- **Track:**


  - **Add properties:** Bring up a dialog to manually add empty [property tracks.](../../../project-primitives/timelines/property-track.md)
  - **Add subfolder:** Add a [property track folder](../../../project-primitives/timelines/property-track-folders.md) to the root of the track.
  - **Swap instance:** Brings up a dialog from which to choose instances that can be used to replace the existing one.
  - **Delete**
- **Master keyframe:**


  - **Update:** Update all the corresponding [property keyframes.](../../../project-primitives/timelines/property-keyframe.md)
  - **Disable:** Disable all the corresponding property keyframes.
  - **Enable:** Enable all the corresponding property keyframes.
  - **Delete**
  - **Add missing property keyframes:** Add any missing property keyframes under the specified [master keyframe.](../../../project-primitives/timelines/master-keyframe.md)


    - **With interpolated values:** The new property keyframes are given the values that the timeline would generate at that point.
    - **With current values:** The new property keyframes are given the values currently held by the instance.
- **Track folder:**


  - **Add instances from selection:** Add all the instances currently selected in the [Layout View](../../../interface/layout-view.md) directly as children of the track folder.
  - **Add instances from dialog:** Bring up a dialog to add instances which are not already part of the timeline, directly as children of the track folder.
  - **Add subfolder**
  - **Rename**
  - **Delete**
- **Property track:**


  - **Convert to scale:** Convert width and height property tracks to corresponding scale X and scale Y property tracks.
  - **Convert all to scale:** Convert all width and height property tracks in a timeline to the corresponding scale X and scale Y property tracks.
  - **Convert to size:** Convert scale X and scale Y property tracks to corresponding width and height property tracks.
  - **Convert all to size:** Convert all scale X and scale Y property tracks in a timeline to the corresponding width and height property tracks.
  - **Delete**
- **Property keyframe:**


  - **Update:** Update the value of the property keyframe with whatever value the corresponding instance has at the moment.
  - **Disable:** Disable the property keyframe. A disabled property keyframe is not taken into account when playing the timeline.
  - **Enable:** Enable the property keyframe.
  - **Delete**
- **Property track folder:**


  - **Add properties:** Bring up a dialog to manually add empty property tracks for the corresponding track. The new property tracks are directly added as children of the property track folder.
  - **Add subfolder**
  - **Rename**
  - **Delete**
- **Timeline folder:**


  - **Add timelines:** Bring up a dialog to add a nested timelines to the timeline folder.
  - **Add subfolder**
  - **Rename**
  - **Delete**
- **Common options:**


  - **Cut:** Cut the current keyframe selection
  - **Copy:** Copy the current keyframe selection
  - **Paste:** Paste keyframes using the current time marker as reference. If no tracks are selected at the moment of pasting, the keyframes will be added in their respective tracks. If there are tracks selected at the moment of pasting, an attempt is made to paste the keyframes into the tracks they would fit best. If there are keyframes in the selection which can't be fit anywhere, they are ignored.

There is also the **Set keyframes** option that will show up in any menu provided there is at least a track, track folder, property track or property track folder selected. This will add keyframes at the position of the current time marker with the values the corresponding instances currently have. If there are already keyframes at the current time marker position, they will be updated with the most recent instance values.

## Timeline bar context menu

Aside from the above options, there are some common options which show up in all menus and are specific to the Timeline Bar itself.

- **Timeline:**


  - **Add timelines:** Bring up a dialog to add nested timelines to the root of the current timeline.
  - **Add subfolder:** Add a timeline folder to the root of the current timeline.
- **Track:**


  - **Add instances:** Bring up a dialog to add instances that don't already belong to the current timeline.
  - **Add value:** Add a [value track](../../../project-primitives/timelines/track/value-track.md) to the root of the current timeline.
  - **Add audio:** Add an [audio track](../../../project-primitives/timelines/track/audio-track.md) to the root of the current timeline.
  - **Add subfolder:** Add a track folder at the root of the current timeline.
- **View:**


  - **Default:** Show the default view of the bar
  - **Animation modes:** Show the animation mode used by each element of the timeline
  - **Result modes:** Show the result mode used by each element of the timeline
  - **Eases:** Show the ease function that are currently in use in between each pair of keyframes
  - **Path modes:** Show which path mode is in use in between each pair of keyframes
- **Scale:** Change the zoom level of the bar. This is an editor only setting and will not affect the playback of a timeline.

The [Properties Bar](../../../interface/bars/properties-bar.md) also shows most of the above options as properties. This allows you to see at a glance which settings are used all across the timeline, and offers a convenient way to change them as well.
