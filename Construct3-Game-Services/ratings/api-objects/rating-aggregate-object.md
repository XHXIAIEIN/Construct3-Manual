---
title: "Rating Aggregate Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/ratings/api-objects/rating-aggregate-object"
release: 487
---

## On this page

- [The Rating Aggregate Object](#example-aggregate)
- [Example Aggregate](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Rating Aggregate Object

When retrieving a rateable object, an aggregate rating object may be returned.  This object gives an overview of ratings for this rateable object or for a rating dimension for the rateable object.

## Example Aggregate

```json
{
  "totalRatings": 414,
  "formattedTotalRatings": "414",
  "averageRating": 4.282,
  "averageRatingAsPercentage": 95.0,
  "formattedAverageRating": "4.282",
  "maxRating": 5,
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "lastRating": "2025-09-22T15:07:16.833",
  "formattedLastRating": "9/22/2025 3:07:16 PM",
  "title": "How good are the graphics?",
  "description": "On a scale 0-10 please rate the graphics in this game."
}
```

## Object Properties

**totalRatings** `int32`  
Total number of ratings cast.

**formattedTotalRatings** `string`  
Total number of ratings cast, formatted to the specified [requested culture](../../culture.md).

**averageRating** `decimal`  
The average rating.

**averageRatingAsPercentage** `decimal`  
The average rating expressed as a percentage (0-100).

**formattedAverageRating** `string`  
The average rating, formatted to the specified [requested culture](../../culture.md).

**maxRating** [`uint8`](../../data-types.md#internalH1Link2)  
The maximum permitted rating for this dimension.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language the title and description are written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language this dimension is returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.

**lastRating** [`datetime?`](../../data-types.md#internalH1Link0)  
The date a player last cast a rating.

**formattedLastRating** `string`  
The date a player last cast a rating, formatted to the specified [requested culture](../../culture.md).

**title** `string`  
The title for this dimension.

**description** `string`  
A description for this dimension.
