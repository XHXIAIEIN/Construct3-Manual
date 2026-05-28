---
title: "Plugins"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/plugins"
release: 487
---

Plugins define a kind of object. For example, a Sprite is a kind of object, and the Audio object is a different kind. These are defined by the *Sprite plugin* and *Audio plugin* respectively. See the plugin reference for more information on individual plugins.

JavaScript developers can make new plugins (and behaviors) using the [Addon SDK](../../../Construct3-Addon-SDK/index.md). See also [Third-party addons](../../tips-and-guides/installing-third-party-addons.md) for information about installing addons.

Most plugins define their own properties in the [Properties Bar](../../interface/bars/properties-bar.md). To see a full list, locate the plugin in the reference section.

There are three main kinds of plugins:

1. **Visual plugins** (e.g. Sprite) appear in the layout and draw something to the screen.
2. **Hidden plugins** (e.g. Array) are placed in a particular layout, but do not draw anything to the screen.
3. **Project-wide plugins** (e.g. Mouse, Audio) are added to the entire project, and can only be added once. There cannot be more than one object type or instance of a project-wide plugin. They simply enable a new capability (such as being able to take mouse input) to [events](../../project-primitives/events.md).

Construct is designed modularly. That means not much functionality is built in: you must insert a plugin before you can use the related features. For example, you cannot play back any audio before adding the Audio plugin to a project. This might seem unnecessary, but there are many project-wide plugins and it is unlikely every project will need to use all of them. For example, if the Audio plugin was automatically included with every project, even projects which do not need Audio support would end up burdened with its features and code. So remember if you do not add a plugin, it is not at all included in your project, and this helps your projects remain lean and efficient when exported.
