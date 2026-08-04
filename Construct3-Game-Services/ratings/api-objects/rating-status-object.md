---
title: "Rating Status Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/ratings/api-objects/rating-status-object"
release: 495
---

## On this page

- [The Rating Status Object](#example-rating-status)
- [Example Rating Status](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Rating Status Object

When rateable objects are returned in a response, this status object is also returned.  It shows the current rating values for this object, along with the authenticated players cast ratings if a session key is passed with the request.

## Example Rating Status

```json
{
  "isRateable": true,
  "ratings": {
    "key1": { ... },
    "key2": { ... }
  },
  "myRatings": {
    "key1": { ... },
    "key2": { ... }
  }
}
```

## Object Properties

**isRateable** [`bool`](../../data-types.md#internalH1Link4)  
Are players allowed to cast votes on this object or not.

**ratings** [`Dictionary<string, RatingAggregate>`](../../ratings/api-objects/rating-aggregate-object.md)  
A list of all [rating dimensions](../../ratings/api-objects/rating-dimension-object.md) ID's and their corresponding rating aggregate.  An empty dimension ID represents the dimensionless rating aggregate.

**myRatings** [`Dictionary<string, Rating>`](../../ratings/api-objects/rating-object.md)  
If the request originated from a player providing a session key, this property is returned containing a list of all [rating dimensions](../../ratings/api-objects/rating-dimension-object.md) ID's and this players corresponding rating record.  An empty dimension ID represents the dimensionless rating.  The rating record will be `null` if the player hasn't cast a vote on this dimension yet.
