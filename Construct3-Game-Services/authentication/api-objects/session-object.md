---
title: "Session Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/session-object"
release: 487.3
---

## On this page

- [Example Session](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Session

```json
{
  "playerID": "de68c664-c25d-4b43-915f-0dd1c96e8136",
  "playerName": "Guffing Viking",
  "avatars": [
    { ... },
    { ... }
  ],
  "expiry": "2026-06-10T06:20:12.9703956Z",
  "gameID": "14272382-d95d-471e-b0e5-debc3defdd8a",
  "key": "80SB!,1VGBA+AE87WE;6_ZY{=|Z4Y!^ET^7..."
}
```

## Object Properties

**playerID** [`guid`](../../data-types.md#internalH1Link1)  
The player ID this session belongs to.

**playerName** `string`  
The publicly facing player name for this player.

**avatars** [`Array<Picture>`](../../common-objects/picture-object.md)  
If player has an avatar, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same avatar, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256` will be shown here along with the original avatar size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original avatar width.

**expiry** [`datetime`](../../data-types.md#internalH1Link0)  
The expiry date time of this session.  Can be extended by calling [refresh session API end point](../../authentication/api-end-points/sessions/refresh-session.md).

**gameID** [`guid`](../../data-types.md#internalH1Link1)  
The game ID this player belongs to.

**key** `string`  
The session key for this player.  This should be kept private as it allows access to a players account.  Session keys are randomly generated strings `128` characters long.
