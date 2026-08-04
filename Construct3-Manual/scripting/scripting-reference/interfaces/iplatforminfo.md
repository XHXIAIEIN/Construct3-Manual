---
title: "Platform Info script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/iplatforminfo"
release: 495
---

## On this page

- [Platform info APIs](#platform-info-apis)

---

The `IPlatformInfo` interface provides access to Construct's detected platform details, such as the browser, operating system, and export type. It provides similar information to the [Platform info plugin](../../../plugin-reference/platform-info.md), but note that plugin does not need to be in the project to use this interface. It is typically accessed by the [IRuntime](../../../scripting/scripting-reference/iruntime.md) `platformInfo` property.

```javascript
// Example: log detected operating system to console on startup
runOnStartup(async runtime =>
{
  console.log("The detected OS is: " + runtime.platformInfo.os);
});
```

## Platform info APIs

**isMobile**  
A read-only boolean indicating whether Construct detects the current device as "mobile".

> **Warning**  
> This detection may be unreliable. See the warning for the *Is on mobile* condition in the [Platform Info](../../../plugin-reference/platform-info.md) manual entry.

**os**  
A read-only string with the operating system Construct has detected, which is one of `"windows"`, `"macos"`, `"linux"`, `"chrome-os"`, `"android"`, `"ios"` or `"unknown"`.

**osVersion**  
A read-only string with the operating system version Construct has detected, or the string `"(unknown)"` if it failed to identify a version.

**browser**  
A read-only string with the browser Construct has detected, which is one of `"chrome"`, `"chromium"`, `"edge"`, `"opera"`, `"firefox"`, `"safari"` or `"unknown"`.

> **Tip**  
> Consider using feature detection or referring to `browserEngine` rather than relying on the identified browser.

**browserVersion**  
A read-only string with the browser version Construct has detected, or the string `"(unknown)"` if it failed to identify a version.

**browserEngine**  
A read-only string with the browser engine Construct has detected, which is one of `"chromium"`, `"gecko"`, `"webkit"`, or `"unknown"` if failed to identify any.

**exportType**  
A read-only string indicating the export option used to export the project, which is one of `"preview"` (when previewing prior to export), `"html5"`, `"scirra-arcade"`, `"cordova-android"`, `"cordova-ios"`, `"windows-webview2"`, `"macos-wkwebview"`, `"linux-cef"`, `"xbox-uwp-webview2"`, `"instant-games"` or `"playable-ad"`.

**renderer**  
A read-only string indicating the graphics rendering technology in use. This can be `"webgl1"`, `"webgl2"` or `"webgpu"`. It can also have a `-software` suffix if a "major performance caveat" is detected, which normally indicates slower software rendering, typically due to unreliable GPU drivers. For example, software-rendered WebGL 1 support would return `"webgl1-software"`. The WebGPU renderer can also have a `-compatibility` suffix to indicate it is rendering with WebGPU in compatibility mode (supporting older hardware with legacy graphics APIs), e.g. `"webgpu-compatibility"`.

**rendererDetail**  
A read-only string describing system-specific detail about the graphics hardware in use. This typically describes the GPU manufacturer and model name, and sometimes some hardware capabilities.

**canvasClientX**  
Read-only numbers with the position of the main display canvas in CSS pixels. In other words these are the CSS co-ordinates of the top-left point of the main display canvas relative to the page.

**canvasClientY**  
Read-only numbers with the position of the main display canvas in CSS pixels. In other words these are the CSS co-ordinates of the top-left point of the main display canvas relative to the page.

**canvasCssWidth**  
Read-only numbers with the size of the main display canvas in CSS pixels. This does not correspond exactly to device (physical display) pixels, but is the appropriate size from a web design perspective in `px` units.

**canvasCssHeight**  
Read-only numbers with the size of the main display canvas in CSS pixels. This does not correspond exactly to device (physical display) pixels, but is the appropriate size from a web design perspective in `px` units.

**canvasDeviceWidth**  
Read-only numbers with the size of the main display canvas in device (physical display) pixels. Unlike the CSS size, this size reflects the number of actual pixels used in the display.

**canvasDeviceHeight**  
Read-only numbers with the size of the main display canvas in device (physical display) pixels. Unlike the CSS size, this size reflects the number of actual pixels used in the display.

**devicePixelRatio**  
Return the [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) property.

> **Tip**  
> This property can also be read in worker mode, which means it may be preferable to read this rather than the `devicePixelRatio` global.
