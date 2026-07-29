---
title: "Fade behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/fade"
release: 495
---

## On this page

- [Example](#example)
- [Fade behavior events](#fade-behavior-events)
- [Fade behavior APIs](#fade-behavior-apis)

---

The `IFadeBehaviorInstance` interface derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md) to add APIs specific to the [Fade behavior](../../../behavior-reference/fade.md).

## Example

Below is a sample code snippet demonstrating starting a fade for `inst` (assumed to be an instance with the Fade behavior)  and logging to the console when the fade finishes.

```javascript
// Handle "fadeoutend" event which logs to console when
// the fade has finished
inst.behaviors.Fade.addEventListener("fadeoutend", e =>
{
  console.log("Fade finished!");
});

// Start the Fade effect running
inst.behaviors.Fade.startFade();
```

## Fade behavior events

See [behavior instance event](../../../scripting/scripting-reference/interfaces/behavior-instance-event.md) for standard behavior instance event object properties.

**"fadeinend"**  
Fired when the fade in stage finishes, moving on to the wait stage.

**"waitend"**  
Fired when the wait stage finishes, moving on to the fade out stage.

**"fadeoutend"**  
Fired when the fade out stage finishes. The object may also be destroyed immediately after this event if the *Destroy* property of the behavior is enabled.

## Fade behavior APIs

**startFade()**  
Start the fade effect running if it is not already running.

**restartFade()**  
Force the fade effect to restart from the beginning.

**fadeInTime**  
Set or get the fade in time in seconds. Set to 0 to skip this stage.

**waitTime**  
Set or get the wait time, in between the fade in and fade out, in seconds. Set to 0 to skip this stage.

**fadeOutTime**  
Set or get the fade out time in seconds. Set to 0 to skip this stage.
