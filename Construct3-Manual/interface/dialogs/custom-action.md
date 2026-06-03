---
title: "Add/edit custom action dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/custom-action"
release: 487.2
---

The add/edit function dialog appears when adding or editing a [custom action](../../project-primitives/events/custom-actions.md).

[![custom action dialog v470](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/99553/custom-action-dialog_v470.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/99553/custom-action-dialog.png)

This dialog has the following fields.

**Object**  
Click the button to choose the [object type](../../project-primitives/objects/object-types.md) or [family](../../project-primitives/objects/families.md) the custom action will belong to.

**Name**  
The name of the custom action. This will appear in the [Add Action dialog](../../interface/dialogs/add-condition-action.md) and in the event sheet to identify this custom action. Object types are allowed to add a custom action with the same name as a family custom action, in which case the object type's custom action works as an override.

**Description Optional**  
An optional description of the custom action, for your organisational purposes. This is displayed in the [Add action dialog](../../interface/dialogs/add-condition-action.md) and can be a helpful reminder of what the custom action does.

**Category Optional**  
An optional category for the custom action, for your organisational purposes. Custom actions with the same category are grouped together in the *Add action dialog*, providing a way to arrange related custom actions together. This field autocompletes with existing category names used, making it easier to use the same category names.

**Copy all picked**  
By default custom actions run with only the same instances of the given object picked as the action that called it. Check *Copy all picked* to instead run the custom action with the same instances of all objects picked as the action that called it, much like the *Copy picked* setting for functions.

**Asynchronous**  
Tick to mark the custom action as *asynchronous* (or *async* for short). This means calls to this custom action can be used with the System action *Wait for previous actions to complete* if the custom action does any of its own waiting. Note this has a small performance overhead, so for best performance leave this disabled if you don't need it.
