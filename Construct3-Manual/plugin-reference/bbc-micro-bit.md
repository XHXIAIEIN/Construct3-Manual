---
title: "BBC micro:bit plugin"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/bbc-micro-bit"
release: 487.2
---

## On this page

- [BBC micro:bit properties](#setup)
- [BBC micro:bit conditions](#bbc-microbit-properties)
- [BBC micro:bit actions](#bbc-microbit-conditions)
- [BBC micro:bit expressions](#bbc-microbit-actions)

---

The **BBC micro:bit plugin** allows communicating with the [BBC micro:bit](https://microbit.org/) single-board computer via Bluetooth.

### Setup

For a guide on getting started using a BBC micro:bit in Construct, please refer to the tutorial [Getting started with the BBC micro:bit](https://www.construct.net/en/tutorials/getting-started-bbc-microbit-3060). This also covers the system requirements for the feature. This manual entry is a reference only for Construct's BBC micro:bit plugin.

## BBC micro:bit properties

**Enable accelerometer**  
Check the corresponding boxes to enable using the various features of the BBC micro:bit from the plugin. If any feature is disabled, note the corresponding conditions, actions and expressions for that feature will not work. Turning off unused features may improve the reliability of the Bluetooth connection. If you do turn off features, don't forget which ones, to avoid confusion in case you try to start using that feature later on as you will then need to re-enable it.

**Enable buttons**  
Check the corresponding boxes to enable using the various features of the BBC micro:bit from the plugin. If any feature is disabled, note the corresponding conditions, actions and expressions for that feature will not work. Turning off unused features may improve the reliability of the Bluetooth connection. If you do turn off features, don't forget which ones, to avoid confusion in case you try to start using that feature later on as you will then need to re-enable it.

**Enable magnetometer**  
Check the corresponding boxes to enable using the various features of the BBC micro:bit from the plugin. If any feature is disabled, note the corresponding conditions, actions and expressions for that feature will not work. Turning off unused features may improve the reliability of the Bluetooth connection. If you do turn off features, don't forget which ones, to avoid confusion in case you try to start using that feature later on as you will then need to re-enable it.

**Enable temperature**  
Check the corresponding boxes to enable using the various features of the BBC micro:bit from the plugin. If any feature is disabled, note the corresponding conditions, actions and expressions for that feature will not work. Turning off unused features may improve the reliability of the Bluetooth connection. If you do turn off features, don't forget which ones, to avoid confusion in case you try to start using that feature later on as you will then need to re-enable it.

**Enable LED display**  
Check the corresponding boxes to enable using the various features of the BBC micro:bit from the plugin. If any feature is disabled, note the corresponding conditions, actions and expressions for that feature will not work. Turning off unused features may improve the reliability of the Bluetooth connection. If you do turn off features, don't forget which ones, to avoid confusion in case you try to start using that feature later on as you will then need to re-enable it.

## BBC micro:bit conditions

**Is device connected**  
True if a device is currently connected via Bluetooth.

**Is supported**  
True if the current browser/platform supports Bluetooth features necessary for communicating with the device (the Web Bluetooth API).

**On device connected**  
Triggered after the *Request device* action successfully connects to a device over Bluetooth.

**On device disconnected**  
Triggered when the Bluetooth connection to a device is lost. This may be intentional (e.g. using the *Disconnect device* action) or due to losing the Bluetooth signal.

**On request device failed**  
Triggered after the *Request device* action if it failed to establish a Bluetooth connection to a device. This includes the user cancelling the prompt to connect to a device.

**On accelerometer reading**  
Triggered while connected to a device whenever a reading from the accelerometer sensor is received via Bluetooth. This requires *Enable accelerometer* to be checked in the object's properties. The reading is available via the accelerometer expressions.

**On bearing reading**  
Triggered while connected to a device whenever a reading from the magnetometer sensor is received via Bluetooth. This requires *Enable magnetometer* to be checked in the object's properties. The reading is available via the *Bearing* expression.

> **Tip**  
> Bearing readings may be unavailable unless the device is calibrated.

**On button pressed**  
Triggered while connected to a device whenever one of the device buttons is pressed, released or held down for a moment (also known as "long pressed"). This requires *Enable buttons* to be checked in the object's properties.

**On temperature reading**  
Triggered while connected to a device whenever a reading from the thermometer is received via Bluetooth. This requires *Enable temperature* to be checked in the object's properties. The reading is available via the *Temperature* expression.

## BBC micro:bit actions

**Request device**  
Request to connect to a BBC micro:bit device over Bluetooth. This must be used in a user input trigger, such as a button click or a tap, as browsers block requests not started by user input. If a Bluetooth connection is established successfully, *On device connected* will trigger. If the user cancels or the request is otherwise unsuccessful, *On request device failed* will trigger.

**Disconnect device**  
Disconnect from a currently connected device. All communication with the device will stop and both the Construct project and the device will become available to connect to something else.

**Clear LED state**  
Reset the LED state stored in the plugin so that all LEDs are set to off. Note this does not affect the device until the *Update LEDs* action is used.

**Set LED state**  
Set one of the LED states on or off in the state stored in the plugin. The LED is specified by its zero-based column and row, so note that the first column and first row have the index 0. Also note that as the device has a 5x5 display, the last columna nd row index that can be used is 4. Note this does not affect the device until the *Update LEDs* action is used.

**Update LEDs**  
Send the current LED state stored in the plugin to the device via Bluetooth. This requires *Enable LED display* to be checked in the object's properties. Note that the *Clear LED state* and *Set LED state* actions do not affect the device: they only update the LED state stored in the plugin. This action then transmits the LED state stored in the plugin to the device for display, so the former actions can be used to set up the intended LED display, and then this action used to update the actual display on the device.

**Scroll text**  
Display a short message (up to 20 characters) on the device's LED display. This requires *Enable LED display* to be checked in the object's properties.

## BBC micro:bit expressions

**DeviceID**  
A string with a unique ID for the connected device.

**AccelerometerRawX**  
The raw accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The raw readings are the unmodified readings as determined by the sensor - these readings can be "noisy" and have a lot of variation in them, so it may be preferable to use the smoothed readings, or implement your own smoothing calculation.

**AccelerometerRawY**  
The raw accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The raw readings are the unmodified readings as determined by the sensor - these readings can be "noisy" and have a lot of variation in them, so it may be preferable to use the smoothed readings, or implement your own smoothing calculation.

**AccelerometerRawZ**  
The raw accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The raw readings are the unmodified readings as determined by the sensor - these readings can be "noisy" and have a lot of variation in them, so it may be preferable to use the smoothed readings, or implement your own smoothing calculation.

**AccelerometerSmoothedX**  
Smoothed accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The smoothed readings employ a simple calculation to eliminate some of the noise in the raw readings, which can be helpful for a smoother and more reliable reading.

**AccelerometerSmoothedY**  
Smoothed accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The smoothed readings employ a simple calculation to eliminate some of the noise in the raw readings, which can be helpful for a smoother and more reliable reading.

**AccelerometerSmoothedZ**  
Smoothed accelerometer readings received from the device, updated in *On accelerometer reading*. Each axis returns a number ranging from -1 to 1. The smoothed readings employ a simple calculation to eliminate some of the noise in the raw readings, which can be helpful for a smoother and more reliable reading.

**Bearing**  
The bearing reading in degrees from due north, updated in *On bearing reading*. This requires *Enable magnetometer* to be checked in the object's properties, and note the device must be calibrated before readings will be received.

**Temperature**  
The thermometer reading in degrees celcius, updated in *On temperature reading*. This requires *Enable temperature* to be checked in the object's properties.
