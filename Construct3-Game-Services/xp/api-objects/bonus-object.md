---
title: "Bonus Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-objects/bonus-object"
release: 495
---

## On this page

- [The XP Bonus Object](#example-bonus)
- [Example Bonus](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The XP Bonus Object

This object represents an bonus for a period of time.  A bonus has a modifier (eg 1.5x) which means that any XP earnt during the bonus period is multiplied by 1.5x.

## Example Bonus

```json
{
  "id": "6d5f3e76-2595-45a0-9082-83814bee5329",
  "startDate": "2026-07-29T05:33:15.8474747Z",
  "formattedStartDate": "UEIED",
  "endDate": "2026-07-29T05:33:15.8492341Z",
  "formattedEndDate": "UEIED",
  "title": "Double XP weekend!",
  "description": "This weekend only, earn 2x XP!  Let's go!",
  "modifier": 2,
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
A unique ID for this bonus.

**startDate** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this bonus starts.

**formattedStartDate** `string`  
The date and time this bonus starts formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**endDate** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this bonus ends.

**formattedEndDate** `string`  
The date and time this bonus ends formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**title** `string`  
The title of this bonus.

**description** `string`  
The description of this bonus.

**modifier** `decimal`  
The XP modifier for this bonus.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language this ranks properties are written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language this ranks properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
