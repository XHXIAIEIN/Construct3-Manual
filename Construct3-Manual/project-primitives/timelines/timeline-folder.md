---
title: "Timeline Folder"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline-folder"
release: 487.2
---

## On this page

- [Adding Timeline Folders](#adding-timeline-folders)
- [Timeline Folder Properties](#timeline-folder-properties)

---

In the [Timeline Bar](../../interface/bars/timeline-bar.md), timeline folders are represented as a row with an icon of a folder.

These are used to organise nested [timelines](../../project-primitives/timelines/timeline.md) in a parent timeline and don't have any impact in the playback. A timeline folder can have nested timelines as well as other timeline folders. They can be moved to and from timeline folders or the root of the timeline by dragging and dropping.

It is worth noting that the only specific property of a timeline folder is the **Name**. Every other property in it doesn't have a direct impact on the folder itself and exists only as a convenience to make modifications in all of the items within it.

## Adding Timeline Folders

Timeline folders can be added to the root of a timeline by doing any of the following:

- Right-clicking any section of the bar which doesn't correspond to any other element of a timeline and selecting `Timeline › Add subfolder`.
- Using the split menu of the Timeline Bar <kbd>+</kbd> toolbar button, and selecting `Timeline › Add subfolder`.

A timeline folder can be created as a sub folder by right-clicking another timeline folder.

## Timeline Folder Properties

**Name**  
The name of the timeline folder.

**Visible**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the timeline folder level will apply the change to every sub-element.

**Enabled**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the timeline folder level will apply the change to every sub-element.

**Locked**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the timeline folder level will apply the change to every sub-element.

**Show UI Elements**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing these at the timeline folder level will apply the change to every sub-element.
