## CSS Selector

CSS selectors are patterns used to select and style HTML elements. They allow you to target specific elements or groups of elements in your HTML document. Here are three commonly used CSS selectors:

### 1. Element Selector

The element selector targets HTML elements based on their tag name. It applies styles to all elements of that type within the document.

Example:
```css
p {
    color: blue;
}
```
This will make all `<p>` elements blue.

### 2. Class Selector (.)

The class selector targets HTML elements with a specific class attribute. It allows you to apply styles to multiple elements that share the same class.

Example:
```css
.myClass {
    font-size: 18px;
    color: red;
}
```
This will apply the specified styles to all elements with `class="myClass"`.

### 3. ID Selector (#)

The ID selector targets a single HTML element based on its unique ID attribute. It is used when you want to style a particular element uniquely.

Example:
```css
#myId {
    background-color: yellow;
}
```
This will apply the specified styles to the element with `id="myId"`.

### Combining Selectors

You can also combine selectors to target elements more precisely. For example, you can target elements with a specific class inside another element, or elements with a specific class and ID.

Example:
```css
div .myClass {
    font-weight: bold;
}
```
This will make all elements with `class="myClass"` that are descendants of `<div>` elements bold.

### Specificity

It's important to understand that selectors have different levels of specificity, meaning some selectors have higher priority over others when conflicting styles are applied. In general, ID selectors have the highest specificity, followed by class selectors, and then element selectors.

Example:
```css
#myId {
    color: red; /* This will take precedence over the color specified by the class selector */
}

.myClass {
    color: blue;
}
```
