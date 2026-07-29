---
title: "Optimizing download size"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/download-size"
release: 495
---

## On this page

- [Check your download size](#check-your-download-size)
- [Images](#images)
- [Audio](#use-lossy-formats)
- [Video](#use-modern-formats)
- [Other project files](#other-export-settings)
- [Other tips](#use-fewer-and-lower-resolution-images)

---

Construct's engine has a very low overhead - an empty and fully-optimized exported project is around 300 KB compressed. Most of the download size of your project will come from the content of your project. While many people have fast Internet connections, download size can still be an important consideration: some people in certain places or circumstances still have slower connections; some platforms have file size limits; and the faster people can start running your project, the more happy customers you'll have. This guide includes some advice about reducing your project's download size.

## Check your download size

A quick way to check your project's download size is to export it, extract the zip to an empty folder, and then check the size of the files in the folder (for example in Windows, select all, right-click and choose *Properties*). Then you can also browse through the files looking for any particularly large files or folders to help identify what you need to focus on to best reduce the download size.

## Images

Often much of a project's download size come from its images. A key point to be aware of is the difference between **lossless** and **lossy** image formats. *Lossless* means the image quality is preserved exactly, with pixel-perfect reproduction of the original image. This has the best quality but such images can only be compressed so far, particularly if they have complex content. *Lossy* images do not preserve the image quality exactly, but consequently can reduce the file size much further than lossless images. There is also a quality option for lossy images, allowing you to choose the trade-off between file size and quality.

### Use lossy formats

The easiest way to reduce the download size of your project's images is to switch them to use a lossy format. By default Construct uses lossless compression to avoid affecting your artwork. Choosing a lossy format allows for further compression, although it does affect the display quality. Usually large, photographic-style images, or background images where quality differences may not be noticed, are best suited to lossy formats.

To set an image to use a lossy format, use the **Set export image format** button in the image editor toolbar.

[![image format button v550](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/120479/image-format-button_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/120479/image-format-button.png)

You can apply the changes to individual images, the entire animation, the entire object, or even the entire project. Switching an entire project to use lossy images is a surprisingly effective approach, particularly with the AVIF image format. See the blog post [Reducing download sizes with lossy spritesheets](https://www.construct.net/en/blogs/construct-official-blog-1/reducing-download-sizes-lossy-1884) for more analysis. A good technique may be to set an entire project to use lossy images with a relatively low quality, and then after exporting look at your project and identify if you can see any places the quality isn't sufficient. Then for those specific objects you can either increase the quality, or switch it back to lossless compression. This should leave your project using the most efficient compression possible for images, while achieving a sufficient visual quality.

### Use modern formats

When you export your project, the smallest download size can be achieved by choosing WebP and AVIF for the export image formats. PNG and JPEG are both quite dated and produce larger file sizes for the same quality. AVIF is particularly effective for lossy images.

### Other export settings

When you export your project, be sure to also enable *Deduplicate images* (which removes redundant identical images), and *Optimize images* (which will use more processing time to compress images, so export is slower but the resulting files are smaller). Both will help you have the smallest download size possible for your images.

### Use fewer and lower resolution images

The smallest image file is one that is not exported at all - if you can, remove any redundant images, and reduce the number of frames in animations. Smaller images also compress better, so try resizing images smaller in the image editor. In particular, avoid having highly detailed images at a higher resolution than necessary.

## Audio

Sound effects are usually relatively brief in duration and so don't produce large files. However music tracks and longer sound effects may end up using a lot of data.

The best way to reduce the download size of audio is to choose the lowest acceptable bitrate when importing audio to Construct. The import dialog has a dropdown to select the bitrate in the corner; lower bitrates produce smaller files, but will have poorer quality. Note that Construct encodes audio to WebM Opus, but if you import a WebM Opus file directly, it uses the file as-is. So the best way to control the bitrate is to import uncompressed audio (such as PCM WAV).

You can also save your project as a folder, and use external audio tools to try compressing audio different ways - but note it must be in WebM Opus format. Another trick is reducing stereo or multi-channel audio to mono (single-channel). Lastly, using fewer audio files, and shorter sound effects and music tracks, will mean less data too.

## Video

Video files can be particularly large to download. Construct doesn't include its own video encoder like it does with audio. Try to use shorter video clips at lower resolution and with a lower framerate. You can also use external video tools to try to better compress video files, with a trade-off between bitrate and quality, much like with audio. Also prefer to use modern codecs where possible - for example AV1 is now pretty widely supported, and will be able to achieve a smaller download size at the same quality as an older codec like VP8.

## Other project files

You can import any files you like to Construct in the Project Bar. It's worth checking in case you imported any particularly large files of other kinds! These won't necessarily need to be downloaded up-front if your project only loads them later on, but it's worth remembering them too.

## Other tips

Here is some other advice relating to reducing the download size or wait time for your project.

### Minify script on export

When exporting your project, choosing the *Advanced* script minify option will produce the smallest possible JavaScript files. For large projects this will make a smaller difference than optimizing images, audio and video, but it will help achieve the smallest download size possible.

If you write JavaScript code in your project, note you may need to make changes to use *Advanced* minify mode - see the [manual section on advanced minification](../scripting/guides/advanced-minification.md). Alternatively *Simple* mode should always be safe, but won't reduce the JavaScript file size as much.

### Use a loader layout on the web

For web exports, consider using a loader layout. This is a special layout that can start running while the rest of the project is still downloading. Construct only needs to download the content shown on the loader layout before it can start it. This means the user can see something interactive much more quickly, even if the overall download size is the same. See the tutorial [How to use loader layouts to make custom loading screens](https://www.construct.net/en/tutorials/loader-layouts-custom-loading-9).

Note if you aren't publishing to the web and are using an "offline" export option like a desktop export, then there's no need to use a loader layout - the entire project is already downloaded by the time it starts running.

### Avoid bundling browser engines

Where possible, avoid using export options that bundle the browser engine with your project. With Construct's modern export options, this generally only means Windows WebView2 in "fixed" distribution mode (but the default uses the system webview so doesn't bundle a browser engine), or the Linux CEF export option. Bundling an entire browser engine with your project can add 100-200 MB to the download size, even compressed. On Linux the browser engine has to be bundled as there is no consistent system webview support, but consider a web export as an alternative.
