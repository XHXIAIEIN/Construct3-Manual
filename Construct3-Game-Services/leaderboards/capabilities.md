---
title: "Leaderboard Capabilities"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/capabilities"
release: 495.2
---

## On this page

- [Construct Leaderboard Capabilities](#scalable-and-performant)
- [Scalable and Performant](#country-leaderboards-built-in)
- [Country Leaderboards Built In](#teams)
- [Teams](#highly-customisable)
- [Highly Customisable](#daly-weekly-monthly-or-annual-leaderboards)
- [Daly, Weekly, Monthly or Annual Leaderboards](#score-history)
- [Score History](#compare-rank)
- [Compare Rank](#shadow-bans)
- [Shadow Bans](#auto-score-rejection)
- [Auto Score Rejection](#store-additional-values)
- [Store Additional Values](#score-adjustment)
- [Score Adjustment](#tier-system)
- [Tier System](#many-views)
- [Many Views](#and-much-more)
- [And Much More](#internalH1Link14)

---

## Construct Leaderboard Capabilities

The leaderboard service is designed to be scalable and high performance allowing you to rely on it for your leaderboard needs!

Although this service is branded towards games, the leaderboard service is suitable for ranking anything - competitions, sales teams, events, sports or anything else you can think of.

The leaderboard service is not restricted to use within [Construct 3](https://www.construct.net/) - it can be used in any game engine.

## Scalable and Performant

The leaderboard service scales effortlessly to millions of scores on single leaderboards with fast performance and high reliably.

## Country Leaderboards Built In

Unlike other leaderboard services, you do not need to create a new leaderboard for each country you want to represent.  Each leaderboard is capable of tracking countries automatically.  Refer to our [privacy page](../leaderboards/privacy.md) for details on how IP addresses and countries are calculated and stored.

## Teams

[Add teams](../leaderboards/teams.md) into your leaderboards.  Teams have their own customisable ranking system independent of the main leaderboard rankings.

## Highly Customisable

Leaderboards come with a [wide range of settings](../leaderboards/settings.md) allowing you to customise it to your needs.

## Daly, Weekly, Monthly or Annual Leaderboards

Use the `range` parameter on the [get scores request](../leaderboards/api-end-points/scores/get-scores.md) to return daily, weekly, monthly or yearly leaderboards.  Use the `rangeOffset` parameter to retrieve historic records.

You can also filter by country, allowing you for example to show the monthly leaderboard for the US.

## Score History

Track the players score over time.  You can [retrieve the score history](../leaderboards/api-end-points/scores/get-score-history.md) of a score up to 1 year in the past.

## Compare Rank

The get score request has a `compareRanks` parameter allowing you to compare the players current rank to yesterdays rank, or any date within the last year.

## Shadow Bans

If bad actors submit faked scores into your leaderboard, your able to [shadow ban](../leaderboards/shadow-banned-scores.md) them based on their player ID (if one exists) and/or their IP address.

If a players score is shadow banned, it will show in the leaderboard for them - but no one else.

## Auto Score Rejection

You know your game better than anyone else.  You can set [score thresholds](../leaderboards/settings/score-rejection.md) to automatically reject scores that fall out of bounds.  You're also able to customise how rejected scores are handled.

## Store Additional Values

Each score record has the ability to record up to 3 different additional values.  These are great for displaying contextual information with scores in the leaderboard - for example in a racing game you might decide to record how many gold coins were collected on the way or how many jumps you made!

## Score Adjustment

You're able to [adjust existing scores](../leaderboards/api-end-points/scores/adjust-score.md) in the leaderboard to allow for cumulative scoring over the lifetime of the player.

## Tier System

Add players into [tiers](../leaderboards/tiers.md) based on customisable rulesets.

## Many Views

The leaderboards API has many end points allowing you to:

- [Get newest scores](../leaderboards/api-end-points/scores/get-newest-scores.md)
- [Get a players scores](../leaderboards/api-end-points/scores/get-player-scores.md)
- [Get neighbour scores](../leaderboards/api-end-points/scores/get-score-neighbours.md)

## And Much More

Explore the documentation to see what the leaderboard is capable of.
