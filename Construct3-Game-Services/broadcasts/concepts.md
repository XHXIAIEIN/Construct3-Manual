---
title: "Broadcast Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/concepts"
release: 487.3
---

## On this page

- [What is the Broadcast Service?](#translations)
- [Translations](#unread-message-status)
- [Unread Message Status](#internalH1Link2)

---

## What is the Broadcast Service?

The Broadcast Service allows you to create channels, and then publish messages to those channels that any player regardless as to if they are [signed in](../authentication/api-end-points/players/sign-in.md) or not can read.  Messages can be any form of text, HTML, BBCode or just plain text.

You might for example have a channel for new features in your game.  Whenever you release updates, you can create a new message in this channel listing all the new features this update contains.

You can have multiple channels and messages, but it's important to note broadcast messages should be considered public, and published reasonably infrequently (for example daily, not every minute).

It is also possible for players to rate published messages using the [rate message](../broadcasts/api-end-points/ratings/rate-message.md) end point.

You do not need to use the API end points to create channels and publish messages, this can all be done as and when you wish in your [CGS account](https://www.construct.net/en/game-services/account).  The end points are available to allow you to tie in to your own systems and workflows.

## Translations

When you create a [broadcast message](../broadcasts/api-objects/broadcast-message.md) you must specify the language you've written the message in.  This can be any of `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.

When calling endpoints such as [get message](index.md##b.GetMessage##) you can pass in a `language` parameter which can be any of `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN-GB`, `EN-US`, `ES`, `ES-419`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT-BR`, `PT-PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH-HANS`, `ZH-HANT` and the message content will be served in this language using DeepL's translation engine.

Please note translation is usage based, and the amount of text you can translate will depend on what CGS plan your game is under.

## Unread Message Status

The [message object](../broadcasts/api-objects/broadcast-message.md) has a property `isRead`, and [channel objects](../broadcasts/api-objects/broadcast-channel.md) have the property `anyUnreadMessages`.  When a player requests the [get message](index.md##b.GetMessage##) end point, this message along with all preceeding messages in this channel will be marked as read for that player.

When sending requests that retrieve channels or messages, if a player is signed in you should send the `sessionKey` with the request - this will then show if a retrieved message is unread, or a channel contains any unread messages.  The status of these properties for players are saved permanently.  If no player session key is provided, the values are based on the requesters IP address.  The status of these properties for IP addresses are only stored for around `6` hours after which when they request the messages/channels again they may show as unread.
