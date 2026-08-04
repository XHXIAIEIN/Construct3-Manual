---
title: "ITexture script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/graphics-interfaces/itexture"
release: 495
---

## On this page

- [ITexture APIs](#itexture-apis)

---

The `ITexture` interface represents a texture for use with the [renderer](../../../scripting/scripting-reference/graphics-interfaces/irenderer-interface.md).

This interface cannot be directly constructed. It is only available through other APIs.

## ITexture APIs

**width**  
Return the width or height of the texture. Note this refers to the source texture. Construct's in-editor spritesheeting engine means the texture could be significantly larger than an object's image to be rendered from it.

**height**  
Return the width or height of the texture. Note this refers to the source texture. Construct's in-editor spritesheeting engine means the texture could be significantly larger than an object's image to be rendered from it.

**defaultSampling**  
Return the default sampling mode this texture was created with.
