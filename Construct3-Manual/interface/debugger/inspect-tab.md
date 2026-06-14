---
title: "The debugger 'Inspect' tab"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/debugger/inspect-tab"
release: 487.3
---

The **Inspect** tab is used to view and edit values in the project, such as an object's position.

The Inspect view is divided in to two sections. On the left appears a list of all the [object types](../../project-primitives/objects/object-types.md) in the project, including the System object. On the right appears a list of tables of values relating to the selected object, similar to the [Properties Bar](../../interface/bars/properties-bar.md).

### The object list

**Click the name of an object type** in the object list to expand it. The number of instances of that object type appears in brackets after the object name. If the object type only has one instance, or is a global object like the System object or Audio object, it will immediately start inspecting the object. Otherwise it expands a dropdown with a list of all the object instances sorted by their *index ID* (IID). Clicking a particular instance will then inspect just that instance.

There are two ways to filter down the object list:

1. Type in to the search box underneath the object list to instantly filter down the list to only show objects matching the entered search term.

> **Tip**  
> You can also enter a number in the search box to inspect the instance with the corresponding Unique ID (UID).

2. Tick *Hide unused* underneath the object list to remove any objects from the list with zero instances. This will still list project-wide plugins like the Keyboard object.

The System object is always shown at the top of the object list, regardless of any filtering options.

### The values view

As with the Properties Bar, the values view shows a categorised list of tables displaying all the information about the currently inspected object. The displayed values depend on what is being inspected; for example the Sprite object displays information about its current animation frame, the Audio object displays information about currently playing sound and music, and the System object displays information about the engine, layout, and layers. Most often these values correspond to object properties from the Properties bar, as well as the object's expressions.

[Instance variables](../../project-primitives/objects/instance-variables.md) and [behavior](../../project-primitives/objects/behaviors.md) values are also shown if the selected object has any.

It is often useful to view these values while running the project. However, they can also be edited. As with the Properties Bar, simply click on a value and type in a new value to change it. Edited values appear in bold. This can be an excellent way to experiment with how your project works. Note that not all values are editable - those with a light grey background are read-only.

The **eye icon** to the right of values can be used to add the value to the [Watch](../../interface/debugger/watch-tab.md) tab  `[Paid plans only]` . This is described in more detail later on.

The **Tools** section gives you the ability to destroy the inspected object. By default the inspected object is also outlined with a dotted rectangle in the project to help identify it. If this is distracting, uncheck the *Highlight* checkbox.

Objects in a [container](../../project-primitives/objects/containers.md) also provide a list of links to inspect the other instances in the container with the currently inspected object. Objects in a hierarchy also provide a list of links to inspect the parent or child instances in the hierarchy relative to the currently inspected object.
