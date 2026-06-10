---
title: "Leardboard Status Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/leaderboard"
release: 487.3
---

## On this page

- [The Leaderboard Status Object](#example-leaderboard-status)
- [Example Leaderboard Status](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Leaderboard Status Object

When you post or adjust a score, the returned leaderboard status object will give context that may be useful to show to the end user.

## Example Leaderboard Status

```json
{
  "countryScores": 108212,
  "formattedCountryScores": "108,212",
  "formattedGlobalScores": "3,408,212",
  "globalScores": 3408212
}
```

## Object Properties

**countryScores** `int32`  
The total number of scores in the leaderboard with the same country ID. This property will not be shown if country scores are disabled in the leaderboard settings.

**formattedCountryScores** `string`  
The total number of scores in the leaderboard with the same country ID rendered using the requested locale. This property will not be shown if country scores are disabled in the leaderboard settings, formatted to the specified [requested culture](../../culture.md).

**formattedGlobalScores** `string`  
The total number of scores in the leaderboard rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**globalScores** `int32`  
The total number of scores in the leaderboard.
