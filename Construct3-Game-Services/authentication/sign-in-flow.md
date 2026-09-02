---
title: "Sign-In Flow"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/sign-in-flow"
release: 495.2
---

## On this page

- [Sign In Flow](#sign-in-flow)
- [Call signin.json](#call-signinjson)
- [Redirect User](#redirect-user)
- [Determine If Sign In Was Successful](#determine-if-sign-in-was-successful)

---


## Sign In Flow

Signing in a player requires a few steps to complete successfully.

## Call signin.json

Call the [sign in API end point](../authentication/api-end-points/players/sign-in.md).  For username/password sign in this will return if the sign in was successful or not immediately.

For other login providers, a redirect URL will be returned along with a sign in poll token:

```javascript
{
  "redirectToURL": "https://accounts.google.com/o/oauth2/v2/auth....",
  "pollToken": "e1d03c89-d03d-459f-ad2d-e7607be375e0",
  "success": true
}
```

## Redirect User

The redirect URL should preferably be opened on the client in a new popup window.  This opens the third party login providers sign in page.

Once the sign in succeeds, the client is redirected to a successful sign in page that looks similar to the following:

[![signed in](https://construct-static.com/images/v1789/uploads/articleuploadobject/0/images/134207/signed-in.png)](https://construct-static.com/images/v1789/uploads/articleuploadobject/0/images/134207/signed-in.png)

At this point the user can close the window and through polling with the poll token you can then shortly afterwards determine if the user succeeded in the sign in or not.  It should be noted that this page has some Javascript code on it:

```javascript
<script>
    window.opener.postMessage("LOGINCOMPLETED", "*");
    window.close();
</script>
```

If the client allows it, a message is sent to the window opened indicating the login is completed, then attempt to automatically close.

## Determine If Sign In Was Successful

With the poll token, and query the [sign in poll API end point](../authentication/api-end-points/players/sign-in-poll.md) periodically.  This will tell you when the sign in fails or succeeds.

We recommend querying this end point every 500-1000ms.  If you query the poll token too frequently you may receive rate limit errors.  If you query the same poll token before previous poll requests have completed you will always see an error.  You should only re-query the poll token when the previous poll token response has completed and returned data.
