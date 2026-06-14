---
title: "Testing projects"
source: "https://www.construct.net/en/make-games/manuals/construct-3/overview/testing-projects"
release: 487.3
---

## On this page

- [Other preview types](#multiple-preview-windows)
- [Remote preview](#other-preview-types)

---

To test your project during development, you can **preview** it by clicking the "play" icon in the main toolbar, by selecting `Menu › Project › Preview`, by right-clicking a layout in the Project Bar and selecting *Preview*, or by pressing **F5**. This will start your game from the current layout.

By default, starting a preview opens a popup window. You may see a message that the popup was blocked. Clicking **Try again** normally works, but to permanently prevent the message appearing you may need to change your browser's settings. Usually an icon or message will appear somewhere in the browser interface indicating a popup was blocked; clicking this usually provides a way to always allow popups for the current website.

In `Menu › Settings`, you can choose different preview modes. The three options are:

- **Popup window:** as described above, opens a popup window to run the project in.
- **Browser tab:** opens a new browser tab to run the project in.
- **Dialog:** opens a dialog inside the Construct interface to run the project in. This does not use a new browser window so is not subject to popup blockers, and does not include other browser interface items like the address bar. However it cannot appear larger than, or outside of, the Construct window.

If you select *Preview* again with a preview already running, the existing preview window or dialog will restart and begin previewing the latest version of your project.

### Multiple preview windows

Sometimes it's useful to have multiple simultaneous preview windows open, such as for testing multiplayer games. To open an additional preview window you can use any of the following methods:

- Click the dropdown arrow by the preview button, and choose *Add another layout/project preview*
- Hold <kbd>Alt</kbd> while clicking the preview button
- Use the <kbd>Alt</kbd> + <kbd>4</kbd> or <kbd>Alt</kbd> + <kbd>5</kbd> keyboard shortcuts to start an additional preview of the project or layout, respectively

## Other preview types

In the main toolbar, there is a dropdown arrow next to the Preview button that shows a menu with more preview options. These can also be found in the `Menu › Project` submenu, or by right-clicking the project name in the Project Bar.

### Debug layout

This runs the current layout in a special **debug** mode. The debugger is a special development tool which helps you inspect the state of the project (such as the value of expressions and variables). It also provides diagnostic tools such as advancing the game frame-by-frame, changing values, destroying objects, setting breakpoints in events, and more. This can bring invaluable insight to how your project is working, particularly if you run in to a problem. For more information see the manual section on the [Debugger](../interface/debugger.md).

### Preview project

This starts a preview from the first layout in the project. This is either the first layout that appears in the Project Bar, or whichever layout is set in the *First layout* project property.

## Remote preview

`[Paid plans only]`  This allows you to preview your project on a different device. It is also useful for testing different browsers on the same device. Starting a Remote Preview does not actually directly run your game. It will open a window that provides a special URL you can use to load the game, or a QR code to scan. All you need to do is open the URL on another browser or device, or share the URL with someone else, or scan the QR code, and the project will start to load and run in the browser. The project is loaded directly from your device using a peer-to-peer connection - it is not uploaded anywhere else, but is still accessible from anywhere on the Internet. The game is no longer available from the provided URL **as soon as you close the Remote Preview window**, or press the **Stop** button.

You can dock the Remote Preview window somewhere else in the user interface, much like you can with bars like the Project Bar and Properties Bar. This can be a useful way to keep it out of the way when hosting a long-running Remote Preview session while continuing to edit the project. When the Remote Preview window is resized to a narrow width it will use a simplified display with less information to better fit in a bar docked to the side of the main Construct window.

Once a different browser starts running the project by loading the Remote Preview link, it will appear in the Remote Preview window as a connected client. You can have multiple copies of the project running simultaneously.

[![remote preview window v440](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/129662/remote-preview-window_v440.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/129662/remote-preview-window.png)

You can view some basic system details and real-time performance information for connected clients, including their browser and operating system, which layout they are on, the framerate and approximate CPU usage (and approximate GPU usage if available), and their graphics hardware. You can also click **Request video** to see a video stream of what that client can see. There is also a dropdown to choose a different first layout in case you want to test a specific layout with Remote Preview.

Like with a normal preview, you can **update a remote preview** by pressing the *Preview* button again. This updates the version of the project available at the same URL. Existing clients will be notified of an update and will see the update if they manually reload. Alternatively clicking the **Reload all** button will force all clients to reload. If you want to switch to a different kind of preview, such as the usual local preview or to use the debugger, then stop or close Remote Preview before selecting a new preview option.

Clients who are viewing your project via Remote Preview will see notifications in the following situations:

- When the host **updates the project**, clients will see a notification indicating an update is available. They must reload their browser to load the new version.
- When the host **closes the Remote Preview window** or presses the **Stop** button, the remote preview ends. Clients will see a notification that the host disconnected. Clients can continue to run the project (they are not cut off), but if they reload the project will no longer be available.
- When the host **starts or stops video** the client will be notified.

Remote Preview allows you to instantly share your project to anyone in the world with an Internet connection. This is particularly useful if you have remote testers or reviewers. On the other hand you can use the remote preview URL on the same device for cross-browser testing, such as using Remote Preview to test your project in Firefox while Construct runs in Chrome. In this case data is not sent over the Internet and is only transferred across the local system. Similarly if you Remote Preview to a device on the same local area network (LAN), such as a mobile device, most browsers will try to establish a local connection for data transfer ensuring the project can load at a much faster LAN speed rather than transferring via the Internet.
