---
title: "Player Achievement Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-objects/player-achievement"
release: 487.3
---

## On this page

- [The Player Achievement Object](#example-player-achievement)
- [Example Player Achievement](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Player Achievement Object

This object describes a players awarded achievements, along with any achievements with current progress.  If an achievement is secret and the player has made progress towards it but has not yet unlocked the achievement, it will not be shown in this response unless an API key is passed to authenticate the request.

## Example Player Achievement

```json
{
  "count": 52,
  "formattedCount": "52",
  "firstAwarded": "2026-06-14T05:30:30.4575205Z",
  "formattedFirstAwarded": "9/22/2025 2:30:02 PM",
  "lastAwarded": "2026-06-14T05:30:30.4595344Z",
  "formattedLastAwarded": "9/22/2025 2:30:02 PM",
  "progress": 1024,
  "formattedProgress": "1,024",
  "achievement": { ... }
}
```

## Object Properties

**count** `int32`  
How many of this achievement this player has unlocked.

**formattedCount** `string`  
How many of this achievement this player has unlocked, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**firstAwarded** [`datetime?`](../../data-types.md#internalH1Link0)  
If this achievement has been unlocked, the date and time it was first unlocked for this player.

**formattedFirstAwarded** `string`  
The date and time this achievement was first unlocked, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**lastAwarded** [`datetime?`](../../data-types.md#internalH1Link0)  
If this achievement has been unlocked, the date and time it was last unlocked for this player.

**formattedLastAwarded** `string`  
The date and time this achievement was last unlocked, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**progress** `int64?`  
If this achievement is progressive, the current progression this player has towards unlocking this achievement.

**formattedProgress** `string`  
If this achievement is progressive, the current progression this player has towards unlocking this achievement, formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**achievement** [`Achievement`](../../achievements/api-objects/achievement.md)  
The achievement.
