---
title: "Text input"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/text-input"
release: 495.2
---

## On this page

- [Layering HTML objects](#scripting)
- [Styling text inputs](#layering-html-objects)
- [Text Input properties](#styling-text-inputs)
- [Text input conditions](#text-input-properties)
- [Text input actions](#text-input-conditions)
- [Text Input expressions](#text-input-actions)

---

The **Text input** object is a form control providing a text field the user can type text in to. This is used for getting data from the user; don't confuse it with the [Text](../plugin-reference/text.md) object, which is for displaying text.

### Scripting

When using JavaScript or TypeScript coding, the features of this object can be accessed via the [ITextInputInstance script interface](../scripting/scripting-reference/plugin-interfaces/text-input.md).

## Layering HTML objects

This object displays using a HTML element rather than drawing in to the canvas. This means its layering works differently to other objects. To learn more about how to layer HTML objects, see [HTML layers](../tips-and-guides/html-layers.md).

## Styling text inputs

As Text Input objects are HTML elements, their appearance can be customised using CSS (Cascading Style Sheets). The *ID* and *Class* properties can be used to identify the HTML element, and a CSS [project file](../project-primitives/files.md) added to apply some styles to it.

## Text Input properties

**Text**  
The initial text entered in to the field.

**Placeholder**  
Some text that appears faintly when the field is empty. This can be used for hints for what the field is for, e.g. *Username*.

**Tooltip**  
A tooltip that appears if the user hovers the mouse over the text box and waits. Leave blank for no tooltip.

**Initially visibile**  
Whether or not the text box is shown on startup. If invisible, the field must be shown with the *Set visible* action.

**Enabled**  
Whether the text box is initially enabled. If disabled, the field will be greyed out and cannot be modified.

**Read-only**  
Set whether the field is read-only, which means the text cannot be modified but can still be selected. This is different to disabling the field, which changes the appearance of the input.

**Spell check**  
Enable spell-checking on the text entered in to the field, if the browser supports it. If enabled, spelling errors are underlined with a squiggly red line.

**Type**  
Set the type of content being entered in to the text field, which can be:

- **Text:** any text content
- **Password:** any content but characters hidden
- **Email:** intended for strings in the format of an email, e.g. *joe@bloggs.com*
- **Number:** numerical digits only
- **Telephone number:** telephone number characters only
- **URL:** web addresses in the general format *https://example.com*
- **Textarea:** a multi-line text input, usually displayed with a monospace font
- **Search:** text content intended as a search query

The *email*, *number*, *telephone number* and *URL* types are generally most useful for mobile devices, since they change which type of on-screen keyboard appears when the field is focused. For example, *Text* will show a general purpose on-screen keyboard, whereas *Number* may show a simple number pad, making it more convenient for the user to enter the content.

**Auto font size**  
Automatically set the *font-size* property of the element according to the layout and layer scale. This will prevent the *font-size* CSS property being manually set with the *Set CSS style* action. Disable if you intend to use *Set CSS style* to adjust the *font-size* property.

**ID Optional**  
An optional *id* attribute for the element in the DOM (Document Object Model). This can be useful for accessing the element's value from external scripts, or styling with CSS in the HTML page.

## Text input conditions

See [common conditions](../plugin-reference/common-features/common-conditions.md) for features shared between form control objects.

**Compare text**  
Compare the text currently entered in to the field. The comparison can either be case sensitive ("TEXT" is different to "text") or case insensitive ("TEXT" is the same as "text").

**On clicked**  
Triggered when the user clicks the field.

**On double-clicked**  
Triggered when the user double-clicks the field.

**On text changed**  
Triggered whenever the text in the field is modified, by typing, backspace/delete, cut/paste etc.

## Text input actions

See [common actions](../plugin-reference/common-features/common-actions.md) for features shared between form control objects.

**Append text**  
Add some text to the end of the current text. For example, if the text object contains *Hello* and has *World* appended, the text object then contains *HelloWorld*.

**Scroll to bottom**  
Scroll to the bottom of the control. Only has an effect when set to the *textarea* type, since it is the only multiline mode. This is useful for chat or log style textareas.

**Set max length**  
Set the maximum number of characters allowed to be entered in the field. Set to -1 to disable any limit and allow an unlimited number of characters (which is the default).

**Set placeholder**  
Set the text that appears faintly when the field is empty. This can be used for hints for what the field is for, e.g. *Username*.

**Set read-only**  
Set whether the field is read-only, which means the text cannot be modified but can still be selected. This is different to disabling the field, where text cannot be selected.

**Set text**  
Set the text currently entered in to the field.

**Set tooltip**  
Set the text that appears for the field tooltip. Leave blank for no tooltip.

## Text Input expressions

**MaxLength**  
Return the maximum number of characters allowed to be entered in to the field, as set by the *Set max length* action. If there is no maximum length (the default), this returns -1.

**Text**  
Get a string containing the text currently entered in to the field.
