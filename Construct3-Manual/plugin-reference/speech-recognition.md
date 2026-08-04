---
title: "Speech recognition"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/speech-recognition"
release: 495
---

## On this page

- [On-device speech recognition](#scripting)
- [Speech recognition conditions](#on-device-speech-recognition)
- [Speech recognition actions](#speech-recognition-conditions)
- [Speech recognition expressions](#speech-recognition-actions)

---

The **Speech recognition** object can transcribe text from the audio of the user talking in to a microphone. See the [Speech Recognition example](https://editor.construct.net/#open=speech-recognition) for a demonstration.

Speech recognition may not be supported by all browsers or platforms. Use the *Supports speech recongition* condition to check if speech synthesis can be used.

> **Tip**  
> Starting speech recognition requires access to the user's microphone, which normally requires a permission prompt for security reasons. To avoid annoying the user, the permission prompt may also only be allowed to start in a user input trigger, such as *On button clicked* or *On touch started*.

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

## On-device speech recognition

Speech recognition often works by sending the recording of your speech to a cloud service which runs the speech recognition and returns the result. This has privacy implications as your speech is sent to a third-party service, and also only works while you are online.

When the browser or platform supports it, it's possible to instead use on-device speech recognition. This means your audio is processed on the device you are using, ensuring your speech is not sent anywhere else, and allowing it to work offline. However support for on-device speech recognition may need to first be installed for it to work, and this may involve a fairly large download. This means installation can take a while, especially on slow connections, and it may also have to be done while online before it can be used offline.

To use on-device speech recognition:

1. First check the browser/platform supports it with the *Supports on-device recognition* condition
2. Then check whether the language is available using the *Check language available* action, and check the *Process locally* option to check for on-device speech recognition.
3. This will trigger *On check language available result*. If the result is *unavailable*, this language is not supported for on-device speech recognition. If *downloadable*, support is available but it must be installed first. If *available*, then speech recognition can be used immediately.
4. When the result is *downloadable*, use the action *Install on-device recognition* to install support for on-device speech recognition for the language. This may take a while as it may involve a large download, but it should eventually trigger *On install on-device recognition result* depending on the outcome.
5. If the installation was successful - or it was already available - then you can check the *Process locally* option of the *Request speech recognition* action to perform speech recognition on the local device.

## Speech recognition conditions

**Is recognising speech**  
True if a speech recognition request has been approved, and speech input through a microphone is actively being recognised.

**On end**  
Triggered after the *Stop speech recognition* action, or after the user stops speaking in *Single phrase* mode speech recognition.

**On error**  
Triggered if there is an error approving speech recognition, or during speech recognition. The *SpeechError* expression is set to a string which describes the type of problem, e.g. "not-allowed" if permission was declined.

**On result**  
Triggered during active speech recognition when the interim or final transcript has changed. Use either the *FinalTranscript* and/or the *InterimTranscript* expressions to get the updated result.

**On start**  
Triggered after *Request speech recognition* when the user has also approved any prompt for permission.

**Supports speech recognition**  
True if the current browser or platform supports speech recognition. If false, none of the speech recognition features of the object will work.

**On install on-device recognition result**  
Triggered after the *Install on-device recognition* action completes, depending of the result of the installation.

**Supports on-device recognition**  
Test if the current browser/platform supports on-device speech recognition. See *On-device speech recognition* above for more details.

**On check language available result**  
Triggered after the *Check language available* action depending on the result of the check. Note this takes in to account the *Process locally* option of the action. The results can be one of the following:

- *Available:* the language is available for speech recognition.
- *Downloading:* support for on-device speech recognition for this language is currently downloading.
- *Downloadable:* support for on-device speech recognition for this language may be downloaded.
- *Unavailable:* the language is not available for speech recognition.
- *Unknown:* the availability of this language for speech recognition is not known.
- *Error:* an error occurred checking for the language availability.

## Speech recognition actions

**Request speech recognition**  
If *Supports speech recognition* is true, initiates speech recognition. Usually a permission prompt will appear asking the user if they want to allow the page to use their microphone input. The user must approve the permission prompt before *On start* triggers. If there is a problem or permission is denied, *On error* is triggered.

*Language* specifies the spoken language to recognize, as an IETF language tag. Use a tag like *en* for English, *en-US* for US English, *en-GB* for British English, and so on.

Check *Process locally* to perform on-device speech recognition. Support for the specified language may need to be installed first - see the section *On-device speech recognition* above for more details. When unchecked, a cloud service may be used for speech recognition.

*Mode* can be *continuous*, which keeps recognising speech until the page is closed or the *Stop speech recognition* is used; or *single phrase*, which recognises speech until the user stops talking, then automatically stops speech recognition and triggers *On end*.

*Results* can be *Interim* to allow interim (unconfirmed) results which can change, accessed by the *InterimTranscript* expression; or *Final* to only allow confirmed final results of speech recognition to be returned which will not change, accessed by the *FinalTranscript* expression.

**Stop speech recognition**  
If speech recognition is currently active, ends the speech recognition. *On end* will trigger.

**Check language available**  
Check whether a given language is available for speech recognition. Enable *Process locally* to check whether the language is available for on-device speech recognition. After using this action, *On check language available result* will trigger according to the availability.

**Install on-device recognition**  
When *Supports on-device recognition* is true, installs on-device speech recognition for a specific language. This may require a substantial download which will happen in the background. *On install on-device recognition result* will trigger after a while with the result of the installation - note this may take a while, especially on slow connections.

## Speech recognition expressions

**FinalTranscript**  
If speech recognition is active, returns the final transcript of confirmed results. This does not change, other than to add newly spoken words which have also been confirmed.

**InterimTranscript**  
If speech recognition is active, returns the interim transcript of results. The *Request speech recognition* action must have specified *Interim* for the *Results* parameter. The text of this expression can change, as the speech recognition engine uses the sound input in real-time to refine the results and correct any misinterpreted words. Once the user has spoken far enough for the speech recognition engine to be confident of a final result, the word will disappear from *InterimTranscript* and be appended to *FinalTranscript*.

**SpeechError**  
In *On speech recognition error*, contains a string which identifies the type of error. Possible values are: `"no-speech"`, `"aborted"`, `"audio-capture"`, `"network"`, `"not-allowed"`, `"service-not-allowed"`, `"bad-grammar"`, or `"language-not-supported"`. The most common errors are `"not-allowed"` if the user declined the permission prompt; `"audio-capture"` if no microphone is present; or `"network"` if the speech recognition is implemented by a remote server over the Internet which is currently unavailable.
