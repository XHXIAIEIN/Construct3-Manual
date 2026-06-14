---
title: "Score Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/score"
release: 487.3
---

## On this page

- [Example Score](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Score

```json
{
  "scoreID": "55e05d55-002e-419e-a756-3d4d5d147f1a",
  "rank": 1611,
  "ordinal": "th",
  "formattedRank": "1,611th",
  "formattedScore": "78,563,114",
  "score": 78563114,
  "country": "GB",
  "date": "2026-06-14T05:30:30.0626317Z",
  "formattedDate": "TsRYV",
  "updates": 0,
  "countryRank": 477,
  "countryOrdinal": "th",
  "formattedCountryRank": "477th",
  "player": { ... },
  "teamID": "3578a4da-7ecc-4bb8-bd75-7db1bea9796b",
  "teamName": "Red Team",
  "scoreHistory": { ... },
  "tier": {
    "id": "gold-players",
    "name": "Gold Players",
    "originalLanguage": null,
    "responseLanguage": null
  },
  "optionalValue1": 543,
  "optionalValue2": null,
  "optionalValue3": null
}
```

## Object Properties

**scoreID** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this score.

**rank** `int32?`  
The global rank of this score

**ordinal** `string`  
The ordinal for the global rank of this score.

**formattedRank** `string`  
The global rank of this score rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**formattedScore** `string`  
The score formatted under the score format specifications for this leaderboard, rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**score** `int64`  
The scores value.

**country** `string`  
The ISO 3166-1 alpha-2 country code of the IP address that originally posted the score. Will return as NULL if the country could not be ascertained.

**date** [`datetime`](../../data-types.md#internalH1Link0)  
The date this score was originally posted.

**formattedDate** `string`  
The date this score was originally posted formatted to the requested culture, formatted to the specified [requested culture](../../culture.md).

**updates** `int16`  
How many times this score has been adjusted.

**countryRank** `int32?`  
The country rank of this score. This property will not be shown if country scores are disabled in the leaderboard settings.

**countryOrdinal** `string`  
The ordinal for the global country rank of this score. This property will not be shown if country scores are disabled in the leaderboard settings.

**formattedCountryRank** `string`  
The global country rank of this score rendered using the requested locale. This property will not be shown if country scores are disabled in the leaderboard settings, formatted to the specified [requested culture](../../culture.md).

**player** [`Player`](../../authentication/api-objects/player-object.md)  
The player this score belongs to.

**teamID** [`guid?`](../../data-types.md#internalH1Link1)  
The unique ID of the team this player belongs to if they have been assigned to a team.

**teamName** `string`  
The name of the team this player belongs to if they have been assigned to a team.  This property will not show if they are not assigned on a team.

**scoreHistory** [`ScoreHistory`](../../leaderboards/api-objects/score-history.md)  
If your get score request supports rank comparison and the compareRanks parameter is specified, a score history object for this score is returned. If there is no relevant history record for the specified time period, this property will not exist for this specific score in the response.

**tier** [`Tier`](../../leaderboards/api-objects/tier.md)  
If tiers are setup on your leaderboard, the tier this score belongs to will be shown here.

**optionalValue1** `int16?`  
Optional values stored with the score record. They can be used to track information about a score, for example in a racing game you may wish to store how many secret coins they managed to collect.

**optionalValue2** `int16?`  
A second slot for an optional value.

**optionalValue3** `int16?`  
A third slot for an optional value.
