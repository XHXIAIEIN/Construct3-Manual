---
title: "List Bonuses"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/bonuses/list-bonuses"
release: 495
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#request-parameters)
- [Request Parameters](#success-response)
- [Success Response](#response-properties)
- [Failure Response](#failure-response)

---

## Overview

This end point allows you to list [XP bonuses](../../../xp/api-objects/bonus-object.md) that run or have run between the specified dates.  Returned bonuses are ordered by soonest first.  You cannot search periods longer than `366` days, or periods further than `5` years ahead of time..

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://xp.construct.net/listbonuses.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**end** `int64` *Required*  
The end date and time bonuses to search until as a unix time stamp (seconds since Jan 01 1970).

**start** `int64`  
The start date and time bonuses to search from as a unix time stamp (seconds since Jan 01 1970).  If not specified, the requests date and time will be used.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "bonuses": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**bonuses** [`Array<XPBonus>`](../../../xp/api-objects/bonus-object.md)  
All bonuses returned in the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/bonuses/list-bonuses",
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
