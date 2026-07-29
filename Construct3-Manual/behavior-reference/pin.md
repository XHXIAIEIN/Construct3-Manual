---
title: "Pin behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/pin"
release: 495
---

## On this page

- [Pin properties](#pin-properties)
- [Pin conditions](#pin-conditions)
- [Pin actions](#pin-actions)
- [Pin expressions](#pin-expressions)

---

The **Pin behavior** positions an object at a relative distance and angle to another object, giving the impression it has been "pinned" to the object. It can also pin other properties like the size. For examples, search for *Pin* in the [Start Page](../overview/start-page.md).

Simply adding the Pin behavior to an object does not do anything. You must use the *Pin* action to pin the object to another object.

> **Tip**  
> The hierarchies feature is a modern built-in replacement for the Pin behavior. Consider using the [Add child](../plugin-reference/common-features/common-actions.md) action to connect objects together instead. This has better support for connecting chains of objects together, provides conditions that can pick instances across the hierarchy, and also allows hierarchies to be set up in the Layout View. See also [Superseded features](../tips-and-guides/superseded-features.md).

## Pin properties

**Destroy with pinned object**  
Enable to automatically destroy this object if the object it is currently pinned to is destroyed.

## Pin conditions

**Is pinned**  
True if the object is currently pinned to another object.

**Will destroy with pinned object**  
True if the *Destroy with pinned object* option is enabled.

## Pin actions

**Pin at distance**  
Pin the object to another object, restricting the distance between the objects. The two possible modes are:

- **Rope style (maximum distance)**: the object is kept at a maximum distance from the other object, but is allowed to move closer.
- **Bar style (fixed distance)**: the object is kept at a fixed distance from the other object, and will be moved away if the object object gets closer.

Note the distance between the objects at the time this action runs is used as the distance limit between the objects. The distance limit can be changed with the *Set pin distance* action.

**Pin to object**  
Pin one or more properties of the object to another object. The relative difference between the objects at the moment the *Pin* action is used is remembered. A series of checkboxes allows selection of which properties are to be kept pinned. For example ticking only the *X* and *Y* options will keep the object at the same relative position, but not change its angle. The *Width* and *Height* options have two possible modes if enabled: *Absolute*, which will apply the same size change value (e.g. if the pinned object gets 10 pixels wider, this object will also get 10 pixels wider); and *Scale*, which will apply the same relative size change (e.g. if the pinned object gets 50% wider, this object will also get 50% wider, relative to its starting size).

*Pin to image point* works the same as *Pin to object*, except instead of enabling the *X* and *Y* properties, it specifies an image point on the pinned object (by its name or number). The object will be positioned exactly at that image point while pinned, rather than keeping a relative difference.

**Pin to image point**  
Pin one or more properties of the object to another object. The relative difference between the objects at the moment the *Pin* action is used is remembered. A series of checkboxes allows selection of which properties are to be kept pinned. For example ticking only the *X* and *Y* options will keep the object at the same relative position, but not change its angle. The *Width* and *Height* options have two possible modes if enabled: *Absolute*, which will apply the same size change value (e.g. if the pinned object gets 10 pixels wider, this object will also get 10 pixels wider); and *Scale*, which will apply the same relative size change (e.g. if the pinned object gets 50% wider, this object will also get 50% wider, relative to its starting size).

*Pin to image point* works the same as *Pin to object*, except instead of enabling the *X* and *Y* properties, it specifies an image point on the pinned object (by its name or number). The object will be positioned exactly at that image point while pinned, rather than keeping a relative difference.

**Set destroy with pinned object**  
Set the current state of the *Destroy with pinned object* property.

**Set pin distance**  
When using *Pin at distance*, set the distance limit in pixels that is used.

**Unpin**  
Unpin the object, so it is no longer being positioned by the Pin behavior.

## Pin expressions

**PinnedUID**  
Get the UID of the object currently pinned to, or -1 if not pinned. For more information on UIDs, see [instances](../project-primitives/objects/instances.md).
