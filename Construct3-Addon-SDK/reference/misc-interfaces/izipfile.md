---
title: "IZipFile interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/misc-interfaces/izipfile"
release: 495
---

## On this page

- [Methods](#methods)

---

The `IZipFile` interface represents a zip file in the SDK. It allows access to the file list and reading files contained within the zip.

## Methods

**PathExists(path)**  
Return a boolean indicating if a given path exists within the zip.

**GetFileList()**  
Return an array of all file paths contained within the zip.

**GetFirstEntryWithExtension(ext)**  
Return a [IZipFileEntry](../../reference/misc-interfaces/izipfileentry.md) representing the first entry found with a given file extension, or `null` if none was found.

**GetEntry(path)**  
Return a [IZipFileEntry](../../reference/misc-interfaces/izipfileentry.md) representing the file at the given path. If the path does not exist in the zip, this returns `null`.

**ReadText(entry)**  
Return a promise that resolves with the contents of the given IZipFileEntry read as plain text.

**ReadJson(entry)**  
Return a promise that resolves with the contents of the given IZipFileEntry, read as plain text and then parsed as JSON.

**ReadBlob(entry)**  
Return a promise that resolves with the contents of the given IZipFileEntry, read as a `Blob`. (This is a raw binary format that can be read with other JavaScript APIs.)

> **Tip**  
> The returned blob will have `name` and `lastModified` properties added, reflecting the properties of the file in the zip.
