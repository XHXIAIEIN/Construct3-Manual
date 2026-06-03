---
title: "Geolocation"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/geolocation"
release: 487.2
---

## On this page

- [Permission prompts](#scripting)
- [Battery usage](#permission-prompts)
- [Geolocation conditions](#battery-usage)
- [Geolocation actions](#geolocation-conditions)
- [Geolocation expressions](#geolocation-actions)

---

The **Geolocation** object allows the user's current geographical location to be estimated. Note not all devices support geolocation, and of the devices that do, the accuracy can vary significantly. For example a desktop computer might not come with any location-tracking equipment, and only be able to report a location accurate to a 50 kilometer radius based on their internet connection. However this at least allows for the user's timezone, country, or possibly city or town to be determined. On the other hand many mobile phones and tablets come equipped with GPS equipment and can report their location as accurately as within a few meters, and track movements in real-time.

[Click here to open an example of the Geolocation plugin.](https://editor.construct.net/#open=geolocation)

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Permission prompts

When requesting the user's location, for privacy reasons most platforms will prompt the user for permission. Each platform tends to have its own specific way of asking for permission. The user may decline the permission request, in which case *On error* will trigger. Your projects should handle such a case gracefully if possible. Normally each browser or platform has a way to grant permission when it was previously declined, but it either involves prompting again, or making changes in the browser or app platform settings. Some platforms will fail without even prompting the user after a single declined permission request.

## Battery usage

It should be noted that tracking the user's location may involve activating GPS hardware in a phone or tablet, which can drain the battery more quickly. Requesting high-accuracy location information is also likely to use more power. Try to only request the user's location if absolutely necessary, use low accuracy if suitable, and request one-off positions rather than watching the position for a long time.

## Geolocation conditions

**Is supported**  
True if the current device supports reporting the user position with geolocation. If false, none of the features of the object will work.

**Is watching location**  
True after a successful *Watch location* action, until the *Stop watching* action is used.

**On error**  
Triggered if an error occurs when requesting permission for, or retrieving, the user's location. The *ErrorMessage* expression contains more information about the problem in this trigger.

**On location update**  
Triggered after a successful *Request location* or *Watch location* action, when the position has been updated. This only triggers once after a successful *Request location action*, but can trigger regularly after a successful *Watch location* action whilst the position is tracked and updated.

## Geolocation actions

**Request location**  
Make a one-off request for the user's current location. The user may see a permission prompt which they must approve before any information is returned; if they decline, *On error* will trigger. *Accuracy* can be set to *High* to get more accurate results, but it may take longer to calculate and consume more battery. *Timeout* is the maximum time in seconds the device may take before it must return a position or trigger *On error*. *Maximum age* is the maximum age of a cached result that can be returned. If zero, the device will actively try to determine the user's position at that time. However if it is nonzero, and the operating system had previously requested the user's position within that time, the previous result may be returned immediately instead. This is faster and can save battery, but the result will not be as close to real-time. If a result is successfully determined, *On location update* will trigger.

**Watch location**  
As with *Request location*, but the location will be tracked. *On location update* will trigger whenever new position information is available, until the *Stop watching* action is used. Watching the location can consume more battery on mobile devices than one-off requests.

**Stop watching**  
Stop a previous successful request to watch the user's location. The position will no longer be updated.

## Geolocation expressions

The position-related expressions only update when *On location update* triggers, which in turn can only occur after a successful *Request location* or *Watch location* action.

**Accuracy**  
The estimated accuracy in meters of the latitude and longitude (for *Accuracy*) or the altitude (for *AltitudeAccuracy*). The accuracy may be more or less a guess, or if it is not known the expression returns 0.

**AltitudeAccuracy**  
The estimated accuracy in meters of the latitude and longitude (for *Accuracy*) or the altitude (for *AltitudeAccuracy*). The accuracy may be more or less a guess, or if it is not known the expression returns 0.

**Altitude**  
The estimated altitude in meters relative to sea-level, or 0 if not known.

**ErrorMessage**  
In *On error*, a string with some additional information about the error.

**Heading**  
While watching a position, the direction of travel in degrees relative to due north and speed in meters per second if available, else 0 of not available.

**Speed**  
While watching a position, the direction of travel in degrees relative to due north and speed in meters per second if available, else 0 of not available.

**Latitude**  
The latitude and longitude that has been determined, subject to the *Accuracy* (which may not be known).

**Longitude**  
The latitude and longitude that has been determined, subject to the *Accuracy* (which may not be known).

**Timestamp**  
A timestamp of the time at which the current details were retrieved. This is measured in milliseconds since midnight, January 1, 1970 (also known as a UNIX timestamp).
