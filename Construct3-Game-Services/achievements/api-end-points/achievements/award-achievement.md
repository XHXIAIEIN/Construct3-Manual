---
title: "Award Achievements"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/award-achievement"
release: 495.2
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#session-key-authentication)
- [Request Parameters](#secret-key-authentication)
- [Success Response](#success-response)
- [Failure Response](#response-properties)

---

## Overview

This end point allows you to award or progress an achievement for a player.  If the achievement does not require progress, the value you pass to this end point will unlock that many achievements for the player up to the `maxUnlocks` value.  If the achievement is `progressionRequied`, the value you pass will progress the specified achievement.  You can pass negative values to remove achievements or deduct progress in the same way.

If you remove achievements already awarded, any XP bonuses granted will also be deducted from the players XP.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://achievements.construct.net/award.json
```

## Authenticating The Request

This end point can be called by [signed in](../../../authentication/sign-in-flow.md) players, or with [secret key](../../../games/api-keys.md) authentication.

### Session Key Authentication

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.



### Secret Key Authentication

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the player to award or progress the achievement for.  This parameter is only supported for requests using a secret key.

**achievementID** `string` *Required*  
The unique ID of the achievement you want to award or progress.

**value** `int32`  
If not progressive, the number of achievements to award to this player, otherwise the progression value.  You can pass in negative values to remove progression or achievements.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "playerAchievement": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**playerAchievement** [`PlayerAchievement`](../../../achievements/api-objects/player-achievement.md)  
The returned player achievement object.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Invalid achievement ID.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/award-achievement",
  "shouldRetry": false
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**errorMessage** `string`  
An error message with more detailed information on why the request failed.

**helpURL** `url (string)`  
A link to documentation which should provide help with the error.

**shouldRetry** [`bool`](../../../data-types.md#internalH1Link4)  
Should the client wait a short period of time and retry the request.  Usually this is false, but returns true if the request failed due to rate limiting.
