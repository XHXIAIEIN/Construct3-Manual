---
title: "Set Picture"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/set-picture"
release: 487
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

Use this end point to set a picture for a cloud save.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/setpicture.json
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

**blobID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the cloud save blob you wish to set a picture for.

**picture** `string`  
The base64 encoded picture being set. You must specify this, `pictureURL` or `pictureData`.

**pictureURL** `url (string)`  
The absolute URL of the picture being set. You must specify this, `picture` or `pictureData`.

**requestedLanguage** [`Language`](../../../common-objects/language.md)  
Optionally specify a [language](../../../languages.md) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## File Data

This request additionally supports the posting of files.  These files should be sent as `multipart/form-data,` with the corresponding keys.

**pictureData** `multipart/form-data`  
The data of the picture. You must specify this, `picture` or `pictureURL`.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/set-picture",
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
