---
title: "Update a Bucket"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/edit-bucket"
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

This end point allows you to update properties on an existing [bucket](../../../{Replacements.CloudSaves.Objects.Bucket%257.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/editbucket.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**bucketID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the bucket you wish to edit.

**bucketName** `string`  
The new name of the game bucket. Omit this parameter to keep the existing name.  Cannot exceed `50` characters in length. You must specify at least one of this, `accessMode`, `allowRatings`, `maxBlobSize`, `maxBlobs` or `maxBlobsPerPlayer`.

**accessMode** `string`  
The new access mode of this bucket (case insensitive).  Omit this parameter to keep the existing access mode.  Must be one of `Private`, `PublicRead` or `PublicReadWrite`. You must specify at least one of this, `bucketName`, `allowRatings`, `maxBlobSize`, `maxBlobs` or `maxBlobsPerPlayer`.

**allowRatings** [`bool`](../../../data-types.md#internalH1Link4)  
If [cloud save blobs](../../../cloud-save/api-objects/blob.md) in this bucket can be [rated](../../../ratings/concepts.md) by players.  Omit this parameter to keep the existing setting. You must specify at least one of this, `bucketName`, `accessMode`, `maxBlobSize`, `maxBlobs` or `maxBlobsPerPlayer`.

**maxBlobSize** `int32`  
The maximum size in bytes of [cloud save blobs](../../../cloud-save/api-objects/blob.md) in this bucket.  Omit this parameter to keep the existing setting.   If a picture is uploaded with a blob, the size of the picture is counted towards this limit as well as the actual cloud save blob size. You must specify at least one of this, `bucketName`, `accessMode`, `allowRatings`, `maxBlobs` or `maxBlobsPerPlayer`.

**maxBlobs** `int32`  
The maximum number of [cloud save blobs](../../../cloud-save/api-objects/blob.md) allowed in this bucket.  Omit this parameter to keep the existing name. You must specify at least one of this, `bucketName`, `accessMode`, `allowRatings`, `maxBlobSize` or `maxBlobsPerPlayer`.

**maxBlobsPerPlayer** `int16`  
Optionally specify the maximum number of blobs an individual player can save to this bucket. You must specify at least one of this, `bucketName`, `accessMode`, `allowRatings`, `maxBlobSize` or `maxBlobs`.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/edit-bucket",
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
