---
title: "The New Project dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/new-project"
release: 495
---

The **New project** dialog appears when you create a new [project](../../project-primitives/projects.md). It allows you to specify some basic details about the project, such as its name. New projects can be created from the [Start Page](../../overview/start-page.md) or the [main menu](../../interface/main-menu.md).

All values are optional so you can simply click **OK** right away to get a basic new project with default settings. Note the <kbd>Alt</kbd> + <kbd>N</kbd> [keyboard shortcut](../../interface/keyboard-shortcuts.md) creates a new project skipping this dialog, as if you clicked OK after it opened.

[![The New Project dialog](https://construct-static.com/images/v1767/r/uploads/articleuploadobject/0/images/31424/new-project-dialog_v430.png)](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/31424/new-project-dialog.png)

The dialog has the following fields.

**Name**  
Choose the name of the project. Construct uses this to identify your project.

**Choose preset**  
Select a preset from this list to fill out the rest of the fields quickly. For example choosing *1080p landscape* will automatically fill out a 1080p viewport size and set the landscape orientation.

**Viewport size**  
Set the size, in pixels, of the view area in the game. This corresponds to the *Viewport size* [project property](../../project-primitives/projects.md). The viewport size also defines the aspect ratio of the project, which is displayed to the right.

**Orientations**  
Whether to lock the orientation on mobile devices. *Any* allows the display to switch between portrait and landscape automatically; choosing either *portrait* or *landscape* will attempt to lock the orientation to prevent it changing, where supported. This corresponds to the *Orientations* [project property](../../project-primitives/projects.md).

**Start with**  
Choose the type of project to start with. *Event sheet* starts with an empty event sheet for using Construct's block-based approach. *Script* instead starts with a template JavaScript file for coding your game instead. See the [Scripting overview](../../scripting/overview.md) for more information about the scripting feature in Construct. You can easily switch between the two after creating a project by adding a new event sheet or a new script file.

**Optimize for pixel art**  
Check to apply settings that are more suitable for retro-style graphics. The following settings are applied:

- **Pixel rounding** is enabled
- **Letterbox integer scale** fullscreen mode
- **Low** fullscreen quality
- **Nearest** sampling
- **Pixel snapping** is enabled for the initial layout

These settings can be changed back any time after creating the project. For more information on each, see [project properties](../../project-primitives/projects.md).
