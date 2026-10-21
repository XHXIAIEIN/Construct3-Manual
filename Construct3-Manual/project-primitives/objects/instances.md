---
title: "Object instances"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instances"
release: 506.3
---

## On this page

- [Common instance properties](#common-instance-properties)
- [Material properties](#material-properties)
- [Index IDs (IIDs)](#index-ids-iids)

---

Object **instances** are the actual objects you see in a game: an *instance* of an [object type](../../project-primitives/objects/object-types.md). For example, if there are four *TrollEnemy*s in a layout, those are four *instances* of the TrollEnemy *object type*.

It is **instances** which have a position, angle and size in the layout. Object types do not have these properties - they simply define a 'class' of object.

Instances can be created at runtime in [events](../../project-primitives/events.md) (typically by the System *Create object* action and the Sprite *Spawn an object* action). They can also be pre-arranged in [layouts](../../project-primitives/layouts.md) with the [Layout View](../../interface/layout-view.md)to design levels, menus and title screens. Instances can also be individually animated in [timelines](../../project-primitives/timelines.md).

Selecting an instance in the Layout View shows its properties in the [Properties Bar](../../interface/bars/properties-bar.md). These are a mix of properties in common with all (or most) objects, and plugin-specific properties. The common properties are described below, and plugin-specific properties are described for each plugin in the reference section.

## Common instance properties

The following properties are common to most objects, depending on their capabilities.

**Name**  
The name of the associated [object type](../../project-primitives/objects/object-types.md).

**Global**  
By default, all instances are destroyed when the layout ends (e.g. when going to the next layout). If enabled, none of the instances of this object type will be destroyed when switching layouts.

**Plugin Read-only**  
A reminder of the [plugin](../../project-primitives/objects/plugins.md) this object is based on.

**Position**  
The object's X, Y and Z co-ordinates in the layout in pixels. This is measured to the object's origin. These can also be altered by moving the instance in the Layout View.

> **Tip**  
> The Z co-ordinate only affects the appearance of the object. It does not affect collisions - everything else continues to work in 2D as if its Z was still 0.

> **Tip**  
> The Z co-ordinate takes precedence over Z order. In other words, using *Send to top of layer* will not make an object appear on top of an object that has a higher Z co-ordinate.

**Size**  
The width and height of the instance in pixels. This can also be altered by dragging the resize handles in the Layout View. For 3D objects like [3D shape](../../plugin-reference/3d-shape/edit.md), a third depth component will appear here.

**Angle**  
The angle in degrees the instance is oriented at. This can also be altered by rotating the object in the Layout View by clicking and dragging just outside the resize handles.

**Rotation**  
Where supported, the 3D rotation of the object. This is comprised of the rotation around the X, Y and Z axes. The Z axis rotation works similarly to the *Angle* property, and is added to any existing angle.

**Opacity**  
The instance opacity (or semitransparency), from 0% (transparent) to 100% (opaque).

**Color**  
A color tint to apply to the instance. This works by normalizing each color component in the 0-1 range, and multiplying it with the object's color. This means a white color (with 1 for each color component) displays the original color of the object. Choosing another color will tint the object, e.g. choosing red will preserve only the red color component of the object's image.

**Sampling**  
Override the project, layout or layer sampling setting for this instance. *Auto* means it will use the project, layout or layer sampling setting (whichever is the last one that does not specify *Auto*). This setting also applies to children in a hierarchy if they use *Auto*, unless those instances specify a different sampling mode.

**Layer**  
The [layer](../../project-primitives/layers.md) the instance is placed on. In the case the selected instance is from from a global layer in a different layout to the one currently active, the dropdown will show first the layers of the layout the instance is really coming from, followed by the layers of the layout which is currently active.

**Z index Read-only**  
Indicates the zero-based Z index of the instance on its layer relative to all the other instances on the layer. A value of 0 means it is the bottom instance, and increasing values mean it is closer to the top of the layer. The Z index can be modified using the [Z Order Bar](../../interface/bars/z-order-bar.md)  `[Paid plans only]` .

**UID Read-only**  
Every instance in the project has a unique number assigned, called its unique ID or UID. This value is displayed in the editor so you can view the UID for specific instances. You can use conditions like *Pick by unique ID* in events to pick specific instances by their UID.

> **Tip**  
> It may be more convenient to use instance tags instead of UIDs, as they can be more descriptive.

**Tags**  
A space separated list of string tags to identify an instance. The first tag of an instance is used in some places in the editor to better distinguish specific instances. There are associated [common ACEs](../../plugin-reference/common-features.md) and a [scripting interface](../../scripting/scripting-reference/object-interfaces/iinstance.md) to work with tags. Note that instance tags are case-insensitive.

**Material**  
These properties only appear when a [3D light](../../plugin-reference/3d-light.md) is in the layout, and affect how the object responds to 3D lighting. See the section on material properties below for more details.

**Edit variables**  
Open the **Object Instance Variables dialog**.

**Edit behaviors**  
Open the **Object Behaviors dialog**.

**Edit effects**  
Open the **Effects dialog**.

**Container**  
Group a set of object types together so they create, destroy and pick in events together. See the dedicated section on [Containers](../../project-primitives/objects/containers.md) for more information.

**Template**  
A set of properties for managing templates, which allow conveniently updating properties of instances across the entire project. See the dedicated section on [Templates](../../project-primitives/objects/templates.md) for more information.

**Visible in editor**  
An editor-only property, determines if the instance is visible or not. Can also be set through the [Instances Bar](../../interface/bars/instance-bar.md).

**Locked**  
An editor-only property, determines if the instance can be interacted with. Can also be controlled through the [Instances Bar](../../interface/bars/instance-bar.md).

## Material properties

When a [3D light](../../plugin-reference/3d-light.md) is present in the layout, many kinds of objects will have a new *Material* property section appear. These properties adjust how the object looks with 3D lighting, and include the following:

**Surface type**  
How the surface is treated with 3D lighting. The options are:

- **No lighting:** the object is exempted from 3D lighting, instead using its standard rendering as used when there are no 3D lights in the layout.
- **Flat:** each triangle of the mesh is treated as being flat. This means when using 3D lighting often each triangle of the mesh is individually visible.
- **Smooth:** triangles in the mesh are smoothed, as if the surface was curved. This usually means it is not possible to visually identify individual triangles of the mesh.

 The *Flat* and *Smooth* options do not affect 2D objects, as they are flat anyway, and so *Smooth* does not do anything different; they only have an impact for meshes such as those used by [3D model](../../plugin-reference/3d-model.md).

**Transmissiveness**  
The degree to which light will shine through to the opposite side of a surface. For example with a 2D sprite, 0% transmissiveness means the side facing away from the light appears in complete darkness; 100% transmissiveness means the side facing away from the light is lit up the same amount as the side facing toward the light. The alpha channel of the image is also taken into account when calculating transmissiveness - for example an image with 50% opacity will also have 50% transmissiveness, even when this property is set to 0%, since the opacity of an image is the degree to which light can shine through it.

**Metallic**  
The degree to which the material acts like a metal or non-metal (e.g. plastic, wood, stone). Non-metals (close to 0%) are dielectric, with a colored diffuse surface. Metals (close to 100%) have little or no diffuse color, and reflections are tinted by the base color.

**Roughness**  
The degree to which the material acts smooth or rough at the microscopic level. Smooth materials (close to 0%) have a mirror-like appearance with a sharp light reflection. Rough materials (close to 100%) have a matte appearance with little or no reflection.

## Index IDs (IIDs)

As well as unique IDs (UIDs, described above), all instances are also assigned an Index ID (IID). This is the zero-based index of the instance within its own [object type](../../project-primitives/objects/object-types.md). The first instance created for each object type is assigned an IID of 0, and subsequent instances are assigned incrementing numbers. Unlike UIDs, IIDs can change: if an instance is destroyed, all the object type's instance's IIDs are reassigned so they are continuous (i.e. 0, 1, 2, 3... N with no gaps). Therefore an IID does not persistently refer to one instance - use UIDs for that purpose. However IIDs can be useful for advanced users taking advantage of [object expression indexing](../../project-primitives/events/expressions.md), the *Pick Nth instance* system condition, or the *IID* expression.
