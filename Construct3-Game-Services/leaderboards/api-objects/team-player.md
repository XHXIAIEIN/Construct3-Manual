---
title: "Team Player Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/team-player"
release: 495.2
---

## On this page

- [Example Team Player](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Team Player

```json
{
  "currentScore": 43,
  "formattedScore": "0P08O",
  "player": { ... }
}
```

## Object Properties

**currentScore** `int64?`  
This players current best score.

**formattedScore** `string`  
This players current best score formatted to the formatting culture, formatted to the specified [requested culture](../../culture.md).

**player** [`Player`](../../authentication/api-objects/player-object.md)  
The player object.
