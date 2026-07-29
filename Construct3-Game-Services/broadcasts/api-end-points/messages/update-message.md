---
title: "Update a Message"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/update-message"
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

This end point allows you to update properties on an existing [message](../../../broadcasts/api-objects/broadcast-message.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/updatemessage.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**messageID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the message you want to update.

**title** `string`  
Provide this parameter to change the messages title, otherwise omit it to keep the existing message title.  The maximum length can be found in your account settings. You must specify at least one of this, `text` or `language`.

**text** `string`  
Provide this parameter to change the messages text, otherwise omit it to keep the existing message text.  Can be in any text format, for example HTML, BBCode or just plain text. You must specify at least one of this, `title` or `language`.

**language** `string`  
Provide this parameter to update the language that the title and text of this message are written in, otherwise omit it to keep the existing set language.  Permitted values are `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`. You must specify at least one of this, `title` or `text`.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/messages/update-message",
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
