---
title: "Sign In Polling"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/sign-in-poll"
release: 487.3
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

When making a [sign in request](../../../authentication/api-end-points/players/sign-in.md) a poll token will be provided.  Use this poll token on this request to monitor the status of the sign in request.

The response property `success` will always be `true` until the user completes the sign in with the provider.  If the user takes longer than `5` minutes, the request will return an error saying the token has now expired.

If a user completes a sign in with the provider within `5` minutes, there are two outcomes:

- `signInFailed` returns as `true` along with a `signInErrorMessage` indicating the sign in failed.  Typically this is because the user chose not to complete the sign in with the login provider, or they entered invalid credentials.  This response is only returned once, after which repeat calls with the poll token will show an invalid poll token error.

Not all login providers will return an error, in which case the token will eventually expire if the user abandons or cancels the login.

- The property `session` will return a new [session object](../../../authentication/api-objects/session-object.md), indicating that the sign in succeeded.  This response is only returned once, after which repeat calls with the poll token will show an invalid poll token error.



## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/signinpoll.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**pollToken** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The sign in poll token returned on the original [sign in request](../../../authentication/api-end-points/players/sign-in.md).

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "session": { ... },
  "signInErrorMessage": "The user cancelled the sign in request.",
  "signInFailed": true,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**session** [`Session`](../../../authentication/api-objects/session-object.md)  
The new [session object](../../../authentication/api-objects/session-object.md) if the sign in was succesful.

**signInErrorMessage** `string`  
Details about why the sign in failed if it failed or was abandoned.

**signInFailed** [`bool`](../../../data-types.md#internalH1Link4)  
If true, indicates the sign in failed, timed out or was abandoned.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/sign-in-poll",
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
