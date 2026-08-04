---
title: "ILoopingConditionContext addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/iloopingconditioncontext"
release: 495
---

## On this page

- [ILoopingConditionContext APIs](#iloopingconditioncontext-apis)

---

The `ILoopingConditionContext` interface is used to implement looping conditions. It is created by the [ISDKUtils](../../../scripting/scripting-reference/addon-sdk-interfaces/isdkutils.md) method `createLoopingConditionContext()`.

## ILoopingConditionContext APIs

**retrigger()**  
Execute all subsequent conditions, actions and sub-events within this call. This essentially runs a single iteration of the looping condition.

**isStopped**  
A read-only boolean that is set to true when the loop is stopped using the system *Stop loop* action.

**release()**  
This must be called after the looping condition finishes in order to clean up resources and reset state that was applied during the looping condition.
