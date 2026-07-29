---
title: "Add/edit event variable dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/event-variable"
release: 495
---

The **Add/Edit Event Variable dialog** allows you to change the details of a [global or local variable](../../project-primitives/events/variables.md) in an [event sheet](../../project-primitives/events/event-sheets.md).

[![The Add/Edit Event Variable dialog, shown when adding a global variable](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/955/event-variable-dialog_v480.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/955/event-variable-dialog.png)

The dialog has the following fields.

**Name**  
The name identifies the event variable. This is typed in to [expressions](../../project-primitives/events/expressions.md) to retrieve the value of the event variable. Some names cannot be used, like the names of system expressions, since they would conflict when entering an expression.

**Type**  
The type specifies what kind of value the variable holds. This can be *Number*, *String* (text), or *Boolean* (an on/off value). The type of an event variable does not change - you can't store text in a Number variable and vice versa.

> **Tip**  
> Once you create events that use this variable, its type cannot be changed, since that could make the events invalid.

**Initial value**  
The initial number for a *Number* variable, the initial text for a *String* variable, or a checkbox for a *Boolean* variable to specify if it is initially true (checked) or false (unchecked). Note that unlike expressions, the initial text entered here does **not** need double quotes around it. In other words, *Hello* is a valid entry, and if you enter *"Hello"* (as you would in an expression) the initial string will include the double quotes.

**Description Optional**  
An optional comment you can use to briefly describe what the variable is used for. It is displayed next to the name in the editor to help remind you what to use the variable for.

**Static**  
Only applies to local variables. By default, local variables reset their value to the initial value every tick. However if *Static* is checked, the local variable's value will persist permanently, like a global variable. Static local variables differ from global variables in that they can still only be used within their scope. Global variables always hold their values permanently so the *Static* option does not apply to them. For more information about local variables, see [Event Variables](../../project-primitives/events/variables.md).

**Constant**  
Make a variable read-only. You will be able to compare and retrieve the variable, but not change its value using any actions. This is useful for referring to a number like the maximum number of lives, without having to repeat the number in your events. If you want to change the value, there is only one place you need to change, which is a lot easier than having to hunt down the multiple places you entered a particular number in your events. According to programming convention, the names of constants are displayed in upper case, e.g. *MAX_LIVES*.
