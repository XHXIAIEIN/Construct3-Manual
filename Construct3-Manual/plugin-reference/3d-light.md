---
title: "3D light"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/3d-light"
release: 506.3
---

## On this page

- [3D light properties](#3d-light-properties)
- [3D light conditions](#3d-light-conditions)
- [3D light actions](#3d-light-actions)
- [3D light expressions](#3d-light-expressions)

---

The **3D light** object adds 3D lighting to a layout. It will light up 3D content such as [3D models](../plugin-reference/3d-model.md), [3D shapes](../plugin-reference/3d-shape.md) and other 2D objects with 3D rotation in a true 3D fashion.

When a layout has no 3D lights, it uses standard rendering with no lighting effects. When you add the first 3D light object, it then activates 3D lighting for the entire layout, meaning all objects will appear in darkness unless lit up by a 3D light. New [layout](../project-primitives/layouts.md) and [instance](../project-primitives/objects/instances.md) properties will appear to control ambient light and material properties (respectively).

Construct currently supports having up to a maximum of 16 visible lights in the view. Lights entirely outside of the view (so nothing in the view is affected by their lighting) do not count towards this limit; the *Radius* property is a useful way to limit the distance a light can affect and so help make sure they are properly removed from consideration. In the editor, if more than 16 lights are in the view at a time, the light representation will show a warning symbol to indicate its lighting is not being applied.

## 3D light properties

**Light type**  
The type of this light. The available types are:

- **Point:** a standard point light that emits light in all directions around the position the light is placed at.
- **Directional:** a light that affects the entire layout with a uniform light applied from an angle given by the rotation of the light. This can be useful for representing strong, distant lights like sunlight or moonlight.
- **Spot:** emits light in a cone shape from the position the light is placed at and at an angle given by the rotation of the light. The *Inner angle* and *Outer angle* properties control the size of the cone.

**Intensity**  
These properties control how bright the light appears. The intensity specifies the brightness at the reference distance. For example with an intensity of 100% and a reference distance of 200, an object placed 200 pixels away from the light that is directly facing it will appear with its normal colors (at 100% brightness); moving it closer will brighten it above 100%, and moving further away will darken it below 100%.

> **Tip**  
> Directional lights do not use a reference distance. Instead they just apply the intensity everywhere.

**Reference distance**  
These properties control how bright the light appears. The intensity specifies the brightness at the reference distance. For example with an intensity of 100% and a reference distance of 200, an object placed 200 pixels away from the light that is directly facing it will appear with its normal colors (at 100% brightness); moving it closer will brighten it above 100%, and moving further away will darken it below 100%.

> **Tip**  
> Directional lights do not use a reference distance. Instead they just apply the intensity everywhere.

**Attenuation factor**  
How much the light intensity reduces with distance. The default 100% means physically-realistic light attenuation with distance. Setting to 0% means light intensity does not reduce with distance at all; however note that as lighting also depends on the angle of incidence, placing such a light above a flat object may still have the visual appearance of attenuation over distance. Low or zero attenuation lights can be useful for unmotivated lighting.

> **Tip**  
> Directional lights do not use an attenuation factor.

**Radius**  
The distance from the light at which its lighting effect reduces to zero. Normally a light has an infinite radius, with the lighting effect reducing to ever smaller amounts with distance, but never truly dropping to zero. Imposing a radius means the lighting effect beyond that distance is exactly zero. This is implemented as a rapid fade-out near the edge of the radius, which is often imperceptible with a large radius, as the light level will be very low by that distance anyway. Using a limited light radius allows Construct to automatically stop rendering lights that are far away enough. This improves performance and provides flexibility to manage the maximum light limit. For best results, use the smallest radius that does not significantly impact the lighting you want.

> **Tip**  
> Directional lights do not use a radius.

**Inner angle**  
These properties are only applicable for spot lights. The inner angle defines an inner cone that has full brightness. The outer angle defines an outer cone that has no lighting effect. In between the two cones the light level falls off smoothly. In other words, the outer angle defines how quickly the light level fades out at the edge of the cone. If the inner angle is the same as the outer angle, the lighting cone has a sharp edge; if there is a significant angle between the two, then the lighting cone has a soft edge.

**Outer angle**  
These properties are only applicable for spot lights. The inner angle defines an inner cone that has full brightness. The outer angle defines an outer cone that has no lighting effect. In between the two cones the light level falls off smoothly. In other words, the outer angle defines how quickly the light level fades out at the edge of the cone. If the inner angle is the same as the outer angle, the lighting cone has a sharp edge; if there is a significant angle between the two, then the lighting cone has a soft edge.

**Initially visible**  
Set whether the light is visible when the object is created. An invisible light has no lighting effect, and does not count towards the maximum light limit.

## 3D light conditions

The 3D light object has no conditions specific to the plugin.

## 3D light actions

**Set attenuation factor**  
These actions set the corresponding object properties. See the section above for more details.

**Set intensity**  
These actions set the corresponding object properties. See the section above for more details.

**Set light type**  
These actions set the corresponding object properties. See the section above for more details.

**Set radius**  
These actions set the corresponding object properties. See the section above for more details.

**Set reference distance**  
These actions set the corresponding object properties. See the section above for more details.

**Set spotlight angles**  
These actions set the corresponding object properties. See the section above for more details.

## 3D light expressions

**AttenuationFactor**  
These actions retrieve the corresponding object properties. See the section above for more details.

**InnerAngle**  
These actions retrieve the corresponding object properties. See the section above for more details.

**Intensity**  
These actions retrieve the corresponding object properties. See the section above for more details.

**OuterAngle**  
These actions retrieve the corresponding object properties. See the section above for more details.

**Radius**  
These actions retrieve the corresponding object properties. See the section above for more details.

**ReferenceDistance**  
These actions retrieve the corresponding object properties. See the section above for more details.
