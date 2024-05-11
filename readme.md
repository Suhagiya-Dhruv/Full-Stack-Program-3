## Inheritance

In CSS, inheritance refers to the mechanism by which certain properties of an element are passed down to its children. This can help simplify styling by allowing properties to be defined at a higher level in the document tree and applied to multiple elements. Here are some common properties that are inherited:

- **color**: The color of text content.
- **font-family**: The font family used for text.
- **font-size**: The size of the font.
- **font-weight**: The weight of the font (e.g., bold).
- **font-style**: The style of the font (e.g., italic).
- **line-height**: The height of each line of text.

## Units

In CSS, units are used to specify measurements for various properties such as length, width, and font size. There are two main categories of units: absolute and relative.

### Absolute Units

Absolute units are fixed and do not change with the display size or zoom level. Some common absolute units include:

- **px (pixels)**: One pixel is equal to one dot on the computer screen.
- **cm (centimeters)**: A unit of length equal to one hundredth of a meter.
- **mm (millimeters)**: A unit of length equal to one thousandth of a meter.
- **inch**: A unit of length equal to 1/12 of a foot or 2.54 centimeters.

### Relative Units

Relative units are based on the size of other elements or the viewport and can change with the display size or zoom level. Some common relative units include:

- **rem**: Relative to the font size of the root element (`html`). It allows you to set a font size relative to the base font size of the document.
- **em**: Relative to the font size of the parent element. If no font size is specified, it inherits the font size of the parent element.
- **vh (viewport height)**: Equal to 1% of the height of the viewport.
- **vw (viewport width)**: Equal to 1% of the width of the viewport.
- **% (percentage)**: Relative to the size of the parent element.

Understanding these units and how they behave can help you create flexible and responsive layouts in your CSS stylesheets.
