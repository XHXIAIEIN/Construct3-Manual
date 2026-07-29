---
title: "Refresh a Session"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/sessions/refresh-session"
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

Extends the life of a players session by the initial set session expiry when signing in the player.  Refreshing the session doesn't change the session key.

If on sign in, the players session expiry was set to 6 hours, upon refreshing the session the new session expiry will now be 6 hours in the future.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/refreshsession.json
```

## Authenticating The Request

This end point is for [signed in](../../../authentication/sign-in-flow.md) players only.

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "session": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**session** [`Session`](../../../authentication/api-objects/session-object.md)  
The session returned from the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/sessions/refresh-session",
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
