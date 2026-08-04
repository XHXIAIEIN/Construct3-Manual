---
title: "File Chooser script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/file-chooser"
release: 495
---

## On this page

- [File Chooser events](#file-chooser-events)
- [File Chooser APIs](#file-chooser-apis)

---

The `IFileChooserInstance` interface derives from [IDOMInstance](../../../scripting/scripting-reference/object-interfaces/idominstance.md) to add APIs specific to the [File Chooser plugin](../../../plugin-reference/file-chooser.md).

## File Chooser events

See [instance event](../../../scripting/scripting-reference/interfaces/instance-event.md) for standard instance event object properties.

**"change"**  
Fired when a file or set of files has been chosen from the input control.

## File Chooser APIs

**click()**  
Acts as if the file chooser was clicked, which brings up the system file picker. This allows the button to be completely customized, as the actual File Chooser object can be moved offscreen, and a custom sprite or other object used to activate the `click()` method instead.

> **Tip**  
> The browser may only allow this method in a user gesture (e.g. mouse click).

**clear()**  
Reset the control to its initial state with no selection, clearing any prior picked file.

**getFiles()**  
Return an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects representing the currently chosen files.
