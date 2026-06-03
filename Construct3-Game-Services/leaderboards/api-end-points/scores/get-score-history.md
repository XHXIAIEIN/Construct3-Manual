---
title: "Get Score History"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-score-history"
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

Given a player ID or a score record ID, return the daily history of this score for the last 730 days.  This is only supported on leaderboards where one score per player identifier is set, and score history tracking is an enabled feature.

> **Tip**  
> If the rankings and score value do not change day to day then no history record will exist - there will be a gap in the records.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/getscorehistory.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're fetching the score history for.

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The player ID to query. You must specify this or `scoreID`.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The unique record ID of the score to query. You must specify this or `playerID`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "scoreID": "e76cf907-fff1-411b-9b06-17dbd5e79555",
  "player": { ... },
  "scoreHistory": [
    { ... },
    { ... }
  ],
  "country": "gb",
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the score the history is being returned on.

**player** [`Player`](../../../authentication/api-objects/player-object.md)  
The player this score belongs to.

**scoreHistory** [`Array<ScoreHistory>`](../../../leaderboards/api-objects/score-history.md)  
The list of score history records for this score.

**country** `string`  
If country ranks are enabled on the leaderboard, the detected country this score originates from.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/get-score-history",
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
