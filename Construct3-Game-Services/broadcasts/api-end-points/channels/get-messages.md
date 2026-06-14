---
title: "Get Messages"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/get-messages"
release: 487.3
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

This end point allows you to retrieve all [messages](../../../broadcasts/api-objects/broadcast-message.md) in a specified [broadcast channel](../../../broadcasts/api-objects/broadcast-channel.md).  Messages are returned newest first.

> **Tip**  
> This end point only retrieves the excerpt from the message text, not the full messages text.  To retrieve the full message text, you need to call the [get message end point](index.md##b.GetMessage##).

If a player is signed in, you should pass their session key in with the request as each message object will return if the player has read it or not.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/getmessages.json
```

## Authenticating The Request

No authentication is required for calling this end point, however if the request is being made by a signed in player it is recommended to pass in a `sessionKey` parameter as the request response will return additional information useful to the player.

**sessionKey** `string`  
The [session key](../../../{Replacements.Authentication.Objects.Session%257.md) of the player who is currently signed in and making this request.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**channelID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the channel you want to retrieve messages from.

**perPage** `int32`  
How many players you wish to return on each page of results.  Cannot be less than `1` or more than `50`.  Default value is `10`.

**page** `int32`  
The page of results you are requesting.  The first page is always `1`.  If this value is not specified the first page will be returned.

**requestedLanguage** [`Language`](../../../common-objects/language.md)  
Optionally specify a [language](../../../languages.md) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "messages": [
    { ... },
    { ... }
  ],
  "pagination": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**messages** [`Array<BroadcastMessage>`](../../../broadcasts/api-objects/broadcast-message.md)  
The messages returned from the request.

**pagination** [`Pagination`](../../../common-objects/pagination-object.md)  
A pagination object to help browse though pages of results if there are too many to show in one request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/get-messages",
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
