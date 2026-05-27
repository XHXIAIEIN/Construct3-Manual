---
title: "Instant Games"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/instant-games"
release: 487
---

## On this page

- [Instant Games official documentation](#instant-games-official-documentation)
- [Exporting for Instant Games](#exporting-for-instant-games)
- [Instant Games properties](#instant-games-properties)
- [Instant Games conditions](#instant-games-conditions)
- [Instant Games actions](#instant-games-actions)
- [Instant Games expressions](#instant-games-expressions)

---

The Instant Games plugin allows you to create games that integrate with the **Facebook Instant Games** platform. These games can be played in Messenger, the Facebook news feed, and so on.

> **Warning**  
> Don't use the [Facebook plugin](../plugin-reference/facebook.md) in Instant Games. You cannot publish Instant Games using the Facebook API (the Instant Games API works separately). Only use the Instant Games plugin.

## Instant Games official documentation

For information specifically relating to the Instant Games platform, please also refer to the official [Instant Games developer documentation](https://developers.facebook.com/docs/games/instant-games). Construct's Instant Games plugin handles many of the details for you, but the official documentation also includes useful information on setting up an app, managing web hosting and publishing, setting up ads, tips and best practices, additional ways to test the app, and more.

## Exporting for Instant Games

Make sure you use the **Facebook Instant Games** export option when publishing an Instant Game. This will ensure additional files required by Instant Games are included with the export. The resulting zip file can be directly uploaded to Facebook's web hosting service.

## Instant Games properties

**Navigation menu**  
The type of the navigation menu used by Instant Games to display. This corresponds to the `navigation_menu_version` in the [bundle configuration](https://developers.facebook.com/docs/games/instant-games/sdk/bundle-config).

## Instant Games conditions

**On load ad success**  
Triggered after the *Load ad* action when an ad of the same type either successfully finishes loading or has an error loading.

**On load ad error**  
Triggered after the *Load ad* action when an ad of the same type either successfully finishes loading or has an error loading.

**On show ad success**  
Triggered after the *Show ad* action when the user finishes viewing an ad of the same type or if it fails to be shown.

**On show ad error**  
Triggered after the *Show ad* action when the user finishes viewing an ad of the same type or if it fails to be shown.

**Is available**  
True if the Instant Games platform is available. This will be false if the game is hosted outside of the Instant Games platform or was not exported using the *Facebook Instant Games* export option. Note Instant Games is also unavailable in preview mode.

**On context changed**  
Triggered after the *Change context* action when the user changes context or cancels the dialog. If the context changed, the context ID will change too.

**On context change cancelled**  
Triggered after the *Change context* action when the user changes context or cancels the dialog. If the context changed, the context ID will change too.

**On error**  
Triggered if an error occurs at any point using the Instant Games platform. Usually looking in the browser console will provide more information about the problem.

**On pause**  
Triggered when the Instant Games platform wants the game to pause in order to handle an interruption, e.g. due to an incoming phone call.

**On shortcut created**  
Triggered after the *Create home screen shortcut* action depending on whether the shortcut was successfully created.

**On shortcut failed**  
Triggered after the *Create home screen shortcut* action depending on whether the shortcut was successfully created.

**On leaderboard loaded**  
Triggered after the *Load leaderboard scores* action when the leaderboard score data has been loaded. The leaderboard expressions can then be used to access the data.

**On player score loaded**  
Triggered after the *Load player score* action when the player's score data has been loaded. The player score expressions can then be used to access the data.

**On score submitted**  
Triggered after the *Set score* action once the score has been submitted to the Instant Games platform.

**On connected players loaded**  
Triggered after the *Load connected players* action when the connected player's data has been loaded. The connected player expressions can then be used to access the data.

**On loaded player data**  
Triggered after the *Load player data* action when the player data has been loaded. The *PlayerData* expression can then be used to access the data.

## Instant Games actions

**Load ad**  
Load an interstitial or rewarded video ad. The ad must have been created on Facebook's advertising platform and the placement ID provided to this action. Ads must be loaded before they can be shown. Only one ad of each type can be loaded at a time. *On load ad success/error* will trigger depending on the outcome.

**Show ad**  
Show an ad that has previously been successfully loaded. Note only the last successfully loaded ad of the given type will be shown with this action. *On show ad success/error* will trigger depending on the outcome.

**Log event**  
Log an event to Facebook's analytics platform. This can help you learn more about how players are interacting with your game. An optional value can be provided that will be summed with the prior event value.

**Change context**  
Opens a dialog allowing the player to change to a different Instant Games context. This action corresponds to the `chooseAsync()` SDK method. If the user successfully changes context, *On context changed* will trigger and the context ID will change. If the user cancels the dialog, *On context change cancelled* will trigger.

**Create home screen shortcut**  
(Android only) Request to create a home screen shortcut to the game on the user's device. *On shortcut created/failed* will trigger depending on the outcome.

**Custom update**  
Post a custom update in to a message thread. This can use a custom image and text for the call-to-action (CTA) and other fields. This action corresponds to the `updateAsync()` SDK method with a `"CUSTOM"` action.

**Quit**  
Quit the game if it is being played in a context where exiting is possible.

**Share**  
Show a dialog to invite, request, challenge or share, in a chat or timeline. An image must be provided in the form of a Sprite object, whose currently showing image will be used.

> **Tip**  
> There must be an instance of the chosen Sprite object on the layout, otherwise its image will not be loaded and the share will not work.

The text to use in the share message can be provided. The content of the *Data* parameter will be set to the *EntryPointData* expression if another user loads the game through that particular share. This can be used to automatically join the other player to the sharing player's game.

**Subscribe to bot**  
Prompt the user to subscribe to a bot associated with the game, if one has been configured.

**Switch game**  
Request that the client switch to a different Instant Game according to its App ID. The game must belong to the same business as the current game. This action corresponds to the `switchGameAsync()` SDK method.

**Load leaderboard scores**  
Load a list of scores from a leaderboard. The leaderboard must have first been created for the app. *On leaderboard loaded* will trigger once the scores are available, after which the leaderboard expressions can be used to access the data.

**Load player score**  
Load the current player's own score and rank. *On player score loaded* will trigger once available, after which the player score expressions can be used to access the data.

**Set score**  
Set the player's current score on a leaderboard. *On score submitted* will trigger once submitted.

**Load connected players**  
Load a list of connected players (other users who have also interacted with this player in the game). *On connected players loaded* will trigger once available, after which the connected player expressions can be used to access the data.

**Load player data**  
Load the last set data for the current player. *On loaded player data* will trigger once available, after which the *PlayerData* expression can be used to access it.

**Set player data**  
Store some data to associate with the current player on the Instant Games platform. This data can later be requested using the *Load player data* action. Note the data should be kept as short as possible, ideally under 1000 characters.

## Instant Games expressions

**ContextID**  
A unique identifier that identifies the current game context. Note this can change after the *Change context* action completes.

**EntryPointData**  
If the game is launched from a share, update or switch, then this expression returns the data that was associated with the share.

**Locale**  
The locale of the current player.

**Platform**  
A description of the current platform the user is playing on. This can be one of `"IOS"`, `"ANDROID"`, `"WEB"` or `"MOBILE_WEB"`.

**SDKVersion**  
The version of the Instant Games SDK in use.

**LeaderboardResultCount**  
In *On leaderboard loaded*, return the number of results, and the player ID and score for each entry in the list.

**LeaderboardPlayerIDAt**  
In *On leaderboard loaded*, return the number of results, and the player ID and score for each entry in the list.

**LeaderboardScoreAt**  
In *On leaderboard loaded*, return the number of results, and the player ID and score for each entry in the list.

**PlayerRank**  
In *On player score loaded*, the current player's rank and score on the leaderboard.

**PlayerScore**  
In *On player score loaded*, the current player's rank and score on the leaderboard.

**ConnectedPlayerCount**  
In *On connected players loaded*, return the number of results, and the connected player ID for each entry in the list.

**ConnectedPlayerIDAt**  
In *On connected players loaded*, return the number of results, and the connected player ID for each entry in the list.

**PlayerData**  
In *On loaded player data*, the string of the last set player data that was stored to the Instant Games platform.

**PlayerID**  
Retrieve basic information about the current player, including their unique ID, their name and a URL to their profile picture.

**PlayerName**  
Retrieve basic information about the current player, including their unique ID, their name and a URL to their profile picture.

**PlayerPhotoURL**  
Retrieve basic information about the current player, including their unique ID, their name and a URL to their profile picture.
