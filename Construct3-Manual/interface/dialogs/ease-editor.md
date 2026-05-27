---
title: "The Ease editor"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/dialogs/ease-editor"
release: 487
---

## On this page

- [Using the ease editor](#using-the-ease-editor)
- [Interface](#step-1-create-a-custom-ease)
- [Editing built-in eases](#step-2-open-the-editor)
- [The special "Default" ease value](#step-3-make-changes)
- [The "Purpose" property](#step-4-use-the-custom-ease)

---

This editor enables the possibility of creating custom ease functions to be used with [timelines](../../project-primitives/timelines.md)and [tweens](../../behavior-reference/tween.md). This is a little bit of extra work when compared to the built in ease functions, but it makes it possible to customize your timeline animations and tweens even further.

The most basic use is that of a cubic curve with a beginning, end and anchor points. This allows variations on all the basic ease functions (e.g. Sinusoidal, Back etc). It is also possible to add additional points in the middle of the curve to create variations of the more complex curves (e.g. Bounce, Elastic). Of course it is also possible to create completely original curves by using multiple points.

[![update000 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/118234/update000_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/118234/update000.png)

## Using the ease editor

Here is a short summary on how to create eases, use the ease editor and finally apply a custom ease.

### Step 1: Create a custom ease

Right-click **Eases** folder in the [Project Bar](../../interface/bars/project-bar.md) and select *Add ease*.

[![add](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/28577/add.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/28577/add.png)

### Step 2: Open the editor

Right-click on the newly created ease element under the **Eases** folder, then select the *Open *option or Double-click the ease element in the Project Bar.

[![open](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/28578/open.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/28578/open.png)

### Step 3: Make changes

With the ease editor open, you can make changes to the curve by dragging the colored handles. The default ease has four points, the start and end points (yellow squares) and the two anchor points (green and red squares). In any ease it is not possible to change the position of the start and end points. This means that with the default curve you will only be able to move the anchor points.

If more ease keyframes are added in the middle of the curve, it is possible to move those.

There are some limitations to the position the anchor points can take in relation to the main points, but those will be covered later.

The default ease will be something similar to the built in **In Out Sinusoidal** ease function.

### Step 4: Use the custom ease

Once a custom ease is complete, it can be used in any of the places the built in eases are available. The names of the custom eases will appear after the names of the built in ease functions in all the relevant places. These include the [Properties Bar](../../interface/bars/properties-bar.md), [Timeline Bar](../../interface/bars/timeline-bar.md) and [Tween behavior](../../behavior-reference/tween.md).

## Interface

### Handles

The different handles are the main method to edit the ease function.

- **Main Handle:** The main points, or keyframes of the curve are represented by yellow squares. This points are positions the curve must include. More points can be added to the curve to edit how it looks like. Depending on the *"Purpose"* of the curve the starting point and ending point might not be editable.
- **Anchor Handle:** The anchor points of the curve, represented by green and red squares. Each pair of main points has two anchor points in between them. The first anchor point of a sub section of a curve will always be green, while the second anchor point will always be red. Anchor points can never go outside the range defined by the two main points that contain them. Dragging the main handles will force anchor handles out of their previous position to keep the previously mentioned condition.

### Colored Lines

These are the main visual aid to understand how the curve will behave when it is used.

- **Green line:** The green line represents the ease function itself.

The closer it is to the red line, the closer the timeline or tween using the ease will be to the initial value. Going bellow the red line means the animation using the ease will be going past the starting value, an example of this is the **In Back** built in ease.

The closer it is to the blue line, the closer the timeline or tween using the ease will be to the ending value. Going above the blue line means the animation using the ease will be going past the ending value, an example of this is the **Out Back** built in ease.

- **Red line:** Represents the starting value of the ease.
- **Blue line:** Represents the ending value of the ease.

### Horizontal and vertical axis

Each axis of the graph shown by the editor has a meaning that will help you to better understand what the ease function will be doing.

- **Horizontal axis:** This axis represents time. The further along the axis, the closer the animation using the ease is to finishing. The marker numbers are there to help identify what the ease will be doing at 25%, 50% and 75% completion.
- **Vertical axis:** This represents the value the ease will produce. 0% is the starting value of the timeline or tween using the ease, while 100% represents the ending value.

The image bellow shows a custom ease, with multiple keyframes as well as their corresponding anchor points.

[![update001 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/118235/update001_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/118235/update001.png)

### Context Menu

There are two options available in the context menu.

- **Add ease keyframe:** Add a new keyframe to the curve.
- **Delete ease keyframe:** Remove an existing keyframe from the curve. The first and last keyframes can not be deleted.
- **Invert ease:** Invert all the keyframes in the ease to produce the opposite ease.
- **Toggle linear and cubic:** Toggle between a cubic ease and a linear ease.
- **Make segment linear:** Toggle the *"Segment"* property of a keyframe to make the corresponding segment a linear transition.
- **Make segment cubic:** Toggle the *"Segment"* property of a keyframe to make the corresponding segment a cubic transition.

### Toolbar

[![update002 v800](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/118236/update002_v800.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/118236/update002.png)

The toolbar at the top shows a few useful fields and buttons:

- **Name:** Change the name of the ease.
- **Purpose:** This property can take the values of *"Any"* or *"Expressions only"* and affects how the ease can be edited.
- **Position:** The inputs show the position of the last handle that was clicked on. Useful to make more precise adjustments that what is possible by dragging with a pointer device.
- **Segment:** This property is keyframe specific and can take the values of *"Linear"* or *"Cubic"*. It affect how the ease behaves from the point where a keyframe is until the next one.
- **Undo:** Works like elsewhere in the application.
- **Invert ease:** Invert all the keyframes in the ease to produce the opposite ease.
- **Toggle linear and cubic:** Toggle between a cubic ease and a linear ease.
- **Zoom:** Works like elsewhere in the application

## Editing built-in eases

When the ease editor is opened from the common **Ease editor** property of a [Timeline element](../../project-primitives/timelines.md), the editor can be opened showing a built-in ease.

In this case a new custom ease is created to look just like the corresponding built-in ease, it is also given a unique name and can be edited normally.

After closing the editor, if any meaningful changes where made, the new custom ease is added to the project and assigned to the corresponding timeline element. If no meaningful change was made after the editor is closed, everything is discarded.

## The special "Default" ease value

In the case of opening the editor from a timeline element which is using the special *"Default"* value the **Ease** property can take, C3 will look up the corresponding timeline's inheritance structure for a concrete ease value to use, be it custom or a built-in one.

After closing the editor, any changes are applied to the timeline element which had the real ease, rather than the element which was using the special *"Default"* value.

## The "Purpose" property

As mentioned earlier, this property can take the following values:

**Any**  
Can be used anywhere where custom eases are supported. Their first and last keyframes can not be edited at all, that means the ease is bounded to **start at a value of 0** and **end at a value of 1**.

**Expressions only**  
Can only be used as argument in expressions that support providing a custom ease, such as the **Ease** expression of the [Timeline Controller](../../plugin-reference/timeline-controller.md) plugin. This purpose allows to edit the first and last keyframes of the ease, allowing it to **start at values different from 0** and **end in values different from 1**.

If a custom ease is already used in a place which expects it to have the **"Any"** purpose, such as [Tweens](../../behavior-reference/tween.md), then the property will not be able to be changed. The same goes if it is already used in a place which expects the **"Expressions only"** prupose.
