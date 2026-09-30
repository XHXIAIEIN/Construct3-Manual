---
title: "Progress bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/progress-bar"
release: 495.2
---

## On this page

- [Layering HTML objects](#scripting)
- [Progress bar properties](#layering-html-objects)
- [Progress bar conditions](#progress-bar-properties)
- [Progress bar actions](#progress-bar-conditions)
- [Progress bar expressions](#progress-bar-actions)

---

The **Progress bar** object displays a bar which can be used to indicate the progress of a long-running operation or goal.

[![A progress bar](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1018/progressbar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1018/progressbar.png)

The progress bar is styled differently depending on the platform or browser, designed to match the style of the system. If a custom style is desired, it may instead be preferable to use a [Tiled Background](../plugin-reference/tiled-background.md) which has its width set depending on the progress.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [IProgressBarInstance script interface](../scripting/scripting-reference/plugin-interfaces/progress-bar.md).

## Layering HTML objects

This object displays using a HTML element rather than drawing in to the canvas. This means its layering works differently to other objects. To learn more about how to layer HTML objects, see [HTML layers](../tips-and-guides/html-layers.md).

## Progress bar properties

**Value**  
The initial progress display to show, from 0 to the maximum.

**Maximum**  
The maximum progress value, at which point the progress bar is shown full indicating a completed operation.

**Tooltip**  
An optional tooltip to show while hovering the mouse over the control.

**Initially visibile**  
Whether the control is initially visible or invisible in the page.

**ID Optional**  
An optional *id* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

**Class Optional**  
An optional *class* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

## Progress bar conditions

See [common conditions](../plugin-reference/common-features/common-conditions.md) for features shared between form control objects.

**Compare progress**  
Compare the currently set progress amount.

**On clicked**  
Triggered when the progress bar control is clicked.

## Progress bar actions

See [common actions](../plugin-reference/common-features/common-actions.md) for features shared between form control objects.

**Make indeterminate**  
Set the progress bar in to an indeterminate mode, intended to indicate that it is working, but the progress is unknown. The display of this mode depends on the browser and platform. Not all browsers may support an indeterminate mode for progress bars.

**Set maximum**  
Set the maximum progress value for the progress bar.

**Set progress**  
Set the current progress value displayed by the progress bar, from 0 to the maximum.

**Set tooltip**  
Set the tooltip that appears when the mouse hovers over the control.

## Progress bar expressions

**Maximum**  
The currently set maximum progress value.

**Progress**  
The currently set progress amount, if the bar is not in indeterminate mode.
