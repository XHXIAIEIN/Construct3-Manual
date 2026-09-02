---
title: "Icons & splash screens"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/icons-splash"
release: 495.2
---

## On this page

- [Image purposes](#image-purposes)
- [Manually customizing icons and splashes](#none-set)

---

The **Icons & screenshots** folder in the [Project Bar](../interface/bars/project-bar.md) holds a set of image files that are used for icons, splash screens or screenshots for your project. The specific images used depend on the platform you export to, but where possible Construct will automatically use the images from the folder where appropriate.

## Image purposes

When you select an image in the *Icons & screenshots* folder in the Project Bar, the [Properties Bar](../interface/bars/properties-bar.md) updates to show properties for that image. The most important property is the *Purpose* property. This tells Construct what you want to use the image for. The different purposes and what they are used for are described below.

### None set

If the purpose is *(none set)*, Construct won't automatically use this icon for anything. It will be treated as a simple image file that is bundled with your project. This may be useful if you want to manually configure an icon after exporting. It's also the default for newly imported image files, so you may want to change it after importing if you intend for the icon to be used for something else.

### App icon

This will use the image as the standard app icon. This is used for apps on mobile devices, desktop exports, the page icon on the web (also known as the favicon), and also the app icon for installable web apps.

The icon size is automatically derived from the image size. For most platforms, icons should be square, and are typically in a range of power-of-two sizes, such as 32x32, 128x128, 256x256, etc. Most platforms support a range of icon sizes, so Construct will list all icons with this purpose in the exported project, and the target platform will select an appropriate icon size from the available set.

### App icon maskable

Currently this purpose is specific to installable web apps (Progressive Web Apps, or PWAs). All web exports from Construct are PWAs, and so in supported browsers can be installed, such as adding to the device home screen. The *App icon* purpose can be used for this case, but optionally you can also provide a *maskable* icon, where the outer 10% edges of the image may be cropped. This is used to give the system more flexibility in how to crop or shape the icon. As with app icons, you can also provide multiple maskable icons in different sizes.

You can test maskable icons with [maskable.app](https://maskable.app/), and read more about them at the [web.dev page on maskable icons](https://web.dev/maskable-icon/).

### Loading logo

The loading logo is the image shown on the loading screen while loading the project. Typically this is most relevant to web exports, since the project may take a while to download, during which time the loading screen is showing. Other export types, like apps, bundle all the resources locally so typically load quickly enough that the loading screen isn't seen or is only seen briefly.

For the loading logo to appear, the project *Loader style* property must be set to *Progress bar & logo*. The progress bar will appear beneath the loading logo with the same width as the loading logo image. You can also only specify a single loading logo image.

### Adaptive foreground/background

Currently these purposes are specific to Android exports, for specifying adaptive icons. Similar to maskable icons, these are special icons for Android that comprise of two layers, and may also be cropped by the system to adjust their appearance. For more information about how Android uses these icons, refer to the [Android developer documentation on adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive).

To specify an adaptive icon, you need to add two icons with identical image sizes, e.g. both 256x256 pixels. Set one to use the *Adaptive background* purpose, and the other the *Adaptive foreground* purpose. Construct will export the icon pair as a single adaptive icon when exporting for Android.

You can also specify multiple adaptive icons by adding multiple pairs of icons this way, so long as each pair has a different image size. Construct will export all icon pairs as adaptive icons for Android, and the system will select an adaptive icon with an appropriate size from the available set.

### iOS splash screen

This purpose is specific to iOS exports. The image with this purpose is used as a universal splash screen image. Note this image may be significantly cropped depending on the size of the viewport - the image is displayed centered so any important details should be in the middle, and the rest of the image decorative.

When creating the splash screen, Construct will first create an image sized 2732x2732 filled with the project *Splash color*. The splash image will then be pasted centered on this image. Note if no splash image is specified, the image with the *Loading logo* purpose will be used instead.

### Android splash icon

This purpose is specific to Android exports. The image with this purpose is used on the splash screen when the app is first loaded. Note this image may be significantly cropped by Android. For guidance on the required image size and how Android crops it, refer to the official [Android design guidelines](https://developer.android.com/develop/ui/views/launch/splash-screen#splash_screen_dimensions).

### Screenshot

This purpose indicates that the given image is a screenshot of the project, suitable for using as a preview of what the project looks like. Currently this is only used for web exports in order to allow adding screenshots to a Progressive Web App (PWA) install prompt, which is also known as the [Richer install UI](https://web.dev/patterns/web-apps/richer-install-ui). When choosing the *Screenshot* purpose for an image, an additional two properties appear:

- **Label:** a brief description of the image, which may be used as a caption for the screenshot.
- **Form factor:** indicates the type of the screenshot. Typically *Narrow* is used for mobile screenshots and *Wide* is used for desktop screenshots. It is recommended to add at least one *Narrow* and one *Wide* screenshot to ensure the richer install UI appears.

## Manually customizing icons and splashes

Some platforms, particularly on mobile, require a range of icons and splash screens in a wide variety of sizes and formats. These formats can also change over time as system updates are released with new requirements.

While Construct provides options to specify the basic icons and splashes, for full control you may wish to refer to the platform specific developer tools. For example when using Xcode, or exporting to Android Studio, you can use the developer IDEs to specify the full range of possible icons and splash screens. For more information about using these tools, refer to the official documentation at [Apple's Xcode documentation](https://developer.apple.com/documentation/xcode/) and [Android Studio's documentation](https://developer.android.com/studio/intro). Note the *(none set)* icon purpose may be useful for bundling image files that you manually configure after export in these tools.
