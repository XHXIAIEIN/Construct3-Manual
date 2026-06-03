---
title: "No Save behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/no-save"
release: 487.2
---

The **No Save behavior** simply causes the object to be omitted from save states when using the *Save* and *Load* system actions.

Normally all objects are saved and loaded with these actions. Adding the No Save behavior will skip saving any data for the object when saving, and will not affect the object when loading. After a load, all the same objects that were there before the load are still present, and with the same properties.

It is a good idea to add the No Save behavior to objects which don't need to be saved, like scenery and background objects. It can also be used on automatically updated objects, like interface elements and text objects which update their text every tick. This will help make the saves smaller in size, and also complete saving and loading quicker.

For more information see the tutorial [How to make savegames](https://www.construct.net/tutorials/how-to-make-savegames-11).
