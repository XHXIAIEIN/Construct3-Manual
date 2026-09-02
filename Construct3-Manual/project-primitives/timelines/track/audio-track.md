---
title: "Audio Track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track/audio-track"
release: 495.2
---

## On this page

- [Adding Audio Tracks](#adding-audio-tracks)
- [Audio Track Properties](#audio-track-properties)

---

An audio track is a special kind of [track](../../../project-primitives/timelines/track.md) which can be used to trigger audio playback from a [timeline](../../../project-primitives/timelines/timeline.md).

Audio tracks can have two types of [property tracks](../../../project-primitives/timelines/property-track.md), the main audio source one and another one to control it's volume. A [timeline](../../../project-primitives/timelines/timeline.md) can have as many as needed.

While the audio playback is connected to the corresponding timeline, it is not exclusively controlled by it. If a value is provided in the **Tag** property of the [audio source property track](../../../project-primitives/timelines/property-track/audio-source.md), then the [Audio plugin](../../../plugin-reference/audio.md) can be used to further control playback.

## Adding Audio Tracks

To add an audio track to a timeline follow any of these methods:

- Use the split button of the <kbd>+</kbd> button in the [Timeline Bar](../../../interface/bars/timeline-bar.md) toolbar and choose the option `Track › Audio audio`.
- Right-click some Timeline Bar empty space and select `Track › Add audio`.
- Drag & Drop from either from the **Sound** or **Music** folders in the [Project bar](../../../interface/bars/project-bar.md) into the [Timeline bar](../../../interface/bars/tilemap-bar.md).

The audio track itself doesn't have much functionality in on itself, instead it is the audio source property track, which holds the more specific properties. Look into that for more details.

## Audio Track Properties

**Name**  
Must be unique in the timeline.

**Animation mode**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Result mode**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Ease**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). Changing these at the track level will apply the change to every sub-element.

**Locked**  
See the section on common timeline element properties in [Timelines](../../../project-primitives/timelines.md). Changing these at the track level will apply the change to every sub-element.

**Track ID**  
Audio tracks don't use this property.
