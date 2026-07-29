---
title: "PluginProperty class"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/pluginproperty"
release: 495
---

## On this page

- [Constructor](#constructor)
- [The options object](#the-options-object)

---

PluginProperty defines a single property for an addon that will appear in the Properties Bar. Typically an array of PluginProperty is passed to `this._info.SetProperties()`. See [Configuring Plugins](../guide/configuring-plugins.md) for more information. Note that despite the name, PluginProperty is also used to define properties for behaviors.

Note properties do not directly define any strings that appear in the editor UI. These are defined in [The Language File](../guide/language-file.md).

## Constructor

```javascript
new SDK.PluginProperty(type, id, initialValue_or_options)
```

**type**  
The type of the property. This can be one of:

- `"integer"` — an integer number property, always rounded to a whole number.
- `"float"` — a floating-point number property.
- `"percent"` — a floating-point number in the range [0-1] represented as a percentage. For example if the user enters 50%, the property will be set to a value of 0.5.
- `"text"` — a field the user can enter a string in to.
- `"longtext"` — the same as `"text"`, but a button with an ellipsis ("...") appears on the right side of the field. The user can click this button to open a dialog to edit a long string more conveniently. This is useful for potentially long content like the project description, or the main text of the Text object.
- `"check"` — a checkbox property, returning a boolean.
- `"font"` — a field which displays the name of a font and provides a button to open a font picker dialog. The property is set to a string of the name of the font.
- `"combo"` — a dropdown list property. The property is set to the zero-based index of the chosen item. The `items` field of the options object must be used to specify the available items.
- `"color"`  `[For plugins only]`  — a color picker property. The initial value must be an array, e.g. `[1, 0, 0]` for red.
- `"object"`  `[For plugins only]`  — an object picker property allowing the user to pick an object class. **Note:** At runtime, this passes a SID (Serialization ID) for the chosen object class, or -1 if none was picked. Use [getObjectClassBySid()](../../Construct3-Manual/scripting/scripting-reference/addon-sdk-interfaces/isdkutils.md) to look up the corresponding `IObjectClass`.
- `"projectfile"`  `[For plugins only]`   `[Addon SDK v2 only]`  (r426+) — a dropdown list from which any project file in the project can be chosen. The property value at runtime is a relative path to fetch the project file from. The `"filter"` option can also be specified to filter the list by a file extension, e.g. ".txt" to only list .txt files.
- `"group"` — creates a new group in the Properties Bar. There is no value associated with this property.
- `"link"`  `[For plugins only]`  — creates a clickable link in the Properties Bar. There is no value associated with this property. A `linkCallback` function must be specified in the options object.
- `"info"` — creates a read-only string that cannot be edited. There is no value associated with this property. A `infoCallback` function must be specified in the options object.

**id**  
A string of the ID for the property. This is used in the language file to identify related strings.

**initialValue_or_options**  
For many properties, the only extra information needed is the initial value. For example for a `"float"` parameter this parameter can be a number of the initial value to use for the property. However to configure more options for the property, pass an object instead, and see the section on using an options object below. Some property types require the use of an options object, e.g. `"combo"` requires it to specify the item list.

## The options object

If the third parameter of the constructor is an object, use the following properties to specify further configuration of the property.

**initialValue**  
Specify the initial value for the property, since the third parameter is occupied by the options object. Note when using a `"combo"` type this must be a string of the initial item ID, and when using a `"color"` type, this must be a normalized RGB array, e.g. `[1, 0, 0]` for red.

**minValue**  
Specify a minimum value for a numeric property.

**maxValue**  
Specify a maximum value for a numeric property.

**items**  
Only valid with the `"combo"` property type. Specify an array of strings representing the available item IDs in the dropdown list. The actual displayed strings are read from the language file.

**dragSpeedMultiplier**  
Only valid with numeric properties. Pass a ratio to modify how quickly the value changes when it is being dragged up or down. For example passing 2 would cause the value to increase twice as fast as the mouse moves while dragging the value.

**allowedPluginIds**  
For `"object"` type properties only. An array of plugin ID strings to filter the object picker by. This can also contain the special string `"<world>"` to allow any world-type plugin.

**filter**  
`[Addon SDK v2 only]`  Optional and only valid with the `"projectfile"` type. Set to a file extension including the dot to filter the list of provided project files to only those with the given file extension, e.g. `".txt"`.

**linkCallback**  
For `"link"` type properties only. A function that is called when the link is clicked. The number of calls, and the type of the parameter, are determined by the `callbackType` option.

**callbackType**  
For `"link"` type properties only. Specifies how the link callback function is used. This can be one of the following:

- `"for-each-instance"`  `[default]`  — the callback is run once per selected instance in the Layout View. The callback parameter is an instance of your addon (deriving from `SDK.IWorldInstanceBase`). This is useful for per-instance modifications, such as a link to make all instances their original size.
- `"once-for-type"` — the callback is run once regardless of how many instances are selected in the Layout View. The callback parameter is your addon's object type (deriving from `SDK.ITypeBase`). This is useful for per-type modifications, such as a link to edit the object image.

**infoCallback**  
For `"info"` type properties only. A function that is called to get the value to display as a read-only string. The function is automatically called when any other properties change. The parameter is an instance of your addon, which you can use to read other property values and use them in the returned value.

**interpolatable**  
For `"integer"`, `"float"`, `"percent"`, `"text"`, `"longtext"`, `"check"`, `"combo"` and `"color"` type properties only. Has a default value of `false`, set to `true` so the property can be supported by timelines. In order to fully support timelines it is also needed to follow the [Timeline Integration Guide](../guide/timeline-integration.md).
