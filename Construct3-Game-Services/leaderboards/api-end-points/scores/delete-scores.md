---
title: "Delete Scores"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/delete-scores"
release: 487.2
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

Deletes a score either by specific score ID, or batch deletes scores for a specific player ID.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/deletescores.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're deleting scores on.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the score you're deleting. You must specify this or `playerID`.

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the player to delete scores for.  Will delete up to `10000` of this players scores on each call, with the `mightHaveMore` response parameter indicating if they have more scores.  Scores are deleted in no particular order. You must specify this or `scoreID`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "mightHaveMore": false,
  "scoresDeleted": 21,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**mightHaveMore** [`bool`](../../../data-types.md#internalH1Link4)  
If the scores deleted is the maximum allowed to be deleted in one request, this value will show as true indicating that there may be more scores to delete in this request.

**scoresDeleted** `int32`  
The number of scores deleted. This can range from 0 to 10000. No more than 10000 scores can be deleted in any one request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/delete-scores",
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
