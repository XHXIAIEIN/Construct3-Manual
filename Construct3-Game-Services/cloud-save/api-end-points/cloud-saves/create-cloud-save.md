---
title: "Create a Cloud Save"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/create-cloud-save"
release: 487.2
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#session-key-authentication)
- [Request Parameters](#secret-key-authentication)
- [File Data](#file-data)
- [Success Response](#success-response)
- [Failure Response](#response-properties)

---

## Overview

Use this end point to upload a cloud save (and optionally an associated picture) to a players cloud save account or a [game bucket](../../../cloud-save/api-objects/game-buckets.md).  A cloud save can only have up to one associated picture.

If specifying a key for the cloud save that already exists, an error will return unless the original uploader of the blob is the authenticated user.  In this case, the existing blob will be overwritten.  If the blob being overwritten had a picture the picture will be deleted.

Supported picture file types and the minimum and maximum picture dimensions can be found in your account settings.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/create.json
```

## Authenticating The Request

This end point can be called by [signed in](../../../authentication/sign-in-flow.md) players, or with [secret key](../../../games/api-keys.md) authentication.

### Session Key Authentication

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.



### Secret Key Authentication

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**key** `string` *Required*  
The [key](../../../cloud-save/keys.md) for the cloud save.  Cannot exceed `256` characters in length, and must only contain alphanumeric and dot characters.

**bucketID** [`guid`](../../../data-types.md#internalH1Link1)  
If this cloud save is being uploaded to a [bucket](../../../cloud-save/api-objects/game-buckets.md), provide the bucket ID here.

**name** `string`  
An optional name for the cloud save - can be anything such as a file name.  Cannot exceed `128` characters in length.

**picture** `string`  
If uploading an associated picture at the same time, the base64 encoded picture being set. If specified, you can't specify `pictureURL` or `pictureData`.

**pictureURL** `url (string)`  
If uploading an associated picture at the same time, the absolute URL of the picture being set. If specified, you can't specify `picture` or `pictureData`.

**requestedLanguage** [`Language`](../../../common-objects/language.md)  
Optionally specify a [language](../../../languages.md) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## File Data

This request additionally supports the posting of files.  These files should be sent as `multipart/form-data,` with the corresponding keys.

**data** `multipart/form-data` *Required*  
The data of the cloud save.

**pictureData** `multipart/form-data`  
If uploading an associated picture at the same time, the data of the picture. If specified, you can't specify `picture` or `pictureURL`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "blob": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**blob** [`Blob`](../../../cloud-save/api-objects/blob.md)  
The blob object returned from the query.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/create-cloud-save",
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
