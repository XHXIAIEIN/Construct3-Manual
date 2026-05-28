---
title: "Slider bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/slider-bar"
release: 487
---

## On this page

- [Layering HTML objects](#scripting)
- [Slider bar properties](#layering-html-objects)
- [Slider bar conditions](#slider-bar-properties)
- [Slider bar actions](#slider-bar-conditions)
- [Slider bar expressions](#slider-bar-actions)

---

The **Slider bar** object provides a simple form control allowing the user to pick a value between a minimum and maximum by moving a slider along a bar.

[![Slider bar control](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1020/sliderbar.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/1020/sliderbar.png)

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [ISliderBarInstance script interface](../scripting/scripting-reference/plugin-interfaces/slider-bar.md).

## Layering HTML objects

This object displays using a HTML element rather than drawing in to the canvas. This means its layering works differently to other objects. To learn more about how to layer HTML objects, see [HTML layers](../tips-and-guides/html-layers.md).

## Slider bar properties

**Minimum**  
The lowest value that can be picked, when the slider is all the way to the left.

**Maximum**  
The highest value that can be picked, when the slider is all the way to the right.

**Step**  
The increment of possible values. For example if the step is 10, then the slider will jump in units of 10 as it is moved, and only a multiple of 10 can be chosen as a value.

**Tooltip**  
An optional tooltip to show while hovering the mouse over the control.

**Initially visibile**  
Whether the control is initially visible or invisible in the page.

**Enabled**  
Whether the control is initially enabled and usable, or disabled so that it cannot be interacted with.

**ID Optional**  
An optional *id* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

**Class Optional**  
An optional *class* attribute for the element in the DOM (Document Object Model). This can be useful for CSS styling.

## Slider bar conditions

See [common conditions](../plugin-reference/common-features/common-conditions.md) for features shared between form control objects.

**Compare value**  
Compare the currently chosen value from the slider bar.

**On changed**  
Triggered when the user finishes changing the chosen value on the slider bar. Typically this only triggers when the user releases a mouse button or touch after moving the slider.

**On changing**  
Triggered repeatedly as the user changes the chosen value on the slider bar. Unlike *On changed* this will reflect the current value of the slider as the user is still dragging it.

**On clicked**  
Triggered when the user clicks the slider bar.

## Slider bar actions

See [common actions](../plugin-reference/common-features/common-actions.md) for features shared between form control objects.

**Set maximum**  
Set the maximum value that can be chosen from the slider bar.

**Set minimum**  
Set the minimum value that can be chosen from the slider bar.

**Set step**  
Set the increment step of the slider bar.

**Set tooltip**  
Set the tooltip that appears when the mouse hovers over the slider bar.

**Set value**  
Set the currently selected value of the slider bar. This must be between the currently set minimum and maximum values.

## Slider bar expressions

**Maximum**  
Return the currently set maximum slider value.

**Minimum**  
Return the currently set minimum slider value.

**Step**  
Return the currently set slider step value (increment).

**Value**  
Return the current value chosen by the user, between the minimum and maximum values.
