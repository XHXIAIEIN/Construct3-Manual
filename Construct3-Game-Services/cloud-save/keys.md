---
title: "Cloud Save Keys"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/keys"
release: 487.2
---

## On this page

- [Cloud Save Keys](#key-format)
- [Key Format](#internalH1Link1)

---

## Cloud Save Keys

If a cloud save is in a bucket, the key for the cloud save must be unique against all other cloud saves in that bucket.  If a cloud save belongs to a players account, the key must be unique for all cloud saves in that players account.

If a cloud save is deleted, the key is freed up and can be used again with a new cloud save.

## Key Format

- Cannot be an empty string
- Must be lowercase
- Must only contain alpha numeric characters (a-z, 0-9) and dots
- Cannot exceed `256` characters in length
- Cannot contain consecutive dots
- Cannot start or end with a dot

Keys do not need to be split into multiple parts with dots, but it is recommended to use key parts to organise cloud saves:

```none
world1.region5.savegames.1
world1.region5.screenshots.1
```

If you use key parts it's possible to retrieve all cloud saves in a bucket or your players account that contain a key part, for example "world1.region5".
