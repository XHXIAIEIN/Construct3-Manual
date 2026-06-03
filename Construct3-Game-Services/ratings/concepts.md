---
title: "Rating Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/ratings/concepts"
release: 487.2
---

## On this page

- [Ratings](#rating-values)
- [Rating Values](#basic-ratings-dimensionless)
- [Basic Ratings (Dimensionless)](#rating-dimensions)
- [Rating Dimensions](#under-the-hood)
- [Under the Hood](#internalH1Link4)

---

## Ratings

Various objects are allowed to be rated by players, such as [cloud saves](../cloud-save/api-objects/blob.md).

Objects usually have owners (for example a cloud save uploaded by Player1 is owned by Player1).  The owner of a rateable object cannot cast ratings on their own object.

## Rating Values

Ratings cannot be negative, and a rating value of 0 is always permitted.  The maximum possible rating value is 255.

You can usually specify the maximum permitted rating value permitted for objects.  For dimensionless ratings this is usually specified on the relevant CGS account settings page.  For rating dimensions, you can specify the maximum permitted rating value for each dimension.

If you want a rating to be a simple yes/no (for example "Would you recommend this?") you would specify the maximum rating value as 0.

## Basic Ratings (Dimensionless)

All rateable objects have a basic rating, also known as a dimensionless rating.  This is the simplest way to rate an object, you simply post the rating value.

## Rating Dimensions

Some objects permit you to create rating dimensions.  These are multiple rating options for an object that allow players to rate the same object in multiple ways.  Each dimension can specify it's own maximum possible rating value.

For example, you may wish to set up the following rating dimensions for cloud saves in a public bucket that is used for players to share their level designs.  You may create a dimension "Would you recommend?" with a maximum value of 1 to represent a yes/no vote.  You could also additionally create a new dimension "How do you rate the creativity of this level?" with a maximum rating value of 10.

## Under the Hood

Rating values are stored as byte values (0 - 255).  When a rating is cast, the rating value is normalised and returned ratings are de-normalised to the max rating value for the specific dimension.

For example, if a rating dimension has a maximum value of 10 specified, and a rating of 7 is cast the rating value is normalised and stored:

```js
var rating = 7;
var normalisedRating = rating * (255/10);
```

In this case, the normalised rating would equal `179`.  In effect, this rating is stored as 179/255 which approximately equals 7/10.

When a rating is requested, the rating is denormalised:

```js
var normalisedRating = 179;
var denormalisedRating = rating / (255/10);
```

In this example, this would return 7.

By normalising and denormalising rating values to the maximum rating value of 255, it allows us to change the max rating property of dimensions without needing to recalculate all the ratings and averages.
