---
title: "Theme addons"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/guide/themes"
release: 487.2
---

## On this page

- [Tips for developing themes](#tips-for-developing-themes)
- [Using themes](#using-themes)

---

Construct 3 allows theme addons, which simply add some custom stylesheets to the document. This allows a great deal of flexibility in customising the appearance of the Construct 3 editor. Any features of CSS can be used to alter the UI appearance. You can use browser developer tools to identify the classes and DOM structure used in the editor, and override the styles Construct 3 applies by default in your own stylesheet.

Themes are based on the same [.c3addon file](../guide/c3addon-file.md) that plugins and behaviors use, although with fewer necessary files. As you can see in the theme SDK download, all you need are **lang/en-US.json**, **addon.json**, an icon, and a stylesheet. Note your [addon metadata](../guide/addon-metadata.md) must also contain a list of `stylesheets` — this is just a list of the CSS files to add to the document when your theme is applied.

As with other kinds of addon, you can [test themes as developer addons](../guide/using-developer-mode.md) for quicker development.

## Tips for developing themes

- Construct 3 uses a range of CSS variables (aka custom properties) to more easily customise certain parts of the UI. These also allow customisation of colors not in the DOM, such as the Layout View (which is rendered with WebGL). The available CSS variables are listed in comments in the theme SDK. Note colors in CSS variables must always be written in hex format (#000000), except for layout view colors which can use rgba() syntax. (Other CSS properties can use any syntax; only CSS variables are restricted, since they are sometimes read from JavaScript.)
- Avoid making significant alterations to layout. In many cases Construct 3's code assumes certain layout of elements. Additionally it is time consuming to test layout changes work across every part of the UI. For example Construct 3 has over 50 dialogs, and testing all the dialogs still appear correctly after a change is a lot of work. On the other hand, cosmetic changes like colors and borders are usually safe.
- Be sure to also test your theme on mobile. Construct 3 uses different paradigms and layouts in a number of places when adapting to smaller mobile displays, and you should check your theme still appears correctly in that mode.
- Be wary of styles that could have a performance impact. For example heavy use of shadows, effects (such as blurs or other filters) or animations, could be taxing on the CPU or GPU. Fewer people will use your theme if it slows down their device, so try to make sure your styles are used efficiently.

## Using themes

Once you have installed a theme addon, you can start using it by selecting it from the Settings dialog. Note this involves restarting Construct 3 twice: once when the addon is installed, after which it appears in the Settings dialog, and then again after selecting it in the Settings dialog.
