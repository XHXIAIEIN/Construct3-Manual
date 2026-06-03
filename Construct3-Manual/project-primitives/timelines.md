---
title: "Timelines"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines"
release: 487.2
---

## On this page

- [Common Timeline Element Properties](#explicit-property-changes)

---

There are several different elements that make up a timeline. When any of them are selected in the [Timeline Bar](../interface/bars/timeline-bar.md), their properties will be shown in the [Properties Bar](../interface/bars/properties-bar.md). Some of the properties only affect the timeline element that owns them, but there are others that also affect other elements below them in the hierarchy.

The hierarchy is as follows:

- **[Timelines](../project-primitives/timelines/timeline.md)** contain Track Folders, Tracks, Value Tracks, Timelines and Timeline Folders
- **[Timeline Folders](../project-primitives/timelines/timeline-folder.md)** contain Timelines and Timeline Folders
- **[Track Folders](../project-primitives/timelines/track-folder.md)** contain Track Folders, Tracks and Value Tracks
- **[Tracks](../project-primitives/timelines/track.md)** contain Property Track Folders, Property Tracks and Master Keyframes
- **[Value Tracks](../project-primitives/timelines/track/value-track.md)** contain a single Property Track and Master Keyframes
- **[Property Track Folders](../project-primitives/timelines/property-track-folder.md)** contain Property Track Folders and Property Tracks
- **[Property Tracks](../project-primitives/timelines/property-track.md)** contain Property Keyframes
- **[Master Keyframes](../project-primitives/timelines/master-keyframe.md)** contain Property Keyframes (which share a parent Track and position in the timeline)
- **[Property Keyframes](../project-primitives/timelines/property-keyframe.md)** are always the last elements in the hierarchy and don't contain anything

> **Tip**  
> In the specific case of the **Ease** and **Path mode** properties, master keyframes takes precedence over the corresponding property track.

It is useful to remember that structure when making changes to the following properties of a timeline element:

- **Animation mode**
- **Result mode**
- **Ease**
- **Path mode**
- **Enabled**
- **Visible**
- **Locked**
- **Show UI Elements**

### Explicit property changes

Making a change to **Enabled**, **Visible**, **Locked** or **Show UI Elements** properties will trigger changes down the element's hierarchy, explicitly modifying all children.

### Inherited property changes

**Animation mode**, **Result mode**, **Ease** and **Path mode** properties follow an inheritance pattern. This means that the special **"Default"** value means to use the value defined by the element immediately above it in the hierarchy.

In the case of **Animation mode** and **Result mode** the value **"Default"** can be used at the timeline level but since it is the top most element in the hierarchy it has a different meaning. If the special **"Default"** value is used at the timeline level and all previous elements in the hierarchy were using the **"Default"** value as well, it means to use the inherent value associated with the type of each property track. The inherent values for each type are described in the tables below.

### Animation mode inherent values

| Property type | value |
| --- | --- |
| Numeric | Continuous |
| Color | Continuous |
| Text | Keyframe |
| Boolean | Keyframe |

### Result mode inherent values

| Property type | Value |
| --- | --- |
| Numeric | Relative |
| Color | Absolute |
| Text | Absolute |
| Boolean | Absolute |

## Common Timeline Element Properties

- **Animation mode:** used by property tracks and refers to the method used to interpolate between property keyframes. It can have the following values.


  - **Default:** use the value defined by the element immediately above it in the hierarchy.
  - **Continuous:** a smooth transition between values using an easing function. Only numeric and color properties can use this mode.
  - **Keyframe:** This mode will not do a smooth transition - instead it will change the properties of the instances as the play head of the timeline reaches each property keyframe.
  - **Step:** a smooth transition, but it only shows values that fall in the step defined by the **Step** property of the timeline.
- **Result mode:** how the values in each property keyframe in a property track are interpreted when playing. Numeric values default to **Relative** mode, while text, boolean and color values default to using **Absolute** mode.


  - **Default:** use the value defined by the element immediately above it in the hierarchy.
  - **Relative:** the timeline assigns values relative to the initial values each instance had, before the timeline started playing.
  - **Absolute:** the timeline assigns absolute values, and will not be affected by the initial state before the timeline started playing. In this mode the timeline overrides all other behaviors that might be affecting an instance.
- **Ease:** the function used to transition between each pair of property keyframes in a property track. There are several built in functions to choose from. Custom ease curves can also be designed in the [Ease editor](../interface/dialogs/ease-editor.md). The special **"Default"** value uses the value defined by the element immediately above it in the hierarchy.



  - **Ease editor:** A link to open the Ease editor with the ease selected in the **Ease** property. Doing this it is possible to edit not only a custom ease, but also a built in ease.
- **Path mode:** only relevant for the X and Y properties. Sets how to transition between property keyframe pairs.


  - **Default:** use the value defined by the element immediately above it in the hierarchy.
  - **Line:** interpolate between the starting and ending position of each property keyframe pair to form a straight line.
  - **Cubic Bezier:** This mode will enable a few additional controls in the [Layout View](../interface/layout-view.md) to allow for transitions following a curved path.
- **Visible:** used by tracks to toggle the visibility of the corresponding [instance](../project-primitives/objects/instances.md). This setting only takes effect while **Edit Mode** is turned on. It is only relevant for the editor and will not affect the timeline at runtime.
- **Enabled:** used by property keyframes. A disabled property keyframe is not taken into consideration when playing a timeline.
- **Locked:** A locked timeline element and its children cannot be modified through the Timeline Bar or Properties Bar. It is only relevant for the editor and will not affect the timeline at runtime.
- **Show UI Elements:** changing this property will turn off the UI elements shown in the layout associated with the affected instances. It is only relevant for the editor and will not affect the timeline at runtime.
