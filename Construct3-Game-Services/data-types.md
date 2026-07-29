---
title: "Datatypes in Construct Game Services"
source: "https://www.construct.net/en/game-services/manuals/game-services/data-types"
release: 495
---

## On this page

- [Datetime](#guids-aka-uuid)
- [Guids (aka UUID)](#uint8)
- [uint8](#nullable-types)
- [Nullable Types](#strings)
- [Booleans](#booleans)
- [Pagination](#pagination)

---

## Datetime

Datetime values are UTC represented in ISO 8601 format.  An example returned datetime value is:

```none
2025-10-03T15:12:22.1333261Z
```

## Guids (aka UUID)

Guids take the form of 32 hexadecimal characters, separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.  Example of a valid guids are:

```none
adf5b4d8-4c32-4ecd-8bcd-2b7788eddb43
e7939cfd-ca5a-4f09-a286-b417fd7b9e47
0e0ebf19-805d-44c8-92c7-f63f23b585f1
fc63773c-5461-44b3-aecd-5af982968748
5e33107a-f954-4d62-a526-54295b99fb83
```

## uint8

Also known as a byte, this is an unsigned 8-bit integer with a range of 0 to 255.

## Nullable Types

If a properties data type is nullable, it will be indicated by a question mark (?) after the data type.  For example, a property with a data type of `int?` indicates that the property can either be an integer value or null.  A property with a data type of `int` indicates the property will always return a value.

### Strings

Strings are never marked as nullable, but null or an empty string can be returned as a value for a string property.  These should be treated the same.

## Booleans

If a properties data type is `bool`, the values `1`, `yes`, `on` or `true` are treated as `true` values (case insensitive).  Anything else will be treated as a `false` value.

## Pagination

When [pagination objects](common-objects/pagination-object.md) are returned in responses, it's important to note that pages are not 0-indexed, but rather 1-indexed.  This means that the first page is page 1, the second page is page 2, and so on.
