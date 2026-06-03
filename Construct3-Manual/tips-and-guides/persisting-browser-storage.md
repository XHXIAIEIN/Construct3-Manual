---
title: "Persisting browser storage"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/persisting-browser-storage"
release: 487.2
---

## On this page

- [Privacy, tracking or cookie settings](#privacy-tracking-or-cookie-settings)
- [Browser extensions](#browser-extensions)
- [Manually clearing browser data](#manually-clearing-browser-data)
- [Private browsing modes](#private-browsing-modes)
- [Request persistent storage](#request-persistent-storage)
- [System storage running out](#system-storage-running-out)
- [Try another browser](#try-another-browser)

---

Construct asks the browser to store various kinds of information to ensure it persists across sessions. This includes:

- Your account login
- The list of recent projects
- The user interface layout
- Your chosen settings
- Installed third-party addons
- Saving Construct itself for use offline
- Saved large downloads so they don't have to be downloaded again every session
- Many more details

If your browser refuses to save this data to storage, or regularly clears it, then you may experience problems like your account login being forgotten, your recent projects being cleared, the user interface and your chosen settings resetting, installed addons becoming uninstalled, and so on.

To fix this, you usually need to adjust your browser settings, as it is the browser that is causing your data to be lost rather than Construct. This guide covers a range of possible causes and solutions for this kind of problem.

## Privacy, tracking or cookie settings

Some websites abuse storage for things like unauthorized tracking of users. Also, many countries around the world have increasingly strict regulation of data management. Therefore most modern browsers have comprehensive settings to control what websites are allowed to do to preserve privacy and mitigate unwanted tracking. However some settings could prevent Construct from being able to store data persistently.

Check your browser settings to see if you've changed something that is blocking Construct from storing data. These settings could relate to privacy, anti-tracking, storage, or "cookies" (a general term for any data stored by websites on your device). For example if you have a setting that clears all cookies every 7 days, then it's possible everything Construct has remembered will be reset every 7 days.

## Browser extensions

Some browser extensions provide additional privacy, tracking or data control. Similar to browser settings, be sure to check any browser extension settings relating to privacy, anti-tracking, cookies or storage. For example if you have a browser extension that only allows specific websites to permanently store data, then you would need to add Construct to the list to allow it to persist its storage. Alternatively you could uninstall the browser extension to see if that solves the problem.

## Manually clearing browser data

It's worth noting that manually clearing browser data may also clear Construct's saved data. As above, choosing to clear "cookies" or "site data" may cause everything Construct has saved to be deleted. You may need to carefully choose what categories of data to clear, or just avoid manually clearing browser data unless you're willing to also reset Construct.

## Private browsing modes

Most modern browsers provide a special private browsing mode for privacy reasons. These modes by design do not remember anything after you close the private browsing window. Therefore if you use a private browsing window, Construct will always act as if it is the first time you are running it, with no login, default settings, and so on.

## Request persistent storage

Something that may help Construct remember data permanently is to request permission for persistent storage. In Construct choose `Menu › About` to open the About dialog, and find the *Local storage* section. This shows how much storage Construct is using and the available storage quota, as reported by the browser. Where supported by the browser, there may also be a *Request persistent storage* link, with text reporting the current persistence state (e.g. "Browser may not persist storage"). Click the *Request persistent storage* link to ask the browser to persist Construct's storage. You may see a permission prompt, so be sure to approve that. If it works, the status text should change to read "Browser will persist storage".

Note that this still does not provide a guarantee that data will be held permanently. It is still possible that things like manually clearing data, browser extensions, or running out of disk space, may cause the data to be lost anyway. However this generally improves the chance that Construct's data will be able to persist long term.

## System storage running out

If your system is running out of disk space, sometimes browsers respond by starting to erase website data. This can cause Construct's data to be lost as well.

As described above, requesting persistent storage may help avoid this - the browser should start by erasing other website's data first. However if the system runs out of storage space repeatedly, it may end up deleting Construct's saved data anyway.

Construct's [Storage Cleanup dialog](../interface/dialogs/storage-cleanup.md) can help free up space used by Construct without having to clear everything like your settings and login. Sometimes things like saved exported projects, downloaded example projects, and some export options, can end up using a lot of data. So if you are running low on disk space, try using that dialog to reduce the storage space Construct is using. You can also try general-purpose methods to save on disk space, such as using any system storage cleanup tool, uninstalling unused apps, deleting unnecessary files, and so on.

## Try another browser

If all else fails, you can try using a different browser. In general most modern browsers with their default settings should be able to persistently remember data that Construct saves.
