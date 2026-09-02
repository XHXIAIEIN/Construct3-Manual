---
title: "Cloud Save Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/concepts"
release: 495.2
---

## On this page

- [What is the Cloud Save Service?](#game-buckets)
- [Game Buckets](#rating-cloud-saves)
- [Rating Cloud Saves](#associated-pictures)
- [Associated Pictures](#use-cases)
- [Use Cases](#internalH1Link4)

---

## What is the Cloud Save Service?

Cloud save allows players to save blobs of data to the cloud.  When they [sign in to your game](../authentication/sign-in-flow.md) from any device, they will have access to download these blobs of data again.  Data blobs can be anything - text files, binary data, pictures etc.

When a player saves a blob, they can either choose to save it to their own player account which means only they will have access to it, or they can save it in game buckets which are available to all players.

> **Warning**  
> Even though cloud save has access control over who can read cloud saves, this should **never** be relied upon as secure storage.  You should also never store private or confidential data in this service - you should always assume that players will have access at some point to any data that exists in your CGS cloud save account.
> It is strictly prohibited to store any personally identifiable data in your CGS cloud save account.

A cloud save cannot be edited (although the associated picture can be).

All cloud saves have an associated key with them which can be used to organise and find cloud saves.  You can read more about [how keys work here](../cloud-save/keys.md).

## Game Buckets

Game buckets can be thought of as folders on a computer.  Players can save blobs of data to these buckets, and read other players uploaded blobs.

It's very important to take care when handling downloaded blobs and not to trust them by default.  It is theoretically possible for players to be able to manipulate the data that gets saved.

Game buckets can be customised in many ways including restrictions on how much data or how many cloud saves players are allowed to save into them.

Game buckets have 3 types of access:

**Private**  
Players cannot read or write to private game buckets.  Data in these buckets can only be accessed using an [API key](../games/api-keys.md).

**PublicRead**  
Players can download cloud saves from these buckets, but they are not able to save to them.  You must use an [API key](../games/api-keys.md) or your Construct Game Services account to upload blobs to these buckets.

**PublicReadWrite**  
Players are allowed to read and write to these buckets.

## Rating Cloud Saves

If a cloud save exists in a game bucket with **PublicRead** or **PublicReadWrite**, players can rate the cloud saves.   We recommend reading about [rating concepts](../ratings/concepts.md) for an overview on how to use ratings and set up rating dimensions.

Rating cloud saves opens up some exciting possibilities, for example you can have a public game bucket for players to upload their level designs to - and other players can then rate the levels.  When showing the available levels to download to the player base you can return the results ordered by the highest rated.  By setting up multiple rating dimensions, you can ask players for each cloud save if they would recommend the level (yes/no), how they rate the design of the level on a scale 0-10 and how they rate the level overall on a scale 0-*n*.

## Associated Pictures

Along with each cloud save, you are also able to optionally set an associated picture for the cloud save.  In the above example where players are sharing their level designs to a public game bucket, they can also upload a picture showing the design of the level or a promotional image to encourage players to download their design.

## Use Cases

With the above features, it is possible to implement cloud save into your game in a way that enables the following use cases (and any others you can imagine!):

- Players can save their game progress and resume at a later date
- You can create a **PublicRead** bucket and upload new content for your player base to download from
- You can create a **PublicReadWrite** bucket for players to share their level designs and have other players rate them.
