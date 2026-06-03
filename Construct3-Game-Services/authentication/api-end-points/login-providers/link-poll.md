---
title: "Link Polling"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-poll"
release: 487.2
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

When making a [link request](../../../authentication/api-end-points/login-providers/link-login-provider.md) a poll token will be provided.  Use this poll token on this request to monitor the status of the link request.

The response property `linked` will always be `false` until the user completes the sign in with the provider.  If the user takes longer than `5` minutes, the request will return an error saying the token has now expired.

If a user completes a sign in with the provider within `5` minutes, there are three outcomes:

- A failure response is returned indicating the sign in failed.  Typically this is because the user chose not to complete the sign in with the login provider, or they entered invalid credentials.  This response is only returned once, after which repeat calls with the poll token will show an invalid poll token error.

Not all login providers will return an error, in which case the token will eventually expire if the user abandons or cancels the login.

- The property `linked` will return true, indicating that the login provider is now linked to this players account.  This response is only returned once, after which repeat calls with the poll token will show an invalid poll token error.
- The property `linked` will return false, and the properties `forceCode`, `forceURL` and `forceCodeExpiryMins` will be returned.  This means that the account with the provider the player logged into currently belongs to another players account.  At this point, you should give the player the option to [force link](../../../authentication/api-end-points/login-providers/force-link.md) the account.  You should warn them that if they continue to force the link, the other account may become unrecoverable if that's the only login provider currently assigned to it.  By posting the returned `forceCode` to the [force link](../../../authentication/api-end-points/login-providers/force-link.md) end point, the provider will be removed from the other account and assigned to this players account.  The returned property `forceCodeExpiryMins` indicates how many minutes the player has to force the link, after which they will need to restart the linking process.



## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/linkpoll.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**pollToken** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The link poll token returned on the original [link request](../../../authentication/api-end-points/login-providers/link-login-provider.md).

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "linked": false,
  "forceCode": "888fb4d5-8a1a-4a63-b95d-5dc5aa0dc795",
  "forceURL": "https://...",
  "forceCodeExpiryMins": 7,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**linked** [`bool`](../../../data-types.md#internalH1Link4)  
Returns true if the link was sucessful.  This will always return false until the user completes the sign in with the login provider.

**forceCode** [`guid?`](../../../data-types.md#internalH1Link1)  
A one use code to [force link](../../../authentication/api-end-points/login-providers/force-link.md) the login provider to the players account.

**forceURL** `url (string)`  
The URL to call to [force link](../../../authentication/api-end-points/login-providers/force-link.md) the login provider to the players account.  The `forceCode` must be posted to this URL.

**forceCodeExpiryMins** `int32`  
How many minutes the force code is valid for before it expires and a new one will need to be generated.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-poll",
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
