---
title: "Fade behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/fade"
release: 487.2
---

## On this page

- [Fade properties](#scripting)
- [Fade conditions](#fade-properties)
- [Fade actions](#fade-conditions)
- [Fade expressions](#fade-actions)

---

The **Fade behavior** fades objects in and out by changing the object's opacity over time. By default, it makes an object fade out over 1 second then destroys it.

> **Tip**  
> The Fade behavior is made redundant by the [Tween behavior](../behavior-reference/tween.md). It's recommended to use opacity tweens instead of the Fade behavior. See also [Superseded features](../tips-and-guides/superseded-features.md).

Fades run in the following order. If any of the times are 0, the step is skipped.

1. The object fades in from invisible to its set opacity, over the *Fade in time*.
2. The object remains at its current opacity for the *Wait time*.
3. The object fades out to invisible, over the *Fade out time*.
4. If the *Destroy* property is enabled, the object is then destroyed.

For example, with each time set to 1 second, the object will fade in from invisible for 1 second, wait for 1 second, then fade out to invisible for 1 second.

It is recommended to leave *Destroy* enabled. If disabled, the object still exists after fading out, but is invisible. If many objects are using the Fade behavior, this can build up many invisible objects over time, which gradually use more memory and CPU causing the game to slow down.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IFadeBehaviorInstance script interface](../scripting/scripting-reference/behavior-interfaces/fade.md).

## Fade properties

**Fade in time**  
Time, in seconds, to fade in from invisible. If 0, the fade in is skipped.

**Wait time**  
Time, in seconds, to wait between fade in and fade out. If 0, the step is skipped.

**Fade out time**  
Time, in seconds, to fade out to invisible. If 0, the fade out is skipped.

**Destroy**  
If enabled, the object is automatically destroyed after the fade out finishes. If disabled, the object is never destroyed by the behavior. Be sure to destroy objects yourself as necessary, as a build-up of invisible faded-out objects can cause the game to slow down.

**Enabled**  
If enabled, the object will begin fading as soon as it is created. Otherwise the fade will not run until you use the *Start* action.

**Preview Paid plans only**  
Enable to run a preview of the fade effect directly in the Layout View.

## Fade conditions

**On fade-in finished**  
Triggered when each stage of the fade finishes.

**On wait finished**  
Triggered when each stage of the fade finishes.

**On fade-out finished**  
Triggered when each stage of the fade finishes.

## Fade actions

**Restart fade**  
Run the entire fade from the beginning again.

**Set fade-in time**  
Set the corresponding properties described under *Fade properties*.

**Set fade-out time**  
Set the corresponding properties described under *Fade properties*.

**Set wait time**  
Set the corresponding properties described under *Fade properties*.

**Start fade**  
If the *Enabled* property is disabled, this will begin the fade.

## Fade expressions

**FadeInTime**  
Return the corresponding properties described under *Fade properties*.

**FadeOutTime**  
Return the corresponding properties described under *Fade properties*.

**WaitTime**  
Return the corresponding properties described under *Fade properties*.
