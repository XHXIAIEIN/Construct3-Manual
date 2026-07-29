---
title: "Disconnect Login Provider"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/disconnect"
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

Disconnect a [login provider](../../../authentication/login-providers.md) from a users account.  They will no longer be able to login with this login provider unless they [link it](../../../authentication/api-end-points/login-providers/link-login-provider.md) again.

If this is the players only login provider, an error will be returned indicating that removing this login provider will make the account unrecoverable.  Instead, consider [deleting the player](../../../authentication/api-end-points/players/delete-player.md).

This response will return success if the login provider was successfully disconnected, or if the player did not have this login provider connected in the first place.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/disconnect.json
```

## Authenticating The Request

This end point is for [signed in](../../../authentication/sign-in-flow.md) players only.

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**provider** `string` *Required*  
The [login provider](../../../authentication/login-providers.md) you wish to disconnect (case insensitive).  Must be one of `UsernamePassword`, `Apple`, `BattleNet`, `Discord`, `Email`, `Facebook`, `Github`, `Google`, `ItchIO`, `Microsoft`, `Patreon`, `Reddit`, `Steam`, `Yandex`.  If `Email` is specified, the call will delete the players email address.

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
  "errorMessage": "Disconnecting this players last login provider would make the account unrecoverable.  Instead, delete the player account if you wish to continue.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/disconnect",
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
