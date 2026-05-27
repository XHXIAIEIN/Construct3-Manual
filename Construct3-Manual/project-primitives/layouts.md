---
title: "Layouts"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/layouts"
release: 487
---

## On this page

- [Adding and removing layouts](#adding-and-removing-layouts)
- [Layout properties](#layout-properties)
- [Editor properties](#editor-properties)

---

A **layout** is a pre-arranged set of objects. It can represent a game level, menu or title screen, or a scene in an animation. In other tools layouts may be referred to as *scenes*, *rooms*, *frames* or *stages*. They can be added, renamed and deleted from the [Project Bar](../interface/bars/project-bar.md). Layouts are edited with the [Layout View](../interface/layout-view.md). Every layout has an associated [event sheet](../project-primitives/events/event-sheets.md) which defines how the layout works.

Layouts contain a tree of [layers](../project-primitives/layers.md). A layout must have at least one layer. Objects that appear on the screen do not belong directly to a layout - they belong to one of the layers in the layout.

Layouts do not have a background color. To set a background color, make the bottom layer opaque and set its background color. This can be done in the [Layers Bar](../interface/bars/layers-bar.md).

Layouts can also have [effects](../project-primitives/objects/effects.md) applied, which affects all content appearing in the display.

## Adding and removing layouts

To add a layout, right-click a layout folder (such as the root level *Layouts*) in the [Project Bar](../interface/bars/project-bar.md) and select **Add layout**.

To rename or remove a layout, right-click the layout itself in the Project Bar and select **Rename** or **Delete**.

## Layout properties

The properties for a layout can be edited in the [Properties Bar](../interface/bars/properties-bar.md) after clicking a space in the layout or selecting the name of the layout in the Project Bar.

**Name**  
The name of this layout.

**Event sheet**  
The associated event sheet that defines how this layout works. Event sheets can be shared between layouts using [includes](../project-primitives/events/includes.md) if you have a lot of similar events between layouts.

**Size**  
The size, in pixels, of the layout area. If *Unbounded scrolling* is enabled, this still affects how much of the layout area is shown in the Layout View.

**Unbounded scrolling**  
By default the game window cannot scroll past the edges of the layout. Enable this to allow unlimited scrolling in any direction, even past the edges of the layout.

**Sampling**  
Override the project sampling setting for content on this layout. *Auto* means it will use the project sampling setting. Layers and individual object instances can also further override this setting.

**Projection**  
Set the projection used for rendering 3D features. The default *Perspective* projection means things get smaller as they get further away. The *Orthographic* projection instead keeps everything the same size, regardless of its distance from the camera, creating a flat appearance. For an interactive example of both projections, see the [Orthographic projection example](https://editor.construct.net/#open=orthographic-projection).

**Vanishing point**  
When using 3D features such as Z elevation and the 3D shape object with perspective, this specifies where the vanishing point is relative to the viewport area. (This setting does not apply with an orthographic projection, as there is no perspective.) The default is 50%, 50% meaning the middle of the viewport. Consequently as things move in to the distance, they will also move towards the middle of the screen. Altering this will adjust the perspective such that objects moving in to the distance move to a vanishing point elsewhere on the screen. For example setting the vanishing point to 0%, 0% moves the vanishing point to the top-left corner of the screen. This can be used to adapt the 3D perspective to the style of your project. To learn more see the tutorial [Using 3D in Construct](https://www.construct.net/en/tutorials/using-3d-construct-2746).

**Effects**  
Add and edit [effects](../project-primitives/objects/effects.md) that apply to the whole layout.

## Editor properties

These properties only affect how the layout works in the editor, and don't change how it works at runtime.

**Margins**  
The size in pixels of extra padding space around the actual layout area that you can scroll around in. Some padding is often useful for conveniently editing the edges of the layout area.

**Show grid**  
Whether to display a 2D grid in the Layout View. Note as this is a 2D feature it only displays a grid using the grid width and height on the Z=0 plane - it does not draw anything for the Z axis.

**Snap to grid**  
Whether to snap all object placements and sizes to the grid in the Layout View. Note if this is enabled then it overrides the *Pixel snapping* setting; if disabled then snapping may still occur if *Pixel snapping* is enabled.

**Grid size**  
The size of the grid in pixels. This is only used if *Show grid* or *Snap to grid* is enabled.

**Grid offset**  
By default the grid is aligned with the top left edge of the layout area. Adding an offset shifts the grid along each axis so it is offset from the edges of the layout.

**Pixel snapping**  
Enabling this option is equivalent to enabling *Snap to grid* with the size 1x1x1, ensuring objects are never placed at fractional positions. This only takes effect when *Snap to grid* is disabled - when *Snap to grid* is enabled then the snapping is done according to the grid size instead. This can be a useful option for pixel art style projects to ensure fractional positions are never used while being able to preserve the grid size.

**Show collision polygons**  
Display outlines of object's collision polygons in the Layout View. This can help arrange objects with regards to how they collide, rather than just how they appear.

**Show meshes**  
Display outlines of object's meshes in the Layout View, if a mesh has been created. See *Editing meshes* in the [Layout View manual entry](../interface/layout-view.md) for more details.

**Show translucent inactive layers**  
Enable to display all layers other than the active layer at a reduced opacity. This can help identify the content on the active layer.

**Show hierarchy**  
Display arrows over scene graph hierarchies pointing from parents to children. See *Setting up a hierarchy* in the [Layout View manual entry](../interface/layout-view.md) for more details.

**Project properties**  
A shortcut to view the [project's properties](../project-primitives/projects.md).
