---
title: "The Timeline Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar"
release: 487
---

## On this page

- [Using the Timeline Bar](#using-the-timeline-bar)
- [Edit mode](#step-1-create-a-timeline)
- [Updating keyframes](#step-2-add-an-instance)
- [Drag & drop](#step-3-add-keyframes)
- [Auto keyframing](#previewing-a-timeline)
- [Note on animating Sprite plugin instances](#controlling-timelines-in-events)
- [More information](#edit-mode)

---

The **Timeline Bar** shows the currently active [timeline](../../project-primitives/timelines.md). Through this control you can add and remove [instances](../../project-primitives/objects/instances.md) and other types of tracks to a timeline, and edit its properties.

[![timeline 0 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/87433/timeline-0_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87433/timeline-0.png)

## Using the Timeline Bar

Here's a summary of how to use the Timeline Bar. A project can have multiple timelines, each timeline can have multiple instances, and each instance can have multiple property tracks. Tracks then use keyframes to mark points in a timeline. Timelines can also have nested timelines to produce more complex structures. Other types of tracks that do not directly reference instances are supported, those are not covered in this quick start guide.

### Step 1: create a timeline

With the Timeline Bar open, you can create a timeline with any of the following methods:

- Right-click **Timelines** folder in the [Project Bar](../../interface/bars/project-bar.md) and select *Add timeline*
- Right-click in the [Layout View](../../interface/layout-view.md) and select `Timeline › Add timeline`

| Project Bar context menu | Layout View context menu |
| --- | --- |
| [![timeline manual 02](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26525/timeline-manual-02.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26525/timeline-manual-02.png) | [![timeline manual 03](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26526/timeline-manual-03.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26526/timeline-manual-03.png) |


### Step 2: add an instance

Once you have a timeline, add an instance to it with any of these methods:

- Use the add <kbd>+</kbd> button in the toolbar to bring up a dialog from which to choose instances to add
- Drag & drop instances from the Layout View into the bar
- Right click selected instances in the Layout View and select `Timeline › Add to timeline`
- Use the `Track › Add instances` option in the <kbd>+</kbd> split button

| Add instances split button | Layout View context menu |
| --- | --- |
| [![timeline toolbar add](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87436/timeline-toolbar-add.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87436/timeline-toolbar-add.png) | [![timeline manual 04](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26528/timeline-manual-04.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26528/timeline-manual-04.png) |

### Step 3: add keyframes

Adding an instance adds property tracks for the position (X and Y co-ordinates). The next step is to add some keyframes, which you can do by following these steps:

1. Turn on **Edit Mode** by pressing the **pencil** button in the toolbar
2. Move the current time marker to the position in the timeline where you want to create keyframes. This can be done by either clicking on the time ruler or by dragging the red line marker.
3. Make changes to the instances you want to animate
4. Use the **Set keyframes** toolbar button, the <kbd>S</kbd> keyboard shortcut or right click in the Layout View and select `Timeline › Set keyframes`

| Edit mode button | Set keyframes button | Current Time | Layout View Context Menu |
| --- | --- | --- | --- |
| [![timeline toolbar edit](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87438/timeline-toolbar-edit.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87438/timeline-toolbar-edit.png) | [![timeline toolbar set](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87439/timeline-toolbar-set.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87439/timeline-toolbar-set.png) | [![timelinemanual02](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82227/timelinemanual02.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82227/timelinemanual02.png) | [![timeline manual 06](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26532/timeline-manual-06.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26532/timeline-manual-06.png) |

Following those steps you should be able to setup the most basic timeline.

### Previewing a timeline

The timeline can be previewed in the editor by pressing the **Play** button in the toolbar or by scrubbing the current time marker (press and hold <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> while scrubbing to move the marker without previewing the timeline).

| Playback Controls |
| --- |
| [![timeline toolbar playback](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87440/timeline-toolbar-playback.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87440/timeline-toolbar-playback.png) |

### Controlling timelines in events

You can control the timeline in your events using the [Timeline Controller plugin](../../plugin-reference/timeline-controller.md).

| Timeline Controller Plugin | Timeline Events |
| --- | --- |
| [![timelinemanual04](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82230/timelinemanual04.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82230/timelinemanual04.png) | [![timeline manual 11](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26558/timeline-manual-11.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26558/timeline-manual-11.png) |

## Edit mode

When edit mode is turned on with the edit toolbar button, the selection boxes in the Layout View change color and the properties which can be animated with the timeline are highlighted in the [Properties Bar](../../interface/bars/properties-bar.md). The highlighting only happens for instances which are part of the current timeline. Properties which are not highlighted in edit mode cannot be animated with a timeline. After finishing editing a timeline remember to turn the mode off as changes made in this mode are only relevant to the active timeline, rather than the whole project.

| Highlighted Properties | Highlighted Selection |
| --- | --- |
| [![timeline manual 07](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26550/timeline-manual-07.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26550/timeline-manual-07.png) | [![timeline manual 08](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26551/timeline-manual-08.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26551/timeline-manual-08.png) |

## Updating keyframes

To update keyframes, place the current time marker on top of the keyframes you want to update, make the necessary changes, and set the keyframe again, either by the toolbar button, keyboard shortcut or by the Layout View menu option.

Right-click master keyframes to update all the corresponding property keyframes with the current instance values.

Right-click property keyframes to individually update them with the current instance values.

Additionally, the X and Y properties of any instance can also be updated directly from the Layout View by dragging the handles for the keyframe.

[![timeline manual 09](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26552/timeline-manual-09.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26552/timeline-manual-09.png)

## Drag & drop

There are various places in which it is possible to use a drag and drop workflow when using the Timeline Bar.

- To add new instances directly to the timeline from the current active [layout](../../project-primitives/layouts.md). Drag the instances from the Layout View and drop them on a Timeline.
- To sort the different elements of the timeline that are represented by a row, such as a track.
- To add a nested timeline in the current timeline by dragging it from the Project bar.
- To update the starting offset of a nested timeline.
- To update the position of master keyframes and property keyframes. Notes on dragging keyframes:


  - Dragging a master keyframe updates it's position and the position of all related property keyframes.
  - Dragging a property keyframe by itself creates a new one at the new position, along with a corresponding master keyframe. Since property keyframes do not exist by themselves there is no notion of just moving them by themselves. The only way to move a property keyframe is to move the corresponding master.
  - Holding <kbd>Shift</kbd> while dragging a master keyframe will duplicate them and all related property keyframes in the new position.

## Auto keyframing

[![timeline toolbar auto](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87443/timeline-toolbar-auto.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87443/timeline-toolbar-auto.png)

By toggling auto keyframes, keyframes will be added to the timeline at the position of the current time marker, as soon as changes are made in either the Properties bar or the Layout view.

## Note on animating Sprite plugin instances

It is possible to animate the current frame of a [Sprite plugin](../../plugin-reference/sprite.md) instance by animating it's **initial frame** property.

When animating in this way make sure that the Sprite's normal animation is stopped as it would interfere with the changes made by a timeline. Likewise if you are just using a Sprite's regular animations, playing a timeline that changes the initial frame will cause un-expected results.

> **Warning**  
> The two methods of animation can not coexist, you have to choose one over the other.

It is also possible to change the current animation a Sprite plugin instance will show at runtime by animating the **initial animation** property.

## More information

For more details on a timeline's capabilities, properties and related objects see the [Project Primitives section on timelines](../../project-primitives/timelines.md).

See the [Timeline Controller plugin](../../plugin-reference/timeline-controller.md) manual entry for more information on the actions, conditions and expressions available for controlling timelines.

The Timeline Bar has various keyboard shortcuts which are listed in the manual entry [Keyboard shortcuts](../../interface/keyboard-shortcuts.md).
