---
title: "Achievement Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-objects/achievement"
release: 487
---

## On this page

- [The Achievement Object](#example-achievement)
- [Example Achievement](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Achievement Object

You can have multiple Achievements in your game.  Achievements can be unlocked or progressed towards being unlocked by players.  Achievements can be set to only be awarded once, a set number of times or mulitple times.

## Example Achievement

```json
{
  "id": "0db9940e-a4d2-452e-b262-b3df8867182c",
  "name": "First Place Legend",
  "description": "Finish in 1st place 100 times.",
  "created": "2026-05-27T08:36:35.1452304Z",
  "formattedDateCreated": "9/22/2025 2:30:02 PM",
  "progressive": true,
  "progressionRequired": 100,
  "clientProgressAllowed": true,
  "isSecret": true,
  "maxUnlocks": 1,
  "incrementOnly": true,
  "formattedMaxUnlocked": 1,
  "totalAwarded": 2003,
  "formattedTotalAwarded": "2,003",
  "totalUniquePlayersAwarded": 2003,
  "formattedTotalUniquePlayersAwarded": "2,003",
  "firstAwarded": "2026-05-27T08:36:35.1532618Z",
  "formattedFirstAwarded": "9/22/2025 2:30:02 PM",
  "lastAwarded": "2026-05-27T08:36:35.1552694Z",
  "formattedLastAwarded": "9/22/2025 2:30:02 PM",
  "percentagePlayerBaseOwned": "35.5",
  "xpBonuses": [
    { ... },
    { ... }
  ],
  "achievedLogos": [
    { ... },
    { ... }
  ],
  "unachievedLogos": [
    { ... },
    { ... }
  ],
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
A unique ID for this achievement.

**name** `string`  
A name for this achievement.

**description** `string`  
A description for this achievement.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this achievement was created.

**formattedDateCreated** `string`  
The date and time this achievement was created, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**progressive** [`bool`](../../data-types.md#internalH1Link4)  
If this is a progressive achievement.

**progressionRequired** `int64?`  
If this is a progressive achievement, how much progressive value is required to unlock this achievement.

**clientProgressAllowed** [`bool`](../../data-types.md#internalH1Link4)  
If true, clients can progress/award this achievement, otherwise it can only be awarded/progressed by API calls using an API key.

**isSecret** [`bool`](../../data-types.md#internalH1Link4)  
If this achievement is secret (will not be returned in list/get operations unless a secret API key is used).

**maxUnlocks** `int32`  
Maximum number of times a player can unlock this achievement.

**incrementOnly** [`bool`](../../data-types.md#internalH1Link4)  
If true, negative values can't be passed to the award achivement end point.

**formattedMaxUnlocked** `string`  
Maximum number of times a player can unlock this achievement formatted to requested culture, formatted to the specified [requested culture](../../culture.md).

**totalAwarded** `int32`  
The total number of times this achievement has been awarded.

**formattedTotalAwarded** `string`  
The total number of times this achievement has been awarded formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**totalUniquePlayersAwarded** `int32`  
The total number of times this achievement has been awarded by different players.

**formattedTotalUniquePlayersAwarded** `string`  
The total number of times this achievement has been awarded by different players formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**firstAwarded** [`datetime?`](../../data-types.md#internalH1Link0)  
The date and time this achievement was first awarded to a player.

**formattedFirstAwarded** `string`  
The date and time this achievement was first awarded to a player, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**lastAwarded** [`datetime?`](../../data-types.md#internalH1Link0)  
The date and time this achievement was most recently awarded to a player.

**formattedLastAwarded** `string`  
The date and time this achievement was most recently awarded to a player, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**percentagePlayerBaseOwned** `decimal`  
The percentage of the total player base who have unlocked this achievement at least once.

**xpBonuses** [`Array<AchievementXPBonus>`](../../achievements/api-objects/xp-bonus.md)  
Defines levels of how much XP is awarded when the achievement is unlocked.

**achievedLogos** [`Array<Picture>`](../../common-objects/picture-object.md)  
If this rank has an acheieved logo, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same logo, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256, 512` will be shown here along with the original logo size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original logo width.

**unachievedLogos** [`Array<Picture>`](../../common-objects/picture-object.md)  
If this rank has an unacheieved logo, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same logo, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256, 512` will be shown here along with the original logo size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original logo width.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language this achievements properties are written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language this achievements properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
