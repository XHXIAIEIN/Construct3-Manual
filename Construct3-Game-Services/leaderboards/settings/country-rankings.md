---
title: "Country Ranks"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/settings/country-rankings"
release: 487.2
---

## On this page

- [Country Ranks](#internalH1Link0)

---

## Country Ranks

If you enable country rank tracking in your leaderboard, separate ranks are maintained on a country basis for scores in your leaderboard.  This means you do not need a separate leaderboard for each country.

It's important to review the page on [leaderboard privacy](../../leaderboards/privacy.md) to understand how IP addresses and countries are used and stored in this service.

If you track country ranks, then you can pass a `country` parameter into various end points that allow it to return results filtered by country.  For example, posting `US` into the [get scores end point](../../leaderboards/api-end-points/scores/get-scores.md) will return all scores where the country is US.
