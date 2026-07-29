---
title: "Addon SDK script interfaces"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces"
release: 495
---

## On this page

- [Coding conventions](#coding-conventions)

---

The script interfaces in this section of the scripting reference are intended for use with Construct's Addon SDK, which allows developers to create custom plugins and behaviors. These features are not normally used when writing code in Construct projects, so this section of the documentation ought to be disregarded by anyone not using the Addon SDK.

You can learn more about the Addon SDK in the [Addon SDK documentation](../../../Construct3-Addon-SDK/index.md).

## Coding conventions

As JavaScript has limited support for encapsulation, some methods which are only intended for use by the Construct runtime can still be accessed from Construct's scripting feature. With JavaScript, properties and methods are public by default, or can use [private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) with the `#` prefix which can only be used by the same class. Construct needs a middle-ground status where outside callers should not use a property or method, but it must be  accessible to Construct's runtime. JavaScript currently has no such language feature, and so such properties and methods have to be public. Instead Construct uses a special naming scheme: properties or methods that begin with an underscore `_` should be considered "protected", i.e. they are only for use by the Construct runtime and not should be used by any other caller. Do not use any such properties or methods other than for the purposes for which they are documented.

> **Warning**  
> Do not ignore this naming convention. If you use properties or methods beginning with an underscore in a way that is not supported, you may cause your project to become unstable, or it may break in future, and if this happens Scirra will not provide any support.
