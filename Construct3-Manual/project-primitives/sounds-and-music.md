---
title: "Sounds and music"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/sounds-and-music"
release: 495.2
---

Sounds and Music in Construct are audio files. Any audio files the project uses will be exported with the project. To ensure your audio can be played across a wide range of platforms, Construct will encode them to **WebM Opus** when importing, if possible. It is recommended to import **16-bit PCM WAV** files to ensure they can be encoded without any unnecessary quality loss.

Imported audio files can be previewed by **double-clicking** them in the [Project Bar](../interface/bars/project-bar.md). This will open an audio player that you can use to listen to the audio file.

To import and play back audio in a project, follow these steps:

1. Import sounds by right-clicking the **Sounds** or **Music** folders in the [Project Bar](../interface/bars/project-bar.md) and selecting **Import sounds** or **Import music**.
2. Import audio via the **Import Audio dialog**.
3. Add the [Audio object](../plugin-reference/audio.md) to the project and add events to play back audio.

For more information on audio support in Construct, see the [Import Audio dialog](../interface/dialogs/import-audio.md).

Note that when publishing to the web, you must ensure your server has the [correct MIME types set up](../tips-and-guides/mime-types.md) to ensure audio files can load correctly. If the server sends the wrong MIME types, audio may not play in some browsers.
