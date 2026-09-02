---
title: "Keyboard shortcuts"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/keyboard-shortcuts"
release: 495.2
---

## On this page

- [General](#general)
- [Layout view](#layout-view)
- [Event Sheet View](#event-sheet-view)
- [Animations Editor](#animations-editor)
- [Timeline Bar](#timeline-bar)
- [Tilemap bar](#tilemap-bar)
- [Tilemap brush editor](#tilemap-brush-editor)
- [Ease editor](#ease-editor)
- [Flowchart View](#flowchart-view)

---

The following keyboard shortcuts are available in Construct 3.

Note that on macOS the **Command key** <kbd>⌘</kbd> is used instead of **Control** for most keyboard shortcuts. However since it is the only exception, for brevity the keyboard shortcuts below refer to <kbd>Ctrl</kbd>.

## General

<kbd>Ctrl</kbd> + <kbd>X</kbd> Cut

<kbd>Ctrl</kbd> + <kbd>C</kbd> Copy

<kbd>Ctrl</kbd> + <kbd>V</kbd> Paste

<kbd>Ctrl</kbd> + **Drag with mouse left button** Duplicate

<kbd>Ctrl</kbd> + <kbd>Z</kbd> Undo

<kbd>Ctrl</kbd> + <kbd>Y</kbd> Redo

<kbd>Ctrl</kbd> + <kbd>A</kbd> Select all

<kbd>Ctrl</kbd> + <kbd>D</kbd> Unselect all

<kbd>Ctrl</kbd> + <kbd>F</kbd> Find by text

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> Focus the Project Bar search field

<kbd>Alt</kbd> + <kbd>N</kbd> New project

<kbd>Ctrl</kbd> + <kbd>O</kbd> Open project from local file

<kbd>Ctrl</kbd> + <kbd>S</kbd> Save project

<kbd>Alt</kbd> + <kbd>W</kbd> Close current editor tab

<kbd>F4</kbd> Preview project from first layout

<kbd>F5</kbd> Preview current layout

<kbd>Shift</kbd> + <kbd>F4</kbd> [Debug](../interface/debugger.md) from first layout

<kbd>Shift</kbd> + <kbd>F5</kbd> [Debug](../interface/debugger.md) current layout

<kbd>Alt</kbd> + **Preview** button to start an additional preview

<kbd>Alt</kbd> + <kbd>4</kbd> Start additional preview from first layout

<kbd>Alt</kbd> + <kbd>5</kbd> Start additional preview from current layout

<kbd>F6</kbd> Export project

<kbd>F9</kbd> Reload all script files from disk (only available when saved as project folder)

<kbd>Delete</kbd> Delete selected item(s)

<kbd>F2</kbd> Rename selected item

<kbd>Enter</kbd> Edit selected item

<kbd>Ctrl</kbd> + **click** Add or remove clicked item from selection

<kbd>Shift</kbd> + **click** Select everything in between the last selected item and the clicked item

<kbd>Escape</kbd> Cancel drag or placement or event search

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡑</kbd> Move to top

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡓</kbd> Move to bottom

<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>🡐</kbd> / <kbd>B</kbd> Back

<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>🡒</kbd> / <kbd>N</kbd> Next

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡐</kbd> Go to next tab to right

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡒</kbd> Go to next tab to left

<kbd>Shift</kbd> + <kbd>S</kbd> Go to associated view (switches between Layout View and Event Sheet View)

## Layout view

See also: [Layout View](../interface/layout-view.md)

<kbd>Ctrl</kbd> + **Mouse Wheel Up** or <kbd>Ctrl</kbd> + <kbd>+</kbd> Zoom in

<kbd>Ctrl</kbd> + **Mouse Wheel Down** or <kbd>Ctrl</kbd> + <kbd>-</kbd> Zoom out

Hold <kbd>Shift</kbd> to increase the zoom rate.

<kbd>Ctrl</kbd> + <kbd>0</kbd> Return to 100% zoom

**Middle mouse button drag** or **Hold space and move mouse** Pan the view

<kbd>Ctrl</kbd> + <kbd>E</kbd> or <kbd>Shift</kbd> + <kbd>S</kbd> Go to associated event sheet

**Arrow keys** Nudge selected objects 1 pixel. **Hold** <kbd>Shift</kbd> to nudge 10 pixels.

> **Tip**  
> When grid snapping is enabled, nudging moves a whole grid cell at a time. Hold <kbd>Alt</kbd> to disable this and nudge 1 pixel again.

**Hold** <kbd>Shift</kbd> while resizing objects for proportional resize

**Hold** <kbd>Shift</kbd> while rotating objects to lock to 5 degree increments

**Hold** <kbd>Shift</kbd> while dragging objects for axis-lock (move along diagonals only)  

**Hold** <kbd>Tab</kbd> and **click a selected object** to select the next object underneath in the Z order

**Hold** <kbd>Alt</kbd> while moving selection to disable resize handles, rotation and grid snapping while held.

**Hold** <kbd>Alt</kbd> when selecting an instance to bypass any container selection.

**Hold** <kbd>Control</kbd> while resizing selection to resize relative to the object origin

**Hold** <kbd>Tab</kbd> while right clicking to show the context menu on the current selection rather than the top instance

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡑</kbd> Send to front of layer

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>🡓</kbd> Send to back of layer

<kbd>C</kbd> Center horizontally in viewport

<kbd>T</kbd> Align to top of viewport

<kbd>Enter</kbd> Wrap selection (to rotate or stretch the selection as a whole)

<kbd>W</kbd> Select container and wrap. For example, select one object in a container of eight objects, press W, then all eight objects are selected and wrapped.

To paste objects in-place (so they paste at their original positions, instead of relative to the mouse), **hold** <kbd>Shift</kbd> **while placing a paste**. The full process is: <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy an object; press <kbd>Ctrl</kbd> + <kbd>V</kbd> to turn the mouse to a crosshair, hold <kbd>Shift</kbd> and click, all objects paste at their original positions (instead of by the mouse) and the mouse returns to a normal cursor.

<kbd>Ctrl</kbd> + <kbd>R</kbd> Start all Live Previews  `[Paid plans only]`

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> Stop all Live Previews  `[Paid plans only]`

When editing tilemaps using the [Tilemap Bar](../interface/bars/tilemap-bar.md):

<kbd>1</kbd> - <kbd>6</kbd> Switch current tool

<kbd>X</kbd> Flip horizontal

<kbd>Y</kbd> Flip vertical

<kbd>Z</kbd> Rotate 90 degrees clockwise

<kbd>A</kbd> Rotate 90 degrees anti-clockwise

<kbd>R</kbd> Reset transformations

<kbd>Shift</kbd> + **right click** Select a patch of tiles from the tilemap

<kbd>Ctrl or Alt Gr</kbd> + <kbd>[</kbd> Use the **replace whole hierarchy** option on the current selection of [templates and/or replicas](../project-primitives/objects/templates.md)

<kbd>Ctrl or Alt Gr</kbd> + <kbd>]</kbd> Use the **modify existing hierarchy** option on the current selection of templates and/or replicas

When editing timelines using the [Timeline Bar](../interface/bars/timeline-bar.md):

Hold <kbd>Ctrl</kbd> when dragging a cubic bezier anchor point to also modify the adjacent anchor point if there is any.

## Event Sheet View

See also: [Event Sheet View](../interface/event-sheet-view.md)

<kbd>Ctrl</kbd> + <kbd>+</kbd> Increase text size

<kbd>Ctrl</kbd> + <kbd>-</kbd> Decrease text size

<kbd>Ctrl</kbd> + <kbd>L</kbd> or <kbd>Shift</kbd> + <kbd>S</kbd> Go to associated layout (if any - event sheets only used via includes have no associated layout)

<kbd>Ctrl</kbd> + <kbd>Home</kbd> Go to top of sheet

<kbd>Ctrl</kbd> + <kbd>End</kbd> Go to bottom of sheet

<kbd>F2</kbd> Toggle bookmark at selected event

<kbd>Ctrl</kbd> + <kbd>F2</kbd> Go to next bookmark in project

<kbd>Shift</kbd> + <kbd>F2</kbd> Go to previous bookmark in project

<kbd>F3</kbd> Toggle breakpoint

<kbd>🡑</kbd> and <kbd>🡓</kbd> Move the selection up and down the event sheet

<kbd>🡐</kbd> and <kbd>🡒</kbd> Move the selection sideways between Events, Conditions and Actions

<kbd>Ctrl</kbd> + <kbd>🡐</kbd> and <kbd>Ctrl</kbd> + <kbd>🡒</kbd> De-indent or indent the selected event blocks, for example to quickly make the selection a sub-event of the first event block above the selection.

<kbd>-</kbd> Insert event above

<kbd>+</kbd> Insert event below

<kbd>A</kbd> Add action

<kbd>Shift</kbd> + <kbd>A</kbd> Add custom action

<kbd>B</kbd> Add blank subevent

<kbd>C</kbd> Add condition

<kbd>D</kbd> Toggle selected items disabled

<kbd>E</kbd> Add event below

<kbd>Shift</kbd> + <kbd>E</kbd> Add event above

<kbd>F</kbd> Add function

<kbd>G</kbd> Add group

<kbd>I</kbd> Invert selected conditions

<kbd>J</kbd> Add script (script block if event selected, or script action if action selected)

<kbd>Shift</kbd> + <kbd>J</kbd> Add script action (regardless of selection)

<kbd>N</kbd> Add include

<kbd>P</kbd> Add parameter to function

<kbd>R</kbd> Replace object

<kbd>Q</kbd> Add comment (block comment if event selected, or action comment if action selected)

<kbd>Shift</kbd> + <kbd>Q</kbd> Add action comment (regardless of selection)

<kbd>S</kbd> Add subevent

<kbd>V</kbd> Add variable

<kbd>X</kbd> Add 'Else' event following selected event

<kbd>Y</kbd> Toggle 'Or' block

In the Parameters Dialog, press <kbd>F4</kbd> to toggle the Expressions Dictionary.

## Animations Editor

See also: [Animations Editor](../interface/animations-editor.md)

<kbd>B</kbd> Brush tool

<kbd>E</kbd> Eraser tool

<kbd>F</kbd> Fill tool

<kbd>I</kbd> Color picker tool

<kbd>L</kbd> Line tool

<kbd>N</kbd> Pencil tool

<kbd>R</kbd> Rectangle tool

<kbd>S</kbd> Rectangle select tool

<kbd>T</kbd> Ellipse tool

<kbd>Shift</kbd> + <kbd>I</kbd> Image points tool

<kbd>Shift</kbd> + <kbd>P</kbd> Collision polygon tool

<kbd>C</kbd> Clear image

<kbd>Ctrl</kbd> + <kbd>E</kbd> Export image

<kbd>Ctrl</kbd> + <kbd>M</kbd> Mirror image

<kbd>Ctrl</kbd> + <kbd>F</kbd> Flip image

<kbd>Ctrl</kbd> + <kbd>R</kbd> Rotate image clockwise

<kbd>Ctrl</kbd> + <kbd>L</kbd> Rotate image anti-clockwise

<kbd>Alt</kbd> + <kbd>C</kbd> Crop image

<kbd>Alt</kbd> + <kbd>R</kbd> Resize image

<kbd>Ctrl</kbd> + <kbd>B</kbd> Toggle background color

<kbd>Ctrl</kbd> + <kbd>G</kbd> Toggle grid

<kbd>Shift</kbd> + <kbd>O</kbd> Toggle onion skin  `[Paid plans only]`

<kbd>Ctrl</kbd> + <kbd>1</kbd> Zoom to fit

Quick assign origin and image points:

<kbd>Num pad 1</kbd> or <kbd>End</kbd> Bottom left

<kbd>Num pad 2</kbd> Bottom

<kbd>Num pad 3</kbd> or <kbd>Page down</kbd> Bottom right

<kbd>Num pad 4</kbd> Left

<kbd>Num pad 5</kbd> Center

<kbd>Num pad 6</kbd> Right

<kbd>Num pad 7</kbd> or <kbd>Home</kbd> Top left

<kbd>Num pad 8</kbd> Top

<kbd>Num pad 9</kbd> or <kbd>Page up</kbd> Top right

<kbd>Arrow keys</kbd> Nudge 1 pixel

Hold <kbd>Shift</kbd> to apply the origin/image point to the entire animation. <kbd>Shift</kbd> + **Click** also applies that positioning to the entire animation.

<kbd>Shift</kbd> + **Crop button** or <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> Crop entire animation

<kbd>Shift</kbd> + **Mirror button** or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> Mirror entire animation

<kbd>Shift</kbd> + **Flip button** or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> Flip entire animation

<kbd>Shift</kbd> + **Rotate Clockwise button** or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> Rotate entire animation clockwise

<kbd>Shift</kbd> + **Rotate Anticlockwise button** or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> Rotate entire animation anticlockwise

Animations only:

<kbd>Ctrl</kbd> + <kbd>Up</kbd> Previous animation

<kbd>Ctrl</kbd> + <kbd>Down</kbd> Next animation

<kbd>Ctrl</kbd> + <kbd>Left</kbd> Previous animation frame

<kbd>Ctrl</kbd> + <kbd>Right</kbd> Next animation frame

<kbd>Ctrl</kbd> + <kbd>P</kbd> Start / restart preview animation

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> Close animation preview

## Timeline Bar

See also: [Timeline Bar](../interface/bars/timeline-bar.md)

<kbd>E</kbd> Toggle timeline edit mode

<kbd>S</kbd> Set or update [master keyframes](../project-primitives/timelines/master-keyframe.md) and [property keyframes](../project-primitives/timelines/property-keyframe.md) at the current time marker position

<kbd>Ctrl</kbd> + <kbd>D</kbd> Disable the current selection of timeline elements

<kbd>Ctrl</kbd> + <kbd>E</kbd> Enable the current selection of timeline elements

<kbd>M</kbd> Add missing property keyframes at the current time marker position using the current [instance](../project-primitives/objects/instances.md) values (a master keyframe must exist at the position for this shortcut to work)

<kbd>Ctrl</kbd> + <kbd>M</kbd> Add missing property keyframes at the current time marker position using values which seamlessly fit in the timeline (a master keyframe must exist at the position for this shortcut to work)

<kbd>Space</kbd> Preview/pause the current timeline

<kbd>Ctrl</kbd> + <kbd>Space</kbd> Stop the current timeline if it is being previewed

<kbd>Shift</kbd> + <kbd>,</kbd> Move the play head to the first master keyframe

<kbd>,</kbd> Move the play head to the previous master keyframe

<kbd>.</kbd> Move the play head to the next master keyframe

<kbd>Shift</kbd> + <kbd>.</kbd> Move the play head to the last master keyframe

**Hold** <kbd>Ctrl</kbd> while dragging the current time marker to move the marker without previewing the timeline

**Hold** <kbd>Shift</kbd> while dragging keyframes to duplicate the dragged selection into the new position

<kbd>Ctrl</kbd> + <kbd>X</kbd> Cut the current keyframe selection

<kbd>Ctrl</kbd> + <kbd>C</kbd> Copy the current keyframe selection

<kbd>Ctrl</kbd> + <kbd>P</kbd> Paste keyframes using the current time marker as reference.

If no tracks are selected at the moment of pasting, the keyframes will be added in their respective tracks.

If there are tracks selected at the moment of pasting, an attempt is made to paste the keyframes into the tracks they would fit best. If there are keyframes in the selection which can't be fit anywhere, they are ignored.

<kbd>Esc</kbd> Clear highlighting on all timeline elements

<kbd>Ctrl</kbd> + **Mouse Wheel** to scale the timeline UI

<kbd>Alt</kbd> + <kbd>T</kbd> Add position property tracks in the current timeline

<kbd>Alt</kbd> + <kbd>S</kbd> Add size property tracks in the current timeline

<kbd>Alt</kbd> + <kbd>Z</kbd> Add a Z elevation property track in the current timeline

<kbd>Alt</kbd> + <kbd>A</kbd> Add an angle property track in the current timeline

<kbd>Alt</kbd> + <kbd>O</kbd> Add an opacity property track in the current timeline

<kbd>Alt</kbd> + <kbd>C</kbd> Add a colour property track in the current timeline

## Tilemap bar

See also: [Tilemap Bar](../interface/bars/tilemap-bar.md)

<kbd>Esc</kbd> or <kbd>1</kbd> Restore normal layout editing

<kbd>2</kbd> - <kbd>6</kbd> Switch tilemap tool

<kbd>X</kbd> Mirror tile or patch

<kbd>Y</kbd> Flip tile or patch

<kbd>Z</kbd> Rotate tile or patch clockwise

<kbd>A</kbd> Rotate tile or patch anti-clockwise

<kbd>R</kbd> Reset all transforms

**Hold** <kbd>Shift</kbd> with any tile drawing tool to temporarily switch to the Select tool. Releasing Shift returns to the previous tool.

**Hold** <kbd>Ctrl</kbd> with pencil tool to erase tiles

**Hold** <kbd>Ctrl</kbd> with eraser tool to erase single tiles

**Hold** <kbd>Ctrl</kbd> with rectangle tool to erase tiles in the drawn rectangle

## Tilemap brush editor

See also: [Tilemap Brush Editor](..//interface/bars/tilemap-bar/tilemap-brush-editor.md)

<kbd>Alt</kbd> + <kbd>T</kbd> Toggle tiles in template

<kbd>Ctrl</kbd> + <kbd>B</kbd> Toggle background

<kbd>Ctrl</kbd> + <kbd>+</kbd> Zoom In

<kbd>Ctrl</kbd> + <kbd>-</kbd> Zoom Out

<kbd>Ctrl</kbd> + <kbd>0</kbd> Zoom Reset

<kbd>Delete</kbd> + <kbd>0</kbd> Delete selected tile from probability list

## Ease editor

See also: [Ease Editor](../interface/dialogs/ease-editor.md)

Hold <kbd>Ctrl</kbd> when dragging an anchor point to also modify the adjacent anchor point if there is any.

## Flowchart View

See also: [Flowchart View](../interface/flowchart-view.md)

<kbd>Ctrl</kbd> + **A** Select all nodes.

<kbd>Ctrl</kbd> + **Mouse Wheel Up** Zoom in.

<kbd>Ctrl</kbd> + **Mouse Wheel Down** Zoom out.

**Middle mouse button drag** or **Hold space and move mouse** Pan the view

**Hold** <kbd>Shift</kbd> while selecting [nodes](../project-primitives/flowcharts/flowchart-node.md) and [outputs](../project-primitives/flowcharts/flowchart-node-output.md) to add them to the same selection to be able to drag or delete them at the same time.

<kbd>Backspace</kbd> or <kbd>Delete</kbd> to delete the current selection of nodes, outputs or links.
