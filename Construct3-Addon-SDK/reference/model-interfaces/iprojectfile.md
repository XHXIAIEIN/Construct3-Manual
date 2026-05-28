---
title: "IProjectFile interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/iprojectfile"
release: 487
---

## On this page

- [Methods](#methods)

---

The `IProjectFile` interface represents a project file added in the Project Bar in Construct.

## Methods

**GetName()**  
Return the filename of the project file.

**GetPath()**  
Return the full path to the project file, including any subfolders, separated by forwards slashes. The path returned matches its location after exporting the project, which may mean the subfolder path does not exactly match its location in the Project Bar. For example a file named *music.webm* in the Music folder of the Project Bar will have a path of `"media/music.webm"`. However files in the general-purpose *Files* folder are always relative to the root folder, so no additional subfolders will appear in the path.

**GetProject()**  
Return the [IProject](../../reference/model-interfaces/iproject.md) the project file belongs to.

**GetBlob()**  
Return a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representing the contents of the file. The standard web APIs for reading blobs can be used to access the content.
