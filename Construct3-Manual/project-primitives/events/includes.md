---
title: "Event sheet includes"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/events/includes"
release: 495
---

Event sheet **includes** allow you to include an [event sheet](../../project-primitives/events/event-sheets.md) on another event sheet. They are a sort of automatic copy-paste of one sheet's contents to another. This is useful for sharing events common to multiple [layouts](../../project-primitives/layouts.md). For example, a game could use different event sheets for different parts of the logic. You could have event sheets called *Player input*, *Enemy control*, *Effects*, and so on. Then each level of the game can include these common event sheets in the layout's own event sheet. This allows you to share the same events between multiple layouts, without having to copy and paste all your events over and over again.

[![An event sheet include](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/943/event-include_v380.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/943/event-include.png)

Includes can be added from right-clicking an empty space in the event sheet and selecting `Include event sheet` or press the <kbd>N</kbd> [keyboard shortcut](../../interface/keyboard-shortcuts.md).

Construct automatically prevents cyclic includes. If two event sheets both include each other, Construct will use both event sheets but not include either more than once.
