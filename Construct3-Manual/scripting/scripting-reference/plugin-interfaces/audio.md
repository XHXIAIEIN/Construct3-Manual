---
title: "Audio script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/audio"
release: 495
---

## On this page

- [Examples](#examples)
- [Audio APIs](#audio-apis)

---

The `IAudioObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Audio plugin](../../../plugin-reference/audio.md).

The script interface essentially just provides access to the underlying [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) (part of the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)) that the Audio plugin uses internally for audio playback. However this is sufficient to provide complete control over audio playback, including setting up complex graphs of audio processing nodes. It is also convenient, since Construct manages some awkward details such as ensuring playback is enabled as soon as possible given most browsers impose autoplay restrictions. Adding the Audio object and using its script interface saves you from having to re-implement these details yourself.

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.objects.Audio`.

> **Tip**  
> Since the Web Audio API is not available in Web Workers, the Audio object's script interface can only be used in DOM mode, i.e. with the project *Use worker* option turned off.

## Examples

The following examples demonstrate using the Web Audio API for audio playback.

- [Audio scripting](https://editor.construct.net/#open=audio-scripting) demonstrates loading audio files and playing them
- [Sound synthesis](https://editor.construct.net/#open=sound-synthesis) demonstrates generating sounds with code

## Audio APIs

**audioContext**  
The Audio plugin's internal [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) used for audio playback.

**destinationNode**  
The destination node to connect any additional audio nodes to.

> **Tip**  
> While `AudioContext` has its own `destination` property, in some cases Construct redirects the audio output to another destination, such as when recording playback. To achieve this it creates its own destination node which it can redirect the output from. By connecting your own nodes to this destination your script's audio output will properly integrate with other Construct features like recording.

**isSilent**  
Set or get a boolean indicating whether *Silent mode* is enabled. In silent mode all currently playing sounds are muted and no new sounds will play.

**masterVolume**  
Set or get the current master volume, which is applied to all audio playback, in linear scale (in the range [0, 1]).

**stopAll()**  
Stop all currently playing sounds.
