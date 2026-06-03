---
title: "MIME types"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/mime-types"
release: 487.2
---

## On this page

- [MIME types for Construct projects](#mime-types-for-construct-projects)
- [Offline caching](#offline-caching)
- [More information](#more-information)

---

When publishing to the web, it is important the server sends certain types of file with the correct [MIME type](https://en.wikipedia.org/wiki/Media_type). For example, most servers are correctly set up to send a **.html** file with the MIME type **text/html**. However some server's defaults don't include every MIME type your project might need to use. Also some servers may be configured to send the wrong MIME type, which may still cause some features to work incorrectly. The list below should be used as a reference of the correct MIME types to have set.

Configuring your server's MIME types depends on your host. If you don't know how to do this, contact your host for support, or ask them to set up the list below for you.

Having the wrong MIME type set can result in problems like the browser refusing to load the file; the file returning "404 Not Found"; or causing the server to send a corrupt file (e.g. incorrectly sending an audio file as a text file). This can result in issues like audio playback not working, AJAX requests failing, or the project failing to start up.

## MIME types for Construct projects

A server hosting an exported Construct project should have these file extensions associated with these MIME types.

| File ext. | MIME type | Notes |
| --- | --- | --- |
| .html | text/html | **Required** |
| .js | application/javascript | **Required** |
| .json | application/json | **Required** |
| .css | text/css | **Required** |
| .wasm | application/wasm | **Required** |
| .png | image/png | **Required** |
| .jpg, .jpeg | image/jpeg | **Required** |
| .webp | image/webp | **Required** |
| .avif | image/avif | Optional, if AVIF images used |
| .webm | video/webm | **Required** (also covers WebM audio) |
| .m4a | audio/mp4 | Optional, if AAC audio used |
| .mp3 | audio/mpeg | Optional, if MP3 audio used |
| .ogg | audio/ogg | Optional, if Ogg Vorbis audio used (common in Construct 2 projects) |
| .mp4 | video/mp4 | Optional, if MP4 video used |
| .woff | application/font-woff | Optional, if web fonts used |
| .woff2 | font/woff2 | Optional, if web fonts used |
| .txt | text/plain | Optional, for data files |
| .csv | text/csv | Optional, for data files |
| .xml | text/xml | Optional, for data files |
| .svg | image/svg+xml | Optional |
| .scml | text/xml | Optional, for Spriter animations |
| .scon | application/json | Optional, for Spriter animations |
| .c3p | application/zip | Optional, for Construct project files |

## Offline caching

If you find there is a problem with your MIME types after exporting and then fix them, the problem may not appear to be immediately corrected if the browser has cached the previous server responses for offline support.

The easiest way to verify the problem is fixed after correcting a server's MIME types is to change the URL of the project, e.g. renaming the folder it was in on the server. This prevents the previous offline cache being used to load the game and it will start fresh with the new MIME type configuration taking effect.

## More information

For more reading, see the Mozilla Developer Network (MDN) article on [Configuring server MIME types](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types).
