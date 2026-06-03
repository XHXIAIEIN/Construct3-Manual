---
title: "Gamepad"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/gamepad"
release: 487.2
---

## On this page

- [Gamepad support and Steam](#scripting)
- [Key mapping](#gamepad-support-and-steam)
- [Controlling behaviors with Gamepad](#key-mapping)
- [Multiple gamepads](#controlling-behaviors-with-gamepad)
- [Gamepad properties](#multiple-gamepads)
- [Gamepad conditions](#gamepad-properties)
- [Gamepad actions](#gamepad-conditions)
- [Gamepad expressions](#gamepad-actions)

---

The **Gamepad** object allows you to detect input from a connected console controller, PC gamepad or joystick. While a range of devices ought to work with the Gamepad object, it is designed for and works best with the XBox controller, or similarly designed controllers (with the same button/stick layout). [Click here to open an example of gamepad control.](https://editor.construct.net/#open=gamepad-control)

Unfortunately whether or not a specific device is supported depends on a lot of factors, including the operating system, available drivers, and the browser's support. This makes it difficult to know in advance if a specific device will work. The XBox controller works out of the box on Windows systems with the Google Chrome browser. The Playstation controllers do not typically work without installing third party drivers since it is not officially supported.

Some mobile devices also support gamepad input, either by special hardware accessories, or by connecting a gamepad via a cable or wirelessly.

To prevent allowing websites to track you by your available controllers, most browsers supporting Gamepad input will report that there are no controllers connected until a button is pressed on one of the devices.

### Scripting

When using JavaScript or TypeScript coding, the browser [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) can be accessed directly, but only in DOM mode. In worker mode you can still receive gamepad input via the [IGamepadObjectType script interface](../scripting/scripting-reference/plugin-interfaces/gamepad.md).

## Gamepad support and Steam

When exporting a project for Steam, you may need to install GameInput for gamepads to work. For more information, refer to the [Steamworks plugin documentation](https://www.construct.net/en/make-games/addons/1105/steamworks/documentation).

## Key mapping

Different controllers have different button layouts, or the buttons have different names. For example, the Playstation 3 controller uses *square*, *circle*, *triangle* and *X* buttons, whereas the XBox controller uses *A*, *B*, *X* and *Y* (note that *X* appears in a different position in each controller too). For consistency, the Gamepad object refers to the XBox layout only.

## Controlling behaviors with Gamepad

To control behaviors with Gamepad input, use the *Simulate control* action. An example is shown below for controlling a Platform behavior with the left analog stick and A to jump.

[![Events to control a behavior with a gamepad](https://construct-static.com/images/v1767/r/uploads/articleuploadobject/0/images/995/gamepad-controls_v600.png)](https://construct-static.com/images/v1767/uploads/articleuploadobject/0/images/995/gamepad-controls.png)

For more information, see the section on *Custom controls* in the [Behavior reference](../behavior-reference.md).

## Multiple gamepads

Multiple gamepad devices can be connected to a single computer. To differentiate between them, most actions, conditions and expressions in the Gamepad object also take a *Gamepad* parameter. This is a zero-based index of the controller. For example, 0 identifies the first controller, 1 identifies the second, and so on. This allows you to make multiplayer gamepad-controlled games.

## Gamepad properties

**Analog deadzone**  
Devices with analog joysticks are extremely sensitive to input. This allows fine control in games, but also means a joystick in rest position can still register a fairly large amount of movement. If this wasn't ignored, a joystick-controlled player could start moving around erratically even when the player is not touching the control. To solve this all values close to rest position are ignored. Joystick movement is in the range -100 to 100 on each axis, and if the distance from the center is below the *Analog deadzone* value, it will return 0. For example, the default is 25, so values inside a circle with the radius 25 will still count as zero. This is the recommended value to ensure even ageing controllers with highly erratic input do not cause unintended player movement.

## Gamepad conditions

**Gamepad supports vibration type**  
Check if a currently connected gamepad supports a particular kind of vibration effect, such as dual rumble or trigger rumble. Note both the browser and the hardware must support the vibration type - for example it is possible a gamepad has hardware support for trigger rumble, but one browser supports it where another browser does not.

**Has gamepads**  
True if any gamepad is connected and activated. To prevent websites tracking you based on the available gamepads, most browsers supporting Gamepad input will report that no controllers are connected until a button is pressed on one of the devices.

**On gamepad connected**  
Triggered when a gamepad device is connected to the computer. To prevent websites tracking you based on the available gamepads, most browsers supporting Gamepad input will report that no controllers are connected until a button is pressed on one of the devices, when *On gamepad connected* will also run.

> **Tip**  
> In this trigger, the *GamepadIndex* expression gives the index of the gamepad that was connected.

**On gamepad disconnected**  
Triggered when a gamepad device is disconnected from the computer, such as by pulling out its cable.

> **Tip**  
> In this trigger, the *GamepadIndex* expression gives the index of the gamepad that was disconnected.

**Compare axis**  
Compare the position of an analog joystick on a specific gamepad. Values within the *Analog deadzone* are returned as 0. Axes values range from -100 to 100.

**Is button down**  
True if a given button is currently down on a specific gamepad. The buttons are always referred to according to the XBox controller layout.

**Is button index down**  
True if a given button by its numerical index is currently down on a specific gamepad.

**On any button pressed**  
Triggered when any button is pressed on a specific gamepad. The *ButtonIndex* expression is set with the index of the button. The special value -1 can also be used for the gamepad, in which case the trigger will fire when any button on any gamepad is pressed, and the *GamepadIndex* expression will also be set to the index of the gamepad where the button was pressed.

**On any button released**  
Triggered when any button is released on a specific gamepad. The *ButtonIndex* expression is set with the index of the button. The special value -1 can also be used for the gamepad, in which case the trigger will fire when any button on any gamepad is released, and the *GamepadIndex* expression will also be set to the index of the gamepad where the button was released.

**On button index pressed**  
Triggered when a given button by its numerical index is pressed on a specific gamepad.

**On button index released**  
Triggered when a given button by its numerical index is released on a specific gamepad.

**On button pressed**  
Triggered when a given button is pressed on a specific gamepad. The buttons are always referred to according to the XBox controller layout.

**On button released**  
Triggered when a given button is released on a specific gamepad. The buttons are always referred to according to the XBox controller layout.

## Gamepad actions

**Vibrate (dual rumble)**  
Initiate vibration (also known as "rumble") of a specific gamepad for a period of time given in milliseconds. Each kind of vibration uses different rumble motors in the gamepad hardware. The types of vibration that are supported can be checked with the *Gamepad supports vibration type* condition. Each kind of vibration has different parameters for the hardware motors, allowing for different types of rumble effects to be produced. If a vibration is already active when this action is used, it will be replaced by this action.

**Vibrate (trigger rumble)**  
Initiate vibration (also known as "rumble") of a specific gamepad for a period of time given in milliseconds. Each kind of vibration uses different rumble motors in the gamepad hardware. The types of vibration that are supported can be checked with the *Gamepad supports vibration type* condition. Each kind of vibration has different parameters for the hardware motors, allowing for different types of rumble effects to be produced. If a vibration is already active when this action is used, it will be replaced by this action.

**Reset vibration**  
Stop any active vibration started by the *Vibrate* action for a specific gamepad. The vibration will be immediately cancelled, so it will not fulfil the duration it was started for. If no vibration is active, this has no effect.

## Gamepad expressions

**Axis(Gamepad, Index)**  
Retrieve the current position of an analog joystick on a specific gamepad. *Index* specifies left analog X and Y or right analog X and Y axes. Axes range from -100 to 100. Axis values within the *Analog deadzone* are returned as 0.

**Button(Gamepad, Index)**  
Retrieve the current button press value of a button on a specific gamepad. *Index* specifies the zero-based index of a button from the dropdown list in the *Is button down* condition (e.g. 0 returns the value for the *A* button). The returned value depends on the features of the button: if the button is pressure sensitive, it can return any value from 0 to 100 depending on the pressure; otherwise it returns 0 for not pressed and 100 for pressed. Buttons which are not pressure sensitive are easier to detect using the *Is button down* condition.

**GamepadCount**  
Return the number of currently connected and active gamepad devices. To prevent websites tracking you based on the available gamepads, most browsers supporting Gamepad input will report that no controllers are connected until a button is pressed on one of the devices.

**GamepadID(Gamepad)**  
A string intended to represent the device manufacturer and model for a specific gamepad, e.g. "XBox 360 controller". However in practice this varies depending on the system and browser in use.

**GamepadIndex**  
In an *On gamepad connected/disconnected* trigger, or when using *On any button pressed/released* with a gamepad of -1, this expression indicates the index of the corresponding gamepad.

**ButtonIndex**  
Return the numerical index of the last button pressed on a specific gamepad. This is useful with the *On any button pressed* and *On any button released* triggers to set up custom controls.

**RawAxis(Gamepad, Index)**  
Retrieve raw axis input for a specific gamepad and axis index. This returns the value without keymapping, applying the analog deadzone, or multiplying the returned value by 100. Axis values range from -1 to 1.

**RawAxisCount(Gamepad)**  
Return the number of axes available in the raw input for a specific gamepad. This returns the value without keymapping.

**RawButton(Gamepad, Index)**  
Retrieve raw button input for a specific gamepad and button index. This returns the value without keymapping. Button values range from 0 to 1 (pressure sensitive buttons can return values in between).

**RawButtonCount(Gamepad)**  
Return the number of buttons available in the raw input for a specific gamepad. This returns the value without keymapping.
