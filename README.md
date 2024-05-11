# Understanding HTML Lists and Images

This repository contains a simple HTML document showcasing the usage of list tags (`<ol>`, `<ul>`, `<dl>`) and image tags (`<img>`).

## List Tags

### Ordered List (`<ol>`)
An ordered list (`<ol>`) is used to create a list of items in a specific order. Each item is marked with a number or another marker determined by the `type` attribute.

Example:
```html
<ol type="1">
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
</ol>
```

### Unordered List (`<ul>`)
An unordered list (`<ul>`) is used to create a list of items with no specific order. Each item is marked with a bullet point or another marker determined by the `type` attribute.

Example:
```html
<ul type="disc">
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
</ul>
```

### Description List (`<dl>`)
A description list (`<dl>`) is used to create a list of terms and their descriptions. Each term is defined using the `<dt>` tag, and its description is defined using the `<dd>` tag.

Example:
```html
<dl>
    <dt>hello</dt>
    <dd>hlkjsflksdjklsdj</dd>
    <dt>hello</dt>
    <dd>hlkjsflksdjklsdj</dd>
</dl>
```

## Image Tags

### Image Tag (`<img>`)
The image tag (`<img>`) is used to embed images in an HTML document. It is a self-closing tag and requires attributes such as `src` (source), `height`, `width`, and `alt` (alternative text).

Example:
```html
<img src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png" height="100px" width="100px" alt="Image online 1" />
```

### Image Online 2
```html
<img src="./image.webp" height="100px" width="100px" alt="Image online 2" />
```
