---
title: "Create a Rank"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/ranks/create-rank"
release: 487
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#file-data)
- [Request Parameters](#success-response)
- [File Data](#response-properties)
- [Success Response](#failure-response)
- [Failure Response](#response-properties)

---

## Overview

This end point allows you to create a new [XP rank](../../../xp/api-objects/rank-object.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://xp.construct.net/createrank.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**xp** `int64` *Required*  
The XP level required to achieve this rank.

**title** `string` *Required*  
A title for the rank, for example 'General'.

**description** `string`  
A description for the rank.

**language** `string`  
Provide this parameter to set the language that the title and description are written in.  Permitted values are `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.  If not specified, your games default language will be used.

**logo** `string`  
If uploading a logo for this rank, the base64 encoded logo picture data. If specified, you can't specify `logoURL` or `logoData`.

**logoURL** `url (string)`  
If setting a logo for this rank, the absolute URL of the logo. If specified, you can't specify `logo` or `logoData`.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## File Data

This request additionally supports the posting of files.  These files should be sent as `multipart/form-data,` with the corresponding keys.

**logoData** `multipart/form-data`  
If setting a logo for this rank, the binary data for the logo. If specified, you can't specify `logo` or `logoURL`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "rank": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**rank** [`XPRank`](../../../xp/api-objects/rank-object.md)  
An XP rank object.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/ranks/create-rank",
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
