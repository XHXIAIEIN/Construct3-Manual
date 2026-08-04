---
title: "Tween script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itweenstate"
release: 495
---

## On this page

- [Tween APIs](#tween-apis)

---

The `ITweenState` interface represents an actively running tween. It derives from [ITimelineStateBase](../../../scripting/scripting-reference/interfaces/itimelinestatebase.md) which implements APIs in common between timelines and tweens, as a tween is a kind of temporary timeline. Many general playback APIs are part of `ITimelineStateBase`; the `ITweenState` interface only provides APIs specific to tweens that do not also apply to timelines.

Tweens can be created using the `startTween()` method on the [Tween behavior script interface](../../../scripting/scripting-reference/behavior-interfaces/tween.md).

> **Tip**  
> Once a tween is released, this interface is destroyed and all its properties will throw exceptions upon access. The only exception to this is the `isReleased` property (inherited from `ITimelineState`) which provides a read-only boolean that indicates if the interface has been released and is now invalid.

## Tween APIs

**stop()**  
Stops playback and immediately ends the tween. The interface is released in this call and so it cannot be used any further after this call.

**instance**  
A read-only property with a reference to the [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) the tween is running on.

**isDestroyOnComplete**  
Set or get a boolean indicating whether the corresponding instance will be automatically destroyed once the tween finishes.

**value**  
A read-only number providing the current value of a value tween.

**setEase(easeName)**  
Set the ease function used for the tween by a  string of its name. Refer to the Tween behavior script interface for a list of valid built-in ease names, or use the name of a custom ease.

**released**  
A promise that resolves when the tween is destroyed. Afterwards the rest of the API can no longer be used except for `isReleased` property (inherited from `ITimelineState`) which provides a read-only boolean that indicates if the interface has been released and is now invalid.
