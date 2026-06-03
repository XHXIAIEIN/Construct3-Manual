---
title: "The Find Results Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/find-results-bar"
release: 487.2
---

`[Paid plans only]`  The **Find Results Bar** is displayed either when you search for text in an event sheet (using **Ctrl + F** or `Event sheet › Find...`), or when you use the **Find all references** feature (e.g. via the [Project Bar](../../interface/bars/project-bar.md) to search for an object type's references). The results are listed with highlighting and information about their location, and they can be used to navigate to the result in the project.

[![Find results for 'Find all references'](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/115441/find-references-bar_v750.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/115441/find-references-bar.png)Find results for 'Find all references'

[![Find results for a search term](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/88276/find-search-term-results_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/88276/find-search-term-results.png)Find results for a search term

There are various different kinds of find results. These can be text matches for text searches, event matches for *Find all references*, instances on a layout, family members, and more. Normally navigating to a result locates and selects the relevant event in the [Event Sheet View](../../interface/event-sheet-view.md) or line of text in a project file. However other types display in different ways; for example navigating to a reference which indicates a number of instances on a layout will instead open the [Layout View](../../interface/layout-view.md), select those instances, and adjust the scroll and zoom so all the instances are visible on-screen.

To navigate to a result, **double-click** on it, or right-click and select `Go to`. This allows you to review the result in its original context.

Results can also be removed via the right-click menu or the <kbd>Delete</kbd> key, or the results cleared entirely. You can also choose `Redo search` to update the results with the latest state of the project.

There are various other search options in the toolbar at the top of the bar. This includes extra options like a secondary search term to filter the results list by, and search location and case sensitivity options when searching by text.

Finding in projects, especially *Find all references*, is an excellent way to review large projects. It can also provide helpful reminders about what you've used and where. It's also a good way to check if something is unused and so can be safely deleted.

### Ambiguous results

In some cases, *Find all references* is unable to determine if a reference is a match or not. For example if you use the system *Create object by name* action to create an object with a name based on `TextInput.Text` the editor doesn't know what the value at runtime will actually be, because it can't predict what the user will type in to the text input. It's possible it could refer to the object being searched for, but it can't be certain.

To handle these cases, they are listed anyway so you can check them yourself. Ambiguous results appear with a question mark icon to indicate they are not certain results. You can also choose to hide all such results by unchecking *Show ambiguous* in the toolbar.

One reason to avoid heavy usage of dynamic features like *Create object by name* is to avoid clogging up the *Find all references* results with ambiguous results that can't be proven to refer to one object or another. The standard *Create object* action, on the other hand, uses an object picker instead of a string expression. This means the editor does know in advance what kind of object will be created, and thus can list it accurately when using *Find all references*.
