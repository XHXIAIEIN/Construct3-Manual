---
title: "Create a Message"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/create-message"
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

This end point allows you to create a new [message](../../../broadcasts/api-objects/broadcast-message.md) in a [channel](../../../broadcasts/api-objects/broadcast-channel.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/createmessage.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**channelID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the channel you are publishing this message to.

**title** `string`  
A title for this message.  If specified, the maximum length of the title can be found in your plan settings.

**text** `string` *Required*  
The text of this message.  Can be in any text format, for example HTML, BBCode or just plain text.

**language** `string`  
Provide this parameter to update the language that the name and description of this channel are written in.  Permitted values are `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.  If not specified, your [channels language](../../../broadcasts/api-objects/broadcast-channel.md) will be used.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/create-message",
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
