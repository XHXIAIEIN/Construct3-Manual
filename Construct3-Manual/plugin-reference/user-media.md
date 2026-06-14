---
title: "User Media"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/user-media"
release: 487.3
---

## On this page

- [In the layout](#in-the-layout)
- [User Media conditions](#user-media-conditions)
- [User Media actions](#user-media-actions)
- [User Media expressions](#user-media-expressions)

---

The **User Media** object allows retrieving camera or microphone input from a user. This requires appropriate hardware being installed on the user's system, such as a webcam for a PC, a phone camera on a mobile, or a microphone. Camera snapshots can be taken and transferred in to Sprite or Tiled Background objects, and microphone input can be analysed with the Audio object.

For security reasons, most browsers will prompt the user for permission before allowing user media input, and will display clear notifications that the media device is currently being used, such as a recording icon in the system tray or tab icon.

The User Media object has [common features](../plugin-reference/common-features.md), including the ability to have [effects](../project-primitives/objects/effects.md) applied for video feeds.

For several examples of what the User Media object can do, search for *User Media* in the [Start Page](../overview/start-page.md).

## In the layout

The User Media object appears as a rectangle in the [layout view](../interface/layout-view.md), represented by a red cross with its icon in the middle. This represents where the video feed will be displayed in the layout. If you don't need video input, place the User Media object outside the layout.

## User Media conditions

**On media request approved**  
Triggered when the user confirms a security prompt after the *Request camera* or *Request microphone* actions, indicating their approval to allow the application to use media input.

**On media request declined**  
Triggered when the user cancels a security prompt after the *Request camera* or *Request microphone* actions, indicating they do not approve the application's request to use media input.

**On retrieved media sources**  
Triggered after the *Get media sources* action completes, and the list of media sources is available with the *AudioSource* and *CameraSource* expressions.

**On snapshot ready**  
Triggered after the *Snapshot* action, when the snapshot is ready to use with the *SnapshotURL* expression.

## User Media actions

**Get media sources**  
Request a list of media sources that can be used with the *Request camera* or *Request microphone* actions. For example a mobile device may have both front-facing and back-facing cameras, or multiple microphones. Using the media source list allows the specific camera or microphone input to be selected. This does not complete immediately; the media source list is only available after the *On retrieved media sources* trigger fires. The browser also may not support listing the media sources, in which case the trigger will never fire.

**Request camera**  
Show a security prompt to the user requesting that they give the application permission to use camera input. Either *On media request approved* or *On media request declined* will trigger depending on their decision. If approved, the User Media object in the layout will start displaying a video feed from the user's camera device. The specific camera source to use can be chosen with the *Source* parameter, if media source listing is supported and a media source list has been requested. Otherwise the *Preferred direction* setting can be used to select the user-facing (front/selfie) or environment-facing (back) camera if the device has two, which is common on mobile devices. If the preferred width/height are not zero, the nearest supported resolution that the input device supports will be picked. Microphone input can also be optionally included, with a given microphone source (see *Request microphone*), which is useful in case you want to use [Game recorder](../plugin-reference/game-recorder.md) to record the user's camera and include audio.

**Request microphone**  
Show a security prompt to the user requesting that they give the application permission to use microphone input. *On media request approved* or *On media request declined* will trigger depending on their decision. The [Audio](../plugin-reference/audio.md) object must also be in the project for this to be useful. A tag is given for the microphone input, and the audio input from the microphone is routed the same way as playing a sound with that tag. This means you can assign effects from the Audio object to the microphone input by adding the effects to the same tag assigned to the microphone. A useful combination is to add an analyser effect then a mute effect to microphone input. This prevents the user hearing their own voice, but allows peak, RMS and spectrum monitoring with the analyser. The specific microphone input to use can be chosen with the *Source* parameter, if media source listing is supported and a media source list has been requested; otherwise the default microphone input is used.

**Snapshot**  
If the user has approved a camera request and the User Media object is showing a video feed, then snapshots the current frame. The still image is available after *On snapshot ready* triggers in the *SnapshotURL* expression. The image can be loaded in to a Sprite or Tiled Background object using the *Load image from URL* action and passing *SnapshotURL*, or downloaded using the Browser object's *Invoke download* action. This action optionally takes parameters allowing you to specify the compression format, which is useful if you intend to upload or save the image and a smaller file size would be advantageous.

**Stop**  
Ends any active video feed or microphone input. Media input must be requested again before it can be used.

## User Media expressions

**AudioSourceCount**  
After *On retrieved media sources* triggers, the number of audio sources available.

**AudioSourceLabelAt(index)**  
After *On retrieved media sources* triggers, the label of the audio source at the given index. The label is normally the name of the input or recording device, but it may be empty for security reasons (such as if the user has not yet approved a media request).

**CameraSourceCount**  
After *On retrieved media sources* triggers, the number of camera sources available.

**CameraSourceFacingAt(index)**  
After *On retrieved media sources* triggers, a string indicating which way a camera source is facing. This can be "user" (the camera is facing the user, such as the front-facing camera on a phone), "environment" (the camera is facing away from the user, such as the back-facing camera on a phone), "left", "right", or empty if unknown or withheld for security reasons.

**CameraSourceLabelAt(index)**  
After *On retrieved media sources* triggers, the label of the camera source at the given index. The label is normally the name of the input device, but it may be empty for security reasons (such as if the user has not yet approved a media request).

**SnapshotURL**  
A data URI representing the snapshotted image after a *Snapshot* action once *On snapshot ready* has triggered, otherwise an empty string.

**VideoWidth**  
If a video feed is approved and active, this returns the size in pixels of the feed from the device (which may not be the same size as the object in the layout). If no feed is active then 0 is returned.

**VideoHeight**  
If a video feed is approved and active, this returns the size in pixels of the feed from the device (which may not be the same size as the object in the layout). If no feed is active then 0 is returned.
