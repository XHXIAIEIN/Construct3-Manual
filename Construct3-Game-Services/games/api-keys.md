---
title: "API Keys"
source: "https://www.construct.net/en/game-services/manuals/game-services/games/api-keys"
release: 495
---

## On this page

- [Game API Keys](#create-api-key)
- [Create API Key](#suspend-key)
- [Suspend Key](#delete-key)
- [Delete Key](#internalH1Link3)

---

## Game API Keys

Some resources or requests you make on a game may require an API key.

> **Warning**  
> API keys should NEVER be exposed or distributed to clients.

## Create API Key

In your [Construct Services Account](https://www.construct.net/en/game-services/account), go to `Your Games`, select the game you wish to create an API key for then select `API Keys` from the left menu.

When you create an API key, the key will be shown to you in full once only.  Make sure you record this safely and secretly.  Once you continue to the next page, it will not be possible to show you the full key again.

## Suspend Key

When viewing your games API keys, you can suspend a key which will immediately stop the key from working.  You can unsuspend suspended keys at any time.

## Delete Key

Deleting a key permanently removes the key from your game and prevents it from being usable again.  All API requests coming through using this key will start failing.

If you wish to implement a new API key, we would recommend creating a new key, suspending the old key and once you confirm no more requests are incoming for the old key you can safely delete it.
