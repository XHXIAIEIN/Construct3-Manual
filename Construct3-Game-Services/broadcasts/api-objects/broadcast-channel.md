---
title: "Channel Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel"
release: 487
---

## On this page

- [The Broadcast Channel Object](#example-channel)
- [Example Channel](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Broadcast Channel Object

You can have multiple Broadcast Channels, and each Channel can contain multiple Broadcast Messages.  Channels are a way of grouping messages into categories, for example you might have a channel for "Game Updates & News" and another channel for "Events & Promotions".

## Example Channel

```json
{
  "id": "2cfd9a96-4c5c-4c43-b5b0-baa51b093f75",
  "name": "Game Updates & News",
  "description": "The latest updates and news from Space Blaster dev team!",
  "created": "2025-09-22T14:30:02.437",
  "formattedCreated": "9/22/2025 2:30:02 PM",
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "broadcasts": 23,
  "formattedBroadcasts": "23",
  "lastBroadcast": "2025-09-24T14:30:02.437",
  "formattedLastBroadcast": "9/24/2025 2:30:02 PM",
  "allowRatings": true,
  "anyUnreadMessages": true,
  "dimensionlessMaxRatingValue": 4,
  "ratingDimensions": {
    "key1": { ... },
    "key2": { ... }
  },
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  }
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this channel.

**name** `string`  
A publicly facing name for this channel.

**description** `string`  
A publicly facing description for this channel.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this channel was first created.

**formattedCreated** `string`  
The date and time this channel was first created, formatted to the specified [requested culture](../../culture.md).

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language the channels properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.

**broadcasts** `int32`  
The total number of broadcast messages currently available in this channel.

**formattedBroadcasts** `string`  
The total number of broadcast messages currently available in this channel, formatted to the specified [requested culture](../../culture.md).

**lastBroadcast** [`datetime?`](../../data-types.md#internalH1Link0)  
The date and time of the last broadcast published to this channel.

**formattedLastBroadcast** `string`  
The date and time of the last broadcast published to this channel, formatted to the specified [requested culture](../../culture.md).

**allowRatings** [`bool`](../../data-types.md#internalH1Link4)  
If this channel supports rating of messages.

**anyUnreadMessages** [`bool`](../../data-types.md#internalH1Link4)  
Indicates if this channel contains any unread messages by the current requester.  Read about the [unread status](../../broadcasts/concepts.md#internalH1Link2).

**dimensionlessMaxRatingValue** [`uint8`](../../data-types.md#internalH1Link2)  
If ratings are allowed for messages in this channel, this property shows what the maximum rating value for dimensionless ratings is.  The minuimum allowed rating value is always `0`.

**ratingDimensions** [`Dictionary<string, RatingDimension>`](../../ratings/api-objects/rating-dimension-object.md)  
If ratings are allowed for messages in this channel, this property shows all available [rating dimensions](../../ratings/api-objects/rating-dimension-object.md) that can be rated.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language this channels properties (name and description) are written in.
