---
title: "IBehaviorInstance interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/ibehaviorinstance"
release: 487
---

## On this page

- [Methods](#methods)

---

The `IBehaviorInstance` interface represents a behavior instance in Construct.

## Methods

**GetProject()**  
Return the [IProject](../../reference/model-interfaces/iproject.md) representing the behavior instance's associated project.

**GetObjectInstance()**  
Returns an [IObjectInstance](../../reference/object-interfaces/iobjectinstance.md) or [IWorldInstance](../../reference/object-interfaces/iworldinstance.md) (depending on the type of object) of the object instance associated with this behavior instance.

**GetPropertyValue(id)**  
Get the value of a behavior property for this behavior instance by its property ID.

**SetPropertyValue(id, value)**  
Set the value of a behavior property for this instance by its property ID.

**GetExternalSdkInstance()**  
Return the custom behavior-specific SDK editor instance class for this behavior instance, which will be a derivative of [IBehaviorInstanceBase](../../reference/base-classes/ibehaviorinstancebase.md). For example if called for a behavior instance of the addon SDK's sample behavior, this would return the `MyCustomBehaviorInstance` class. This method can only be used for installed addons - it will return `null` for any built-in behaviors.

> **Warning**  
> Be careful if taking a dependency on a behavior class provided by another developer. Make sure to only use documented and supported methods. If you use features which are changed or removed by a future addon update, then your addon may crash the editor. Scirra will not provide support for crashes involving third-party addons and we will direct affected users to contact the addon developer.
