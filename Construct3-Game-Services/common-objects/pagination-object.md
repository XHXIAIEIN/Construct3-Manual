---
title: "Pagination Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/common-objects/pagination-object"
release: 487.3
---

## On this page

- [The Pagination Object](#example-pagination)
- [Example Pagination](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Pagination Object

Various end points return multiple objects, for example when you're querying scores in a leaderboard.  When there are too many objects to return on one response, the objects are paginated.

The pagination object helps you to navigate through the pages of returned objects.

## Example Pagination

```json
{
  "formattedRequestedPage": 2,
  "requestedPage": 2,
  "formattedTotalPages": 15,
  "totalPages": 15,
  "formattedRecordsPerPage": 10,
  "recordsPerPage": 10,
  "formattedTotalRecords": 142,
  "totalRecords": 142,
  "formattedPrevPage": 1,
  "prevPage": 1,
  "formattedNextPage": 1,
  "nextPage": 3
}
```

## Object Properties

**formattedRequestedPage** `string`  
The requested page formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**requestedPage** `int32`  
The page of results requested in the request.  The first page is 1.

**formattedTotalPages** `string`  
The total number of pages formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**totalPages** `int32`  
The total number of pages of results in the request.

**formattedRecordsPerPage** `string`  
The number of results that can be shown on each page formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**recordsPerPage** `int32`  
The number of results that can be shown on each page.  The last page of results may have fewer results than this number.

**formattedTotalRecords** `string`  
The total number of objects across all pages of results formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**totalRecords** `int32`  
The total number of objects across all pages of results.

**formattedPrevPage** `string`  
The previous page parameter formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**prevPage** `int32`  
If the requestedPage is greater than 1, this value is for the previous page of results.  This property will not show if the requested page is 1 - the first page.

**formattedNextPage** `string`  
The next page parameter formatted to the requests specified culture, formatted to the specified [requested culture](../culture.md).

**nextPage** `int32`  
If the requestedPage is less than the total number of pages, this value is for the next page of results.  This property will not show if the requested page is the last page.
