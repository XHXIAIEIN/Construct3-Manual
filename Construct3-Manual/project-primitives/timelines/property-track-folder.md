---
title: "Timeline property track folder"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track-folder"
release: 487
---

## On this page

- [Adding Property Track Folders](#adding-property-track-folders)
- [Property Track Folder Properties](#property-track-folder-properties)

---

In the [Timeline Bar](../../interface/bars/timeline-bar.md), property track folders are represented as a row with an icon of a folder.

These are used to organize elements in a [track](../../project-primitives/timelines/track.md), and don't have any impact in the playback of the [timeline](../../project-primitives/timelines/timeline.md). A property track folder can have nested [property tracks](../../project-primitives/timelines/property-track.md) as well as other property track folders. They can be moved to and from property track folders or the root of the corresponding track by dragging and dropping. Property track folders can not be moved outside their corresponding track.

When adding [effect](../../project-primitives/objects/effects.md) parameters or [behavior](../../project-primitives/objects/behaviors.md) properties to a timeline, the created property tracks will be placed inside a special property track folder which is automatically given the name of the effect or behavior. The folder can not be renamed and only accepts property tracks which refer to the same effect or behavior.

It is worth noting that the only specific property of a property track folder is the **Name**. Every other property in it doesn't have a direct impact on the folder itself and exists only as a convenience to make modifications in all of the items within it.

## Adding Property Track Folders

Property track folders can be added to the root of a track by right-clicking a track and selecting **Add subfolder**. They can also be created as sub folders by right-clicking another property track folder.

## Property Track Folder Properties

**Name**  
The name of the property track folder.

**Animation mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Result mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Ease**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Path mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the property track folder level will apply the change to every sub-element.

**Locked**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the property track folder level will apply the change to every sub-element.
