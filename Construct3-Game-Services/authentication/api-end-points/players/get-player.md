---
title: "Get a Player"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/get-player"
release: 487
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

This end point allows you to retrieve a [player object](../../../authentication/api-objects/player-object.md) based on the players player name or players ID.  As the only way to query this end point is with a secret key, this should only be called by back end services.

As a player, this request is never needed as the relevant player objects are returned in responses when interacting with the other services and end points.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/getplayer.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the player you are querying. You must specify this or `playerName`.

**playerName** `string`  
The name of the player you are querying.  Player names are case insensitive. You must specify this or `playerID`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "player": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**player** [`Player`](../../../authentication/api-objects/player-object.md)  
The player returned from the query.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/get-player",
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
