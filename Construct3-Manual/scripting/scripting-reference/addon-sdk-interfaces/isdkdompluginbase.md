---
title: "ISDKDOMPluginBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkdompluginbase"
release: 495
---

## On this page

- [ISDKDOMPluginBase APIs](#isdkdompluginbase-apis)

---

The `ISDKDOMPluginBase` interface is used in the runtime as a base class for DOM plugins (that create a HTML element) in the addon SDK. It derives from [ISDKPluginBase](../../../scripting/scripting-reference/addon-sdk-interfaces/isdkpluginbase.md).

## ISDKDOMPluginBase APIs

**_addElementMessageHandler(handler, func)**  
Add a message handler to receive messages posted by `PostToRuntimeElement()` in [DOMElementHandler](../../../../Construct3-Addon-SDK/runtime-reference/base-classes/domelementhandler.md). `handler` must match the string passed to `PostToRuntimeElement()`. `func` accepts two arguments: the associated instance, and an optional object with extra details passed to `PostToRuntimeElement()`. Typically this function just forwards the handler to an instance method, e.g. `this._addElementMessageHandler("click", (inst, e) => inst._onClick(e));`. The `_addElementMessageHandlers` variant accepts an array of `[handler, callback]` which is convenient when adding multiple handlers.

**_addElementMessageHandlers(arr)**  
Add a message handler to receive messages posted by `PostToRuntimeElement()` in [DOMElementHandler](../../../../Construct3-Addon-SDK/runtime-reference/base-classes/domelementhandler.md). `handler` must match the string passed to `PostToRuntimeElement()`. `func` accepts two arguments: the associated instance, and an optional object with extra details passed to `PostToRuntimeElement()`. Typically this function just forwards the handler to an instance method, e.g. `this._addElementMessageHandler("click", (inst, e) => inst._onClick(e));`. The `_addElementMessageHandlers` variant accepts an array of `[handler, callback]` which is convenient when adding multiple handlers.
