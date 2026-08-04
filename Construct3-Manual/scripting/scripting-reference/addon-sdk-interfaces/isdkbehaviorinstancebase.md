---
title: "ISDKBehaviorInstanceBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkbehaviorinstancebase"
release: 495
---

## On this page

- [ISDKBehaviorInstanceBase APIs](#isdkbehaviorinstancebase-apis)

---

The `ISDKBehaviorInstanceBase` interface is used as a runtime base class for behavior instances in the addon SDK. It derives from [IBehaviorInstance](../../../scripting/scripting-reference/object-interfaces/ibehaviorinstance.md).

## ISDKBehaviorInstanceBase APIs

**_postCreate()**  
Optional override called after the associated object instance has finished being created. This can be useful since the behavior instance constructor is called during instance creation, so the final state is not ready yet.

**_release()**  
Optional override for when the corresponding instance is released. Clean up any other resources that need releasing in this method. It must also call `super._release()` to release all engine resources.

**_getInitProperties()**  
Call this in the constructor to get an array of the behavior instance's properties.

**_trigger(method)**  
Fire a trigger condition. The condition must be declared as a trigger in aces.json. Pass a full reference to the condition method, e.g. `this._trigger(C3.Behaviors.MyBehavior.Cnds.MyTrigger)`. The async variant returns a Promise that resolves when the trigger has finished executing, which can be used to support Construct's debugger, as it may wait if it hits a breakpoint inside the trigger.

**_triggerAsync(method)**  
Fire a trigger condition. The condition must be declared as a trigger in aces.json. Pass a full reference to the condition method, e.g. `this._trigger(C3.Behaviors.MyBehavior.Cnds.MyTrigger)`. The async variant returns a Promise that resolves when the trigger has finished executing, which can be used to support Construct's debugger, as it may wait if it hits a breakpoint inside the trigger.

**_setTicking(isTicking)**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_setTicking2(isTicking)**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_setPostTicking(isTicking)**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_isTicking()**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_isTicking2()**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_isPostTicking()**  
Utility methods to start or stop the runtime calling the `_tick()`. `_tick2()` or `_postTick()` methods of your behavior instance every tick, and also to check whether ticking is active. It is recommended to stop ticking whenever the tick method is no longer needed to reduce the performance overhead of ticking. Redundant calls to start or stop ticking are ignored. The first call always takes effect (i.e. calls do not stack - if you make 3 calls to start ticking then 1 call to stop ticking, ticking is stopped).

**_tick()**  
Optional override that is called every tick just **before** events are run after `_setTicking(true)` has been called.

**_tick2()**  
Optional override that is called every tick just **after** events are run after `_setTicking2(true)` has been called.

**_postTick()**  
Optional override that is called every tick just after all other behaviors have had their `_tick()` methods called. This allows behaviors to observe the state applied by other behavior's ticking. Note you should use `_tick()` rather than `_postTick()` where possible, since it is not possible to reliably observe the state applied by other behavior's post-ticking.

**_getDebuggerProperties()**  
Override to return properties to display in the debugger. For more information see [runtime scripts](../../../../Construct3-Addon-SDK/guide/runtime-scripts.md).

**_saveToJson()**  
Optional override to return a JSON object that represents the state of the behavior instance for savegames.

**_loadFromJson(o)**  
Optional override accepting a JSON object returned by a prior call to `_saveToJson()` that represents the state of a behavior instance to load, for savegames.
