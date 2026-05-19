---
title: "Sine behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/sine"
release: 476.3
---

## On this page

- [Sine properties](#scripting)
- [Sine conditions](#sine-properties)
- [Sine actions](#sine-conditions)
- [Sine expressions](#sine-actions)

---

The **Sine behavior** can adjust an object's properties (like its position, size or angle) back and forth according to an oscillating [sine wave](http://en.wikipedia.org/wiki/File:Simple_sine_wave.svg). This can be used to create interesting visual effects. Despite the name, alternative wave functions like 'Triangle' can also be selected to create different effects. A visualisation of the different wave types can be found on [Wikipedia](http://en.wikipedia.org/wiki/File:Waveforms.svg).

[Click here to open an example of the Sine behavior](https://editor.construct.net/#open=sine-behavior-types), which demonstrates each type of movement the behavior can use.

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [ISineBehaviorInstance script interface](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/sine).

## Sine properties

**Movement**  
The Sine behavior has the following modes:

- **Horizontal** moves the object left and right on the X axis
- **Vertical** moves the object up and down on the Y axis
- **Forwards/backwards** moves the object in a straight line back and forth along the angle the object is facing at, like an angled *Horizontal* mode.
- **Width** stretches the object wider and narrower
- **Height** stretches the object taller and shorter
- **Size** makes the object grow and shrink
- **Angle** rotates the object clockwise and anticlockwise
- **Opacity** oscillates the object opacity. Note object opacities can never go less than 0 or greater than 100.
- **Z elevation** moves the object up and down on the Z axis.
- **Value only** does not modify the object. It simply stores the oscillating value which can be accessed by the *Value* expression. This can be useful to create custom effects or modify any other object or behavior property based on the sine behavior.

**Wave**  
The wave function used to calculate the movement. For a visualisation see [this Wikipedia diagram](http://en.wikipedia.org/wiki/File:Waveforms.svg).

- **Sine:** the default smooth oscillating motion based on a sine wave.
- **Triangle:** a linear back-and-forth motion.
- **Sawtooth:** linear motion with a jump back to start.
- **Reverse sawtooth:** reverse linear motion with a jump back to start.
- **Square:** alternating between the two maximum values.

**Period**  
The duration, in seconds, of one complete back-and-forth cycle.

**Period random**  
A random number of seconds added to the period for each instance. This can help vary the appearance when a lot of instances are using the Sine behavior.

**Period offset**  
The initial time in seconds through the cycle. For example, if the period is 2 seconds and the period offset is 1 second, the sine behavior starts half way through a cycle.

**Period offset random**  
A random number of seconds added to the period offset for each instance. This can help vary the appearance when a lot of instances are using the Sine behavior.

**Magnitude**  
The maximum change in the object's position, size or angle. This is in pixels for position or size modes, or degrees for the angle mode.

**Magnitude random**  
A random value to add to the magnitude for each instance. This can help vary the appearance when a lot of instances are using the Sine behavior.

**Enabled**  
If disabled, the behavior will have no effect until the *Set active* action is used.

**Preview Paid plans only**  
Enable to run a preview of the behavior directly in the Layout View.

## Sine conditions

**Compare magnitude**  
Compare the current magnitude of the movement.

**Compare movement**  
Compare the current movement property of the behavior.

**Compare period**  
Compare the current period of the movement, in seconds.

**Compare wave**  
Compare the current wave property of the behavior.

**Is enabled**  
Test if the behavior is currently enabled. When disabled it will have no effect on the object.

## Sine actions

**Set cycle position**  
Set the progress through one cycle of the chosen wave, from 0 (the beginning of the cycle) to 1 (the end of the cycle). For example setting the cycle position to 0.5 will put it half way through the repeating motion.

**Set enabled**  
Enable or disable the behavior. When disabled, the behavior does not affect the object at all.

**Set magnitude**  
Set the current magnitude of the cycle. This is in pixels when modifying the size or position, and degrees when modifying the angle.

**Set movement**  
Change the movement type of the behavior, e.g. from *Horizontal* to *Size*.

**Set period**  
Set the duration of a single complete back-and-forth cycle, in seconds.

**Set wave**  
Change the wave property of the behavior, choosing a different wave function to be used to calculate the movement.

**Update initial state**  
The Sine behavior records the object's initial state upon its creation, and always oscillates relative to that, even if it is deactivated and later activated after the object has been modified. If the object changes and you wish for the Sine behavior to oscillate relative to the new state instead of its state upon creation, use this action to reset the initial state to the object's current state.

## Sine expressions

**CyclePosition**  
Return a value from 0 to 1 representing the progress through the current cycle. For example, exactly half way through a cycle this returns 0.5.

**Magnitude**  
Return the current magnitude of the cycle. This is in pixels when modifying the size or position, and degrees when modifying the angle.

**Period**  
Return the current period of a single complete back-and-forth cycle in seconds.

**Value**  
Return the current oscillating value. This will alternate as a positive and negative value centered on zero. This is useful to create custom effects when in *Value only* mode.
