## CSS Selector

CSS selectors are patterns used to select and style HTML elements. They allow you to target specific elements or groups of elements in your HTML document. Below are various CSS selectors along with descriptions and examples:

### 1. Element Selector (tag)

Targets HTML elements based on their tag name.

Example:
```css
p {
    color: blue;
}
```
This will make all `<p>` elements blue.

### 2. Class Selector (.)

Targets HTML elements with a specific class attribute.

Example:
```css
.myClass {
    font-size: 18px;
    color: red;
}
```
This will apply the specified styles to all elements with `class="myClass"`.

### 3. Id Selector (#)

Targets a single HTML element based on its unique ID attribute.

Example:
```css
#myId {
    background-color: yellow;
}
```
This will apply the specified styles to the element with `id="myId"`.

### 4. Grouping Selector (,)

Allows you to apply the same styles to multiple selectors.

Example:
```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```
This will apply the specified font family to all `<h1>`, `<h2>`, and `<h3>` elements.

### 5. Universal Selector (*)

Targets all elements in the document.

Example:
```css
* {
    margin: 0;
    padding: 0;
}
```
This will reset the margin and padding for all elements to zero.

### 6. Multiple Class Selector (.c1.c2)

Targets elements that have multiple classes applied.

Example:
```css
.btn.primary {
    background-color: blue;
    color: white;
}
```
This will style elements with both `class="btn"` and `class="primary"`.

### 7. Attribute Selector (input[value="Select me"])

Targets elements based on their attributes.

Example:
```css
input[type="text"] {
    border: 1px solid black;
}
```
This will apply a border to all `<input>` elements with `type="text"`.

### CSS Combinators

#### Descendant combinator selector (.c1 .c2)

Selects all elements that are descendants of a specified ancestor.

#### Child combinator selector (.c1 > .c2)

Selects all elements that are the direct children of a specified parent.

#### Adjacent sibling selector (+)

Selects an element that is immediately preceded by a sibling element.

#### General sibling selector (~)

Selects all sibling elements that follow a specified element.

### Pseudo-class Selector

Targets elements based on a state or condition that is not specified by HTML.

### Pseudo-element Selector

Targets specific parts of an element, such as the first line or first letter.

These selectors give you powerful control over styling elements in your HTML document, allowing you to create visually appealing and well-structured web pages.
