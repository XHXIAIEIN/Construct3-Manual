---
title: "Layout view editing"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar/layout-view-editing"
release: 487.2
---

When edit mode is on, the [Layout View](../../../interface/layout-view.md) will show handles indicating the path an [instance](../../../project-primitives/objects/instances.md) will take as the [timeline](../../../project-primitives/timelines/timeline.md) is played. The handles are only shown for **X** and **Y** properties, as those are the only that can really show any form of useful visual feedback. The handles can be used to update the path of the corresponding instance.

Additionally, when setting the **Path mode** property to **Bezier Curve**, more handles will appear to edit the path between each pair of keyframes as curves.

There are three types of handles that can be distinguished by color and size

- **Large Blue:** These represent the keyframe **X** and **Y** properties. Can be moved to update the corresponding keyframes. If there is no [property keyframe](../../../project-primitives/timelines/property-keyframe.md) for either the X or Y properties, the handle will only be able to move in one axis.
- **Small Green:** These show up when the **Path mode** property between a pair of property keyframes is set to **Cubic Bezier** and represent the first anchor point of a curve. If there is no property keyframe for either the **X** or **Y** properties, the handle will only be able to move in one axis.
- **Small Red:** These show up when the **Path mode** property between a pair of property keyframes is set to **Cubic Bezier** and represent the second anchor point of a curve. If there is no property keyframe for either the **X** or **Y** properties the handle, will only be able to move in one axis.

Aside from the handles, there are a few different lines that show up when the Layout View tool is turned on:

- **Blue:** These line represents the path instances will take as the timeline is played.
- **Grey:** These lines are just visual connection between keyframes to help identify their order in the timeline.
- **Red:** These appear to show which pair of keyframes an instance is currently between, and also to indicate that new keyframes can be added at that position.
- **Green:** These appear when the current time marker is on top of a [master keyframe](../../../project-primitives/timelines/master-keyframe.md) in the [Timeline Bar.](../../../interface/bars/timeline-bar.md)  If the **Set Keyframes** option is used now, all the keyframes at that position will be updated.

### Show UI Elements Toggle

When creating a timeline with many different instances it can become confusing to edit their paths if all the UI elements mentioned above are visible for all the instances at the same time. With this toggle you can hide the UI elements for the instances you are not interested in and only show the ones you want.

Further more, if you make a master keyframe selection in the Timeline bar, the layout will only show the corresponding UI elements for those specific master keyframes.
