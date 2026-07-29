---
title: "List Player Achievements"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-player-achievements"
release: 495
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#success-response)
- [Request Parameters](#response-properties)
- [Success Response](#failure-response)
- [Failure Response](#response-properties)

---

## Overview

This end point allows you to return all [achievements](../../../achievements/api-objects/achievement.md) a player has been awarded or has made progress to being awarded.  If an achievement is secret, it will only show if the player has unlocked it at least once.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://achievements.construct.net/listplayerachievements.json
```

## Authenticating The Request

No authentication is required for calling this end point.

**secret** `string`  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**playerID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The player ID to fetch achievements for.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "playerAchievements": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**playerAchievements** [`Array<PlayerAchievement>`](../../../achievements/api-objects/player-achievement.md)  
The returned player achievements objects.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Invalid player ID.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-player-achievements",
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
