---
title: "Finding addon IDs"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/finding-addon-ids"
release: 487
---

## On this page

- [Listing addon IDs](#listing-addon-ids)
- [Listing ACE IDs](#listing-ace-ids)

---

Some APIs use special IDs, such as a plugin ID or action ID. The editor provides some methods you can use from the browser console to explore which IDs are available.

## Listing addon IDs

The `C3SDK_ListAddonIDs(addonType)` method lists all installed addon IDs in the editor. The *addonType* parameter must be `"plugin"` or `"behavior"`. For example, load Construct 3 in a browser, open the browser console (usually F12), and enter the following call to list all plugin IDs:

```javascript
C3SDK_ListAddonIDs("plugin")
```

This may take a moment to load, but then it will log to the console the ID for every installed plugin, along with its name as used in the editor (since this is sometimes different to the ID for legacy reasons).

## Listing ACE IDs

The `C3SDK_ListACEIDs(addonType, addonId, aceType)` method lists the IDs for an addon's actions, conditions or expressions (ACEs). The parameters it takes are:

- *addonType*: as before, either `"plugin"` or `"behavior"`.
- *addonId*: the ID of the addon, which can be found using `C3SDK_ListAddonIDs()`.
- *aceType*: one of `"actions"`, `"conditions"` or `"expressions"`, determining which to list.

For example the following call will list all of the Sprite plugin's action IDs. The parameters each takes are also listed.

```javascript
C3SDK_ListACEIDs("plugin", "Sprite", "actions")
```
