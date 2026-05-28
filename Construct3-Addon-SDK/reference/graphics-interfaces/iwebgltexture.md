---
title: "IWebGLTexture interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/graphics-interfaces/iwebgltexture"
release: 487
---

## On this page

- [Methods](#methods)

---

The `IWebGLTexture` interface represents a texture in the WebGL renderer.

This interface cannot be directly constructed. It is only available through other APIs.

## Methods

**GetWidth()**  
Return the width or height of the texture. Note this refers to the source texture. Construct's in-editor spritesheeting engine means the texture could be significantly larger than an object's image to be rendered from it.

**GetHeight()**  
Return the width or height of the texture. Note this refers to the source texture. Construct's in-editor spritesheeting engine means the texture could be significantly larger than an object's image to be rendered from it.

**GetDefaultSampling()**  
Return the default sampling mode this texture was created with.
