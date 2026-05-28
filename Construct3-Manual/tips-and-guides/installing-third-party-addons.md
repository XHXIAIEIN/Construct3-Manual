---
title: "Installing third-party addons"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/installing-third-party-addons"
release: 487
---

## On this page

- [Finding addons](#finding-addons)
- [Installing an addon](#installing-an-addon)
- [Updating addons](#updating-addons)
- [Uninstalling an addon](#uninstalling-an-addon)
- [Bundling addons to projects](#bundling-addons-to-projects)

---

Third party developers can extend Construct 3 with new plugins, behaviors, effects and themes (collectively referred to as "addons") using the [Addon SDK](../../Construct3-Addon-SDK/index.md). Addons are typically distributed as a **.c3addon** file.

> **Warning**  
> **Only install addons from trustworthy developers who actively support their addons.** Malicious addons have the potential to compromise the security of your project, your Construct account, or have hidden unwanted features like surprise adverts or tracking users. Badly written addons can also cause bugs or glitches in your game, **including corrupting your project**. While addons can be useful, remain vigilant about them, especially in regards to whether the developer seems trustworthy and if they are still available and actively supporting their addon to provide support and fix any problems that arise.

If you have problems with third-party addons, you must report the issues to the developer who provided them. Scirra cannot offer any support for third party addons whatsoever.

## Finding addons

You can visit the [Addons section of the website](https://www.construct.net/make-games/addons) to find plugins, behaviors, effects and themes created by third-party developers. When you download an addon, you'll receive a .c3addon file, which you can then install via the Addon Manager.

## Installing an addon

To install an addon from a .c3addon file, first select `Menu › View › Addon manager` to open the [Addon Manager](../interface/dialogs/addon-manager.md). In this dialog, click **Install new addon...** and choose the .c3addon file. Construct 3 will prompt to confirm installation of the addon. If you confirm the install, you must restart Construct 3 before the addon is available. In the browser you can just press the Reload button.

Modern addons (using SDK v2) can also be installed by directly dragging and dropping the .c3addon file in to Construct. Note however this is unavailable for legacy addons (using SDK v1).

## Updating addons

By default Construct will check if any updates are available for installed addons via the Addons website. If updates are available, it will show a notification on startup. Addons can then be updated via the [Addon Manager](../interface/dialogs/addon-manager.md).

> **Tip**  
> Addons installed from other sources rather than the Construct Addons website will not show update prompts.

## Uninstalling an addon

Third-party addons are listed at the top of the Addon Manager. Locate the addon, right-click on it (or tap-and-hold), and select the **Uninstall** option. You can uncheck *Show built-in addons* or use the search field to help you locate an addon.

## Bundling addons to projects

`[Paid plans only]`  Enable the *Bundle addons* [project property](../project-primitives/projects.md) to include any third-party addons the project uses in the saved project file. This allows you to open the project on another device without having to have the same third-party addons pre-installed, since the addons will be loaded directly from the project file.

Sometimes you'll need to update a bundled addon to the latest version, if you update the installed addon in Construct. To update a bundled addon, open the *View used addons* dialog by right-clicking the project name in the [Project Bar](../interface/bars/project-bar.md) and selecting `Tools › View used addons`. In this dialog you can right-click a bundled addon (highlighted in bold) and select `Update to editor version`.
