---
title: "Interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar/interface"
release: 487.2
---

## On this page

- [Toolbar](#toggles)
- [Toggles](#time-markers)
- [Time markers](#timeline-elements)
- [Timeline elements](#internalH1Link3)

---

## Toolbar

[![timeline toolbar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87426/timeline-toolbar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87426/timeline-toolbar.png)

The buttons are described from left to right.

- **Add instances:** Brings up a dialog to add [instances](../../../project-primitives/objects/instances.md) which are not already part of the current [timeline](../../../project-primitives/timelines/timeline.md).


  - `Timeline › add timelines` option inside the **Add instances**     split button. Brings up a dialog to add a nested timeline.
  - `Timeline › add subfolder` option inside the **Add instances** split button. Will add a [timeline folder](../../../project-primitives/timelines/timeline-folder.md) to the root of the current timeline.
  - `Track › add instances` option inside the **Add instances** split button. Does the same as the main button.
  - `Track › add value` option inside the **Add instances** split button. Adds a [value track](../../../project-primitives/timelines/track/value-track.md) to the root of the timeline.
  - `Track › add audio` option inside the **Add instances** split button. Adds an [audio track](../../../project-primitives/timelines/track/audio-track.md) to the root of the timeline.
  - `Track › add subfolder` option inside the **Add instances** split button. Will add a [track folder](../../../project-primitives/timelines/track-folder.md) to the root of the current timeline.
- **Edit mode:** Turns on timeline editing mode.
- **Set keyframes:** Set [keyframes](../../../project-primitives/timelines/master-keyframe.md) at the current time marker. Keyframes will be set in all tracks which have an instance with any meaningful change. Only works while in editing mode.
- **Auto keyframes:** Enable to set keyframes automatically in the current time marker as changes are made. Keyframes are only set in the corresponding tracks for the changes made. Only works while in editing mode.
- **Cut:** Cut the current selection of keyframes.
- **Copy:** Copy the current selection of keyframes.
- **Paste:** Paste the current selection of keyframes relative to the current time marker. If no [tracks](../../../project-primitives/timelines/track.md) are selected each keyframe is pasted in it's respective track. If there is a selection of tracks, an attempt is made to copy as many keyframes as possible into the correct tracks. If a keyframe does not fit in any track, it is ignored.
- **Move to first keyframe:** Moves the current time marker to the first master keyframe
- **Move to previous keyframe:** Moves the current time marker to the nearest master keyframe moving backwards
- **Preview:** Start a preview of the current timeline.
- **Stop:** Stop the preview of the current timeline.
- **Move to next keyframe:** Moves the current time marker to the nearest master keyframe moving forwards.
- **Move to last keyframe:** Moves the current time marker to the last master keyframe
- **Previous timeline:** Go back to the previously focused timeline in a nested structure. Hidden if there are no nested timelines.
- **Next timeline:** Go to the next timeline in a nested structure. Hidden if there are no nested timelines.

## Toggles

These are the four options at the left most side of the bar. These affect not only the timeline element in the same row, but also any elements under the same hierarchy. If a row does not have a checkbox, the corresponding element does not support the property.

- **Visibility:** The **checkboxes** under the **eye** icon. These will toggle the visibility of the corresponding timeline track instance. The setting only takes effect while edit mode is turned on.
- **Lock:** The **checkboxes** under the **padlock** icon. These will toggle the lock state of a timeline element. Locked elements cannot be edited. Locked elements can't be edited and have a grey highlight when selected in the layout while timeline editing mode is turned on.
- **Enable:** The **checkboxes** under the **checkmark** icon. These will toggle the enable state of a timeline element. This setting affects the timeline at runtime. Disabled timeline elements are not taken into consideration when the timeline is interpolating values.
- **Show UI Elements:** The **checkboxes** under the **joined dots** icon. Using these toggles you can show and hide the layout UI elements associated with the instance. This includes paths lines, keyframe handles and cubic bezier handles. This can be useful when working with timelines which have many different elements.


[![timelinebardoc12](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/42924/timelinebardoc12.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/42924/timelinebardoc12.png)

> **Tip**  
> The icons themselves can be clicked to modify the whole column.

## Time markers

These are the three vertical lines in the right most section of the bar.

- **Current time:** The **red line**. Change its position to the place in the timeline you wish to add new keyframes. The marker can be dragged directly or by clicking on the time ruler and dragging. Dragging the marker will produce a preview of the timeline, provided that edit mode is turned on. Holding <kbd>Ctrl/Cmd</kbd> while dragging the marker to prevent the timeline from being previewed. Can also be changed from the [Properties Bar](../../../interface/bars/properties-bar.md) when it is showing timeline properties.
- **Total time:** The **green line**. Indicates the total time the timeline takes to play to the end. Can be dragged directly like the current time marker and changed from the Properties Bar when it is showing timeline properties. This marker represents the total time of the top most timeline only, if there are nested timelines, those are not represented by this line.
- **Compound time:** The **blue line**. Indicates the total time a timeline has from start to finish including all of it's nested content. This marker can not be dragged and is just shown as reference. It won't be visible if there is no nested content or if the total time of the main timeline is enough to hold all of it's children.

[![timelinemanual06 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/82235/timelinemanual06_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82235/timelinemanual06.png)

## Timeline elements

These are the parts that make up a timeline. When selected, these elements will show their properties in the Properties Bar.

- **[Track](../../../project-primitives/timelines/track.md):** Represented as a row with an icon of the corresponding instance. Tracks can be moved to and from track folders or the root of the timeline by dragging and dropping.
- **[Master keyframe](../../../project-primitives/timelines/master-keyframe.md):** Represented by black dots in the same row as the track they are contained by. A master keyframe's main role is to serve as a control to modify corresponding property keyframes in bulk.
- **[Property track](../../../project-primitives/timelines/property-track.md):** Represented as a row with an icon of the corresponding property being affected by the track. They can be moved to and from property track folders or the root of the parent track by dragging and dropping. They can not be moved outside of their parent track.
- **[Property keyframe](../../../project-primitives/timelines/property-keyframe.md):** Represented by light blue square in the same row as the property track they are contained by.
- **[Track folder](../../../project-primitives/timelines/track-folder.md):** Represented as a row with an icon of a folder. These are used to organise elements in a timeline, should it be needed. A track folder can have nested tracks as well as other track folders. They can be moved to and from track folders or the root of the timeline by dragging and dropping.
- **[Property track folder](../../../project-primitives/timelines/property-track-folder.md):** Represented as a row with an icon of a folder. These are used to organise elements in a track, should it be needed. A property track folder can have nested property tracks as well as other property track folders, they can be moved to and from property track folders or the root of the corresponding track by dragging and dropping. Property track folders can not be moved outside their corresponding track.
- **[Nested timeline](../../../project-primitives/timelines.md):** Represented as a row with the icon of a timeline, these act like a folder for all the content inside and can be expanded and collapsed as such. Nested timelines can be moved to and from timeline folders or the root of the parent timeline by dragging and dropping. There are several details specific to nested timelines which are discussed later.
- **[Timeline folder](../../../project-primitives/timeline-folder.md):** Represented as a row with an icon of a folder. These are used to organize nested timelines in a parent timeline. Timeline folders can only exist as children of the main timeline or nested inside other timeline folders.
- **Timeline offset handle:** Represented by a rectangle in the same row as the corresponding nested timeline. It's width represents the total playback time of the corresponding timeline and is positioned to be able to see, at a glance, when will the nested timeline will start and finish in relation to the parent. It can be dragged to adjust the starting time of the nested timeline in relation to the parent timeline.
- **[Value Track](../../../project-primitives/timelines/track/value-track.md):** Represented as a row with a name. Value tracks can be moved to and from track folders or the root of the timeline by dragging and dropping. They can only have one property track and are not associated with any instance. Must be used in tandem with the [Timeline Controller plugin](../../../plugin-reference/timeline-controller.md) in order to query their value at runtime.
- **[Audio Track](../../../project-primitives/timelines/track/audio-track.md):** Represented as a row with a name. Audio tracks can be moved to and from track folders or the root of the timeline by dragging and dropping. They can only have two property tracks, one representing the audio file and another optional one to change the volume as the timeline progresses. They are not associated with any instance.

[![timeline manual 14](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26594/timeline-manual-14.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26594/timeline-manual-14.png)
