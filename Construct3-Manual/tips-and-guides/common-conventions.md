---
title: "Common conventions"
source: "https://www.construct.net/en/make-games/manuals/construct-3/tips-and-guides/common-conventions"
release: 487
---

## On this page

- [Common units](#common-units)
- [Zero-based indexing](#zero-based-indexing)
- [Ranges](#ranges)

---

For consistency, Construct usually uses some common conventions in how values are used. These are described below.

## Common units

In Construct, sometimes you need to enter values such as angles, speeds or sizes. For consistency these always use the same units in Construct, except where noted by descriptions or tips shown in the editor. The common units are described below.

- **Positions** are in pixels. The origin (0,0) is at the top-left of the layout, and the Y axis increments downwards (as is often the case with game engines).
- **Sizes** are in pixels
- **Angles** are in degrees. 0 degrees faces **right** and increments **clockwise**.
- **Times** are in seconds
- **Speeds** are in pixels per second
- **Accelerations** are in pixels per second per second

## Zero-based indexing

To be consistent with programming languages, all features of Construct using a number of an item in a list (indices) start from 0 instead of 1. This might seem odd at first and take some getting used to, but in many cases it is actually much more convenient than 1-based indexing.

Traditionally lists are numbered **1, 2, 3...** but in Construct (and all other programming languages) they are numbered **0, 1, 2...**.

## Ranges

Sometimes the documentation will refer to ranges of valid values. These are in square brackets for an inclusive range, such as [0, 1] meaning any value between 0 and 1, including both 0 and 1. For example valid values in this range are 0, 0.5, and 1. A round bracket indicates a non-inclusive boundary of the range, such as [0, 1) meaning any value between 0 and 1, including 0 but not including 1. For example valid values in this range are 0, 0.5 and 0.999, but not 1.
