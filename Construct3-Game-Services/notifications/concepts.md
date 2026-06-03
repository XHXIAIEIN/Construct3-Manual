---
title: "Create a Game"
source: "https://www.construct.net/en/game-services/manuals/game-services/notifications/concepts"
release: 487.2
---

## On this page

- [Instant Player Notifications](#connecting-to-notifications)
- [Connecting to Notifications](#message-data)
- [Message Data](#newbroadcastmessage)

---

## Instant Player Notifications

All players if they are signed in or not can receive instant notifications when new broadcast messages are published.  Signed in players can receive more message types, such as when they have been awarded an achievement, earned XP or were promoted to a new XP rank.

By design, messages do not contain the respective full objects.  For example when a new broadcast message is published only a reference to the message ID is sent.  Clients should then retrieve the message in a separate call.

## Connecting to Notifications

If you're using the official Construct 3 plugin, please refer to the [plugin reference here](../../Construct3-Manual/plugin-reference/construct-game-services.md).  If you're using the .NET or Unity Plugin, see the [C# code example here](https://github.com/Scirra/Construct-Services-DotNet-Class-Library#live-notifications).

You can create your own notification client using web sockets, the URL you need clients to connect to is:

```none
wss://auth.constructdev.net/wshandler
```

Add the query string parameters `gameID` and optionally `sessionKey` for signed in players.  The server will refuse to receive messages, any attempt to send a message to the server will result in the socket being closed.

## Message Data

Messages are sent to clients as JSON data.  All messages have a `type` property, and a few other properties that give more information about the notification.

### NewBroadcastMessage

Is published to clients when a new broadcast message is published.  This message has the following properties:

**type** `string`  
The message type of this message.  Will be `NewBroadcastMessage` for this message.

**channelID** [`guid`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link1)  
The ID of the channel the message was published to.

**messageID** [`guid`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link1)  
The ID of the newly published message.

### AchievementAwarded

Is published to a signed in player when they are awarded (or unawarded!) an achievement.

**type** `string`  
The message type of this message.  Will be `AchievementAwarded` for this message.

**achievementID** [`guid`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link1)  
The ID of the awarded achievement.

**awarded** `int32`  
How many of this achievement have just been awarded to this player.  Typically this would be `1` but if your achievement allows multiple to be awarded this number could be higher.  This number will be negative if the achievement has be unawarded from the player.

### XPChanged

Is published to a signed in player when their XP changes through being awarded XP or having XP taken away.

**type** `string`  
The message type of this message.  Will be `XPChanged` for this message.

**change** `int64`  
How much this players XP has just been changed by.  Negative values indicate XP was deducted from this player.

**currentXP** `int64`  
The players XP after the update.  Adding `change` to this value lets you know what the players XP was before the update.

### XPRankChanged

Is published to a signed in player when they are promoted or demoted to a new XP rank.

**type** `string`  
The message type of this message.  Will be `XPRankChanged` for this message.

**oldRankID** [`guid`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link1)  
The ID of the players previous rank.

**newRankID** [`guid`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link1)  
The ID of the players new rank.

**isPromotion** [`bool`](https://www.construct.net/out?u=https%3a%2f%2fwww.constructdev.net%2fen%2fgame-services%2fmanuals%2fgame-services%2fdata-types%23internalH1Link4)  
Value is `true` if this change is a rank promotion, otherwise `false` indicating the player has been demoted.
