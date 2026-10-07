---
title: "Get a Message"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/get-message"
release: 495.2
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

This end point allows you to retrieve a single [message](../../../broadcasts/api-objects/broadcast-message.md).

If a player is signed in, you should pass their session key in with the request as once the message is retrieved it will be [marked as read](../../../broadcasts/concepts.md#internalH1Link2) for that player.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/getmessage.json
```

## Authenticating The Request

No authentication is required for calling this end point, however if the request is being made by a signed in player it is recommended to pass in a `sessionKey` parameter as the request response will return additional information useful to the player.

**sessionKey** `string`  
The [session key](../../../{Replacements.Authentication.Objects.Session%257.md) of the player who is currently signed in and making this request.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**messageID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the message you want to retrieve.

**requestedLanguage** [`Language`](../../../common-objects/language.md)  
Optionally specify a [language](../../../languages.md) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "message": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**message** [`BroadcastMessage`](../../../broadcasts/api-objects/broadcast-message.md)  
The message object returned from the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/get-message",
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
