---
title: "Timeline property keyframe"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-keyframe"
release: 495
---

## On this page

- [Property Keyframe](#adding-property-keyframes)
- [Adding Property Keyframes](#property-keyframe-properties)

---

## Property Keyframe

In the [Timeline Bar](../../interface/bars/timeline-bar.md), property keyframes are represented by a mark in the same row as the property track they belong to.

Property keyframes hold the values the [timeline](../../project-primitives/timelines/timeline.md) uses when it is playing. They are at the end of the timeline hierarchy so any changes made at this level will only affect the property keyframe itself.

A [property track](../../project-primitives/timelines/property-track.md) can have many different property keyframes, one for each position in the timeline with values that must be reached when animating. Unlike [master keyframes](../../project-primitives/timelines/master-keyframe.md), property keyframes cannot be moved and must have a parent master keyframe. If a property keyframe's time is changed by either dragging it or changing the value in the [Properties Bar](../../interface/bars/properties-bar.md), a new master keyframe will be created at the new position along with new property keyframes to go with it.

## Adding Property Keyframes

Property keyframes can be created following the same method to create master keyframes, since property keyframes will be created for each property track at a given position in the timeline.

To create property keyframes for specific property tracks, follow these steps:

- Turn on **Edit mode** by pressing the **Edit** button in the Timeline Bar toolbar.
- Move the current time marker to the position in the timeline where you want to create property keyframes. This can be done by either clicking on the time ruler or by dragging the red line.
- Make changes to the [instances](../../project-primitives/objects/instances.md) you want to animate.
- Right-click on the property track you wish to add a property keyframe to and select **Set keyframes**.

If multiple property tracks are selected when using the **Set keyframes** option, property keyframes will be created for all of them.

Either method will always create a master keyframe along with the property keyframes.

### Property Keyframe Properties

**Index**  
The index of the property keyframe in its property track. It can not be changed. This value is updated if the keyframe's position in the timeline changes.

**Name**  
The name of the property track this property keyframe belongs to. This cannot be changed since it takes the same name as the property being modified.

**Value**  
The value the property keyframe holds. This can be either numeric, text, boolean or color. Depending on the result mode in use this will be Relative or Absolute.

**Time**  
The position of the property keyframe in the timeline. Since property keyframes cannot really be moved, changing this value will create a new master keyframe at the new position with new property keyframes to go with it. This can be updated from the Properties Bar or by dragging the keyframe in the Timeline Bar.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md).

**Result mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md).

**Ease**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md).

**Path mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md).

### Unique properties

#### Angle

**Direction**  
Allows you to choose which direction the angle will take to arrive at it's final value. By default Construct will attempt to take the shortest path but it can be forced to rotate clockwise or anti-clockwise by changing this property.

**Revolutions**  
The amount of additional 360 degree turns the angle should take before arriving at it's final value.

#### Initial Animation

**Start from**  
Choose how the animation should behave when the play head reaches the keyframe. The value **"Current frame"** will cause the new animation to start playing from the same frame the previous animation was in. **"Beginning"** will cause the new animation to start playing from the beginning. The special **"Default"** value uses the **"Start from"** value from the parent property track.
