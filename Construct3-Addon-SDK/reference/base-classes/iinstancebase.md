---
title: "IInstanceBase interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/base-classes/iinstancebase"
release: 495
---

## On this page

- [Properties](#properties)
- [Methods](#methods)

---

The `IInstanceBase` interface is used as the base class for instances in the SDK. For "world" type plugins, instances instead derive from [IWorldInstanceBase](../../reference/base-classes/iworldinstancebase.md), which itself derives from `IInstanceBase`.

`IInstanceBase` cannot be directly constructed; it should only be used as a base class.

## Properties

**this._sdkType**  
Reference to the associated SDK type class.

**this._inst**  
Reference to the [IObjectInstance](../../reference/object-interfaces/iobjectinstance.md) interface, or [IWorldInstance](../../reference/object-interfaces/iworldinstance.md) interface for "world" type plugins, representing this instance in the editor. This allows access to Construct's built-in features for instances.

## Methods

**Release()**  
Optional override for when an instance is released.

**OnCreate()**  
Optional override for when an instance is created in the editor.

**OnPropertyChanged(id, value)**  
Optional override for when a property with the given ID is changed. The value the property was changed to is also passed.

**LoadC2Property(name, valueString)**  
Optional override to use custom logic for importing properties from a Construct 2 project referencing a Construct 2 version of this plugin.

**GetProject()**  
Return the [IProject](../../reference/model-interfaces/iproject.md) representing the instance's associated project.

**GetObjectType()**  
Convenience method to return the [IObjectType](../../reference/object-interfaces/iobjecttype.md) interface representing Construct's object type class.

**GetInstance()**  
Return the [IObjectInstance](../../reference/object-interfaces/iobjectinstance.md) corresponding to this instance.
