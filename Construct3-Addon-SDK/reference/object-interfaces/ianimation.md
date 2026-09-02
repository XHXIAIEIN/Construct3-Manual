---
title: "IAnimation interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/ianimation"
release: 495.2
---

## On this page

- [Methods](#methods)

---

The `IAnimation` interface represents an animation within an animated object type. This is only applicable to animated plugins such as Sprite.

## Methods

**GetName()**  
Return a string of the animation name.

**GetObjectType()**  
Return the [IObjectType](../../reference/object-interfaces/iobjecttype.md) that this animation belongs to.

**GetFrames()**  
Return an array of [IAnimationFrame](../../reference/object-interfaces/ianimationframe.md) representing the frames in this animation.

**AddFrame(blob, width, height)**  
Add a new animation frame to the animation. All the parameters are optional. There are four overloads of this method:

1. No parameters passed: add an empty animation frame with a default size
2. Blob passed with no size: use the blob as the animation frame image file, and decompress the image to determine the size
3. Blob passed with size: use the blob as the animation frame image file and use the provided size (which must be correct) to skip having to decompress the image to find its size
4. No blob passed but size provided: use the size for the empty animation frame

 The method returns a promise that resolves with the added [IAnimationFrame](../../reference/object-interfaces/ianimationframe.md).

**SetSpeed(s)**  
Set and get the animation speed in animation frames per second.

**GetSpeed()**  
Set and get the animation speed in animation frames per second.

**SetLooping(l)**  
Set and get the looping flag for the animation, indicating if the animation will repeat.

**IsLooping()**  
Set and get the looping flag for the animation, indicating if the animation will repeat.

**SetPingPong(p)**  
Set and get the ping-pong flag for the animation, indicating if the animation will repeat alternating forwards and backwards.

**IsPingPong()**  
Set and get the ping-pong flag for the animation, indicating if the animation will repeat alternating forwards and backwards.

**SetRepeatCount(r)**  
Set and get the number of times the animation is set to repeat.

**GetRepeatCount()**  
Set and get the number of times the animation is set to repeat.

**SetRepeatTo(f)**  
Set and get the animation frame index to return to when repeating the animation. This must be a valid index.

**GetRepeatTo()**  
Set and get the animation frame index to return to when repeating the animation. This must be a valid index.

**Delete()**  
Immediately deletes this animation from its object without any confirmation prompt. This cannot be undone.

> **Tip**  
> The last animation is not allowed to be deleted. Construct requires that animated objects have at least one animation.


> **Warning**  
> Use this with care as it does not warn the user and cannot be undone.
