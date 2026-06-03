---
title: "Video recorder"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/video-recorder"
release: 487.2
---

## On this page

- [Video recorder conditions](#video-recorder-conditions)
- [Video recorder actions](#video-recorder-actions)
- [Video recorder expressions](#video-recorder-expressions)

---

The **Video recorder** object can record videos of your project in real-time. It can record either the main display canvas, the browser tab, the entire screen, or even a different app (where supported).

Note not all browsers or platforms record the same types of audio or video. The codecs used and the resulting file format can vary; use *Is audio/video format supported* conditions to check which are supported. By default the recording actions use *Auto* as the format, which means a supported format will be picked.

> **Tip**  
> Screen recording, when supported, often requires a permission prompt from the user for security reasons. Further, to avoid annoying the user, this may only be supported inside a user input event, such as *On button clicked*, *On touch start*, etc.

## Video recorder conditions

**Is audio format supported**  
Check if particular audio and video codecs are supported for the recorded video.

**Is video format supported**  
Check if particular audio and video codecs are supported for the recorded video.

**Is recording**  
True while currently recording the canvas or screen.

**Is recording supported**  
Check if the current browser or platform supports recording. If this is not true, video recording will not work.

**Is screen recording supported**  
Check if the *Start screen recording* action is supported. This action can record the user's entire screen, and is not always supported even when the *Start recording* action is supported.

**On recording error**  
Triggered if an error occurs while recording a video. The recording is unlikely to be available after an error.

**On recording ready**  
Triggered after recording finishes, e.g. after the *Stop recording* action, when the video recording has finished encoding and is available to download with the *RecordingURL* expression. This can be downloaded using the Browser object's *Invoke download* action.

## Video recorder actions

**Start recording**  
Start recording a video of the main display canvas. Note this excludes form controls like buttons and text inputs, because these are HTML elements that "float" above the main display canvas and aren't actually part of the canvas, so are excluded from the recording. (If it is important to record these, some browsers support screen recording and can capture the entire browser tab.) Specific video and audio formats can be chosen, but it is recommended to leave them at *Auto* to ensure a supported format is used, or set to *None* to omit either the video or audio from the recording. A custom framerate can be set but the default 0 indicates the display rate. The quality in kilobits per second (kbps) can also be set, determining the video quality vs. size tradeoff. Use *Stop recording* to end the recording, after which *On recording ready* will trigger so the video can be downloaded.

**Start screen recording**  
Start recording a video of the user's entire screen. This only works when the *Is screen recording supported* condition is true. For security reasons, browsers will prompt the user before the recording starts. To avoid the prompt annoying users, this action may only be allowed in a user input trigger, e.g. *On button clicked*, *On touch start* etc. Some browsers also provide options in the prompt to record either the browser tab (which will include non-canvas elements like form controls), a different app, or the screen. Specific video and audio formats can be chosen, but it is recommended to leave them at *Auto* to ensure a supported format is used, or set to *None* to omit either the video or audio from the recording. Note that if audio is included, the video can only include audio played by the project itself, unless *System audio* is checked, which allows for recording all audio output from the system including other apps; note however the user may still need to opt-in to including system audio in the permission prompt. The quality in kilobits per second (kbps) can also be set, determining the video quality vs. size tradeoff. Use *Stop recording* to end the recording, after which *On recording ready* will trigger so the video can be downloaded.

**Start User Media recording**  
Start recording video and/or audio from a [User Media](../plugin-reference/user-media.md) object's input. *On media request approved* must trigger before this can be used.

**Set recording paused**  
Pause or resume an active recording. A paused recording stops adding video frames or audio, and begins again when resumed. The resulting recording will appear to have a cut while the recording was paused.

**Stop recording**  
Stop any active recording. When the video has finished encoding, *On recording ready* will trigger so the video can be downloaded.

## Video recorder expressions

**RecordingURL**  
In *On recording ready*, a URL that can be used to download the recorded video file. Use the Browser object's *Invoke download* action to download this.

**RecordingType**  
The content type (also known as MIME type) of the recording that was made, e.g. *"video/webm;codecs=vp9"*. This is useful if you need to know the type of an *Auto* format recording, such as when sharing it.

**RecordingFileExtension**  
The file extension of the recording that was made including the dot, e.g. *".webm"*. This is useful if you need to know the file extension of an *Auto* format recording, such as when download it.
