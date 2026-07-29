---
title: "Leaderboard Privacy"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/privacy"
release: 495
---

## On this page

- [Privacy of Submitted Data](#geo-location)
- [Geo Location](#internalH1Link1)

---

## Privacy of Submitted Data

When a score is submitted to the leaderboard service, the IP addresses of the score submissions are hashed with a salt before being stored in the leaderboard database.  These IP addresses are **not** stored anywhere else in any other format, nor are they queried to any third party services.

## Geo Location

When the score is submitted, before hashing we query a local database to ascertain the likely country the IP address originates from.  The country name ascertained is stored in the score record.

The country is not in any way an accurate measurement of the users location.  If for example the user is behind a VPN, the returned country will be completed inaccurate.

If you do not want to show country data in your leaderboard, there is a setting to disable it.
