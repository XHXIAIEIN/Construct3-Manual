---
title: "Speech synthesis"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/speech-synthesis"
release: 487.2
---

## On this page

- [Speech synthesis conditions](#scripting)
- [Speech synthesis actions](#speech-synthesis-conditions)
- [Speech synthesis expressions](#speech-synthesis-actions)

---

The **Speech synthesis** object can automatically speak some text using a synthetic voice, also known as text-to-speech (TTS).

Speech synthesis may not be supported by all browsers or platforms. Use the *Supports speech synthesis* condition to check if speech synthesis can be used.

> **Tip**  
> Starting speech synthesis is treated similarly to audio playback by some browsers. This means in order to avoid annoying the user it may not be able to autoplay on startup. It may also only be allowed to start in a user input trigger, such as *On button clicked* or *On touch started*.

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

## Speech synthesis conditions

**Is speaking**  
True if the speech synthesis engine is currently reading out some text.

**On speech ended**  
Triggered when the speech started by *Speak text* finishes being read out.

**On speech error**  
Triggered if an error occurs during speech synthesis.

**Supports speech synthesis**  
True if the current browser/platform supports speech synthesis, so the *Speak text* action can be used

## Speech synthesis actions

**Pause speaking**  
Pause or resume text being read out by speech synthesis from the *Speak text* action.

**Resume speaking**  
Pause or resume text being read out by speech synthesis from the *Speak text* action.

**Speak text**  
Read out some text using speech synthesis. The language, volume, rate and pitch of the voice that reads out the text can be customised. The *Voice URI* can be used to select a different kind of voice (e.g. male vs. female) from a list of the supported voices, if any alternatives are available. The list of possible voices can be retrieved using the *VoiceCount* and *VoiceURIAt* expressions.

**Stop speaking**  
Stop reading out text from a previous *Speak text* action. The speech cannot be resumed.

## Speech synthesis expressions

**VoiceCount**  
Return the number of voices available for use with speech synthesis.

**VoiceLangAt(index)**  
Return the language, name, or URI of the voice at the given zero-based index. This can be used to show the user a list of possible voices to choose. To select a different voice, pass the appropriate voice URI to the *Speak text* action.

**VoiceNameAt(index)**  
Return the language, name, or URI of the voice at the given zero-based index. This can be used to show the user a list of possible voices to choose. To select a different voice, pass the appropriate voice URI to the *Speak text* action.

**VoiceURIAt(index)**  
Return the language, name, or URI of the voice at the given zero-based index. This can be used to show the user a list of possible voices to choose. To select a different voice, pass the appropriate voice URI to the *Speak text* action.
