---
title: "SpriteFont script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/spritefont"
release: 495
---

## On this page

- [SpriteFont APIs](#spritefont-apis)

---

The `ISpriteFontInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [Sprite font plugin](../../../plugin-reference/sprite-font.md).

## SpriteFont APIs

**text**  
The string currently displayed by the Sprite Font object.

**typewriterText(str, duration)**  
Set the text over time by starting with an empty string and gradually adding characters until the full text of `str` is written out, over a `duration` specified in seconds. Note modifying the `text` property while text is being written out will cancel the effect.

**typewriterFinish()**  
If text is being written out with the `typewriterText()` method, force it to finish immediately.

**characterScale**  
The current text scale, defaulting to 1 for normal scale.

**characterSpacing**  
The extra space in pixels to add horizontally between characters.

**lineHeight**  
The extra space in pixels to add vertically between lines. 0 is the default size, negative values make lines closer together, and positive values space lines out further apart.

**horizontalAlign**  
A string specifying the horizontal alignment of the text within the object bounding box, which must be one of `"left"`, `"center"` or `"right"`.

**verticalAlign**  
A string specifying the vertical alignment of the text within the object bounding box, which must be one of `"top"`, `"center"` or `"bottom"`.

**wordWrapMode**  
A string specifying the way to wrap text when it reaches the end of a line. This can be either `"word"` to wrap entire space-separated words, `"character"` to wrap at any character, or `"cjk"` to wrap at any character but with special handling for Chinese, Japanese and Korean punctuation.

**textWidth**  
Read-only values indicating the size of the actual text content within the Sprite Font object's rectangle. The method allows getting both values at the same time.

**textHeight**  
Read-only values indicating the size of the actual text content within the Sprite Font object's rectangle. The method allows getting both values at the same time.

**getTextSize()**  
Read-only values indicating the size of the actual text content within the Sprite Font object's rectangle. The method allows getting both values at the same time.

**hasTagAtPosition(tag, x, y)**  
Return a boolean indicating if there is text with a specific tag at the given position (case insensitive). For example if the text has the BBcode `Hello [tag=mytag]world[/tag]`, then testing if the tag "mytag" is at a given position return `true` if that position is over just the part of the text that says "world", else `false`.

**getTagAtPosition(x, y)**  
Look up the tag for a part of the text at a given position and return the tag if any, else return an empty string if no tag is specified. For example if the text has the BBcode `Hello [tag=mytag]world[/tag]`, then the tag at a position over the word "world" is "mytag", and the tag at a position over the word "Hello" is "".

**getTagCount(tag)**  
Get the number of fragments, and the size and position of each fragment by its zero-based index, for a given tag. Note that a single tag may be broken in to multiple fragments - see the section *Tagged range fragmentation* in the [Text object manual entry](../../../plugin-reference/text.md) for more details (which applies equally to SpriteFonts). The `getTagPositionAndSize()` method returns the position and size as an object with the properties `{x, y, width, height}`.

**getTagPositionAndSize(tag, index)**  
Get the number of fragments, and the size and position of each fragment by its zero-based index, for a given tag. Note that a single tag may be broken in to multiple fragments - see the section *Tagged range fragmentation* in the [Text object manual entry](../../../plugin-reference/text.md) for more details (which applies equally to SpriteFonts). The `getTagPositionAndSize()` method returns the position and size as an object with the properties `{x, y, width, height}`.
