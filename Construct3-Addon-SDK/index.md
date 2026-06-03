---
title: "C3 Addon SDK documentation"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk"
release: 487.2
---

## On this page

- [Download](#download)
- [TypeScript support](#custom-importer-api-sample-data)
- [Learning web technologies](#typescript-support)

---

Welcome to the Construct 3 Addon SDK documentation. The Addon SDK allows third-party developers to create new addons for Construct 3 using JavaScript or TypeScript. This includes:

- **Plugins:** new kinds of object that appear in the *Create new object* dialog, with their own actions, conditions and expressions. Plugins are ideal for integrating third-party services. There are also two ways plugins can provide enhanced platform integration, accessing features not normally available in browsers:

  - Plugins can specify a **Cordova plugin** dependency for enhanced integration on mobile. See [Specifying dependencies](reference/specifying-dependencies.md) for more details.
  - Plugins can bundle a **wrapper extension** for enhanced integration on desktop. See the [guide on wrapper extensions](guide/wrapper-extensions.md) for more details.
- **Behaviors:** new kinds of behaviors that appear in the *Add behavior* dialog, with their own behavior actions, conditions and expressions that get added to the object the behavior is added to. This can be used for creating new rapid prototyping features, or advanced gameplay logic that integrates with event sheets.
- **Effects:** new kinds of visual effects that appear in the *Add effect* dialog. These are custom fragment shaders written in GLSL for WebGL and WGSL for WebGPU.
- **Themes:** allow custom appearances for the Construct 3 editor, using additional CSS stylesheets to change the default editor appearance.

## Download

The Addon SDK files are hosted on the [Construct Addon SDK GitHub repository](https://github.com/Scirra/Construct-Addon-SDK). Follow the link, click the green *Code* button, and select *Download ZIP* to download a copy of the files.

There are sample files for example custom plugins, behaviors, effects and themes. The files for an addon can be zipped and renamed [.c3addon](guide/c3addon-file.md) to directly test it in the Construct 3 editor, via the Addon Manager.

While developing addons, be sure to [use Developer Mode](guide/using-developer-mode.md) with a local HTTP server. It makes it much quicker to test since you don't need to keep creating .c3addon files, and much easier to fix problems, which otherwise can prevent Construct 3 from starting up.

### Custom importer API sample data

The plugin SDK includes a sample plugin using the Custom Importer API. The included file *customImporterSampleData.zip* can be drag-and-dropped in to Construct 3 to demonstrate reading a custom format.

## TypeScript support

The addon SDK has optional support for [TypeScript](https://www.typescriptlang.org/), allowing for static typing, better autocomplete, and a range of other benefits for addon development. To learn more see the section on [TypeScript support](guide/typescript-support.md).

## Learning web technologies

The Addon SDK documentation assumes you have a basic knowledge of JavaScript. A basic knowledge of HTML and CSS may also be useful. This documentation does not attempt to teach you these technologies. If you're just starting out, we recommend the [MDN web docs](https://developer.mozilla.org/) as a good place to start. It provides thorough documentation on all aspects of the web platform, and also includes guides for learning web development.
