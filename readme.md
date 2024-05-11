## Display Grid

In CSS, the `display: grid` property allows you to create grid layouts with rows and columns, providing a powerful way to structure and align content on a webpage. Here's an overview of using `display: grid`:

### Grid Container

When you apply `display: grid` to an element, it becomes a grid container, and its direct children become grid items. The grid container defines the context for the grid layout.

### Grid Template Columns and Rows

You can use the `grid-template-columns` and `grid-template-rows` properties to define the size and number of columns and rows in the grid.

Example:
```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 50px 100px;
}
```

### Grid Gap

The `grid-gap` property allows you to specify the size of the gap between grid items in the grid layout.

Example:
```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 50px 100px;
    grid-gap: 10px;
}
```

### Justify Content and Align Items

You can use properties like `justify-content` and `align-items` to align grid items within the grid container along the main axis and cross axis, respectively.

Example:
```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 50px 100px;
    justify-content: center;
    align-items: center;
}
```

### Grid Template Areas

The `grid-template-areas` property allows you to define named grid areas within the grid layout, making it easier to create complex layouts.

Example:
```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 50px 100px;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}
```

### Media Query

A media query in CSS allows you to apply different styles based on the characteristics of the device or browser viewing the page, such as screen size, orientation, or resolution.

Example:
```css
@media screen and (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
}
```
here's a table providing information about common devices and their screen widths in pixels:

| Device         | Screen Width (px) |
|----------------|-------------------|
| Mobile Phones  | Below 576px       |
| Tablets        | 576px - 768px     |
| Small Laptops  | 769px - 992px     |
| Medium Laptops | 993px - 1200px    |
| Large Laptops  | 1201px and above  |

These are approximate ranges and can vary depending on the specific device and its screen resolution. When creating media queries, it's important to consider these ranges to ensure that your website looks good and functions properly across different devices and screen sizes.
