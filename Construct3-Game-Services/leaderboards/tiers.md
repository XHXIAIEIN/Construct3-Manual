---
title: "Score Tiers"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/tiers"
release: 487
---

## On this page

- [Leaderboard Tiers](#creating-a-tier)
- [Creating a Tier](#tier-conditions)
- [Tier Conditions](#matching-scores-to-tiers)
- [Matching Scores to Tiers](#internalH1Link3)

---

## Leaderboard Tiers

Leaderboard tiers are an optional feature for leaderboards that allow you to group players.  It is not currently possible to modify tiers through the API, it must be done through your account on Construct.net.

An example use case would be to have a `Diamond Tier` for the top 5% of scores, a `Gold Tier` for the top 15% of scores etc.

If a score belongs to a tier, it will be returned in some API objects such as the [score object](../leaderboards/api-objects/score.md).

## Creating a Tier

**id** `Required` *Required*  
The unique ID for this tier.  This should not be displayed to players but is returned in API responses.

**name** `Required` *Required*  
A name of the tier which is displayed to players.

**condition Required**  
The condition to specify if players belong into this tier or not.

## Tier Conditions

Tiers can have one condition to specify if a score belongs in that particular tier:

**Rank is exactly equal to**  
Matches if the players rank exactly equals the specified value.

**Rank is in top N scores**  
If a value of 100 is provided, matches if the scores rank is <= 100

**Rank is in top N% of scores**  
If 25 is provided, matches if the scores rank is in the top 25% of scores on the leaderboard.

## Matching Scores to Tiers

When you have multiple tiers a score is iterated through all tiers and returns the tier with the first matching condition.

`Rank exactly equal to` conditions are tested first, then `Rank is in top N scores` are tested and finally `Rank is in top N% of scores` are tested.
