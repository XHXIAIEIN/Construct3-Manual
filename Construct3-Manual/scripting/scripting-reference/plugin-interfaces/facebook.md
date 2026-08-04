---
title: "Facebook script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/facebook"
release: 495
---

## On this page

- [Facebook APIs](#facebook-apis)

---

The `IFacebookObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Facebook plugin](../../../plugin-reference/facebook.md). Note this class derives from the object class interface, not the instance interface. It would typically be accessed via `runtime.objects.Facebook`.

This script interface exists mainly to provide the access token so you can write code to access the [Facebook SDK for JavaScript](https://developers.facebook.com/docs/javascript/) using the existing authentication provided by Construct's Facebook plugin. This may also be useful for third-party addons developed with Construct's addon SDK.

## Facebook APIs

**getAccessToken()**  
A string of the access token provided by the Facebook SDK after a successful login. If the user is not logged in, this will return an empty string.
