---
title: "Clipboard"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/clipboard"
release: 495.2
---

## On this page

- [Browser permissions](#scripting)
- [Clipboard conditions](#browser-permissions)
- [Clipboard actions](#clipboard-conditions)
- [Clipboard expressions](#clipboard-actions)

---

The **Clipboard** object provides access to the system clipboard, such as copy and paste operations.

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

## Browser permissions

For security and privacy reasons, clipboard access - particularly paste operations - are usually controlled by permission prompts in browsers. Further, these operations are sometimes only allowed in a user input trigger, such as a button click or touch start. This prevents situations like web pages being able to immediately read from the user's clipboard before they've even interacted with the page. However it may mean you need to adjust the way your project accesses the clipboard.

## Clipboard conditions

**On copy success**  
Triggered after a copy action when the copy has successfully completed, so the data is now on the user's clipboard.

**On copy error**  
Triggered after a copy action fails. The user may not have granted permission or the attempt may not have been in a user input trigger.

**On paste text**  
Triggered after a *Request paste text* action completes successfully. The text from the user's clipboard is available with the *PastedText* expression.

**On paste binary**  
Triggered after a *Request paste binary* action completes successfully, and the data in the user's clipboard matches the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) specified in the trigger (e.g. "image/png" for a PNG image). This allows using different triggers to receive different types of clipboard data. When this triggers, the pasted data is placed inside the chosen [Binary Data object](../plugin-reference/binary-data.md).

**On paste error**  
Triggered after a paste action fails. The user may not have granted permission or the attempt may not have been in a user input trigger.

## Clipboard actions

**Copy text**  
Copy a string of text to the user's clipboard. This may require permission from the browser. *On copy success* or *On copy error* will trigger afterwards depending on the result.

**Copy binary**  
Copy the contents of a [Binary Data object](../plugin-reference/binary-data.md) the user's clipboard. The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the data must also be specified, e.g. "image/png" for a PNG image, so other apps know whether they can paste the data. Copying may require permission from the browser. *On copy success* or *On copy error* will trigger afterwards depending on the result.

**Request paste text**  
Request to read text from the user's current clipboard. This usually involves a permission prompt in browsers and may only be allowed in a user input trigger. If successful then *On paste text* will trigger and the pasted text will be available in the *PastedText* expression; otherwise *On paste error* will trigger.

**Request paste binary**  
Request to read binary data from the user's current clipboard. This usually involves a permission prompt in browsers and may only be allowed in a user input trigger. If successful then *On paste binary* will trigger assuming the type of the clipboard data matches the type specified in the trigger; then the data is available in the chosen Binary Data object. Otherwise *On paste error* will trigger if the attempt to paste fails.

## Clipboard expressions

**PastedText**  
After *On paste text* triggers, this is set to the text that was copied to the user's clipboard.
