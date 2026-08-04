---
title: "IAnimation script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ianimation"
release: 495
---

## On this page

- [IAnimation APIs](#ianimation-apis)

---

The `IAnimation` interface represents an animation, typically from a Sprite object via its [ISpriteInstance](../../../scripting/scripting-reference/plugin-interfaces/sprite.md) interface. Each frame of the animation is represented by the [IAnimationFrame](../../../scripting/scripting-reference/object-interfaces/ianimationframe.md) interface.

## IAnimation APIs

**name**  
A read-only string of the animation name.

**speed**  
A read-only number with the animation playback speed in animation frames per second.

**isLooping**  
A read-only boolean indicating if animation playback repeats when it reaches the end.

**repeatCount**  
A read-only number indicating how many times to repeat the animation.

**repeatTo**  
A read-only number of the zero-based frame index to go back to when repeating the animation.

**isPingPong**  
A read-only boolean indicating if the animation will reverse when reaching the start or end of the animation.

**frameCount**  
A read-only number of frames in this animation.

**getFrames()**  
Return an array of [IAnimationFrame](../../../scripting/scripting-reference/object-interfaces/ianimationframe.md) representing all the frames in this animation in sequence.

***frames()**  
Iterates all [IAnimationFrame](../../../scripting/scripting-reference/object-interfaces/ianimationframe.md) in this animation in sequence.
