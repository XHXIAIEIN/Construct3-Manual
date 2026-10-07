---
title: "Player Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/player-object"
release: 495.2
---

## On this page

- [Example Player](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Player

```json
{
  "id": "5386210a-c69e-464f-ba47-cd01dea8103b",
  "created": "2026-10-07T05:30:19.5443387Z",
  "playerName": "Chuckling Warrior",
  "avatars": [
    { ... },
    { ... }
  ],
  "lastActive": "2026-10-07T05:30:19.5443387Z"
}
```

## Object Properties

**id** [`guid`](../../data-types.md#internalH1Link1)  
A unique ID for this player.

**created** [`datetime`](../../data-types.md#internalH1Link0)  
The date and time this player was first registered in the game.

**playerName** `string`  
The publicly facing player name for this player.

**avatars** [`Array<Picture>`](../../common-objects/picture-object.md)  
If player has an avatar, a list of [picture objects](../../common-objects/picture-object.md). Each picture object is the same avatar, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256` will be shown here along with the original avatar size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original avatar width.

**lastActive** [`datetime?`](../../data-types.md#internalH1Link0)  
The date and time UTC this player last interacted with these services.
