## Display Flex

The `display: flex` property in CSS is used to create a flex container, enabling a flex context for its direct children. This allows for easy manipulation of the layout and alignment of child elements along the main axis and cross axis. Here's an overview of `display: flex`:

### Flex Container

When an element's display property is set to `flex`, it becomes a flex container, and its direct children become flex items. The flex container can have flex items arranged in either a row or a column.

### Flex Direction

The `flex-direction` property determines the direction in which flex items are laid out within the flex container. It can be set to one of the following values:
- `row`: Flex items are laid out horizontally in a row (default).
- `row-reverse`: Flex items are laid out horizontally in a row, but in reverse order.
- `column`: Flex items are laid out vertically in a column.
- `column-reverse`: Flex items are laid out vertically in a column, but in reverse order.

### Flex Wrap

The `flex-wrap` property determines whether flex items are forced onto a single line or can wrap onto multiple lines. It can be set to:
- `nowrap`: Flex items are laid out in a single line (default).
- `wrap`: Flex items wrap onto multiple lines if needed.
- `wrap-reverse`: Flex items wrap onto multiple lines in reverse order if needed.

### Flex Justify Content

The `justify-content` property aligns flex items along the main axis of the flex container. It can be set to:
- `flex-start`: Flex items are packed toward the start of the main axis.
- `flex-end`: Flex items are packed toward the end of the main axis.
- `center`: Flex items are centered along the main axis.
- `space-between`: Flex items are evenly distributed along the main axis, with the first item at the start and the last item at the end.
- `space-around`: Flex items are evenly distributed along the main axis, with equal space around them.

### Flex Align Items

The `align-items` property aligns flex items along the cross axis of the flex container. It can be set to:
- `flex-start`: Flex items are aligned at the start of the cross axis.
- `flex-end`: Flex items are aligned at the end of the cross axis.
- `center`: Flex items are centered along the cross axis.
- `baseline`: Flex items are aligned such that their baselines align.
- `stretch`: Flex items are stretched to fill the container along the cross axis (default).

### Flex Align Content

The `align-content` property aligns a flex container's lines within the flex container when there is extra space in the cross axis. It can be set to:
- `flex-start`: Lines are packed toward the start of the container.
- `flex-end`: Lines are packed toward the end of the container.
- `center`: Lines are centered in the container.
- `space-between`: Lines are evenly distributed in the container, with the first line at the start and the last line at the end.
- `space-around`: Lines are evenly distributed in the container, with equal space around them.
- `stretch`: Lines are stretched to fill the container (default).

Using `display: flex` along with these properties provides a powerful and flexible way to create layouts in CSS.
