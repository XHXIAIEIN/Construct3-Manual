---
title: "Rating Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/ratings/api-objects/rating-object"
release: 487.3
---

## On this page

- [The Rating Object](#example-rating)
- [Example Rating](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Rating Object

This object represents a single rating for a rateable object, or for a specific dimension of a rateable object.

## Example Rating

```json
{
  "value": 4,
  "maxRating": 5,
  "date": "2025-09-22T15:07:16.833",
  "formattedDate": "9/22/2025 3:07:16 PM"
}
```

## Object Properties

**value** [`uint8`](../../data-types.md#internalH1Link2)  
The value of this rating.

**maxRating** [`uint8`](../../data-types.md#internalH1Link2)  
The maximum permitted rating.

**date** [`datetime`](../../data-types.md#internalH1Link0)  
The date this rating was cast.

**formattedDate** `string`  
The date this rating was cast, formatted to the specified [requested culture](../../culture.md).
