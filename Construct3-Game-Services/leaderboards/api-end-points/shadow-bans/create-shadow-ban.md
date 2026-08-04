---
title: "Shadow-ban a Player or IP"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/shadow-bans/create-shadow-ban"
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

You can shadow ban IP addresses and player identifiers from your leaderboards.  This will still show their posted scores to the affected player identifiers and IP addresses, but will be hidden from view for everyone else viewing your leaderboard.

IP addresses are never stored in their raw format in our database, see our [privacy page](../../../leaderboards/privacy.md) for more information.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/createshadowban.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're creating the shadow ban for.

**playerID** [`guid`](../../../data-types.md#internalH1Link1)  
The player ID to shadow ban from this leaderboard. You must specify this, `scoreID`, `ipAddress` or `ipHash`.

**scoreID** [`guid`](../../../data-types.md#internalH1Link1)  
The score ID to shadow ban from this leaderboard.  Providing this will shadow ban the player + IP address associated with this score record. You must specify this, `playerID`, `ipAddress` or `ipHash`.

**ipAddress** `string`  
The IP address to shadow ban from this leaderboard. You must specify this, `playerID`, `scoreID` or `ipHash`.

**ipHash** `int32`  
The IP hash to shadow ban from this leaderboard. You must specify this, `playerID`, `scoreID` or `ipAddress`.

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
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/shadow-bans/create-shadow-ban",
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
