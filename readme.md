# Understanding the `this` Keyword in JavaScript

The `this` keyword in JavaScript refers to the context in which a function is executed. Understanding how `this` works is crucial for writing effective and maintainable JavaScript code. Let's explore its behavior with examples:

## Memory Allocation and Code Execution

JavaScript allocates memory for variables and executes code sequentially.

```javascript
var a = 15;
var b = 20;
console.log(a); // Output: 15
b = 50;
a = a + b;
console.log(a); // Output: 65
```

## `this` in Global Scope

In the global scope, `this` refers to the global object, which is `window` in web browsers.

```javascript
var a = 15;
console.log(window.a); // Output: 15
console.log(this.a); // Output: 15
console.log(a); // Output: 15
```

## `this` in Object Methods

In an object method, `this` refers to the object itself.

```javascript
var join = {
    fname: "John",
    lname: "Bob",
    joinName: function () {
        console.log(this.fname, this.lname);
    }
}

join.joinName(); // Output: John Bob
```

## `this` in Functions

In regular functions, `this` refers to the global object. However, in strict mode, it's `undefined`.

```javascript
function showThis() {
    console.log(this);
}

showThis(); // Output: window or undefined (in strict mode)
```

## Scoping with `var`, `let`, and `const`

- `var`: Function-scoped variable.
- `let` and `const`: Block-scoped variables introduced in ES6 (2015).

##### var
   - declaration (**✓**)
   - assignment/initialization (**✓**)
   - re-initialization (**✓**)
   - redeclaration (**✓**)
##### let (ES6)**
   - declaration (**✓**)
   - assignment/initialization (**✓**)
   - re-initialization (**✓**)
   - redeclaration (**✕**)
##### const (ES6)
   - declaration (**✕**)
   - assignment/initialization (**✓**)
   - re-initialization (**✕**)
   - redeclaration (**✕**)

```javascript
var a = 15;
a = 20;
console.log(a); // Output: 20

let b = 15;
b = 30;
console.log(b); // Output: 30

const c = 15;
console.log(c); // Output: 15
```

## Immediately Invoked Function Expression (IIFE)

An IIFE is a JavaScript function that runs as soon as it is defined.

```javascript
(function () {
    console.log("IIFE");
})();
```
