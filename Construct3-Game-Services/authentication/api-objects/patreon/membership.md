---
title: "Membership Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/patreon/membership"
release: 487
---

## On this page

- [Example Membership](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Membership

```json
{
  "id": "350cc0d3-bf87-4228-8e8f-76f124bf5989",
  "lifetimeSupportCents": 10000,
  "currentlyEntitledAmountCents": 1000,
  "campaign": { ... },
  "currentlyEntitledTiers": [
    { ... },
    { ... }
  ]
}
```

## Object Properties

**id** `string`  
ID of this players membership.

**lifetimeSupportCents** `int64`  
The total amount that the member has ever paid to the campaign in the campaign's currency. `0` if never paid.

**currentlyEntitledAmountCents** `int64`  
The amount in cents that the member is entitled to.  This includes a current pledge, or payment that covers the current payment period.

**campaign** [`PatreonCampaign`](../../../authentication/api-objects/patreon/campaign.md)  
The campaign this memberships belongs to.

**currentlyEntitledTiers** [`Array<PatreonTier>`](../../../authentication/api-objects/patreon/tier.md)  
The tiers that the member is entitled to. This includes a current pledge, or payment that covers the current payment period.
