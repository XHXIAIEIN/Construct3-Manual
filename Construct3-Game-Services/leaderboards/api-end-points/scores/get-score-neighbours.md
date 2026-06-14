---
title: "Get Score Neighbours"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-score-neighbours"
release: 487.3
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

Given a player ID or a score record ID, get the surrounding scores in the leaderboard.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/getscoreneighbours.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're fetching the scores for.

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The player ID to query. You must specify this or `scoreID`.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the score to query. You must specify this or `playerID`.

**range** `int16`  
How many scores to return on either side of the queried score.  If no value is specified, or an invalid value is specified this defaults to `5` which will return up to 11 scores (the queried score, plus up to 5 scores on each side).  The maximum value allowed is `50`.

**compareRanks** `int16`  
Optionally specify this value for leaderboards that support score history tracking. This value represents how many days ago you wish to compare returned scores in this query to. For example, if 10 is specified then the relevant score history object will be returned in the score object representing what this score was 10 days ago.

**requesterIP** `string`  
If using secret key authentication, you can pass an IP address here to return results as if this IP address made the request.  This is useful when building your own implementation and ensuring shadow banned scores are properly hidden/shown to the end user.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "scores": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**scores** [`Array<Score>`](../../../leaderboards/api-objects/score.md)  
The list of score objects returned from the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-score-neighbours",
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
