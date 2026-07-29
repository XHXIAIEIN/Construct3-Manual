---
title: "Sine behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/sine"
release: 495
---

## On this page

- [Sine behavior APIs](#sine-behavior-apis)

---

The `ISineBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Sine behavior](../../../behavior-reference/sine.md).

## Sine behavior APIs

**movement**  
Set or get the movement type of the behavior as a string, which must be one of `"horizontal"`, `"vertical"`, `"forwards-backwards"`, `"size"`, `"width"`, `"height"`, `"angle"`, `"opacity"`, `"z-elevation"` and `"value-only"`. For a full description of each, refer to the [Sine behavior manual entry](../../../behavior-reference/sine.md).

**wave**  
Set or get the wave function used to calculate the movement as a string, which must be one of `"sine"`, `"triangle"`, `"sawtooth"`, `"reverse-sawtooth"` and `"square"`. For a visualisation see [this Wikipedia diagram](https://en.wikipedia.org/wiki/File:Waveforms.svg).

**period**  
Set or get the duration, in seconds, of one complete back-and-forth cycle.

**magnitude**  
Set or get the maximum change in the object's position, size or angle. This is in pixels for position or size modes, or radians for the angle mode.

**phase**  
Set or get the progress through one cycle of the chosen wave, from 0 (the beginning of the cycle) to 2π (the end of the cycle). For example setting the cycle position to `Math.PI` will put it half way through the repeating motion.

**value**  
A read-only number returning the current value of the offset applied by the sine behavior. This is intended to be used when the `movement` property is `"value-only"`.

**updateInitialState()**  
The Sine behavior records the object's initial state upon its creation, and always oscillates relative to that, even if it is deactivated and later activated after the object has been modified. If the object changes and you wish for the Sine behavior to oscillate relative to the new state instead of its state upon creation, use this method to reset the initial state to the object's current state.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
