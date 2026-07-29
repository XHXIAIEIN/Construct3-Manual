---
title: "Campaign Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/patreon/campaign"
release: 495
---

## On this page

- [Example Campaign](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Campaign

```json
{
  "id": "f7c95b18-d5df-4b40-bc29-35ab442a7961",
  "vanity": "Construct Team",
  "creationName": "Creating amazing game development software!",
  "url": "https://www.patreon.com/c/ConstructTeam"
}
```

## Object Properties

**id** `string`  
ID of this Patreon campaign.

**vanity** `string`  
The campaign's vanity. Can be null.

**creationName** `string`  
The type of content the creator is creating, as in "vanity is creating creation_name". Can be null.

**url** `string`  
A URL to access this campaign on patreon.com
