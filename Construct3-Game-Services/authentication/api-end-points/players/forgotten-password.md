---
title: "Forgotten Password"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/forgotten-password"
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

This is only supported if your plan includes email credits.  If a user has a verified email address, they can use this end point to request a password reset.

When the link in the email is clicked, the user will be redirected to a web page allowing them to enter a new password.  If the user does not have a username or password, it will allow them to create one.   The link is valid for 15 minutes.

For security and privacy reasons, a success message will always be shown for this request unless there is an issue with the format of the email address provided (for example it's too short or it's not a valid email address).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/forgottenpassword.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**emailAddress** `string` *Required*  
The email address of the user requesting the forgotten password.  This email address must be tied to a players account who has a verified email address.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/forgotten-password",
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
