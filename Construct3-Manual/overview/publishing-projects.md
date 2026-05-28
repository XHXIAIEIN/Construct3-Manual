---
title: "Publishing projects"
source: "https://www.construct.net/en/make-games/manuals/construct-3/overview/publishing-projects"
release: 487
---

To publish a project, use the `Menu › Project › Export` option. Construct allows you to export to a range of platforms, such as the web (HTML5), Android and iOS (via Cordova), and desktop apps (via Windows/macOS/Linux wrappers). Each platform has an accompanying tutorial to guide you through how the exporter works and covering any exporter-specific settings. Note in some cases fees may be involved, such as for developer subscriptions to allow uploading to app stores, or for hosting web content if you don't already have a server.

Every kind of export has the following common settings:

- **Deduplicate images** will search the entire project for identical images and remove the duplicates. This helps save memory and reduce the download size by removing redundant images.
- **Lossless format** lets you choose what format to export images in your project set to use lossless quality (i.e. perfect).
- **Lossy format** lets you choose what format to export images in your project set to use lossy quality (i.e. allowing some reduction in quality in order to allow a greater reduction in the file size).
- **Optimize images** will optimize all the lossless images in the project with enhanced compression. This spends longer trying to compress images to an even smaller size. This can make exporting take longer but sometimes significantly reduces the download size of the exported project. This process is lossless, so is guaranteed to preserve the quality of all your artwork.
- **Minify script** will obfuscate and compress the main JavaScript file for your exported project. This also helps reduce the download size, improves load time, and makes it significantly more difficult to reverse-engineer the project. Normally *Advanced* mode is safe to use, but if you use the scripting feature you may want to switch to *Simple* mode or adjust how you write your code - see [Exporting with Advanced minification](../scripting/guides/advanced-minification.md) in the scripting section for more details.

> **Tip**  
> Minifying script uses a cloud service, so you must be connected to the Internet for it to work.

> **Tip**  
> *Debug advanced* mode is only intended for diagnosing possible problems with *Advanced* mode - don't use it when publishing your finished project.

Each option helps optimise the exported project, but can make the export take longer. It is recommended to enable deduplication, image optimization and script minification when exporting the final finished project for publishing. However if you are simply doing a trial export, you may wish to disable them to speed up the process.

Web-based export options also have a checkbox to enable **Offline support**. This is enabled by default and allows all exported projects to continue to work offline after the first time they are loaded (see [Offline games in Construct](https://www.construct.net/en/tutorials/offline-games-construct-8) for more details). However this can sometimes interfere with testing if you are regularly updating a web-hosted project, so it can be disabled, but it is recommended to leave it enabled when publishing for release.

Most export options will prompt you for additional settings specific to that exporter. For example the Android exporter has a setting for the minimum supported Android version.

When the export finishes, you will be provided with a link to download a zip file containing the final exported project. You can also view some statistics about the export, such as how much download size was saved by image optimization (if it was enabled). The [Export Manager](../interface/dialogs/export-manager.md) can also be used to find the last few exported projects and download them again.

### More information about publishing

The publishing process is different depending on the chosen export option. The [Tutorials](https://www.construct.net/tutorials) section has guides to help you export to each platform. Here are some to get you started:

- [Publishing to the web](https://www.construct.net/tutorials/publishing-to-the-web-10)
- [Publishing to the Scirra Arcade](https://www.construct.net/tutorials/publishing-to-the-scirra-arcade-16)
- [How to publish mobile apps](https://www.construct.net/en/tutorials/publish-mobile-apps-26)
- [Exporting to Windows](https://www.construct.net/en/tutorials/exporting-windows-webview2-2685)
- [Exporting to macOS](https://www.construct.net/en/tutorials/exporting-macos-wkwebview-2718)
