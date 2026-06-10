---
title: "Timeline"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline"
release: 487.3
---

## On this page

- [Adding Timelines](#adding-timelines)
- [Nesting Timelines](#nesting-timelines)
- [Timeline Properties](#timeline-properties)

---

A timeline can gradually change values of an [instance](../../project-primitives/objects/instances.md) over time to produce an animation. It allows for the co-ordination of complex transitions of many different instances at the same time.

Although the most basic usage is to change the **X** and **Y** properties of an instance to produce movement, a timeline can be configured to affect almost every property that can be part of an instance. This includes all the common instance properties, [instance variables](../../project-primitives/objects/instance-variables.md), [effect](../../project-primitives/objects/effects.md) parameters, [behavior](../../project-primitives/objects/behaviors.md) properties and [plugin](../../project-primitives/objects/plugins.md) properties. Not all properties are supported by timelines as some of them don't make sense, such as any property that is only used on start up.

Timelines can modify boolean and text properties, but since these can not be interpolated like numbers or colors to achieve a smooth transition, they just change as the timeline's play head reaches their property keyframes.

## Adding Timelines

With the [Timeline Bar](../../interface/bars/timeline-bar.md) open, create a timeline using any of the following methods:

- Right-click the **Timelines** folder in the [Project Bar](../../interface/bars/project-bar.md) and select *Add timeline*
- Right-click a space in the [Layout View](../../interface/layout-view.md) and select `Timeline › Add timeline` (when the Timeline Bar is open)

## Nesting Timelines

With the Timeline Bar open and more than one timeline added to the project, use one of the following methods:

- Use the `Timeline › Add timelines` option from the Timeline Bar <kbd>+</kbd> split button.
- Right-click any empty space in the Timeline Bar and use the context menu option `Timeline › Add timelines`.
- Drag the timeline you want to nest from the Project Bar into the Timeline Bar.

## Timeline Properties

**Name**  
The name of the timeline. It is a unique identifier and is used to refer to the timeline from an event sheet.

**Animation mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Result mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Ease**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Path mode**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). These properties follow an inheritance pattern.

**Time**  
The current time of the main time marker. This only affects the editor.

**Total time**  
The total time for the timeline to be completed.

**Raw Step**  
The increments the current time marker can take in the editor.

When using the Step animation mode, this value will be used at runtime to produce the correct increments while playing the timeline. When **Steps per second** property is changed, this property is updated automatically.

**Steps per second**  
This property is connected to the **Raw step** property, it is used to generate the correct Raw step value in a more intuitive way. When Raw step is changed, this property is updated automatically.

**Show UI elements**  
See the section on common timeline element properties in [Timelines](../../project-primitives/timelines.md). Changing this property will apply the change to every sub-element.

**Use Step**  
Use this property to avoid using the step value in the editor. If disabled, scrubbing to preview the timeline in the editor will be completely smooth.

**Resize mode**  
Choose between **Width & Height** and **Scale X & Scale Y**. This tells the editor which pair of property tracks need to be created when creating keyframes after making size changes in the Layout View.

**Loop**  
When the timeline finishes, continuously repeat it from the start again. When the timeline is nested this value is ignored and instead the value of the top most parent timeline is used.

**Ping pong**  
When the timeline finishes, reverse the direction of playback, so it plays alternately forwards and in reverse. When the timeline is nested this value is ignored and instead the value of the top most parent timeline is used.

**Repeat count**  
The number of times to repeat the timeline animation when not looping indefinitely. When the timeline is nested this value is ignored and instead the value of the top most parent timeline is used.

**Start on layout**  
This is a dropdown that gives the option to choose at the start of which layout the timeline should start playing automatically. This property serves as a shortcut for the simple use case of just starting playback of a timeline at the beginning of a layout, without any further manipulation.

**Transform**  
Whether a timeline's position keyframes should be transformed by changes produced by ancestors in it's own hierarchy, or not. Enabled by default.

**Use system timescale**  
Whether a timeline will be affected by the system timescale or not. When disabled a timeline will continue producing changes regardless of the current system timescale.
