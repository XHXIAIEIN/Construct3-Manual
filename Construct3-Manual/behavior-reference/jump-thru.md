---
title: "Jump-thru behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/jump-thru"
release: 487
---

## On this page

- [Jump-thru properties](#scripting)
- [Jump-thru conditions](#jump-thru-properties)
- [Jump-thru actions](#jump-thru-conditions)

---

The **Jump-thru behavior** allows the [Platform behavior](../behavior-reference/platform.md) to stand on the object, and jump on to it from underneath. This differs from the [Solid behavior](../behavior-reference/solid.md), which the Platform behavior can stand on, but not jump on to from underneath. The image below illustrates the difference.

Note the Jump-thru behavior **does not support slopes**. Any slopes in your game should use the Solid behavior instead.

[![Jump-thru vs. Solid behaviors](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/976/jumpthru-solid_v600.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/976/jumpthru-solid.png)Jump-thru vs. Solid behaviors

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IJumpthruBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/jump-thru.md).

## Jump-thru properties

**Enabled**  
Set whether the behavior is initially enabled or disabled. If disabled, the object no longer acts as if it is a Jump-thru, and the Platform behavior will always fall through it.

## Jump-thru conditions

**Is enabled**  
True if the behavior is currently enabled. This can be changed by the *Enabled* property or the *Set enabled* action.

## Jump-thru actions

**Set enabled**  
Enable or disable the Jump-thru behavior for this object.
