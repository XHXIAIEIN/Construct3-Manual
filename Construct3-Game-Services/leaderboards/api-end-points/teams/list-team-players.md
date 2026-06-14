---
title: "List Players on a Team"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/teams/list-team-players"
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

Returns all players currently registered on a [team](../../../leaderboards/api-objects/team.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://leaderboards.construct.net/listteamplayers.json
```

## Authenticating The Request

No authentication is required for calling this end point.

**secret** `string`  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**leaderboardID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the leaderboard you're fetching team players from.

**teamID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the team you're fetching players from.

**order** `string`  
Order method to return players in.  Permitted values are `PlayerName` or `Score`.  Defaults to `PlayerName` if not specified.

**perPage** `int32`  
How many players you wish to return on each page of results.  Cannot be less than `1` or more than `50`.  Default value is `10`.

**page** `int32`  
The page of results you are requesting.  The first page is always `1`.  If this value is not specified the first page will be returned.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "pagination": { ... },
  "players": [
    { ... },
    { ... }
  ],
  "team": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**pagination** [`Pagination`](../../../common-objects/pagination-object.md)  
A pagination object helpful for navigating other pages of results.

**players** [`Array<TeamPlayer>`](../../../leaderboards/api-objects/team-player.md)  
The list of players returned in the request.

**team** [`ExpandedTeam`](../../../leaderboards/api-objects/expanded-team.md)  
The team object these players belong to.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-end-points/teams/list-team-players",
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
