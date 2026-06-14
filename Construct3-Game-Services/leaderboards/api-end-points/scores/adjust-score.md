---
title: "Adjust a Score"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/adjust-score"
release: 487.3
---

## On this page

- [Overview](#adjusting-score-with-session-authentication)
- [Request URL](#adjusting-score-with-secret-api-key-authentication)
- [Authenticating The Request](#request-url)
- [Request Parameters](#authenticating-the-request)
- [Success Response](#session-key-authentication)
- [Failure Response](#secret-key-authentication)

---

## Overview

Adjusts the score value of an existing [score](../../../leaderboards/api-objects/score.md) in the leaderboard. You can pass a positive value to increase the value of the score, or a negative value to decrease it.  A leaderboard must permit score adjustments in it's settings otherwise calls to adjust scores will fail.

Adjusting a score will not update the date of the score, but will increment it's updates counter.

### Adjusting Score with Session Authentication

If you're calling this end point with a players session key to authenticate the request, if you do not pass in the `scoreID` parameter, the players best score will be adjusted.

### Adjusting Score with Secret API Key Authentication

If you're calling this end point with a secret API key, then you need to pass in either a `scoreID` parameter *or* a `playerID` parameter which would adjust this players current best score.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/adjustscore.json
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

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're adjusting a score on.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the score you're adjusting.

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The ID of the player to adjust the score for.  This parameter is only supported for requests using a secret key.  If there are multiple scores for the passed player ID then this players best score will be adjusted.

**adjustment** `int64` *Required*  
The amount you wish to adjust the existing score by.  Pass a negative value to decrease the score, or a positive value to increase the score.  The updated value must be no less than `-9223372036854775808` and no more than `9223372036854775807` otherwise an error will be returned.

**hash** `string`  
If you are authenticating this request with a players session key, then a hash for the adjust score request must be provided.  This makes it harder for players to submit fake scores or modify posted values in-flight.

A hash is generated as the SHA256 of a string of values in the request:

```js
var key = (leaderboardID + "." + adjustment + "." + unixTimestamp).Normalize();
return SHA256(key);
```

**timestamp** `int64` *Required*  
The unix timestamp of the date this request was sent. (seconds since January 1st 1970, UTC). Adding historic scores or scores for future dates is not supported.

**opt1** `int16`  
The amount to adjust optional value 1 by.  Omit this parameter to not change the existing value.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.  If the adjustment results in a value out of these bounds, the score won't be adjusted and an error will be returned.

**opt2** `int16`  
The amount to adjust optional value 2 by.  Omit this parameter to not change the existing value.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.  If the adjustment results in a value out of these bounds, the score won't be adjusted and an error will be returned.

**opt3** `int16`  
The amount to adjust optional value 3 by.  Omit this parameter to not change the existing value.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.  If the adjustment results in a value out of these bounds, the score won't be adjusted and an error will be returned.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "personalBest": false,
  "score": { ... },
  "leaderboard": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**personalBest** [`bool`](../../../data-types.md#internalH1Link4)  
Is this a personal best for the player who posted the score?

**score** [`Score`](../../../leaderboards/api-objects/score.md)  
The score object for the new score.

**leaderboard** [`LeaderboardStatus`](../../../leaderboards/api-objects/leaderboard.md)  
The status of the leaderboard after this score has been posted.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/adjust-score",
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
