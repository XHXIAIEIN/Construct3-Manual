---
title: "Mark All Messages As Read"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/mark-read"
release: 487
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

Calling this end point with a session key will mark all messages for the specified channel as read for that player.  If no player is specified, the messages in the channel will be marked as read based on the requesters IP address.  Read more about [unread status](../../../broadcasts/concepts.md#internalH1Link2) for messages.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/markallasread.json
```

## Authenticating The Request

No authentication is required for calling this end point, however if the request is being made by a signed in player it is recommended to pass in a `sessionKey` parameter as the request response will return additional information useful to the player.

**sessionKey** `string`  
The [session key](../../../{Replacements.Authentication.Objects.Session%257.md) of the player who is currently signed in and making this request.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**channelID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the channel you want to mark all messages as read for this player.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/mark-read",
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
