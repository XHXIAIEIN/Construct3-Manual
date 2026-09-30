---
title: "The Properties Bar"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/properties-bar"
release: 495.2
---

## On this page

- [Things with properties](#things-with-properties)
- [Property descriptions](#property-descriptions)
- [Typing calculations](#typing-calculations)
- [Dragging values](#dragging-values)

---

The **Properties Bar** is an essential of the interface. It displays a list of all the settings you can change on whatever is selected. The picture below shows the Properties Bar displaying a project's properties.

[![The Properties Bar](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/860/properties-bar_v350.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/860/properties-bar.png)The Properties Bar

There are too many properties in Construct to list here. Instead, properties for different parts of the project are documented in the relevant manual section. For example, layout properties are described in the manual entry [Layouts](../../project-primitives/layouts.md).

Properties are organised in to **categories** which can be expanded and collapsed. There are many kinds of properties, including number fields, text fields, dropdown lists and clickable links. The property name appears in the left column, and the editable value appears in the right column.

Whenever something in the project is clicked or selected, its properties display in the Properties Bar. For example, selecting objects in the [Layout View](../../interface/layout-view.md) or clicking items in the [Project Bar](../../interface/bars/project-bar.md) shows the relevant properties in the Properties Bar.

## Things with properties

Some of the most important parts of the project with properties that you'll regularly modify are:

- [Projects](../../project-primitives/projects.md)
- [Layouts](../../project-primitives/layouts.md)
- [Layers](../../project-primitives/layers.md)
- [Object instances](../../project-primitives/objects/instances.md)

Many plugins, behaviors and effects have their own properties as well. See the Reference section of the manual for information on those.

There is also a **Help** link displayed at the end of every property list. Click that to open the relevant manual section for those properties.

## Property descriptions

All properties also have a *description* which provide additional information about what the property is used for. This is displayed in a panel at the bottom of the Properties Bar. It is worth keeping an eye on this since it can contain useful hints and tips. An example is shown below.

[![A description of a property in the footer of the Properties Bar](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/861/properties-description_v350.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/861/properties-description.png)

## Typing calculations

In number values, you can type calculations like `1920 / 2` and press enter to set the value to the result of the calculation (960). The syntax used is the same as [expressions](../../project-primitives/events/expressions.md) used in events. You can also use some basic [system expressions](../../system-reference/system-expressions.md) like `sqrt(64)`.

## Dragging values

Number values can also be **smoothly dragged** with instant feedback in the Layout View. This is useful to try out a range of values and easily see which is best. To do this, **click and drag vertically** inside the number value cell. You can also hold **Control** or **Shift** while dragging to increase or decrease the rate of change. If you have trouble getting this to work, try first clicking inside the cell (which should select the text in the cell), and then click on the selected text and drag vertically.
