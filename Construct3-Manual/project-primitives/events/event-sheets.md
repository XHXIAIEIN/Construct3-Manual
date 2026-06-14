---
title: "Event sheets"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/event-sheets"
release: 487.3
---

## On this page

- [Adding and removing event sheets](#adding-and-removing-event-sheets)
- [Sharing events between layouts](#sharing-events-between-layouts)

---

                **Event Sheets** are lists of events. They are edited in the [Event Sheet View](../../interface/event-sheet-view.md). All the event sheets in a project are listed in the [Project Bar](../../interface/bars/project-bar.md).

## Adding and removing event sheets

To add a new event sheet, right click an event sheet folder in the Project Bar (such as the root level *Event sheets* folder) and select `Add event sheet`.

Event sheets can be renamed or deleted by right-clicking the event sheet itself in the Project Bar and selecting `Rename` or `Delete`.

When adding a layout, Construct will prompt to ask if you'd also like to create an event sheet for that layout.

## Sharing events between layouts

[Layouts](../../project-primitives/layouts.md) have an associated event sheet to define how the layout works. However it is often useful to use one event sheet for multiple layouts to prevent having to duplicate all your events. There are two ways to share events between layouts:

1. Set several layout's **Event sheet** property to the same sheet.
2. Make a separate event sheet with all the common events on it, then [include](../../project-primitives/events/includes.md) that event sheet on other event sheets.

The second option is usually preferable since you are not forced to use exactly the same events for different layouts - you can add a few extra events to customise how it works depending on the layout.
