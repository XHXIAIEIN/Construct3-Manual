---
title: "List Awarded Players"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-awarded-players"
release: 495.2
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#request-parameters)
- [Request Parameters](#success-response)
- [Success Response](#response-properties)
- [Failure Response](#failure-response)

---

## Overview

This end point allows you to return all [players](../../../authentication/api-objects/player-object.md) who have been awarded and achievement.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://achievements.construct.net/listawardedplayers.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**achievementID** `string` *Required*  
The unique ID of the achievement you want to get.

**order** `string`  
How you wish the players returned in this query to be ordered.  Can be one of `MostRecentlyAwarded`, `LeastRecentlyAwarded`, `MostAwarded` or `LeastAwarded`.  The default value if not specified is `MostRecentlyAwarded`.

**perPage** `int32`  
How many players you wish to return on each page of results.  Cannot be less than `1` or more than `200`.  Default value is `20`.

**page** `int32`  
The page of results you are requesting.  The first page is always `1`.  If this value is not specified the first page will be returned.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "achievement": { ... },
  "awardedPlayers": [
    { ... },
    { ... }
  ],
  "pagination": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**achievement** [`Achievement`](../../../achievements/api-objects/achievement.md)  
The achievement object.

**awardedPlayers** [`Array<AwardedPlayer>`](../../../achievements/api-objects/player-achievement.md)  
The returned awarded players objects.

**pagination** [`Pagination`](../../../common-objects/pagination-object.md)  
If there are more players returned than can be shown in one page of results, the pagination object can help you browse through the other pages of results.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Invalid game ID.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/list-awarded-players",
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
