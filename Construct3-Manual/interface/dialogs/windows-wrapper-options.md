---
title: "Windows wrapper options dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/windows-wrapper-options"
release: 487
---

The **Windows wrapper options** dialog allows you to customize a Windows wrapper (WebView2) export  `[Paid plans only]` .

[![The Windows wrapper options dialog.](https://construct-static.com/images/v1748/r/uploads/articleuploadobject/0/images/142089/webview2-options_v470.png)](https://construct-static.com/images/v1748/uploads/articleuploadobject/0/images/142089/webview2-options.png)The Windows wrapper options dialog.

The following options are available.

**Platforms**  
Select which platforms are exported. You can choose between Windows 64-bit (for Intel-compatible systems, technically referred to as x64), and Windows ARM64 (for Windows on 64-bit ARM-based chips).

**Enable DevTools**  
Whether the app should allow opening the Microsoft Edge DevTools by pressing F12 or using the *Inspect* context menu option. This is useful for development purposes.

**Window caption**  
Whether the application window includes the system-provided caption and border.

> **Tip**  
> Unchecking this also disables resizing the window.

**Resizable window**  
Whether the application window can be resized by the user. If disabled the window can still be made fullscreen using events.

**Bundle assets**  
By default all your exported project files end up in a subfolder named *www* inside the app. It is possible inquisitive users could find some of your project's assets in here, including artwork, music and sound effects. If you enable *Bundle assets*, all these files are combined in to a single file named *assets.dat*. This file is not encrypted, but it does prevent casual browsing of the exported files. Enabling this option should not significantly impact performance.

**Ignore GPU blacklist**  
Some systems with poor quality graphics drivers can end up crashing or causing severe display glitches when running games. Browsers provide blacklists to recognise faulty drivers or hardware and fall back to software rendering. This guarantees the game will work, but can result in poor performance on such systems. Disabling this option always uses GPU rendering which can be much faster, but can then run in to issues on systems with poor quality drivers.

**Export for Steam**  
Adjusts the configuration of the exported project to work better with Steam, such as to support the Steam Overlay. For more information see the [Steamworks plugin documentation](https://www.construct.net/en/make-games/addons/1105/steamworks/documentation). Leave this unchecked if you are not exporting for Steam specifically.

**Export for Remote Preview**  
If enabled this exports the project with all its resources and extensions, but the app itself will show [preview.construct.net](https://preview.construct.net/). This allows it to be used to load a Remote Preview from Construct, allowing faster testing with WebView2-specific features enabled.

**Command line options**  
This option allows advanced users to customise the Chromium command-line arguments used by WebView2.
