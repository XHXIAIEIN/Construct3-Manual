---
title: "Share"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/share"
release: 487.2
---

## On this page

- [Sharing files](#scripting)
- [Share conditions](#sharing-files)
- [Share actions](#share-conditions)
- [Share expressions](#share-actions)

---

The **Share** object can bring up the system share feature, allowing the user to share something via another app.

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).

## Sharing files

The Share plugin can add files to a share, such as images or videos, if *Is sharing files supported* is true. The contents of the file is taken from a [Binary Data](../plugin-reference/binary-data.md) object. Often Construct can provide a screenshot or video as a local URL. The process to share this as a file is as follows:

1. Use the [AJAX object](../plugin-reference/ajax.md) to load the URL in to a Binary Data object. This works like any other AJAX request, except using the *Set response binary* action before the request action.
2. Once the AJAX request completes successfully, the data from the URL is in the Binary Data object.
3. Now you can use the *Add file* action to attach the contents of the Binary Data object to the next share. Use the *Add file* action immediately before the *Share* action to attach the file to the next share.

For an example of this, [open the 'Taking screenshots' example](https://editor.construct.net/#open=taking-screenshots) which demonstrates taking a canvas snapshot and sharing it as a file.

## Share conditions

**Is supported**  
Check whether sharing is supported on the current platform. Sharing will only work if this is true.

**Is sharing files supported**  
Check whether sharing files with the *Add file* action is supported on the current platform. The *Add file* action will only work if this is true. If it is false but *Is supported* is still true, then the *Share* action can still be used to share text and a URL.

**On share completed**  
Triggered after a share action once the user completes the share process.

> **Tip**  
> This does not necessarily mean anything was shared - this can be triggered if the user cancels the share.

**On share failed**  
Triggered if a share action is not successfully completed or an error otherwise occurs.

## Share actions

**Add file**  
Attach a file to the next share using the contents of a [Binary Data](../plugin-reference/binary-data.md) object, with a given filename. This can be used multiple times before a *Share* action to attach multiple files to be shared, such as a series of screenshots. The type of the data must also be specified, which is normally `"image/png"` for a screenshot, or `"video/webm"` for a video, but can also be other types (see [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)). For more information see *Sharing files* above.

**Share**  
Use the system share feature to share some text via another app. *Text* is the text to share; *Title* is an optional title to use (which can be used for other fields, such as the subject of an email if shared to an email app); and *URL* is a link to share. All three fields are optional, but at least one must be provided. If *Is sharing files supported* is true and any *Add file* actions were used before this action, those files are attached to the share.

> **Tip**  
> To avoid annoying the user, browsers may only allow this action in a user input event, such as *On button clicked*, *On touch start*, etc. So to ensure sharing works, only use this action in a user input trigger.

**Request app rating**  
Display a dialog to the user requesting that they rate your application. Where available this uses the platform's built-in request app rating dialog, which has predefined text. On Android if this is not supported it falls back to using a custom system dialog, the content of which is defined by the parameters to the action. You should request review at an appropriate time, and infrequently, as so not to frustrate your users. For iOS see [Apple's guide on ratings](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/ratings-and-reviews/), and for Android see the [Google Play In-App Review API guide](https://developer.android.com/guide/playcore/in-app-review).

> **Warning**  
> This action is not guaranteed to show anything to the user. For the best user experience app stores limit how often the dialog is allowed to appear. Check the linked guides for more details.

**Display store page**  
Display the native store page (Google Play/App Store) for an application with a given identifier. Note the app ID can be left empty to use the app ID specified in Project Properties.

## Share expressions

The *Share* object has no expressions.
