---
title: "Update an Achievement"
source: "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/update-achievement"
release: 487.2
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#file-data)
- [Request Parameters](#success-response)
- [File Data](#response-properties)
- [Success Response](#failure-response)
- [Failure Response](#response-properties)

---

## Overview

This end point allows you to update properties on an existing [achievement](../../../achievements/api-objects/achievement.md).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://achievements.construct.net/updateachievement.json
```

## Authenticating The Request

This end point is for [secret key](../../../games/api-keys.md) authenticated requests only.  Signed in players cannot call this end point.

**secret** `string` *Required*  
Your games [secret API key](../../../games/api-keys.md).

 ## Request Parameters

**gameID** [`guid`](../../../data-types.md#internalH1Link1) *Required*  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**achievementID** `string` *Required*  
The unique ID of the achievement you want to delete.

**description** `string`  
If specified, the new description of the achievement.  Cannot exceed more than `512` characters long.

**name** `string`  
If specified, the new name of the achievement.  Must be at least `1` character long and no more than `128` characters long.  Names do not need to be unique.

**language** `string`  
If specified, the language ISO this achievements name and description are written in.  Must be one of `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.  Defaults to your games language if not specified.

**clientProgressAllowed** [`bool`](../../../data-types.md#internalH1Link4)  
If specified and true, client authenticated requests can award and progress achievements.  If specified and false, all awards + progress can only be made by requests using secret API keys.

**incrementOnly** [`bool`](../../../data-types.md#internalH1Link4)  
If true, negative values cannot be passed to award achievement end point.

**isSecret** [`bool`](../../../data-types.md#internalH1Link4)  
If specified and true, all requests to get or list this achievement will not return this achievement unless the request is authenticated with a secret API key.

**maxUnlocks** `int32`  
If specified, the new maximum number of times this achievement can be unlocked.  Defaults to `1` if not specified.

**progressionRequired** `int64`  
If specified the new amount of progression required to unlock the achievement.

**xpBonuses** `string`  
If specified the new XP bonus when the achievement is unlocked.  Send a single `int` value to award the same XP every time this achievement is unlocked.  If this achievement can be unlocked multiple times, you can send comma separated values such as `1=100,11=200,101=1000`.  This awards `100` XP for the first 10 of this achievement awarded, `200` XP for the next 90 and so on.

**unachievedLogo** `string`  
If setting an unachieved logo for this achievement, the base64 encoded logo picture data.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `unachievedLogoURL` or `unachievedLogoData`.

**unachievedLogoURL** `url (string)`  
If setting an unachieved logo for this achievement, the absolute URL of the logo.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `unachievedLogo` or `unachievedLogoData`.

**achievedLogo** `string`  
If setting an achieved logo for this achievement, the base64 encoded logo picture data.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `achievedLogoURL` or `achievedLogoData`.

**achievedLogoURL** `url (string)`  
If setting an achieved logo for this achievement, the absolute URL of the logo.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `achievedLogo` or `achievedLogoData`.

**culture** `string`  
Optionally specify a [supported culture code](../../../culture.md) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## File Data

This request additionally supports the posting of files.  These files should be sent as `multipart/form-data,` with the corresponding keys.

**unachievedLogoData** `multipart/form-data`  
If setting an unachieved logo for this achievement, the binary data for the logo.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `unachievedLogo` or `unachievedLogoURL`.

**achievedLogoData** `multipart/form-data`  
If setting an achieved logo for this achievement, the binary data for the logo.  `Gif`, `Jpeg`, `Png`, `WebP`, `SVG` with a maximum size of `500 KB`. If specified, you can't specify `achievedLogo` or `achievedLogoURL`.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "achievement": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success** [`bool`](../../../data-types.md#internalH1Link4)  
If the request was successfull or not.

**achievement** [`Achievement`](../../../achievements/api-objects/achievement.md)  
An Achievement object.

**formattingCulture** `string`  
If some return values are [culture specific](../../../culture.md), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Invalid achievement ID.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/achievements/api-end-points/achievements/update-achievement",
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
