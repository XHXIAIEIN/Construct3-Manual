---
title: "IP Shadow Ban Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/ip-shadow-ban"
release: 487.2
---

## On this page

- [Example Shadow Banned IP](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Shadow Banned IP

```json
{
  "country": "GB",
  "dateBanned": "2026-06-03T05:30:26.14488Z",
  "ipHash": 2181339444
}
```

## Object Properties

**country** `string`  
If the country of the underlying IP is known, the ISO 3166-1 alpha-2 country code for the IP will be shown in this property.

**dateBanned** [`datetime`](../../data-types.md#internalH1Link0)  
The date the ban was created.

**ipHash** `int32`  
The hashed IP address of the IP that is shadow banned.
