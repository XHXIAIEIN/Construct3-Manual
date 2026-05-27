---
title: "Storage Cleanup dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/storage-cleanup"
release: 487
---

The **Storage Cleanup dialog** is a tool that helps you to free up storage space on the local device. If you run out of available storage space, it can cause errors to appear and may stop some features of Construct working correctly. This tool provides a way to help solve the problem if that happens. In some cases Construct will recommend you use this dialog to free up more space if it detects a storage problem that may have been caused by lack of free space.

[![storage cleanup dialog v550](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/137918/storage-cleanup-dialog_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/137918/storage-cleanup-dialog.png)

The Storage Cleanup dialog can be opened by choosing `Menu › View › Storage cleanup`. In some cases it may take a while to fully scan storage before listing deletion options.

> **Tip**  
> The estimated storage usage and quota are estimates provided by the browser. They may not be exactly accurate, and also may not match up with the amount of space Construct thinks it can save by deleting items. Further it may not immediately update after clearing storage. It is best to only treat it as a guide to whether storage is mostly full or whether there is a reasonable amount of storage space available.

In general, providing you are online, everything can be safely cleared. Exported projects that are cleared can always be re-exported from the original project, and downloaded Linux CEF versions, example projects, and saved versions of Construct can all be re-downloaded while online. However if you are offline, you may wish to be more careful about the items that you clear, since they may then become unavailable until you next go online. In particular deleting all saved versions of Construct will delete the copy used to work offline, and therefore stop you being able to work offline until you next go online, where Construct will save itself for use offline again. For this reason that option is unchecked by default since you should check you are online before using it. After using it, it's a good idea to reload Construct, which will make it save itself for use offline again.

The items listed in the dialog include explanations of what they are and the consequences of deleting them. There is also additional advice at the bottom of the dialog with additional things you can do to free up space which you will have to do separately since Construct cannot do them for you. Some browsers set a storage quota based on a proportion of the available disk space, so in general anything else that frees up storage space on the device should increase the quota available to Construct.
