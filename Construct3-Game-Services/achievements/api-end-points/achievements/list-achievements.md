---
title: "List Achievements"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-achievements"
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

This end point allows you to return all [achievements](../../../achievements/api-objects/achievement.md).  If any achievements being fetched are `secret=true`, they will not be returned in this response unless the request is authenticated with a secret API key, or the request is authenticated with a session key and the associated player has unlocked this achievement.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://achievements.construct.net/listachievements.json
```

## Authenticating The Request

No authentication is required for calling this end point.

**secret** `string`  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "achievements": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**achievements** [`Array<Achievement>`](../../../achievements/api-objects/achievement.md)  
The returned Achievement objects.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Invalid game ID.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-achievements",
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
