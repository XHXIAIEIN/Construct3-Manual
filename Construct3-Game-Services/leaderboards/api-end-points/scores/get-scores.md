---
title: "Get Scores"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-scores"
release: 487.2
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

Return paginated results of scores.  Various filters are supported allowing you to:

- Return the all time scores for a leaderboard
- Return country specific all time scores for a leaderboard
- Return daily, weekly, monthly or yearly scores for a leaderboard for all countries or specific countries

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/getscores.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're fetching scores from.

**country** `string`  
Optionally provide an `ISO 3166-1 Alpha-2` country code you wish to filter results by.

**compareRanks** `int16`  
Optionally specify this value for leaderboards that support score history tracking. This value represents how many days ago you wish to compare returned scores in this query to. For example, if 10 is specified then the relevant score history object will be returned in the score object representing what this score was 10 days ago.

**range** `string`  
Can be either `All`, `Daily`, `Weekly`, `Monthly` or `Yearly`. If specified, will filter the results by this time period. Weekly leaderboards run Monday to Sunday.

**rangeOffset** `int16`  
If range is specified, you can offset the returned results by this amount. For example, a range of `Daily` with an offset of `1` will return yesterdays daily leaderboard. A range of Monthly with a range of `5` will return the monthly leaderboard from 5 months ago.

**requesterIP** `string`  
If using secret key authentication, you can pass an IP address here to return results as if this IP address made the request.  This is useful when building your own implementation and ensuring shadow banned scores are properly hidden/shown to the end user.

**requesterPlayerID** [`guid`](../../../data-types.md#internalH1Link1)  
If using secret key authentication, you can pass a player ID here to return results as if this player made the request.  This is useful when building your own implementation and ensuring shadow banned scores are properly hidden/shown to the end user.

**perPage** `int32`  
How many scores you wish to return on each page of results.  Cannot be less than `1` or more than `500`.  Default value is `20`.

**page** `int32`  
The page of results you are requesting.  The first page is always `1`.  If this value is not specified the first page will be returned.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "pagination": { ... },
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

**pagination** [`Pagination`](../../../common-objects/pagination-object.md)  
A pagination object helpful for navigating other pages of results.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-scores",
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
