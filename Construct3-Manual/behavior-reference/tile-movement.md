---
title: "Tile movement"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/tile-movement"
release: 495
---

## On this page

- [Tile movement properties](#scripting)
- [Tile movement conditions](#tile-movement-properties)
- [Tile movement actions](#tile-movement-conditions)
- [Tile movement expressions](#tile-movement-actions)

---

The **Tile movement behavior** allows an object to be moved up, down, left and right, moving a fixed distance at a time, controlled by the arrow keys by default. This is useful for [tilemap](../plugin-reference/tilemap.md)-based games, where the level is designed around a grid: by using the same grid size with the Tile movement, the controlled object will always be aligned with a grid cell.

The Tile movement aligns the object's origin with the grid. To ensure the object appears in the correct alignment with a visible grid, ensure the object size is the size of the cell, and place the origin in the top-left corner. Often it's easiest to make this object invisible, and place the player sprite on top so that it can keep its own size and origin, as is done in [this example of the Tile movement behavior](https://editor.construct.net/#open=template-tile-based-game).

The Tile movement behavior is blocked by any objects with the [Solid behavior](../behavior-reference/solid.md).

To set up custom or automatic controls, see the [behavior reference summary](../behavior-reference.md).

### Scripting

When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [ITileMovementBehaviourInstance script interface](../scripting/scripting-reference/behavior-interfaces/tile-movement.md).

## Tile movement properties

**Grid width**  
The size of the movement grid cells, in pixels. The object moves in increments of this size. Normally this matches the size of a corresponding tilemap.

**Grid height**  
The size of the movement grid cells, in pixels. The object moves in increments of this size. Normally this matches the size of a corresponding tilemap.

**Grid offset X**  
The offset of the movement grid, in pixels. This can be used to align with a tilemap that is not aligned with (0, 0) in the layout.

**Grid offset Y**  
The offset of the movement grid, in pixels. This can be used to align with a tilemap that is not aligned with (0, 0) in the layout.

**Speed X**  
The speed of the movement on each axis, in pixels per second.

**Speed Y**  
The speed of the movement on each axis, in pixels per second.

**Enabled**  
Whether the behavior is initially enabled or disabled. If disabled, it can be enabled at runtime using the *Set enabled* action.

**Default controls**  
If enabled, movement is controlled by the arrow keys on the keyboard. Disable to set up custom controls using the *Simulate control* action. For more information see the [behavior reference summary](../behavior-reference.md).

**Isometric**  
Check to enable an isometric grid movement, along diagonals. In this mode the "up" direction is towards the top-right. The default is unchecked, using a cartesian grid with horizontal and vertical movement.

## Tile movement conditions

**Can move to**  
Test if the object can move into a grid cell, given by its grid column and row. This is true if the cell is clear of any obstacles.

**Can move in direction**  
Test if the object can move N cells in a given direction. Unlike the **Can move to** condition this checks for obstacles between the object and the destination.

**Is enabled**  
Test if the behavior is currently enabled.

**Is moving**  
Test if the behavior is currently moving in to a cell.

**Is moving in direction**  
Test if the behavior is currently moving left, right, down or up. This is useful for setting the corresponding animation.

## Tile movement actions

**Set default controls**  
Enable or disable the *Default controls* property (see above for more details).

**Set enabled**  
Enable or disable the movement. If disabled, the movement no longer has any effect on the object.

**Set grid dimensions**  
Specify new values for the *Grid width*, *Grid height*, *Grid offset X* and *Grid offset Y* properties.

**Set grid position**  
Set the object to a cell in the grid, given by its grid column and row. The *Movement* option allows the object to either be set to that position instantly, or animate over for a smooth movement over time.

**Set ignoring input**  
Set whether input is being ignored. If input is ignored, pressing any of the control keys has no effect. However, unlike disabling the behavior, the object can continue to move.

**Set speed**  
Specify new values for the *Speed X* and *Speed Y* properties.

**Simulate control**  
Simulate one of the movement controls being held down. Useful when *Default controls* is disabled. See the [behavior reference summary](../behavior-reference.md) for more information.

## Tile movement expressions

**GridTargetX**  
Return the grid cell the object is currently moving towards, by its column and row.

**GridTargetY**  
Return the grid cell the object is currently moving towards, by its column and row.

**GridX**  
Return the current grid cell the object is in by its column and row.

**GridY**  
Return the current grid cell the object is in by its column and row.

**SpeedX**  
Return the current speed of the object on each axis, in pixels per second.

**SpeedY**  
Return the current speed of the object on each axis, in pixels per second.

**TargetX**  
Return the layout co-ordinates of the grid cell the object is currently moving towards, by its column and row.

**TargetY**  
Return the layout co-ordinates of the grid cell the object is currently moving towards, by its column and row.
