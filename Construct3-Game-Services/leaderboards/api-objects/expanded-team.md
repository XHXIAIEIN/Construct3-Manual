---
title: "Expanded Team Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/expanded-team"
release: 487
---

## On this page

- [Example Expanded Team](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Expanded Team

```json
{
  "teamID": "ab4b2d13-6aec-47fa-85d0-00e63e6f32a8",
  "name": "Red Team",
  "players": 1315,
  "formattedPlayers": "1,315",
  "dateCreated": "2026-05-27T08:36:34.6747887Z",
  "scores": 902,
  "formattedScores": "902",
  "totalScoreValues": 35389191,
  "averageScore": 39234,
  "formattedAverageScore": "39,234",
  "bestScore": 89441,
  "formattedBestScore": "89,441",
  "rank": 3,
  "ordinal": "rd",
  "formattedRank": "3rd"
}
```

## Object Properties

**teamID** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this team.

**name** `string`  
The name of this team.  Names cannot exceed 64 characters in length.

**players** `int16`  
The number of players assigned in this team.

**formattedPlayers** `string`  
The number of players assigned to this team rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**dateCreated** [`datetime`](../../data-types.md#internalH1Link0)  
The date the team was created.

**scores** `int32`  
The number of scores posted in this team.

**formattedScores** `string`  
The number of scores posted in this team rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**totalScoreValues** `decimal`  
The sum value of all scores posted in this team.

**averageScore** `int64?`  
The average of all the scores posted in this team.

**formattedAverageScore** `string`  
The average of all the scores posted in this team formatted under the score format specifications for this leaderboard, rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**bestScore** `int64?`  
The best score posted in this team.

**formattedBestScore** `string`  
The best score posted in this team formatted under the score format specifications for this leaderboard, rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).

**rank** `int32?`  
The rank of this team compared to other teams in this game.

**ordinal** `string`  
The ordinal for the rank of this team (EG: st, nd or rd would be ordinals for 1st 2nd or 3rd).

**formattedRank** `string`  
The rank of this score rendered using the requested locale, formatted to the specified [requested culture](../../culture.md).
