---
title: "The Project Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/project-bar"
release: 487.3
---

## On this page

- [Organising projects](#organising-projects)
- [Managing items in the project](#managing-items-in-the-project)
- [Deleting objects](#deleting-objects)
- [Searching the Project Bar](#searching-the-project-bar)
- [Importing audio](#importing-audio)
- [Importing files](#importing-files)
- [Importing 3D model files](#importing-3d-model-files)
- [Previewing files](#previewing-files)

---

The **Project Bar** shows an overview of everything in your project. See [Project Structure](../../overview/project-structure.md) for a summary of the different elements that make up a project, or the manual section on [Project Primitives](../../project-primitives.md) for more detail.

[![The Project Bar](https://construct-static.com/images/v1769/r/uploads/articleuploadobject/0/images/32872/project-bar_v300.png)](https://construct-static.com/images/v1769/uploads/articleuploadobject/0/images/32872/project-bar.png)The Project Bar

If something in the project has changed, it is displayed in *italics*. When you save the project, everything reverts to normal text, indicating nothing has changed since the last save.

To view the project properties, select the project item. This is the item at the top of the Project Bar with the name of the project. When you select it, the [Properties Bar](../../interface/properties-bar.md) displays properties affecting the whole project. You can also **right-click the project item** to show a list of options, particularly the `Tools` submenu.

## Organising projects

The Project Bar can be used to arrange your project in to subfolders  `[Paid plans only]` . Subfolders can be added by **right-clicking a folder** and selecting `Add subfolder`. Then, you can **drag and drop** folders and items to organise them in to folders.

You can hold **Control** or **Shift** to select multiple items and drag them in to a folder at the same time. However you can only organise items in to folders of the same type, e.g. you can't drag an event sheet in to a layout folder.

## Managing items in the project

**Right-click** any item in the Project Bar to show a list of options. Most items can be renamed and deleted. Right-clicking a folder also has the option to add a new item to that folder, such as a new layout or event sheet. Objects are more commonly added in the [Layout View](../../interface/layout-view.md), but you can still add them from the Project Bar too.

## Deleting objects

Deleting from the Layout View will not remove an object from the project completely. The only way to fully remove an entire object type from the project is to delete it from the Project Bar.

## Searching the Project Bar

To search the Project Bar, simply **type in the search field** at the top of the bar. The contents of the Project Bar will filter down to matching items as you type, helping you quickly find things in your project.

Once you're done simply press <kbd>Escape</kbd> to clear the search and revert to the normal view of the Project Bar.

## Importing audio

**Right-click** either the **Sound** or **Music** folders and select `Import sounds` or `Import music` to open the [Import Audio dialog](../../interface/dialogs/import-audio.md). This allows you to pick audio files from your computer and import them to the project. Construct will convert them to the necessary format to support all browsers. To play back audio in your game, make sure you add the [Audio object](../../plugin-reference/audio.md) to the project. For more information see [Sounds & Music](../../project-primitives/sounds-and-music.md).

## Importing files

You can import additional external files to the project, including web fonts. These can be categorised in to **Videos**, **Fonts**, **Icons** or the general-purpose **Files** folder. For more information, see [Project Files](../../project-primitives/files.md) and [Icons & splash](../../tips-and-guides/icons-splash.md).

## Importing 3D model files

Check the [3D model primitive](../../project-primitives/3d-model.md) manual entry for more details about all the methods to import 3D models.

## Previewing files

From the Project Bar, you can preview several kinds of files added to the project. Audio and video files can be played back. Web fonts can be previewed with a dialog showing some text using the font. SVG files can also be previewed. Other kinds of file can be viewed and edited using the [file editors](../../interface/file-editors.md)  `[Paid plans only]` .
