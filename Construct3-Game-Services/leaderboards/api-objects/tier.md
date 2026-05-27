---
title: "Tier Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/tier"
release: 487
---

## On this page

- [The Tier Object](#example-tier)
- [Example Tier](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Tier Object

You can setup Tiers for your leaderboard in your Construct Game Services account.  Tiers are a way of grouping players into categories based on their performance in the leaderboard.  For example you might have a "Gold" tier for your top players, a "Silver" tier for your mid level players and a "Bronze" tier for your lower level players.

When you retrieve scores from a leaderboard, each score will contain a tier object if the leaderboard has tiers setup and the player has been placed into a tier based on their score.

## Example Tier

```json
{
  "id": "gold-players",
  "name": "Gold Tier Players",
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

**id** `string`  
A unique ID for this tier.

**name** `string`  
The name of the tier that can be shown to players.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language the tier name was written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language the tier name is returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
