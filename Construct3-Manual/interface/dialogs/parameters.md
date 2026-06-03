---
title: "The Parameters dialog"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/parameters"
release: 487.2
---

The **Parameters dialog** appears after the [Add condition/action dialog](../../interface/dialogs/add-condition-action.md), or when editing a [condition](../../project-primitives/events/conditions.md) or [action](../../project-primitives/events/actions.md). It allows you to enter *parameters* such as the X and Y co-ordinate for the Sprite object's *Set Position* action (shown below). It does not appear for conditions or actions which do not use any parameters, such as the *Destroy* action. [Expressions](../../project-primitives/events/expressions.md) can be entered for many parameters, which can be anything from a simple value to a sophisticated mathematical calculation.

The parameters that are displayed depend on the condition or action that was selected. To find out more about what to enter for each field, check the related documentation in the [Plugin reference](../../plugin-reference.md), [Behavior reference](../../behavior-reference.md) or [System reference](../../system-reference.md).

The [Expressions dictionary](../../interface/dialogs/expressions-dictionary.md) appears next to the Parameters dialog providing a list of all the expressions you can enter. By default the Expressions panel is faded out unless you hover the mouse over it. It can also be hidden or shown by clicking the *Find expressions* link or by pressing <kbd>F4</kbd>. Note on small screens if there is no room to display the Expressions dictionary without overlapping the Parameters dialog, then it is hidden by default.

[![The Parameters dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/963/parameters-dialog_v600.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/963/parameters-dialog.png)

Use the Expressions dictionary to locate system expressions, object expressions, behavior expressions, global and local variables and instance variables. Alternatively you can use **autocomplete**: just start typing, and a list of all the options appears. Additionally if you type as far as the dot in an object expression (e.g. `Sprite.`) a list of all the object's expressions appears, shown below. This also appears after the dot when entering a behavior expression (e.g. `Sprite.8Direction.`). Use the **Up** and **Down** arrows to pick an item in the suggestions list, and press **Enter** to insert it. This can help you enter expressions much more quickly.

[![Autocomplete in the Parameters dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/964/autocomplete_v600.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/964/autocomplete.png)

Some expressions also show tips to help you remember how to use the expression, shown below. This appears when you type the open bracket `(` for the expression. This is most useful for System expressions which tend to have multiple parameters.

[![Tips for expression parameters in the Parameters dialog](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/965/calltips_v600.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/965/calltips.png)

Press <kbd>Tab</kbd> to move to the next parameter or <kbd>Shift</kbd> + <kbd>Tab</kbd> to move to the previous. <kbd>Enter</kbd> is also a shortcut to press **Done**. (Note you may have to press Enter twice if autocomplete is showing: once to choose the autocomplete entry, and again to close the dialog.)

If you make a mistake, the part of the expression which is wrong will be highlighted with a red background. If you press Enter or Done when this is showing, a tip will appear with more information about the problem.
