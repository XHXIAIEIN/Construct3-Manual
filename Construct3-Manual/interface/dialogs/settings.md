---
title: "The Settings dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/settings"
release: 487.3
---

## On this page

- [User interface](#user-interface)
- [Text / code editor](#text--code-editor)
- [Save & backup](#save--backup)
- [Default properties](#default-properties)
- [Updates](#updates)
- [Preview](#preview)
- [Start page](#start-page)
- [Event sheets](#event-sheets)
- [Advanced](#advanced)

---

The **Settings dialog** allows you to change various settings for the Construct 3 editor. It can be opened via the [main menu](../../interface/main-menu.md).

## User interface

**Language**  
Select the language for the editor interface. Construct 3 must be reloaded after changing this.

**UI mode**  
Whether to use a desktop interface, a [mobile interface](../../getting-started/on-mobile.md), or automatically decide which to use (the default). This can be useful to force tablets with a mouse and keyboard attached in to desktop mode. Construct 3 must be reloaded after changing this.

**Use simplified user interface**  
Hide advanced options from the user interface. This is intended to provide a simpler interface for purposes such as classroom teaching with young students. For more information about using this mode, see the tutorial [Using the simplified user interface](https://www.construct.net/tutorials/using-the-simplified-user-interface-24).

**Enable Example Browser**  
When unchecked, both the Example Browser and all methods of opening it will be hidden. To bring back the Example Browser, check this setting again and then reopen the Example Browser (e.g. via `Menu › View › Example browser`).

**Theme**  
Change the style of the editor interface to a different theme. A couple of alternative themes are built-in. It's also possible to install [third-party themes](../../tips-and-guides/installing-third-party-addons.md). Construct 3 must be reloaded after changing this.

**Enable UI animations**  
Enable animations in the user interface (UI), such as when opening menus, dialogs and so on. If disabled then these actions will happen instantaneously without any kind of transition.

**Enable UI effects**  
Enable effects in the user interface (UI), such as shadows behind dialogs and menus. If disabled these effects will be hidden, which can help improve performance on low-end devices.

**Enable notifications**  
Allow Construct to show information by making a small notification box appear in the corner of the window. This is recommended since sometimes the information is significant, but if they are distracting you can turn them off.

**Show 'take a break' reminder every 2 hours**  
Enable a message displayed every 2 hours while the editor is open reminding you to take a break. This is intended to encourage your digital well-being, as taking regular breaks is important for healthy usage of computing devices. It is enabled by default, but can be turned off, for example if you already have other software that shows such reminders.

**Zoom with mouse wheel only**  
Normally to zoom the Layout View or Animations Editor, the Control or Command key must be held down while scrolling the mouse wheel. Enabling this setting means no keyboard key needs to be held down and scrolling the mouse wheel alone will zoom the view.

**Use default icon color**  
Allow the current theme to specify the icon color. If disabled, the *custom icon color* setting enables.

**Custom icon color**  
If *Use default icon color* is disabled, this allows you to choose a custom color for icons in the editor.

**Enable multi-monitor features**  
Click to enable features designed to help when using multiple displays, including remembering the position of windows across monitors. This may not be shown if the browser does not support multi-monitor features. When the button is clicked, you may see a permission prompt - be sure to allow permission for the multi-monitor features to take effect.

**Reset user interface**  
Click to reset the size and position of all [bars](../../interface/bars.md) and dialogs to their defaults. Construct must be reloaded after doing this.

## Text / code editor

These settings are for Construct's built-in text and code editor, such as when editing a JavaScript file in the project.

**Font size (px)**  
Set the font size used in text editors to a size in *px*.

**Automatic indentation**  
Check to enable automatic indentation when editing code in the text editors.

**Word wrap**  
Enable wrapping text at the edge of the text editor. If unchecked a horizontal scrollbar will appear when text goes past the right edge of the text editor.

**Enable code folding**  
Enables expand/collapse buttons in the margin of the code editor which allow for collapsing or "folding" regions of code.

**Use sticky scrolling**  
Enables a sticky header at the top of the code editor that shows the current class or function declaration even after you've scrolled past it. This can be helpful in long functions or classes to help you quickly see the context you are working in.

**Show minimap**  
Enables the additional scaled-down view of the file by the scroll bar, called the "minimap".

**Minimap scale**  
When the minimap is enabled, the size to display the minimap.

## Save & backup

**Default save location**  
Choose the default save location when pressing the 'Save' button on a new project. The default depends on which save options the browser supports; where possible it defaults to saving a local file, otherwise it defaults to cloud save.

**Periodically back up active project**  
If enabled, Construct will periodically auto-save your project. This can help avoid lost work in the event of a crash or hardware failure.

**Backup location**  
Choose which save location to use for backups. By default this saves backups in the same place your project is saved (e.g. on Google Drive if your project is saved on Google Drive). However you can also set it to save to a specific cloud storage service, or a local folder on the device (where supported).

**Local backup folder**  
Choose a local folder to save backups to. This option is only used if supported by the browser/platform, and the backup location is set to *Local folder* or *Same location* (in which case it is used for projects saved to the local system). Click the *Choose* button to pick the folder. A folder must be picked for backups to a local folder to work. Construct may have to prompt you the first time it writes to this folder in a session for permission to write to it.

**Backup interval (minutes)**  
The duration in minutes after which Construct will automatically make a backup, if enabled.

**Clear recent projects**  
Click to clear the entries listed in *Recent projects* in the Start Page and main menu.

**Download local browser saves**  
This option is only shown when local browser saves are enabled (which is only in browsers which do not support saving directly to files). Click to download a zip file with all projects saved to the local browser. This is useful for archiving, diagnostics, and recovery if local storage is somehow corrupted.

## Default properties

**Default project author**  
Set the default project properties used when creating new projects. These settings will be pre-filled in to the author, email and website project properties.

**Default project email**  
Set the default project properties used when creating new projects. These settings will be pre-filled in to the author, email and website project properties.

**Default project website**  
Set the default project properties used when creating new projects. These settings will be pre-filled in to the author, email and website project properties.

**Default animation speed**  
Set the default animation speed for new animations in the Animations Editor. By default this is 5 to play animations at 5 frames per second. It can be useful to change this to 0 if you don't want animations to play by default, allowing manual control of the animation frame.

## Updates

**Notify me about updates for**  
Opt-in to see notifications about new beta releases. Beta releases are more frequent and include new features sooner, but may have more bugs. By default you will only be notified about new stable releases which are generally more reliable. Note you can try beta releases at any time by visiting the [Releases page](https://www.construct.net/make-games/releases) - this setting only controls which automatic update notifications you see.

> **Tip**  
> Note if you save a project in a newer release of Construct 3, such as a beta release ahead of a stable release, that project cannot be opened in the older release. You may wish to back up your projects before using a beta release.

**Check for updates for installed addons**  
Enable automatically checking if any updates are available for installed addons via the [Addons section of the website](https://www.construct.net/en/make-games/addons). If enabled updates are checked for when the editor starts up, and will show a notification if updates are found; updates can then be installed via the [Addon Manager](../../interface/dialogs/addon-manager.md).

## Preview

**Preview with**  
Choose one of the following ways for previewing projects:

- **Popup window:** open a popup window to display the project in. The popup uses a reduced browser interface, such as hiding tabs, to conserve space. This allows you to view the project in a separate window. However sometimes popup blockers can prevent the window from appearing.
- **Browser tab:** open a full new browser tab to display the project in. The new tab uses the full browser interface. Normally when previewing the browser will add a new tab in the same browser window, and switch from Construct 3 to the project being previewed.
- **Dialog:** open a dialog inside the Construct 3 window to display the project in. This does not involve opening a new browser window at all, so is never blocked by popup blockers. However the dialog cannot be moved outside of the Construct 3 window.

 Construct 3 must be reloaded after changing this.

## Start page

**Show the Start Page on startup**  
Whether to show the [Start Page](../../overview/start-page.md) when Construct starts up.

**Hide the Start Page when opening a project**  
If enabled, then the Start Page will automatically be closed when you open a project or example.

**Occasionally show message banners from the Construct team on the Start Page**  
When there is a major new update or an active promotion, Construct may show an official message banner on the Start Page. Note this message comes directly from the Construct team - it is not a third-party advert. Uncheck this option if you would prefer not to see these messages.

## Event sheets

**Hide 'Add action' links**  
Hide the row beneath actions in the [Event Sheet View](../../interface/event-sheet-view.md) that contains the *Add action* link. This can save vertical space in the Event Sheet View making it easier to read events, but makes it slightly less convenient to edit events. Actions can still be added even when the *Add action* links are hidden using context menus or keyboard shortcuts. Also events with no actions still show an *Add action* link, since it does not take up any extra space.

**Translate expressions**  
This only applies if you have changed Construct's language to something other than English. For compatibility reasons, expressions in the event sheet must still be written in English, even when the interface is showing a different language. By default Construct translates expressions so you can read and autocomplete them in the same language; however they must still be written in English. Uncheck this setting to keep displaying expressions in English even when the interface is in a different language, which means they appear the same way they are written. This may be particularly useful for bilingual users who also know English.

## Advanced

**Use in-app clipboard**  
By default when selecting a 'Copy' command, Construct will try to write to the system clipboard. However due to restrictions in when browsers allow this to happen, sometimes the copy is blocked and Construct must prompt you to allow the operation. To avoid this, you can enable the **in-app clipboard**, which does not write to the system clipboard. This avoids these prompts ever appearing, but means you can only copy and paste within the same Construct window.

**Cache cloud metadata**  
If enabled, this saves information about files and folders in your cloud storage account locally for the duration of the session. This makes it faster to use Cloud Save, since all file listings are immediately available. However it will not update to reflect changes made elsewhere unless you manually refresh the list. If this option is disabled it will always update the file list from the cloud storage service and therefore always be up-to-date, but if your connection is slow (or the cloud storage service is slow) this can make it slow to use Cloud Save.

**Limit editor/preview to WebGL 1**  
Enable this setting to force the editor and preview to use WebGL 1 even when the device supports WebGL 2. Exported projects will still continue to use WebGL 2 where supported when this setting is enabled. It is intended for developers testing both WebGL 1 and WebGL 2 shader variants in effect addons and should not need to be used for anything else.

**Show in-progress languages**  
Show languages in the *Language* setting that are not yet complete. This option is intended for translators to help them review their work.

> **Tip**  
> Translations are fully reviewed before release, but in-progress translations have not had any kind of review yet. There is no guarantee that the content of in-progress languages is suitable or appropriate.

**Enable experimental features**  
Opt-in to testing pre-release features that may not be ready for full release yet. See the blog for news about such features and how to use them. Note there may not always be experimental features to be enabled, but when any are available enabling this setting will make them available in the editor.

**Enable WebGPU in editor**  
Whether to enable the WebGPU renderer in the Construct editor (which is used to draw Layout Views). If disabled or WebGPU is not supported, a WebGL renderer will be used instead. The renderer in use can be viewed in the Platform Information dialog (via the About dialog). The renderer in use also affects which shader variants will be used for effects; in some cases using third-party effects may require using a specific renderer otherwise they will not be able to render in the editor. The *Auto* setting means Construct will use the default, which is currently the WebGL renderer.

**GPU preference**  
Some systems have multiple GPUs. For example many laptops have a weak, low-power integrated GPU for use on battery, and a more powerful discrete GPU for gaming. This setting allows you to specify which GPU to prefer. Construct 3 must be reloaded after changing this. You can check which GPU is in use by opening the **About** dialog, clicking *Platform information*, and inspecting the *Renderer* under *WebGL information*. Note not all browsers support this setting, in which case it will have no effect.
