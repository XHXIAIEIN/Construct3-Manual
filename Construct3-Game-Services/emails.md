---
title: "Emails in the CGS"
source: "https://www.construct.net/en/game-services/manuals/game-services/emails"
release: 495.2
---

## On this page

- [Overview](#translations)
- [Translations](#email-types)
- [Email Types](#verify-email-address)

---

## Overview

If your plan supports email sending, you can enable a few extra features for your player base such as sign in via email magic link.  It's important to note that for privacy and security reasons some end points may show that an email was sent when in fact it was not sent - this is to prevent third parties from polling the end points to discover registered email addresses.

If your plan supports custom branding, you can specify stylistic components via your account for despatched emails, and the web pages that the email links point to.

End points that actually despatch emails are fairly tightly rate limited to protect the CGS sending reputation.  If an email hard bounces, or is reported as spam by the player the email address is automatically deleted from the game and the email address will be surpressed from future emails.  The player will need to use a different email address going forwards for their player account.

## Translations

If you pass a `requestedLanguage` to a request that generates an email, and your plan supports translations the email will be sent in the language specified.  This however will not consume any of your translation credits.  If no language is specified, English content emails will be served by default.

Emails that contain links to content pages served by CGS will also be served in the requested language if your plan supports it.

## Email Types

There are currently three types of emails that Construct Game Services can send to players in your game:

### Verify Email Address

Before any other types of emails are sent, the player must have verified their email address.  An email address for a player can either be set from the [register player end point](authentication/api-end-points/players/register-player.md), or from the [set email address end point](authentication/api-end-points/players/set-email-address.md).  Once set, the email will be despatched to the player with a link to vertify their email address.

### Forgotten Password

This email is only sent if the players email address is verified.  Make a call to the [forgotten password end point](authentication/api-end-points/players/forgotten-password.md) and an email will be sent to the player with a link to change their password.  If the player doesn't have a username/password set yet, the link will allow the player to set a username and password.  The link sent in the email expires after a short period of time for security reasons.

### Sign In With Email

This email is only sent if the players email address is verified.  Setting the sign in provider to Email on the [sign in](authentication/api-end-points/players/sign-in.md) end point will send the user an email with a link in it, once clicked the sign in request will be completed.
