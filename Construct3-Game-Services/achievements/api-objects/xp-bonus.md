---
title: "XP Bonus Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-objects/xp-bonus"
release: 495.2
---

## On this page

- [The XP Bonus Object](#example-xp-bonus)
- [Example XP Bonus](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The XP Bonus Object

This object describes an XP bonus awarded for an achievement from certain threshold.

## Example XP Bonus

```json
{
  "from": 5,
  "bonus": 100
}
```

## Object Properties

**from** `int32`  
How many achievements the player needs to be awarded this bonus.

**bonus** `int64`  
The amount of XP awarded to the player for each achievement awarded after they achieve the required number of achievements.
