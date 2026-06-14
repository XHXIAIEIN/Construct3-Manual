---
title: "Expanded Player Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/expanded-player"
release: 487.3
---

## On this page

- [The Expanded Player Object](#example-expanded-player)
- [Example Expanded Player](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Expanded Player Object

This object is only returned for some API end points that require your games secret API key to be passed as some of the returned data is considered more sensitive and should not be displayed publicly.

## Example Expanded Player

```json
{
  "id": "0d81f286-5802-4c30-8b30-761554f42583",
  "playerName": "Chuckling Warrior",
  "created": "2026-06-14T05:30:29.5674748Z",
  "consecutiveDailySignIns": 6,
  "successfulSignIns": 121,
  "lastSuccessfulSignIn": "2026-06-14T05:30:29.5704065Z",
  "leaderboardScores": 3,
  "avatars": [
    { ... },
    { ... }
  ],
  "loginProviders": [
    { ... },
    { ... }
  ],
  "totalBucketCloudSaves": 3,
  "totalCloudSaves": 15,
  "totalPrivateCloudSaves": 12,
  "totalBucketCloudSavesSize": 5674000,
  "totalCloudSavesSize": 24348000,
  "totalPrivateCloudSavesSize": 18674000,
  "totalRatings": 5,
  "totalRatingsValue": 875,
  "averageRatingPercent": 68.6275,
  "lastActive": "2026-06-14T05:30:29.5785358Z",
  "emailVerified": true,
  "preventAllEmails": true
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this player.

**playerName** `string`  
The publicly facing player name for this player.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this player was first registered in the game.

**consecutiveDailySignIns** `int32`  
Total number of consecutive days this player has logged in for.

**successfulSignIns** `int32`  
Total number of times this player has signed into their account.

**lastSuccessfulSignIn** [`datetime?`](../../data-types.md#internalH1Link0)  
Date and time of the last successful sign in for this player.

**leaderboardScores** `int32`  
Total number of leaderboard scores this player has.

**avatars** [`Array<Picture>`](../../common-objects/picture-object.md)  
If player has an avatar, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same avatar, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256` will be shown here along with the original avatar size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original avatar width.

**loginProviders** [`Array<PlayerLoginProvider>`](../../authentication/api-objects/player-login-provider.md)  
List of player login provider objects currently assigned to this player.

**totalBucketCloudSaves** `int32`  
Total number of cloud saves this player has in bucket storage.

**totalCloudSaves** `int32`  
Total number of cloud saves this player has, private and in buckets.

**totalPrivateCloudSaves** `int32`  
Total number of cloud saves this player has in their private store.

**totalBucketCloudSavesSize** `int64`  
Total size in bytes of all this players cloud saves in buckets.

**totalCloudSavesSize** `int64`  
Total size in bytes of all this players cloud saves, private and in buckets.

**totalPrivateCloudSavesSize** `int64`  
Total size in bytes of all this players private cloud saves.

**totalRatings** `int32`  
Total ratings this player has cast.

**totalRatingsValue** `int32`  
The sum of all this players ratings.  The summed values are normalised to a range of 0-255.

**averageRatingPercent** `decimal`  
The average rating this player casts expressed as a percentage 0-100.

**lastActive** [`datetime?`](../../data-types.md#internalH1Link0)  
The date and time UTC this player last interacted with these services.

**emailVerified** [`bool`](../../data-types.md#internalH1Link4)  
True if this player has provided an email address that they have verified via a confirmation email.

**preventAllEmails** [`bool`](../../data-types.md#internalH1Link4)  
True if all emails to this player will be prevented from being sent.  Can only be adjusted by editing the player directly via your CGS account.
