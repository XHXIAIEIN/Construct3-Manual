---
title: "Shadow caster behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/shadow-caster"
release: 495.2
---

## On this page

- [Collision polygon shape](#scripting)
- [Shadow caster properties](#collision-polygon-shape)
- [Shadow caster conditions](#shadow-caster-properties)
- [Shadow caster actions](#shadow-caster-conditions)
- [Shadow caster expressions](#shadow-caster-actions)

---

The **Shadow caster behavior** marks an object as casting a shadow from a [Shadow light](../plugin-reference/shadow-light.md) object. For more information, see the documentation for *Shadow light*.

Shadows are cast from the object's collision polygon, if it has one, otherwise its bounding rectangle.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IShadowCasterBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/shadow-caster.md).

## Collision polygon shape

Objects with the *Shadow caster* behavior must use [convex collision polygons](https://en.wikipedia.org/wiki/Convex_polygon). Shadows will not render correctly if they use concave polygons. If you need a concave shape, this can always be achieved by placing multiple shadow caster objects next to each other to compose a concave shape out of convex parts.

## Shadow caster properties

**Height**  
The simulated height of the object, which adjusts the length of shadow it casts. If the *Shadow light* height is less than or equal to the object height, it casts an "infinite" shadow which goes all the way offscreen; if it is higher, it uses the relative heights to calculate how long a shadow to cast. For example two objects with different heights will cast different length shadows.

**Tag**  
A tag for this shadow casting object. A *Shadow light* object also has a tag, and can be set to only cast shadows from shadow casters with the same or different tags to itself. This can be used to have different *Shadow lights* casting shadows off different sets of objects, such as to have shadows working at different levels of Z order.

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, the object will not cast a shadow.

## Shadow caster conditions

**Compare height**  
Compare the current height property of the behavior to a value.

**Is enabled**  
True if the behavior is currently enabled so it can cast shadows.

## Shadow caster actions

**Set enabled**  
Enable or disable the behavior. If disabled, the object will not cast a shadow.

**Set height**  
Set the height property of the behavior. For more information see *Shadow caster properties*.

**Set tag**  
Change the tag of the behavior. For more information see *Shadow caster properties*.

## Shadow caster expressions

**Height**  
Return the current height property.

**Tag**  
Return the currently set tag for the behavior.
