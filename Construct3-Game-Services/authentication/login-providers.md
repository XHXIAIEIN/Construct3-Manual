---
title: "Login Providers"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/login-providers"
release: 487
---

## On this page

- [Permission Minimalisation](#permission-minimalisation)
- [Signing In](#signing-in)
- [Linking Login Providers](#linking-login-providers)
- [Supported Providers](#supported-providers)
- [Customised Branding](#customised-branding)

---

We offer support for many different login providers for signing in players.  Below is an example of what players see when signing in with Discord into your game:

[![discord login step 1](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/138381/discord-login-step-1.png)](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/138381/discord-login-step-1.png)

In your CGS account, you can configure settings for each login provider allowing more customisation as to what the players see when signing in.

Difficulty and expertise requried for each login provider varies a lot.  Some simple require simple setting changes, others such as Apple require far more complex integration.

## Permission Minimalisation

For all login providers, the bare minimum permissions will be requested from the login provider to provide sign in capability for CGS.  We do not request permissions from players accounts that we do not need.  The purpose of login providers for CGS is purely to support a login mechanism.

## Signing In

When signing in with a login provider, sometimes the provider will return an avatar.  If the player does not yet have an avatar, the login providers avatar will be set as this players current avatar.

## Linking Login Providers

Players can have multiple login providers allowing them to sign into the same player account.  To link another login provider to an existing player account, use the [link end point](../authentication/api-end-points/login-providers/link-login-provider.md).

When linking a login provider to an existing account, sometimes the login provider being linked is already associated with another player account.  In such circumstances, a **force token** will be generated allowing you to call the [force link end point](../authentication/api-end-points/login-providers/force-link.md).  Force linking a login provier will remove it from the existing players account, and assign it to the requesting players account.  It's important to note that you should always confirm with the player they wish to force this link, as if this was the only login provider on the other player account it will become unrecoverable.

## Supported Providers

**Username/Password**  
Allows players to sign in with a username and password.  Passwords are stored on Construct Game Services servers hashed with BCrypt.

**Apple**  
Allows players to sign in with their Apple account.

**BattleNet**  
Allows players to sign in with their BattleNet account.

**Discord**  
Allows players to sign in with their Discord account.

**Email**  
Allows players to sign in with a magic link sent to their verified email address.

**Facebook**  
Allows players to sign in with their Facebook account.

**Github**  
Allows players to sign in with their Github account.

**Google**  
Allows players to sign in with their Google account.

**Itch.io**  
Allows players to sign in with their Itch.io account.

**Microsoft**  
Allows players to sign in with their Microsoft account.

**Patreon**  
Allows players to sign in with their Patreon account.

**Reddit**  
Allows players to sign in with their Reddit account.

**Steam**  
Allows players to sign in with their Steam account.

**X (Twitter)**  
Allows players to sign in with their X (Twitter) account.

**Yandex**  
Allows players to sign in with their Yandex account.

## Customised Branding

If you use default settings, players will always see a message along the lines of "*Construct Game Services wants to access your account*" when signing in with a third party login provider along with the CGS logo.

In your [CGS account](https://www.construct.net/en/game-services/account) in your game settings is a page for autorisation settings.  On this page, you're able to enter your own provider application ID and secret which if set will be used.  When setting up a the application ID and secret with each provider there will be steps to allow you to customise the branding for the login experience.

Some providers are easier than others to setup.  For example, the setup for Apple is technical and laborious to complete, whilst Steam's is fairly straightforward.  Some providers may require payment as part of the process.
