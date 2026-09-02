---
title: "Dictionary editor"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/file-editors/dictionary-editor"
release: 495.2
---

## On this page

- [De-duplicating rows](#opening-the-dictionary-editor)

---

`[Paid plans only]`  The **Dictionary editor** allows editing a dictionary data file for the [Dictionary object](../../plugin-reference/dictionary.md). The data you enter can be loaded at runtime by loading the [project file](../../project-primitives/files.md) in to the Dictionary object. It provides a visual way to set the initial data for a Dictionary. The Dictionary Editor appears when editing or adding an dictionary data file (in JSON format) in the [Project Bar](../../interface/bars/project-bar.md).

[![The Dictionary Editor](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/932/dictionary-editor_v700.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/932/dictionary-editor.png)The Dictionary Editor

### Opening the Dictionary Editor

To open the Dictionary Editor in a new project, start by adding a new *Dictionary* file in the *Files* folder of the [Project Bar](../../interface/bars/project-bar.md). For more information, see [project files](../../project-primitives/files.md).

### Editing dictionaries

Initially the dictionary has a single item, which means there is just one row available. Use the *Size* setting to change how many items are available. This determines how many rows appear in the editor, allowing you to enter more data. Each row represents a key in the dictionary (in the left column) and its associated value (in the right column).

Enter values in cells simply by typing in them. You can also navigate between cells using <kbd>Tab</kbd> or <kbd>Ctrl</kbd> + **Arrow keys** on the keyboard. Note that keys are always stored as strings, and the type of values are determined automatically: if you enter a number (e.g. *4.2*), the value is set to a number type, otherwise it is saved as a text string.

**Right-click** a cell to open a context menu with options to clear, insert or delete rows.

## De-duplicating rows

Dictionaries associate a value with a key. Due to the nature of dictionaries, there cannot be two identical keys, since there can only be one value per key. If you accidentally enter two identical keys, they will both highlight in red. You can click the *Automatically deduplicate keys* button to add numerical suffixes to any duplicated keys to automatically fix this problem.
