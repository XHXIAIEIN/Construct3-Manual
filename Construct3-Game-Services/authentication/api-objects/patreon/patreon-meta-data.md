---
title: "Meta Data Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/patreon/patreon-meta-data"
release: 495.2
---

## On this page

- [Example Meta Data](#example-meta-data)
- [Object Properties](#object-properties)

---

This object is returned along with a player's Patreon login provider.  It contains information about their current Patreon memberships and any tiers they are entitled to.  This information is only as fresh as the last time they logged into your game with Patreon.  To update this information, have the user sign in again with Patreon.

## Example Meta Data

```json
{
  "memberships": [
    { ... },
    { ... }
  ]
}
```

## Object Properties

**memberships** [`Array<PatreonMembership>`](../../../authentication/api-objects/patreon/membership.md)  
The list of Patreon memberships this player belongs to.
