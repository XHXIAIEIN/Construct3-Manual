---
title: "Saving projects"
source: "https://www.construct.net/en/make-games/manuals/construct-3/overview/saving-projects"
release: 487.2
---

## On this page

- [Cloud save](#cloud-save)
- [Download a copy](#download-a-copy)
- [Using local files](#using-local-files)
- [Using project folders](#using-project-folders)
- [Save to local browser](#save-to-local-browser)

---

In Construct, there are several ways you can save your work. By default pressing **Save** on a new project will save with **Cloud Save**. You can select a different option, as well as change the save option at any time, in the `Menu › Project › Save as` menu.

## Cloud save

You can save your work to a cloud storage services, allowing you to access your work wherever you go. Since Construct runs in the browser and can be used on any device, this is a great way to ensure you can carry on from where you left off no matter which device you end up using. Many cloud storage services also provide built-in backups and file histories, helping ensure your work is safe even in the face of disaster.

Construct currently supports [Google Drive](https://www.google.com/drive), [Microsoft OneDrive](https://onedrive.live.com/) and [Dropbox](https://www.dropbox.com/). The first time you select `Menu › Project › Save as › Cloud save`, a dialog will appear asking you to choose one of the supported services. When you choose one, you'll be prompted to log in to your cloud storage account, so Construct has permission to save and open files from your account. Once you've entered your details they will be remembered, so you can keep using Cloud Save without having to keep entering your details.

> **Tip**  
> Remember that your Cloud Save login is separate to your Construct login. The fact you are signed in to one does not automatically mean you are signed in to the other.

When you press **Save** with a Cloud Save project, Construct will save your project and upload it to your cloud storage account. The upload will continue in the background showing the upload status in the corner of the window, allowing you to continue working on your project. Note you cannot save again until the upload completes.

Next time you use Construct, you can choose `Menu › Project › Cloud open` to find your project again. It'll also appear in the **Recent projects** section of the [Start Page](../overview/start-page.md).

## Download a copy

Select `Menu › Project › Save as › Download a copy` to download your project as a local file. Construct will ask if you want to change the downloaded filename; you can leave it empty to use the default. Construct projects use the **.c3p** file extension. Normally the file will go to your Downloads folder, but you may also be prompted to save to a different location depending on the browser. Alternatively you can usually drag-and-drop the resulting file directly out of the browser, such as from Google Chrome's downloads footer section.

Note that despite the name, this does not actually download a file from the Internet. All the project data is stored locally. The term *Download* refers to invoking the browser's download UI to save your project to a local file.

## Using local files

Currently some browsers such as Chrome support saving files directly to your system. This means you can use the `Menu › Project › Save as › Save as single file...` option to save your project as a local file anywhere on your system. To open a local file, choose the `Menu › Project › Open local file` option. Then when you make changes and click the Save button, it will write back over the file you originally opened. You may see a permission prompt from the browser asking if you want to allow access to the file; be sure to allow permission to ensure your save works correctly.

> **Warning**  
> When saving to local files, be sure to set up backups to help avoid the risk of losing your work in the event of disaster. You can enable automatic backups in Construct's settings. See [best practices](../tips-and-guides/best-practices.md) for more information.

## Using project folders

Where browsers support local files, they also allow the option to use project folders. These work similarly to saving local files, but instead of choosing a file, you select a folder to save to. Construct then saves the entire project as separate files within this folder. Be sure to choose an empty folder to avoid ending up with a confusing mix of files.

This option is good for very large projects, since saves are faster, as it only has to update the changed files in the folder, rather than generate an entire new .c3p file. It is also a good option to use with source control tools like GitHub, since you can track changes to individual text-based files - for a guide on that see the tutorial [How to collaborate on Construct projects with GitHub](https://www.construct.net/en/tutorials/collaborate-construct-2390).

This option can also be useful if you work with lots of JavaScript or TypeScript files in a Construct project and want to use a separate code editor. See the guide on [Using an external editor](../scripting/guides/using-external-editor.md) for more details.

> **Tip**  
> Construct's .c3p files are actually just a zipped folder project, with the extension .zip replaced with .c3p. You can convert a .c3p file to a folder project by renaming .c3p to .zip and extracting it. Similarly you can convert a folder project to a .c3p by zipping it, and renaming .zip to .c3p.

> **Warning**  
> When saving to local folders, be sure to set up backups to help avoid the risk of losing your work in the event of disaster. You can enable automatic backups in Construct's settings. See [best practices](../tips-and-guides/best-practices.md) for more information.

Advanced users may interested to read the guide [Construct's project format](https://www.construct.net/en/tutorials/constructs-project-format-3275) for an overview of how Construct stores project data.

## Save to local browser

If saving local files is not supported, Construct provides an option to save projects to the local browser's storage instead. This storage is unique to both the specific device and browser. So for example if you save a project to browser storage on a specific laptop with Chrome, you can only find it again by using the same browser (Chrome) on the same device (that specific laptop).

Construct will ask for permission to use persistent storage the first time you use this option, to ensure the browser won't automatically delete your data. Note browsers sometimes also have storage limits. You can also check the status of the persistent storage permission, as well as how much space the browser is allowed to use and how much it is using, in the **About** dialog.

> **Warning**  
> If you use this option, be very careful about clearing your browser data. If you choose the wrong option while clearing browser data, you could still erase all your projects saved to browser storage. For this reason, using a different save option where possible is recommended.
