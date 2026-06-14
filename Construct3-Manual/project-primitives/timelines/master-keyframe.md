---
title: "Timeline master keyframe"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/master-keyframe"
release: 487.3
---

## On this page

- [Adding Master Keyframes](#adding-master-keyframes)

---

In the [Timeline Bar](../../interface/bars/timeline-bar.md), a master keyframe is represented by marks in the same row as the [track](../../project-primitives/timelines/track.md) they belong to.

A track can have many different master keyframes, one for each position in the [timeline](../../project-primitives/timelines/timeline.md) with values that must be reached when animating. By themselves master keyframes only mark a time - the values used for interpolation are kept by the [property keyframes](../../project-primitives/timelines/property-keyframe.md).

The main role of master keyframes is to serve as a control to modify all related property keyframes at the same time. Any changes made to a master keyframe will be applied to all corresponding property keyframes, including **Enabled**, **Time**, **Ease** and **Path mode** changes as well as deleting.

## Adding Master Keyframes

To add master keyframes, follow these steps:

- Turn on **Edit mode** by pressing the **Edit** button in the Timeline Bar toolbar.
- Move the current time marker to the position in the timeline where you want to create keyframes. This can be done by either clicking on the time ruler or by dragging the red line.
- Make changes to the instances you want to animate.
- Use the <kbd>S</kbd> keyboard shortcut or right-click in the [Layout View](../../interface/layout-view.md) and select `Timeline › Set keyframes`.

### Master Keyframe Properties

**Index**  
The index of the master keyframe in its track. It can not be changed. This value is updated if the keyframe's position in the timeline changes.

**Time**  
The position of the master keyframe in the timeline. This can be updated from the [Properties Bar](../../interface/bars/properties-bar.md) or by dragging the keyframe in the Timeline Bar. Either change will update all property keyframes under the master.

**Ease**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). **Ease** and **Path mode** follow an inheritance pattern while changing **Enabled** at the master keyframe level will apply the change to every associated property keyframe.

> **Tip**  
> The **Ease** and **Path mode** values of master keyframes take precedence over the corresponding property track. This is an exception on the inheritance pattern these properties follow.

**Path mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). **Ease** and **Path mode** follow an inheritance pattern while changing **Enabled** at the master keyframe level will apply the change to every associated property keyframe.

> **Tip**  
> The **Ease** and **Path mode** values of master keyframes take precedence over the corresponding property track. This is an exception on the inheritance pattern these properties follow.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). **Ease** and **Path mode** follow an inheritance pattern while changing **Enabled** at the master keyframe level will apply the change to every associated property keyframe.

> **Tip**  
> The **Ease** and **Path mode** values of master keyframes take precedence over the corresponding property track. This is an exception on the inheritance pattern these properties follow.

**Tags**  
A space separated list of identifiers that can be used with a set of [Timeline plugin](../../plugin-reference/timeline-controller.md) conditions, to identify when a master keyframe has been reached while a timeline is playing.
