---
title: "Nested timelines"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar/nested-timelines"
release: 495
---

## On this page

- [Adding nested timelines](#adding-nested-timelines)
- [Editing nested timelines](#editing-nested-timelines)
- [Layout view feedback](#focus)

---

It is possible to nest [timelines](../../../project-primitives/timelines/timeline.md) inside another parent timeline, this allows for coordination between timelines without the need of events. When a timeline is shown as nested inside a parent it works largely the same, some exclusive bits of UI are introduced as well as some differences when compared to the main timeline.

## Adding nested timelines

First you will need to create more than one timeline in the project, after doing that you can do any of the following:

- Drag a timeline from the [Project Bar](../../../interface/bars/project-bar.md) into the [Timeline Bar](../../../interface/bars/timeline-bar.md) to nest it in the currently active timeline.
- Use the sub option `Timeline › Add timelines` of the <kbd>+</kbd> split button in the toolbar to bring up a dialog from which to choose timelines to add.
- Right-click on empty space in the Timeline Bar to bring up a context menu for the current timeline and use the option `Timeline › Add timelines`.

The image below shows how a nested timeline shows up in the Timeline Bar, after the main timeline elements and separated by two horizontal lines (highlighted in red). You can also see the nested timeline rows have a grey background to indicate they are not the main focus of the bar. A few other UI elements unique to nested timelines appear as well, continue reading for more details.

[![timelinemanual07 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/82240/timelinemanual07_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82240/timelinemanual07.png)

> **Warning**  
> It is not possible to nest timelines that would produce recursive structures. Attempts to do so will just be ignored.

## Editing nested timelines

### Focus

While a timeline is shown as nested content most editing can be done on it as in the main timeline. This includes, editing through the Properties Bar, moving keyframes, deleting keyframes and changing the starting offset. Adding [instances](../../../project-primitives/objects/instances.md) and adding keyframes is not directly available to nested timelines though. In order to do those actions the nested timeline must have focus.

Giving focus to a nested timeline is easy, you can do one of the following:

- Double-click the corresponding nested timeline row.
- Right-click the corresponding nested timeline row and use the `focus` option.

In the image below you can see the nested timeline having focus. Now all of it's content have a white background, while the rows that don't belong to it have a grey background. The timeline with focus is the only that will accept changes relating to adding instances, keyframes or updating keyframes.

[![timelinemanual08 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/82241/timelinemanual08_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82241/timelinemanual08.png)

### Toolbar arrow buttons

The left pointing arrow is used to go to the last timeline which had focus, the right pointing arrow is used to go to the next timeline which had focus. These buttons are only shown if there are nested timelines in the current main timeline, otherwise they are hidden.

[![timeline toolbar nested](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87427/timeline-toolbar-nested.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/87427/timeline-toolbar-nested.png)

### Starting Offset

The starting offset handle is the line that can be seen in the same row as the top most element of a nested timeline. It is positioned to show where the nested timeline will start playing in relation to the parent, and it is sized according to it's total time.

Similar to keyframes, dragging this handle allows you to change the starting offset of the nested timeline.

[![timelinemanual09 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/82246/timelinemanual09_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/82246/timelinemanual09.png)

## Layout view feedback

When a timeline with nested content is previewed in the layout, everything works as expected, but the instances which don't have focus have slightly different feedback.

The instances and timeline UI elements which don't have focus, are shown with slightly transparent colors.

[![timelinebardoc11](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/42775/timelinebardoc11.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/42775/timelinebardoc11.png)
