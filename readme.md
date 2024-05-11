## Overflow

Overflow in CSS refers to what happens when the content of an element is larger than the size allocated to contain it. There are several values for the `overflow` property, each controlling how overflowed content is displayed:

- **visible**: Content is not clipped and may overflow the box.
- **hidden**: Content that overflows the box is clipped and not visible.
- **scroll**: Adds scrollbars to the box, allowing users to scroll to see the overflowed content.
- **auto**: Adds scrollbars only when necessary, based on the content size and box dimensions.

## Display

The `display` property in CSS controls how an element is displayed in the document. There are several values for the `display` property, each defining how an element behaves in terms of its layout and how it interacts with other elements:

- **inline**: Elements are displayed inline, meaning they flow along with text content. They only take up as much width as necessary and do not start on a new line.
- **block**: Elements are displayed as block-level elements, starting on a new line and taking up the full width available by default. They can have width, height, margin, padding, and border properties applied to them.
- **inline-block**: Combines features of both inline and block elements. Inline-block elements flow inline like inline elements, but they can have width, height, margin, padding, and border properties applied to them.

### Comparison Table

Here's a comparison of various CSS styles for inline, block, and inline-block elements:

| Styles     | Inline | Block | Inline-Block |
| ---------- | ------ | ----- | ------------ |
| Width      | False  | True  | True         |
| Height     | False  | True  | True         |
| Vertical Margin  | True   | True  | True         |
| Horizontal Margin  | True   | True  | True         |
| Vertical Padding | True   | True  | True         |
| Horizontal Padding | True   | True  | True         |

Understanding these CSS properties and values is crucial for controlling the layout and appearance of elements on a webpage.
