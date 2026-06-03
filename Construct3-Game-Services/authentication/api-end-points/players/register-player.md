---
title: "Register a Player"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/register-player"
release: 487.2
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

Creates a new player in your game.  This endpoint should be used for creating players without any sign in details, or creating players with a username/password set.  The [sign in](../../../authentication/api-end-points/players/sign-in.md) end point can be used to register players with a third party login provider as a sign in method.


<strong>Important:</strong> By default, this end point is disabled as it opens you up to spam/fake registrations.  To enable this end point, visit your games security settings.


If you want to specify a username/password for this new player, pass in the `username` and `password` parameters.  If you do not specify these parameters, when the session expires the players account will become unrecoverable as there will be no way to sign in.  Therefore it's strongly advised to force a username/password, or to encourage the player to either [link a login provider](../../../authentication/api-end-points/login-providers/link-login-provider.md) or [set a username/password](../../../authentication/api-end-points/players/set-username-password.md) before the session expires.


When a new player is registed, a new session is also created for this player and returned in the response.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/registerplayer.json
```

## Authenticating The Request

No authentication is required for calling this end point.

**secret** `string`  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**playerName** `string` *Required*  
The new player name you wish to set.  Name must be at least `1` character long and cannot exceed `50` characters in length.  The name will also be rejected if it looks like it is an email address.  Player names are the publically facing names, wheras the username is used for sign in purposes only.

**username** `string`  
The username you wish to set for this new player.  Usernames must be at least `3` characters long, and no more than `32` characters long.  Email addresses as usernames are not permitted.

**password** `string`  
The password you wish to set for this new player.  Passwords must be at least `8` characters long, and no more than `32` characters long.  Passwords must also contain at least one numeric, one uppercase, one lowercase, and one non-alphanumeric character.



A maximum password length is enforced because we hash passwords with `BCrypt` and CPU usages increases with password length during hashing.

**emailAddress** `string`  
Optionally pass in an email address for this user, allowing them to login with magic email links if your plan supports it.  Email addresses must be at least `4` characters long, and no more than `128` characters long.

**expiryMins** `uint32`  
How long until the session expires.  You can extend the session expiry using the [refresh session](../../../authentication/api-end-points/sessions/refresh-session.md) end point.  The default value is `1440` minutes.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "player": { ... },
  "session": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**player** [`Player`](../../../authentication/api-objects/player-object.md)  
The newly registered player as a player object.

**session** [`Session`](../../../authentication/api-objects/session-object.md)  
The session created for this player upon registration.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/register-player",
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
