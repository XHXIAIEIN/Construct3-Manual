---
title: "Add/edit instance variable dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/instance-variable"
release: 487.2
---

The **Add/Edit Instance Variable dialog** allows you to set the name, type and initial value for an [instance variable](../../project-primitives/objects/instance-variables.md) in an [object type](../../project-primitives/objects/object-types.md) or [family](../../project-primitives/objects/families.md).

[![The add/edit instance variable dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/88274/instance-variables-dialog_v460.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/88274/instance-variables-dialog.png)

The dialog has the following fields.

**Name**  
The name identifies the instance variable. This is typed in to [expressions](../../project-primitives/events/expressions.md) after the object name (e.g. `Sprite.MyVariable`) to retrieve the value of the instance variable. Some names cannot be used if they conflict with the names of the object's other expressions or behaviors.

**Type**  
The type specifies what kind of value the instance variable holds. This can be *Number*, *Text* (also known as a *string*), or *Boolean* (an on/off value). The type of an instance variable does not change - you can't store text in a Number variable and vice versa. Also note that once you create events that use this variable, its type cannot be changed, since that could make the events invalid.

**Initial value**  
The initial number for a *Number* variable, the initial text for a *Text* variable, or a checkbox for a *Boolean* variable to specify if it is initially true (checked) or false (unchecked). Note that unlike expressions, the initial text entered here does **not** need double quotes around it. In other words, *Hello* is a valid entry, and if you enter *"Hello"* (as you would in an expression) the initial string will include the double quotes.

**Description Optional**  
An optional comment you can use to briefly describe what the variable is used for. It is displayed in the [Properties Bar](../../interface/bars/properties-bar.md) description panel when the instance variable's property is selected.

**Show in Properties Bar**  
By default all instance variables are shown when listing properties in the [Properties Bar](../../interface/bars/properties-bar.md). This can be unchecked to hide it from the listed properties. However it will still be available for use in event sheets. Hiding instance variables can be useful if you have a large number of them and some are only used in event sheets.
