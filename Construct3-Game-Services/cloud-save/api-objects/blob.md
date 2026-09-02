---
title: "Cloud Save Blob Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-objects/blob"
release: 495.2
---

## On this page

- [Example Blob](#example-blob)
- [Object Properties](#object-properties)

---

This object can be rated by players.  Read about [how ratings work](../../ratings/concepts.md).

## Example Blob

```json
{
  "id": "a6ea8d1c-b48c-4040-8398-d816f904b027",
  "key": "savegame.1",
  "bucket": { ... },
  "player": { ... },
  "created": "2026-09-02T05:30:23.959773Z",
  "sizeBytes": 1024,
  "downloadURL": "https://cloudsave.construct.net/download...",
  "ratingStatus": { ... },
  "pictures": [
    { ... },
    { ... }
  ],
  "pictureSizeBytes": 13,
  "name": "My save game"
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique record ID for this cloud save blob.

**key** `string`  
A unique key for this cloud save.

**bucket** [`Bucket`](../../cloud-save/api-objects/game-buckets.md)  
If cloud save belongs in a [game bucket](../../cloud-save/api-objects/game-buckets.md), the game bucket object will be shown here.

**player** [`Player`](../../authentication/api-objects/player-object.md)  
If cloud save was created by a player, the associated player object will be shown here.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date this cloud save was originally created.

**sizeBytes** `int32`  
The size in bytes of the cloud save blob.

**downloadURL** `string`  
The URL to download the cloud save blob from.

**ratingStatus** [`RatingStatus`](../../ratings/api-objects/rating-status-object.md)  
The [rating status](../../ratings/api-objects/rating-status-object.md) of this object.

**pictures** [`Array<Picture>`](../../common-objects/picture-object.md)  
If this cloud save object has an associated picture, an array of [picture objects](../../common-objects/picture-object.md) will be returned here. Each picture object is the same associated picture, but in different available sizes. Sizes available are based on widths, and the widths 16, 32, 64, 128, 256, 512, 1024 and 2048 will be shown here along with the original picture size if it is different to this predetermined list. Some widths may not show if the original picture width is smaller than any of the available widths.

**pictureSizeBytes** `int64?`  
If this cloud save object has an associated picture, the size of the original uploaded picture in bytes.

**name** `string`  
The publicly facing name for this cloud save.
