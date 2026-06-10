---
title: "Add/edit function parameter dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/function-parameter"
release: 487.3
---

The **Add/Edit Function Parameter dialog** allows you to change the details of a [function](../../project-primitives/events/functions.md) parameter. Since function parameters work similarly to [local variables](../../project-primitives/events/variables.md), the dialog is also similar to the [Add/edit event variable dialog](../../interface/dialogs/event-variable.md).

[![The Add/edit function parameter dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/26700/add-edit-function-parameter_v370.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/26700/add-edit-function-parameter.png)

The dialog has the following fields.

**Name**  
The name identifies the function parameter. This is typed in to [expressions](../../project-primitives/events/expressions.md) to retrieve the value of the parameter. Some names cannot be used, like the names of system expressions, since they would conflict when entering an expression. The name is also displayed when calling the function.

**Type**  
The type specifies what kind of value the parameter holds. This can be *Number*, *String* (text), or *Boolean* (an on/off value, displayed as a checkbox). The type of a parameter does not change - you can't pass text for a number variable and vice versa.

> **Tip**  
> Once you create events that call the function, its parameter types cannot be changed, since that could make the events invalid.

**Initial value**  
The initial number for a *Number* parameter, the initial text for a *Text* parameter, or a checkbox for a *Boolean* variable to specify if it is initially true (checked) or false (unchecked). Note that unlike expressions, the initial text entered here does **not** need double quotes around it. In other words, *Hello* is a valid entry, and if you enter *"Hello"* (as you would in an expression) the initial string will include the double quotes. The default parameter value is pre-filled when calling the function, or used if the function ends up being called with missing parameters.

**Description Optional**  
An optional comment you can use to briefly describe what the parameter is used for. It is displayed in the editor when calling the function to help remind you what to use the variable for.
