---
title: "Shadow Light script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/shadow-light"
release: 495
---

## On this page

- [Shadow Light APIs](#shadow-light-apis)

---

The `IShadowLightInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [Shadow Light plugin](../../../plugin-reference/shadow-light.md).

## Shadow Light APIs

**lightX**  
Set or get the position in the layout from which shadows are cast from.

> **Tip**  
> Note that using `IWorldInstance` methods to set the object position will also update the light position. However the Shadow Light object automatically positions itself in the middle of the viewport in order to draw over the whole screen. Setting the object position to set the light position in the middle of the viewport may conflict with its automatic positioning, so setting these properties can be used as a more reliable way to guarantee the light position is placed at the given location.

**lightY**  
Set or get the position in the layout from which shadows are cast from.

> **Tip**  
> Note that using `IWorldInstance` methods to set the object position will also update the light position. However the Shadow Light object automatically positions itself in the middle of the viewport in order to draw over the whole screen. Setting the object position to set the light position in the middle of the viewport may conflict with its automatic positioning, so setting these properties can be used as a more reliable way to guarantee the light position is placed at the given location.

**lightHeight**  
Set or get the height of the light, used with the shadow caster object heights to calculate the length of shadow to cast. This property only has an effect if the light radius is 0, otherwise shadows always extend offscreen.

**shadowColor**  
Set or get the color of the shadows drawn by the light, as an array with 3 elements specifying the red, green and blue components as floats in the 0-1 range.

**tag**  
Set or get a string of the tag for this light. Combined with `castFrom` this allows using multiple lights that cast shadows of different sets of objects.

**castFrom**  
A string specifying which shadow caster objects to render shadows for from this object. The possible values are:

- `"all"`: every shadow caster object will get a shadow rendered for this light.
- `"same-tag"`: shadows will only be rendered for shadow casters with the same `tag`.
- `"different-tag"`: shadows will only be rendered for shadow casters with a different `tag`.
