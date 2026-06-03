---
title: "Deprecated features"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/deprecated-features"
release: 487.2
---

## On this page

- [Z axis scale 'Normalized'](#z-axis-scale-normalized)
- [3D shape 'Z tiling factor'](#updating-projects-to-regular-mode)
- [Legacy SDK v1 plugins/behaviors](#3d-shape-z-tiling-factor)
- [Export file structure 'Flat' mode](#legacy-sdk-v1-pluginsbehaviors)
- [Cordova iOS/Android scheme](#export-file-structure-flat-mode)
- [NW.js exporter](#cordova-iosandroid-scheme)
- [Deprecated plugins/behaviors](#nwjs-exporter)
- [Classic scripts](#deprecated-pluginsbehaviors)
- [Other deprecated features](#functions)

---

Construct has been in development for many years. Much like with [superseded features](../tips-and-guides/superseded-features.md), over time new features are occasionally introduced that replace older features. Usually the older features are supported as long as possible to improve backwards compatibility. However sometimes the maintenance burden and additional complications caused by having to continue to have the older features means that they must ultimately be retired.

When you open a project, Construct will warn you of any deprecated or retired features the project uses. The *Deprecated features* dialog may appear when opening a project to list all such features. It is strongly recommended to act as soon as possible to resolve all the items listed, thereby removing the use of all the deprecated features from your project. This will ensure your project continues to be supported and work correctly in future. If you don't take action, you may find your project stops working, or possibly cannot be opened, in a future release of Construct.

You can view the deprecated feature list for a project at any time, including if you previously checked *Don't show again for this project* in the dialog, by right-clicking the project name in the Project Bar and selecting `Tools › View deprecated features`. If the option does not appear, it means the project does not use any deprecated features.

This guide covers every type of deprecation or retirement warning and describes steps to take to stop using the affected feature.

## Z axis scale 'Normalized'

Construct was originally a fully 2D engine. One of the first 3D features added was the ability to move 2D objects up and down the Z axis - a feature called "Z elevation" at the time. Originally this had the camera set up at a Z position of 100 regardless of the size of the viewport, so an object moved to a Z position of 50 was always half way to the camera. However this meant the Z axis worked on a different scale to the X and Y axes. This became a problem when adding further 3D features. For example in this mode, if you want to make a 3D shape object a cube, its size may need to be something like 120 x 120 x 15 rather than the more obvious 120 x 120 x 120. As Construct moved further in to 3D features this increasingly became a problem.

In 2022 Construct added an option to set the Z axis scale to 'Regular', which fixed this problem. In 2025 the 'Regular' mode became the new default. Some new 3D features require 'Regular' mode to work, and the old 'Normalized' mode does not really make sense to use any more; meanwhile its presence complicates the on-going development of Construct. Therefore 'Normalized' mode is deprecated and will ultimately be removed. However there remains a backwards compatibility problem as there were a few years where all new projects were set to the 'Normalized' mode, and it is difficult to automatically update projects to the new mode.

### Updating projects to 'Regular' mode

As of r487, in many cases Construct will automatically update 2D projects to use Z axis scale 'Regular'. It does this when it detects there is no use of the Z axis and so the project should continue to work exactly the same. A notification still appears when Construct does this to make sure you're aware it happened.

Where Construct cannot automatically update the project, you may see a deprecation warning, and you will have to manually make changes. To convert your project, follow these steps.

1. Make a backup of your project in case anything goes wrong.
2. Make sure the project has the 3D camera object if it doesn't already.
3. Select the 3D camera object in the Project Bar so you can see its properties in the Properties Bar. Make a note of the **Z scale** property.
4. Select the name of the project in the Project Bar to show the project's properties. In the group **Compatibility settings**, there should be an item that says **Convert Z axis scale** with a link saying *Convert to 'Regular'*. Click that link, and then click OK to confirm. This will update the positions and sizes of all objects in all your project's layouts according to the Z scale to make sure they appear to be in the same place despite the fact the Z axis scale changed.
5. The last step is to update your event sheets (and code if you use JavaScript/TypeScript) to work with Z axis scale 'Regular'. Unfortunately it's not possible for Construct to automatically update these for you, so you have to do it manually. Anywhere your project has logic that uses the Z axis, it needs to be scaled by the Z axis scale. For example if there is an action to set an object's Z co-ordinate to *100*, and the Z scale you noted down earlier was *2.5*, then you need to update the action to set the Z co-ordinate to *250* instead. This can take a fair bit of work in large projects to track down everything that does calculations on the Z axis and make sure it is scaled for the new Z axis scale. Note this includes the depth (formerly "Z height") of 3D objects like 3D shape.

Once your project is updated, you'll also be able to make use of the latest features like the 3D editor view, which requires using Z axis scale 'Regular'.

## 3D shape 'Z tiling factor'

The 3D shape object can display a Tiled Background on one of its faces. The 'Z tiling factor' property existed to help adjust how the tiling appears on the Z axis to mitigate the different scale when using Z axis scale 'Normalized'. However as explained above, the Z axis scale 'Normalized' is to be retired in favor of 'Regular'. That therefore makes this property redundant - when using 'Regular' Z axis scale, this property should always be 1. In future once the Z axis scale 'Normalized' has been removed, this property will also be removed as it will have essentially been made redundant.

## Legacy SDK v1 plugins/behaviors

The industry-standard approach for addon systems is to use [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) to limit what addons can do to known safe features only, which ensures they continue to work in the long-term. Historically, partly due to past limitations of the JavaScript programming language, Construct did not use encapsulation in its addon system. This meant addons could use unsafe features that they were not meant to. The proliferation of addons using unsafe features ended up breaking a lot of user's projects, and continued support for those addons meant facing the prospect of continuing to break user's projects on a regular basis. This old system is referred to as SDK (Software Development Kit) v1.

To fix this Construct moved its addon system to an industry-standard approach with encapsulation. The new system is referred to as SDK v2. This should guarantee that addons are permanently supported and safe to use in the long-term with virtually no risk of breaking your project. However plugins and behaviors must be updated by the addon developer to support the newer SDK v2.

As of Construct r450+, released in 2025, support for SDK v1 addons was removed. Construct will notify you that you cannot open a project if it uses SDK v1 addons. If you see such a message, consider the following options to resolve it:

- Addons installed from the official [Addons website](https://www.construct.net/en/make-games/addons) should auto-update to the latest version. If you see a prompt about addon updates being available on startup, click the notification and update addons with the [Addon Manager](../interface/dialogs/addon-manager.md). If the addon developer has published an update using SDK v2, this will then update the addon to that version.
- If the addon was not installed from the official addons website, check with the addon developer to see if an update is available, and manually download and install the updated addon.
- If there is no update for the addon using SDK v2, contact the addon developer and ask them to provide an update.
- Consider replacing the addons with other features. For example if your project uses a third-party addon for tweening, it may be possible to use the built-in Tween behavior instead. Alternatively a different third-party addon may be available that uses SDK v2. It may even be the case that you can just remove the addon if it turns out it is not really necessary.
- Otherwise SDK v1 addons are still supported in the r449.x [LTS releases](https://www.construct.net/en/make-games/releases/lts), which will be supported up until the end of 2026.

The SDK v2 was first made available to addon developers in May 2024. LTS support up to the end of 2026 should provide plenty of time for addon developers to update their addons, or for existing projects to either be updated or completed.

## Export file structure 'Flat' mode

Historically Construct exported projects with all project files in the root folder and with lowercased filenames, referred to as *flat* mode. In 2022 Construct was updated to preserve the folder structure and filename case of project files, referred to as *folders* mode. This is a much better mode as it preserves your folder organization and is important for features like JavaScript Modules. However changing the mode could break some projects, as it changes where some project files are found, such as when requesting project files by URL.

For example consider a project using a file named "Hello.txt" in a subfolder named "myfolder". The file path is in fact "myfolder/Hello.txt". However in *flat* mode, where project files are referred to by a string, this file could be loaded from the path "hello.txt", as it exports all files in the root folder with lowercased names. After changing to *folders* mode, the file must be referred to with the string "myfolder/Hello.txt", reflecting its true path; the old string will no longer refer to the file and may return an error such as 404 Not Found. This also applies to audio files referred to by a string, although the file extension is omitted for those.

In r450+, released in 2025, the legacy *flat* mode was removed, and all projects automatically use *folders* mode. Older projects may show a warning that the project used to use *flat* mode, which may mean you need to update any changed file references as described above.

## Cordova iOS/Android scheme

In the past mobile exports internally ran on the *file:* scheme, much like opening a local HTML file on your computer in your browser. This mode is inefficient, has limited capabilities, and is extremely difficult to support due to severe technical restrictions on the limited features available with the *file:* scheme.

In 2020 Construct added support for the *app:* scheme for iOS, and in 2021 the *https:* scheme for Android. These modes work almost identically to the way a real HTTP server does, and are much more efficient, more capable, and easier to support. In r450+, released in 2025, support for the legacy *file:* scheme was removed, and all projects automatically use the *app:* or *https:* schemes. Older projects may show a warning that the project used to use the legacy *file:* scheme.

> **Warning**  
> **Warning:** publishing a mobile app with a changed scheme will have the effect of clearing storage, as it changes the URL used internally to load the project, and storage is remembered based on the URL. Therefore you should not publish an update to an existing app that changes the scheme if that app uses storage. If you still need to maintain an already-published mobile project using the legacy *file:* scheme, you should continue using the r449.x [LTS releases](https://www.construct.net/en/make-games/releases/lts) to update your app, which are the last releases that still support the *file:* scheme.

## NW.js exporter

For many years Construct used a framework called NW.js for its desktop exports, along with an NW.js plugin for further integration. Modern versions of Construct switched over to separate Windows, macOS and Linux exporters using different technologies, and as of r450+ released in 2025, support for NW.js has been retired. The [Browser plugin](../plugin-reference/browser.md) provides most of the windowing features of the old NW.js plugin, and the [File System plugin](../plugin-reference/filesystem.md) provides access to local files and folders. The legacy Greenworks plugin for Steam integration with NW.js has also been replaced by the [Steamworks plugin](https://www.construct.net/en/make-games/addons/1105/steamworks) which works with the modern export options.

## Deprecated plugins/behaviors

Construct will list any plugins or behaviors used in your project that are marked deprecated. This means the entire plugin or behavior is no longer supported and should not be used any more. Usually this is because it has been replaced by a newer addon or feature, or the addon was for a third-party service that was shut down. If your project uses deprecated addons, you should delete them from your project, and where applicable replace them with a newer addon or different feature.

To remove a deprecated plugin, all object types based on the plugin must be deleted from the Project Bar. To remove a deprecated behavior, all objects using the behavior must have the behavior removed.

To help you identify where a deprecated addon is used, follow these steps.

1. Right-click the name of the project in the Project Bar.
2. Choose `Tools › View used addons`.
3. Find the deprecated addon in the list.
4. In the *References* column, the first few object names using the plugin or behavior are listed. To see a comprehensive list, right-click on the addon and choose `Find all references...`.

Deprecated plugins and behaviors are hidden from the list when adding a new object or behavior. Therefore any plugins or behaviors you can still add from Construct are not deprecated. Any of these can be used as replacements for deprecated addons.

### Functions

The legacy Function plugin will also be listed as a deprecated plugin. In 2019, Construct 3 introduced [a new built-in functions feature](https://www.construct.net/en/blogs/construct-official-blog-1/construct-3s-new-redesigned-1059) which replaces the old Function plugin. Projects using legacy Functions should switch to using the new built-in system.

To help with converting to built-in functions, you can right-click an *On function* condition in the old Function plugin, and select *Replace with built-in function*. Note due to differences between the features, it may not always be possible to automatically replace the function, and you will need to do it manually instead.

For more information on built-in functions, see the manual section on [Functions](../project-primitives/events/functions.md).

## Classic scripts

Construct's JavaScript coding feature relies on JavaScript Modules, using `import` and `export` statements. However it originally used "classic" mode scripts, which don't support `import` or `export` statements. In 2020 Construct added support for modules, and in 2021 it removed support for the legacy "classic" mode scripts. To help you identify compatibility problems with old projects, Construct continues to warn you if you open a project that was still using "classic" mode scripts.

To update the project to use modules, refer to the tutorial [Upgrading projects from classic scripts to modules](https://www.construct.net/en/tutorials/upgrading-projects-classic-2652). The next time you save the project the deprecation warning will no longer appear.

## Other deprecated features

Sometimes individual conditions, actions or expressions are marked deprecated, or effects are deprecated. Construct does not currently notify you about these, because they are generally minor and easy to continue to support in the long term. However you may notice these as some conditions, actions, expressions or effects that you can access from the user interface differ from the ones referenced in an old project. If this is annoying for any reason, you can delete the old usage and add it back with the new usage to update it, but usually this is not necessary to keep the project working.
