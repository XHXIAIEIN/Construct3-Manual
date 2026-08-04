---
title: "Get Cloud Saves"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/get-cloud-saves"
release: 495
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#session-key-authentication)
- [Request Parameters](#secret-key-authentication)
- [Success Response](#success-response)
- [Failure Response](#response-properties)

---

## Overview

Use this end point to return paginated cloud saves a [bucket](../../../cloud-save/api-objects/game-buckets.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/getbucketsaves.json
```

## Authenticating The Request

This end point can be called with no authentication or by [signed in](../../../authentication/sign-in-flow.md) players, or with [secret key](../../../games/api-keys.md) authentication.

### Session Key Authentication

**sessionKey** `string`  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.



### Secret Key Authentication

**secret** `string`  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**bucketID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the bucket you wish to fetch cloud saves for.

**name** `string`  
Filter cloud saves by their name.  Matches cloud save blobs with this whole word in the name property.  Partial matches are not supported (EG: `est` will not match `my test blob` but `test` will match the blob).

**key** `string`  
Filter cloud saves by their key.  For example, passing `my.blob` will match `my.blob.test` and `testing.my.blob`.

**playerIDs** `string`  
Filter cloud saves by the player ID that they were created by.  Must be presented in a CSV list.  Cannot contain more than `10` player ID's.

**blobIDs** `string`  
Filter cloud saves by their unqiue ID's.  Must be presented in a CSV list.  Cannot contain more than `100` player ID's.

**rating** `string`  
Filter cloud saves by their minimum average rating value.  You can provide multiple dimensions in a CSV list with the dimension ID and minimum average, for example `mydimension1=4.2,mydimension2=6`.  Leave the dimension ID empty to filter on the dimensionless average rating.  You cannot filter this parameter by more than `3` dimensions.

**totalRatings** `string`  
Filter cloud saves by the minimum total ratings cast.  You can provide multiple dimensions in a CSV list with the dimension ID and minimum, for example `mydimension1=100,mydimension2=50`.  Leave the dimension ID empty to filter on the dimensionless minimum ratings.  You cannot filter this parameter by more than `3` dimensions.

**orderBy** `string`  
The order you want cloud save blobs returned.  Must be one of `NameAZ`, `NameZA`, `KeyAZ`, `KeyZA`, `Newest`, `Oldest`, `HighestRated` or `LowestRated`.  If not specified default value is `Newest`.

**perPage** `int32`  
How many cloud save blobs you wish to return on each page of results.  Cannot be less than `1` or more than `100`.  Default value is `10`.

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
  "pagination": { ... },
  "blobs": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**pagination** [`Pagination`](../../../common-objects/pagination-object.md)  
Pagination object to assist with browsing through other pages of cloud save blobs.

**blobs** [`Array<Blob>`](../../../cloud-save/api-objects/blob.md)  
The cloud save blobs returned on this page of results.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/get-cloud-saves",
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
