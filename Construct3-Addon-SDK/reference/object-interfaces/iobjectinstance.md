---
title: "IObjectInstance interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/iobjectinstance"
release: 487.2
---

## On this page

- [Methods](#methods)

---

The `IObjectInstance` interface represents an instance in Construct.

## Methods

**GetProject()**  
Return the [IProject](../../reference/model-interfaces/iproject.md) representing the instance's associated project.

**GetObjectType()**  
Return the associated [IObjectType](../../reference/object-interfaces/iobjecttype.md) interface for this instance.

**GetUID()**  
Return the UID (unique ID) the editor has assigned to this instance.

**GetPropertyValue(id)**  
Get the value of a plugin property for this instance by its property ID. Color properties return a [SDK.Color](../../reference/geometry-interfaces/color.md).

**SetPropertyValue(id, value)**  
Set the value of a plugin property for this instance by its property ID. For color properties a [SDK.Color](../../reference/geometry-interfaces/color.md) must be passed as the value.

**GetExternalSdkInstance()**  
Return the custom plugin-specific SDK editor instance class for this object instance, which will be a derivative of [IInstanceBase](../../reference/base-classes/iinstancebase.md). For example if called for an instance of the addon SDK's *drawingPlugin* sample, this would return the `MyDrawingInstance` class. This method can only be used for installed addons - it will return `null` for any built-in plugins.

> **Warning**  
> Be careful if taking a dependency on a class provided by another developer. Make sure to only use documented and supported methods. If you use features which are changed or removed by a future addon update, then your addon may crash the editor. Scirra will not provide support for crashes involving third-party addons and we will direct affected users to contact the addon developer.
