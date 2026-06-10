---
title: "Score History Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/score-history"
release: 487.3
---

## On this page

- [The Score History Object](#example-score-history)
- [Example Score History](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Score History Object

When you retrieve the history for a score, it returns an array of score history objects. These are very similar to the score object, but contain slightly less information.

Score history objects represent a snapshot in time of the scores rankings and score value.

## Example Score History

```json
{
  "date": "2026-06-10T06:20:13.3607992Z",
  "score": 20110,
  "formattedScore": "20,110",
  "rank": 1770,
  "ordinal": "th",
  "formattedRank": "1,770th",
  "countryRank": 673,
  "countryOrdinal": "rd",
  "formattedCountryRank": "673rd"
}
```

## Object Properties

**date** [`datetime`](../../data-types.md#internalH1Link0)  
The date this score history object represents.

**score** `int64`  
The score value at this date.

**formattedScore** `string`  
The score formatted under the score format specifications for this leaderboard, rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**rank** `int32`  
The global rank of this score at this date.

**ordinal** `string`  
The ordinal for the global rank of this score.

**formattedRank** `string`  
The global rank of this score rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**countryRank** `int32`  
The country rank of this score at this date. This property will not be shown if country scores are disabled in the leaderboard settings.

**countryOrdinal** `string`  
The ordinal for the global country rank of this score. This property will not be shown if country scores are disabled in the leaderboard settings.

**formattedCountryRank** `string`  
The country rank of this score rendered using the requested locale. This property will not be shown if country scores are disabled in the leaderboard settings, formatted to the specified [requested culture](../../culture.md).
