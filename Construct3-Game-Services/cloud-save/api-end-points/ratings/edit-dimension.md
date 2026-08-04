---
title: "Edit Rating Dimension"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/ratings/edit-dimension"
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

This end point allows you to update properties on an existing [rating dimension](../../../ratings/api-objects/rating-dimension-object.md) setup on a [game bucket](../../../cloud-save/api-objects/game-buckets.md).

We strongly recommend you read about [rating concepts](../../../ratings/concepts.md) to understand how dimensions in ratings work.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/bucketeditratingdimension.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**thingID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the [game bucket](../../../cloud-save/api-objects/game-buckets.md) the rating dimension exists on that you wish to update.

**dimensionID** `string` *Required*  
The ID of the [rating dimension](../../../ratings/api-objects/rating-dimension-object.md) you're editing.  It is not possible to change the ID's of rating dimensions once created.

**title** `string`  
A new title for this rating dimension, or omit this parameter to keep existing value.  Cannot exceed `128` characters in length.

**description** `string`  
A new description for this rating dimension, or omit this parameter to keep existing value.  Cannot exceed `1024` characters in length.

**maxRating** [`uint8`](../../../data-types.md#internalH1Link2)  
The new maximum allowed rating value, or omit this parameter to keep existing value.  `0` is always permitted, so the minimum permitted value is `1` and the maximum permitted value is `255`.

**language** `string`  
The language this rating dimensions title and description are written in, or omit this parameter to keep existing value.  Permitted values are `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.

**requestedLanguage** [`Language`](../../../common-objects/language.md)  
Optionally specify a [language](../../../languages.md) for returning translatable properties into this language.  If not specified, your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "dimension": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**dimension** [`RatingDimension`](../../../ratings/api-objects/rating-dimension-object.md)  
The returned dimension for the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/ratings/edit-dimension",
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
