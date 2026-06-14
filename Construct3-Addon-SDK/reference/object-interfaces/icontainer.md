---
title: "IContainer interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/icontainer"
release: 487.3
---

## On this page

- [Methods](#methods)

---

The `IContainer` interface represents a container in Construct, which is a group of object types that are always created, destroyed and picked together.

## Methods

**GetMembers()**  
Return an array of [IObjectType](../../reference/object-interfaces/iobjecttype.md) representing the object types in the container. Containers always have at least two members.

**SetSelectMode(m)**  
Set or get the select mode of the container, corresponding to the *Select mode* property in Construct. Allowed modes are `"normal"`, `"all"` and `"wrap"`.

**GetSelectMode()**  
Set or get the select mode of the container, corresponding to the *Select mode* property in Construct. Allowed modes are `"normal"`, `"all"` and `"wrap"`.

**RemoveObjectType(objectType)**  
Remove a member [IObjectType](../../reference/object-interfaces/iobjecttype.md) from this container.

> **Tip**  
> A container must have at least two object types. If the second-last member is removed, the container becomes inactive and is effectively deleted. The last remaining member will also act as if it's no longer in a container.

**IsActive()**  
Return a boolean indicating if the container is active. It becomes inactive if there are fewer than the minimum required two members, at which point it is effectively deleted.
