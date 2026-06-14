---
title: "Set Player Restrictions"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/set-player-restrictions"
release: 487.3
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#secret-key-authentication)
- [Request Parameters](#success-response)
- [Success Response](#response-properties)
- [Failure Response](#failure-response)

---

## Overview

Restrict a specific player from performing certain actions in your game/application.  The following restrictions with their corresponding ID's are:

**0 = Upload Avatar**  
Prevents the player from uploading an avatar image.

**1 = Change Player Name**  
Prevents the player from being able to change their name.

**101 = Cloud Save to Buckets**  
Prevents the player from cloud saving to game buckets.

**102 = Cloud Save to Buckets**  
Prevents the player from cloud saving to their player account.

**200 = Rate**  
Prevents the player from being able to rate objects.

If an error is returned, the players restrictions will not of been updated.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/setplayerrestrictions.json
```

## Authenticating The Request

This end point can only be called with [secret key](../../../games/api-keys.md) authentication and specifying which player ID you're making the request against.

### Secret Key Authentication

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

**playerID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The player ID you wish to make this request against.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**restrictedActions** `string`  
A CSV list of actions to restrict.  Values in this list can be the string value of the restricted action for example `Upload Avatar` (case insensitive), or the ID of the restricted action, for example `0`.  Don't send this parameter or send an empty string to indicate you wish to remove all existing restrictions currently on this player.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "The restriction with the ID 1337 doesn't exist.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/set-player-restrictions",
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
