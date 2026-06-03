---
title: "Rating Dimension Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/ratings/api-objects/rating-dimension-object"
release: 487.2
---

## On this page

- [The Rating Dimension Object](#example-dimension)
- [Example Dimension](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Rating Dimension Object

It is possible to set up rating dimensions for rateable objects.  A rating dimension allows players to vote on specific aspects of a rateable object.  For example, if you have user submitted level designs represented with Cloud Saves, you may want players to be able to rate the Cloud Save in terms of creativity, graphics and gameplay instead of just a single generic rating.

## Example Dimension

```json
{
  "id": "game-graphics",
  "title": "How good are the graphics?",
  "description": "On a scale 0-10 please rate the graphics in this game.",
  "maxRating": 10,
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  }
}
```

## Object Properties

**id** `string`  
A unique string based ID for this dimension.  ID's can only contain alpha-numeric characters, dots or dashes and cannot exceed 50 characters in length.

**title** `string`  
The title for this dimension.

**description** `string`  
A description for this dimension.

**maxRating** [`uint8`](../../data-types.md#internalH1Link2)  
The maximum value that a player can give for this dimension.  The minimum permitted rating value is always 0.  Set this value to 1 for boolean ratings (for example, "Would you recommend this?  Yes or no.").  The maximum permitted value is 255.

**originalLanguage** [`Language`](../../common-objects/language.md)  
The language the title and description are written in.

**responseLanguage** [`Language`](../../common-objects/language.md)  
The language this dimension is returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
