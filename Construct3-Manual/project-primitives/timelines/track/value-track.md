---
title: "Value Track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track/value-track"
release: 487.2
---

## On this page

- [Adding Value Tracks](#adding-value-tracks)
- [Value Track Properties](#value-track-properties)

---

A value track is a special kind of [track](../../../project-primitives/timelines/track.md) which is not tied to any [instance](../../../project-primitives/objects/instances.md).

Because they are not tied to any instance the value they interpolate doesn't immediately affect anything, instead it needs to be queried at runtime using the [Timeline plugin](../../../plugin-reference/timeline-controller.md) before it can be used.

They are a little bit harder to use, but offer great flexibility in what they can be used for.

Value tracks can only have a single [properly track](../../../project-primitives/timelines/property-track.md) and a [timeline](../../../project-primitives/timelines/timeline.md) can have as many as needed.

## Adding Value Tracks

To add a value track to a timeline follow any of these methods:

- Use the split button of the <kbd>+</kbd> button in the [Timeline Bar](../../../interface/bars/timeline-bar.md) toolbar and choose the option `Track › Add value`.
- Right-click some Timeline Bar empty space and select `Track › Add value`.

## Value Track Properties

**Name**  
Must be unique in the timeline. Can be used to query the value of the track at runtime.

**Animation mode**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Ease**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). Changing these at the track level will apply the change to every sub-element.

**Locked**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). Changing these at the track level will apply the change to every sub-element.

**Track ID**  
An optional identifier to query the value of the track at runtime.
