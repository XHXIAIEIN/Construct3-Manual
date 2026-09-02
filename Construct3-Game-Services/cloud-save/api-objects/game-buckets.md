---
title: "Game Bucket Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-objects/game-buckets"
release: 495.2
---

## On this page

- [The Game Bucket Object](#example-game-buckets)
- [Example Game Buckets](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Game Bucket Object

A Game Bucket is a container in your game for Cloud Save Blobs.  Each bucket has its own access mode, size limits and other properties.

## Example Game Buckets

```json
{
  "id": "7f972c54-c0f3-4e23-a9dc-99fe23695fdd",
  "accessMode": "PublicReadWrite",
  "allowRatings": true,
  "created": "2026-09-02T05:30:23.9868635Z",
  "maxBlobs": 100,
  "maxBlobSizeBytes": 1048576,
  "maxBlobsPerPlayer": null,
  "name": "My bucket",
  "totalBlobs": 12,
  "totalBytes": 1604302
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique record ID for this game bucket.

**accessMode** `string`  
The access mode of this bucket. Will be on of `Private`, `PublicRead` or `PublicReadWrite`.

**allowRatings** [`bool`](../../data-types.md#internalH1Link4)  
Are cloud saves in this bucket rateable? Even if this value is true, cloud saves are only rateable if the accessMode is not private.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this game bucket was created.

**maxBlobs** `int32?`  
How many cloud saves are allowed in this bucket before it's full and new cloud saves are rejected.  If null, there is no limit.

**maxBlobSizeBytes** `int32`  
The maximum permitted size in bytes of cloud saves in this bucket. If an associated picture is uploaded with a cloud save, this is included in the limit.

**maxBlobsPerPlayer** `int16?`  
How many cloud saves individual players are allowed to upload to this bucket. If null, there is no limit.

**name** `string`  
The publicly facing name for this game bucket.

**totalBlobs** `int32`  
How many cloud saves currently exist in this bucket.

**totalBytes** `int64`  
How many bytes of data currently are saved in this bucket. This figure includes sizes of associated pictures.
