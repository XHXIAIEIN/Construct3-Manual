---
title: "Post a Score"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/post-score"
release: 495
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#session-key-authentication)
- [Request Parameters](#secret-key-authentication)
- [Success Response](#success-response)
- [Failure Response](#response-properties)

---

## Overview

Records a new [score](../../../leaderboards/api-objects/score.md) into a leaderboard.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/postscore.json
```

## Authenticating The Request

This end point can be called by [signed in](../../../authentication/sign-in-flow.md) players, or with [secret key](../../../games/api-keys.md) authentication.

### Session Key Authentication

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.



### Secret Key Authentication

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

**playerID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The player ID you wish to make this request against.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're posting a score to.

**hash** `string`  
If you are authenticating this request with a players session key, then a hash for the post score request must be provided.  This makes it harder for players to submit fake scores or modify posted score values in-flight.

A hash is generated as the SHA256 of a string of values in the request:

```js
var key = (leaderboardID + "." + score + "." + unixTimestamp).Normalize();
return SHA256(key);
```

**requesterIP** `string`  
If you are authenticating this request with a secret key, this value is required and represents the IP address of the client the score belongs to.

**score** `int64` *Required*  
The score you're posting. The maximum value of a score is `9223372036854775807` and the minimum value is `-9223372036854775808`.

**timestamp** `int64` *Required*  
The unix timestamp of the date this request was sent. (seconds since January 1st 1970, UTC). Adding historic scores or scores for future dates is not supported.

**opt1** `int16`  
An optional value to store with this score record.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.

**opt2** `int16`  
An optional value to store with this score record.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.

**opt3** `int16`  
An optional value to store with this score record.  The maximum value of an optional value is `32767` and the minimum value is `-32768`.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/scores/post-score",
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
