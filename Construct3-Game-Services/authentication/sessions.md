---
title: "Player Sessions"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/sessions"
release: 487.2
---

## On this page

- [Sessions](#refreshing-sessions)
- [Refreshing Sessions](#ending-a-session)
- [Ending a Session](#internalH1Link2)

---

## Sessions

When a player registers or signs in, a session key will be generated.  Each session has a default expiry of `1440` minutes.  The API end points you use allow an optional parameters to specify an explicit expiry if you want shorter/longer expiries.

A player can only have one active session.  If the player signs in from another device, a new session key will be generated and the old session key will no longer be usable.

Session keys should be stored on the client so they can be re-used.

## Refreshing Sessions

Session expiries can be extended by calling the [refresh session end point](../authentication/api-end-points/sessions/refresh-session.md).  If you use short expiries, it is important to keep refreshing the session to make sure the player is no unexpectedly signed out when interacting with your game.

## Ending a Session

If you wish to sign out a player, you can simply remove the session key from the client device so that it is no longer known or can be used.  However, when signing out we recommend for security purposes to also make a call to the [end session end point](../authentication/api-end-points/sessions/end-session.md).  Calling this invalidates the session key itself.
