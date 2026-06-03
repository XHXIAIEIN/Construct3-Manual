---
title: "iframe"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/iframe"
release: 487.2
---

## On this page

- [Layering HTML objects](#layering-html-objects)
- [iframe properties](#iframe-properties)
- [iframe conditions](#iframe-conditions)
- [iframe actions](#iframe-actions)
- [iframe expressions](#iframe-expressions)

---

The **iframe** object can display another web page, or a string of some HTML content, in your project. It is named after the [<iframe> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), which is what the object uses.

> **Warning**  
> If you display a HTML string in the iframe instead of loading a URL, it is recommended to check the *Enable sandbox* property, especially if the content includes any user-provided content. This makes it safe to display untrusted HTML content, avoiding security problems like XSS (cross-site scripting) where attackers can control or abuse your site.

This object can also be used to show embedded content, such as YouTube videos. For example if you choose to share a YouTube video and select the "embed" option, it provides some HTML code for an *iframe* element. The `src` attribute is the embed URL for the video, e.g. [https://www.youtube.com/embed/pWiC5Ln_0yA](https://www.youtube.com/embed/pWiC5Ln_0yA). This can be used in the *URL* property of Construct's iframe object to show the video in your game.

## Layering HTML objects

This object displays using a HTML element rather than drawing in to the canvas. This means its layering works differently to other objects. To learn more about how to layer HTML objects, see [HTML layers](../tips-and-guides/html-layers.md).

## iframe properties

**URL**  
The URL of a web page to load inside the iframe.

**HTML content**  
A string of HTML content to display inside the iframe. This loads the HTML locally and does not request a separate web page. This is only used if the *URL* property is left empty.

**Initially visible**  
Whether the object is initially visible at runtime.

**ID**  
An optional `id` attribute to set on the iframe element. This may be useful if you have other styles or JavaScript code that you want to use with the iframe.

**Allow**  
An optional [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) string to set in the iframe's `allow` attribute, which specifies what the displayed page is allowed to do. The default is designed to allow embedded video playback on services like YouTube, granting the video permission to enter fullscreen, autoplay, and use encrypted media.

**Enable sandbox**  
Check *Enable sandbox* to add the `sandbox` attribute on the iframe element, providing enhanced security. The *Sandbox* property is then the string to use in the `sandbox` attribute. Enabling the sandbox starts by removing a wide range of capabilities, and then each capability can be re-enabled by adding it to the sandbox string. By default the sandbox string allows JavaScript execution, but blocks forms, popups, same-origin access, top-document navigation, and more. If you only display static HTML content, you can also remove the default `allow-scripts` to block any JavaScript execution at all. For more information see the [iframe sandbox attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

> **Warning**  
> Do not use both the `allow-scripts` and `allow-same-origin` in the sandbox string. This allows scripts to remove the sandbox protection.

**Sandbox**  
Check *Enable sandbox* to add the `sandbox` attribute on the iframe element, providing enhanced security. The *Sandbox* property is then the string to use in the `sandbox` attribute. Enabling the sandbox starts by removing a wide range of capabilities, and then each capability can be re-enabled by adding it to the sandbox string. By default the sandbox string allows JavaScript execution, but blocks forms, popups, same-origin access, top-document navigation, and more. If you only display static HTML content, you can also remove the default `allow-scripts` to block any JavaScript execution at all. For more information see the [iframe sandbox attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

> **Warning**  
> Do not use both the `allow-scripts` and `allow-same-origin` in the sandbox string. This allows scripts to remove the sandbox protection.

## iframe conditions

The iframe object does not have any of its own conditions. See [common conditions](../plugin-reference/common-features/common-conditions.md) for features shared between form control objects.

## iframe actions

See [common actions](../plugin-reference/common-features/common-actions.md) for features shared between form control objects.

**Display HTML string**  
Load a string of HTML content in the iframe. This is similar to using the *HTML content* property. If the iframe was previously displaying a URL, it will switch to the HTML content instead.

**Navigate to URL**  
Load a new URL in the iframe. If the iframe was previously displaying a string of HTML, it will switch to loading this URL instead.

****  

## iframe expressions

The iframe object does not have any of its own expressions.
