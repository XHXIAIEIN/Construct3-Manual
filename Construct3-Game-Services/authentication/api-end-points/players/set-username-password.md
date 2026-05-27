---
title: "Set Username + Password"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/set-username-password"
release: 487
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

You can use this end point for the following purposes:



- Setting a username/password for a player to sign in with if they do not have a username/password set.  If the player has no username/password, both `username` and `password` parameters must be sent in the request.
- Changing their currently set username/password if they currently have one set.  If you only wish to change the username, only send the `username` parameter.  If you only want to change their password, only send the `password` parameter.  Or, you can send both parameters to update both at the same time.


Usernames should be considered secret, and not exposed to other players.  The `playerName` should be showed publiclly.  Usernames cannot be email addresses.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/setusernamepassword.json
```

## Authenticating The Request

This end point can be called by [signed in](../../../authentication/sign-in-flow.md) players, or with [secret key](../../../games/api-keys.md) authentication.

### Session Key Authentication

**sessionKey** `string` *Required*  
The [session key](../../../authentication/api-objects/session-object.md) of the player you're making the request against.



### Secret Key Authentication

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

**playerID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The player ID you wish to make this request against.

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**username** `string`  
The username you wish to set for this player.  Usernames must be at least `3` characters long, and no more than `32` characters long.  Email addresses as usernames are not permitted.

**password** `string`  
The password you wish to set for this player.  Passwords must be at least `8` characters long, and no more than `32` characters long.  Passwords must also contain at least one numeric, one uppercase, one lowercase, and one non-alphanumeric character.



A maximum password length is enforced because we hash passwords with `BCrypt` and CPU usages increases with password length during hashing.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/set-username-password",
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
