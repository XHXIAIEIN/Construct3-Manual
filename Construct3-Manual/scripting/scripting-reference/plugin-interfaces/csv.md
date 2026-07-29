---
title: "CSV script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/csv"
release: 495
---

## On this page

- [CSV APIs](#csv-apis)

---

The `ICSVObjectType` interface provides APIs specific to the [CSV plugin](../../../plugin-reference/csv.md). This allows reading and writing CSV data (and other delimiter-based formats like TSV) from JavaScript code.

The script interface uses JavaScript data types directly and so does not need to use an Array object for storage, which is necessary when using CSV in event sheets.

## CSV APIs

**parseCsv(str, delimiter = ",", dataType = "auto")**  
Parse a given string of CSV data using the provided delimiter. The `dataType` parameter must be one of `"auto"`, `"string"` or `"number"`. The return value is an array of arrays with values, representing the two-dimensional array of values in the data.

**generateCsv(arr, delimiter = ",")**  
Generate a string of CSV data using the provided delimiter, from a two-dimensional array of values.
