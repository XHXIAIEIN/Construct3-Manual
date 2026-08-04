---
title: "QR code"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/qrcode"
release: 495
---

## On this page

- [QR code properties](#qr-code-properties)
- [QR code conditions](#qr-code-conditions)
- [QR code actions](#qr-code-actions)
- [QR code expressions](#qr-code-expressions)

---

The **QR code** object allows displaying a [QR code](https://en.wikipedia.org/wiki/QR_code) in your project. This is a type of two-dimensional barcode that most modern mobile phones are able to conveniently scan, such as to open a URL without having to type it in.

Note that QR codes have limits on how much data they can represent. If too much text is specified, the QR code may disappear or turn black. The nature of a QR code means it is best suited to short snippets of information such as web addresses.

See the [QR code maker example project](https://editor.construct.net/#open=qr-code-maker) for a demonstration of using QR codes in Construct.

## QR code properties

**Text**  
The text to encode within the QR code. This can also be a URL, and most devices will offer to open a browser if scanning a QR code that contains a URL.

**Correction level**  
QR codes contain redundant additional information for error recovery purposes. This improves the reliability of scanning the QR code, particularly if the image is in any way obscured, distorted or damaged. The correction level allows choosing how much additional error recovery information to include. Higher levels mean more data is stored in the QR code (and so it will also appear more detailed) but increase the scanning reliability.

**Initially visible**  
Whether the object is initially visible in the layout at runtime.

## QR code conditions

The QR code object does not have any of its own conditions. However see [Common conditions](../plugin-reference/common-features/common-conditions.md) for features shared with other objects.

## QR code actions

**Set text**  
Change the text encoded within the QR code. This allows dynamically creating a QR code, such as to represent a unique link for joining a multiplayer game.

**Set correction level**  
Change the correction level of the QR code. See the *Correction level* property above for more details.

## QR code expressions

The QR code object does not have any of its own expressions. However see [Common expressions](../plugin-reference/common-features/common-expressions.md) for features shared with other objects.
