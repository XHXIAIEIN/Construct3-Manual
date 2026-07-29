---
title: "Slider Bar script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/slider-bar"
release: 495
---

## On this page

- [Slider Bar events](#slider-bar-events)
- [Slider Bar APIs](#slider-bar-apis)

---

The `ISliderBarInstance` interface derives from [IDOMInstance](../../../scripting/scripting-reference/object-interfaces/idominstance.md) to add APIs specific to the [Slider Bar plugin](../../../plugin-reference/slider-bar.md).

## Slider Bar events

See [instance event](../../../scripting/scripting-reference/interfaces/instance-event.md) for standard instance event object properties.

**"click"**  
Fired when the control is clicked.

**"change"**  
Fired when the user finishes changing the chosen value on the slider bar. Typically this only fires when the user releases a mouse button or touch after moving the slider.

**"input"**  
Fired repeatedly as the user changes the chosen value on the slider bar. Unlike the `"change"` event this will reflect the current value of the slider as the user is still dragging it.

## Slider Bar APIs

**value**  
The current value represented by the slider bar.

**minimum**  
The minimum and maximum values, defining the range of the slider bar.

**maximum**  
The minimum and maximum values, defining the range of the slider bar.

**step**  
The increment of possible values. For example if the step is 10, then the slider will jump in units of 10 as it is moved, and only a multiple of 10 can be chosen as a value.

**tooltip**  
A tooltip that appears if the user hovers the mouse over the text box and waits. An empty string indicates no tooltip.

**isEnabled**  
A boolean indicating if the control is enabled or disabled.
