---
title: "Rank Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-objects/rank-object"
release: 487.2
---

## On this page

- [The XP Rank Object](#example-rank)
- [Example Rank](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The XP Rank Object

This object represents an XP rank.  Ranks are achieved when the player reaches the required XP level.

## Example Rank

```json
{
  "id": "58d9e392-47b0-4599-a880-4587e958e502",
  "atXP": 100000,
  "logos": [
    { ... },
    { ... }
  ],
  "formattedAtXP": "20,674",
  "title": "Four Star General",
  "description": "The most accomplished of all generals.",
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  }
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this rank.

**atXP** `int64`  
The amount of XP required to reach this rank.

**logos** [`Array<Picture>`](../../common-objects/picture-object.md)  
If this rank has a logo, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same logo, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256, 512` will be shown here along with the original logo size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original logo width.

**formattedAtXP** `string`  
The amount of XP required to reach this rank formatted to the requested formatting culture, formatted to the specified [requested culture](../../culture.md).

**title** `string`  
The title of this rank.

**description** `string`  
The description of this rank.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language this ranks properties are written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language this ranks properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
