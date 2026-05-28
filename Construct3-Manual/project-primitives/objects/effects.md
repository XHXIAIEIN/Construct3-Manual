---
title: "Effects"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/effects"
release: 487
---

## On this page

- [Blend mode](#blend-mode)
- [Changing effects at runtime](#changing-effects-at-runtime)
- [Performance](#performance)

---

                **Effects** change the visual appearance of objects. They can be added with the **Effects dialog**. Effects can also be added to [layers](../../project-primitives/layers.md) and [layouts](../../project-primitives/layouts.md), although effects which blend with the background cannot be used on layouts. Effects are also sometimes referred to as *shaders* or *shader effects*, since this refers to the underlying technology. Below is an example of the Water effect on an image.

[![An example of the Water effect](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/918/effects_v800.jpg)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/918/effects.jpg)An example of the Water effect

Construct provides a library of over 80 effects. Adding effects also displays them in the [Layout View](../../interface/layout-view.md) if *Preview effects* is enabled in [project properties](../../project-primitives/projects.md). A number of examples of effects are also provided in Construct's examples which you can find by searching for *Effects* in the [Start Page](../../overview/start-page.md).

Multiple effects can be applied to a single object, layer or layout. In this case the effects are chained. The result of the first effect is processed by the second effect, then the result of that is processed by the third effect, and so on.

Note that the Free edition is limited to using two effects in a project only.

## Blend mode

The *Blend mode* provides a simple set of pre-defined ways to blend the object with the background. [Click here to open an example of blend modes in Construct.](https://editor.construct.net/#open=blend-modes) The image below also demonstrates the available blend modes.

[![The blend modes available in Construct](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/139568/blend-modes_v700.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/139568/blend-modes.png)The blend modes available in Construct

Blend modes are usually more efficient than adding an effect, so it is recommended to prefer to use them over effects where possible.

> **Tip**  
> The *Multiply* and *Screen* blend modes are approximations of their shader effect equivalents. Usually they can be used instead, but if you need more precise rendering or better treatment of the alpha channel, you may need to use an effect instead.

If multiple effects are used, the blend mode is applied only to the last effect. For example with three effects, the effect chain is processed normally, and the blend mode is only used to blend the result of the third effect with the background.

## Changing effects at runtime

Objects supporting effects provide common actions to enable or disable effects, or set an effect parameter. This allows you to switch effects or adjust effect parameters at runtime, allowing for greater possibilities and creative uses. To enable or disable layout or layer effects, or change their parameters, use the relevant [system actions](../../system-reference/system-actions.md).

## Performance

Using too many effects can cause poor performance. Try to only use effects when it is important to the appearance of the game.

Creating many instances of an object using effects can be very inefficient, since the effect must be processed repeatedly for small areas. If many instances need to use an effect, sometimes it is more efficient to place all the instances on their own layer, and apply the effect to that layer instead. This can improve performance whilst producing the same visual appearance.

Never use effects to process a static effect on an object. For example, do not use the *Grayscale* effect to make an object always appear grayscale. Instead apply the grayscale effect in an image editor and import a grayscale image to the object, without using any effects. This has the same visual result, and avoids performance-degrading effect processing. Effects like *Grayscale* should only be used for transitions or making objects only occasionally appear grayscale.

For more information, see the manual section on [performance tips](../../tips-and-guides/performance-tips.md).
