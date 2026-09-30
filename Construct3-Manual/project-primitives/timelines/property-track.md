---
title: "Timeline property track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track"
release: 495.2
---

## On this page

- [Adding Property Tracks](#adding-property-tracks)
- [Property Track Properties](#property-track-properties)

---

In the [Timeline Bar](../../interface/bars/timeline-bar.md), property tracks are represented as a row with an icon of the corresponding property being affected by the [track](../../project-primitives/timelines/track.md) they belong to.

A property track represents the property of an instance that can be interpolated and is nested inside a parent track. Property tracks can refer to common [instance](../../project-primitives/objects/instances.md) properties, [instance variables](../../project-primitives/objects/instance-variables.md), [effect](../../project-primitives/objects/effects.md) parameters, [behavior](../../project-primitives/objects/behaviors.md) properties and [plugin](../../project-primitives/objects/plugins.md) properties.

A track can have many property tracks in its hierarchy, one for each property of the instance the [timeline](../../project-primitives/timelines/timeline.md) will be affecting. A property track can exist at the root of a track or nested inside [property track folders](../../project-primitives/timelines/property-track-folder.md). They can be moved to and from property track folders or the root of the parent track by dragging and dropping. They can not be moved outside of their parent track.

## Adding Property Tracks

Property tracks are added automatically when:

- A new track is added to a timeline.
- A keyframe for a new property is added.

To add an empty property track, right-click a track or property track folder and select **Add properties**.

## Property Track Properties

**Name**  
The name of the property track. This can not be changed it takes the same name as the property being modified.

**Animation mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Result mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Ease**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Path mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Visible**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the property track level will apply the change to every sub-element.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the property track level will apply the change to every sub-element.

**Locked**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the property track level will apply the change to every sub-element.

### Unique properties

#### Initial Animation

**Start from**  
Choose how the animation should behave when the play head reaches the keyframe. The value **"Current frame"** will cause the new animation to start playing from the same frame the previous animation was in. **"Beginning"** will cause the new animation to start playing from the beginning.
