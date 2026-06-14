---
title: "Create a Bucket"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/create-bucket"
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

This end point allows you to create a [bucket](../../../cloud-save/api-objects/game-buckets.md).  Game buckets are containers that can hold multiple [cloud save blobs](../../../cloud.md).

You can set up buckets with different access modes.  For example, create a `PublicRead` bucket to upload game content to which players can only read from.  Or, create a `PublicReadWrite` bucket to allow players to upload shared content such as level designs.

`Private` buckets cannot be written to or read from by players - you typically don't need these but they can be used for more advanced implementations.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/createbucket.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**bucketName** `string` *Required*  
The name of the game bucket you're creating.  Cannot exceed `50` characters in length.

**accessMode** `string` *Required*  
The access mode of this bucket (case insensitive).  Must be one of `Private`, `PublicRead` or `PublicReadWrite`.

**allowRatings** [`bool`](../../../data-types.md#internalH1Link4) *Required*  
If [cloud save blobs](../../../cloud-save/api-objects/blob.md) in this bucket can be [rated](../../../ratings/concepts.md) by players.

**maxBlobs** `int32`  
Optionally specify the maximum number of [cloud save blobs](../../../cloud-save/api-objects/blob.md) allowed in this bucket.

**maxBlobSize** `int32`  
Optionally specify the maximum size in bytes of [cloud save blobs](../../../cloud-save/api-objects/blob.md) in this bucket. If a picture is uploaded with a blob, the size of the picture is counted towards this limit as well as the actual cloud save blob size.

**maxBlobsPerPlayer** `int16`  
Optionally specify the maximum number of blobs an individual player can save to this bucket.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "bucket": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**bucket** [`Bucket`](../../../cloud-save/api-objects/game-buckets.md)  
The bucket returned from the request.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/create-bucket",
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
