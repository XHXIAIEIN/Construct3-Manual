---
title: "XML"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/xml"
release: 495
---

## On this page

- [Loading an XML document](#scripting)
- [XML conditions](#loading-an-xml-document)
- [XML actions](#xml-conditions)
- [XML expressions](#xml-actions)

---

The **XML** plugin can parse and read data from XML documents. It uses **XPath** to access the XML document. XPath is a kind of query language for XML, similar to how SQL is a query language for databases. A description of how to use XPath is out of the scope of this manual; there are some free tutorials you can search for on the web.

[Click here to open an example of the XML plugin.](https://editor.construct.net/#open=xml)

Currently the XML plugin is read-only. You can read data but not change any values in the XML document.

### Scripting

This object has no script interface, because when using JavaScript or TypeScript coding you can use the browser built-in APIs for [parsing and serializing XML](https://developer.mozilla.org/en-US/docs/Web/XML/Parsing_and_serializing_XML).

## Loading an XML document

XML must be loaded as a string with the *Load* action. If you have a small snippet of XML, you can paste it directly in to the action parameter - but note in expressions a double-quote character (`"`) must be repeated twice (`""`) to avoid ending the string, which can be inconvenient. Instead it is recommended to load an XML [project file](../project-primitives/files.md) using the [AJAX](../plugin-reference/ajax.md) object. When the AJAX request completes, pass `AJAX.LastData` in to the *Load* action. Then the data from the file can be used.

## XML conditions

**For each node**  
Repeat the event once for each node returned by an XPath query. Typically this will be used with a query that returns multiple nodes, e.g. `"/bookstore/book"` to select all "book" nodes under "bookstore". In the *For each node* event, the current node is set to the one currently being iterated. This means relative XPaths, like `"title/text()"`, work relative to the current node (in this case returning the text of the child "title" tag). *For each node* can also be nested, so you can iterate another list relative to the current node.

## XML actions

**Load**  
Load an XML document from a string. See 'Loading an XML document' above.

## XML expressions

**NodeCount**  
Return the number of nodes returned by an XPath expression. For example, this can count the number of elements with a given name. In a *For each node* event, the XPath is relative to the current node.

**NumberValue**  
Return a number from an XPath expression. If multiple values are returned, only the first value is retrieved. In a *For each node* event, the XPath is relative to the current node.

**StringValue**  
Return a string from an XPath expression. If multiple values are returned, only the first value is retrieved. In a *For each node* event, the XPath is relative to the current node.
