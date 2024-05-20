# Scoping in JavaScript

## Introduction

Scoping refers to the visibility and accessibility of variables in different parts of your code. Understanding scoping is essential for writing clean and maintainable JavaScript code.

## Global Scope

Variables declared outside of any function or block have global scope. They are accessible from anywhere in your code.

```javascript
var a = 10;
console.log(a); // Output: 10
```

## Function Scope

Variables declared inside a function have function scope. They are accessible only within that function.

```javascript
function run() {
    var b = 15;
    console.log(b); // Output: 15
}

run();
console.log(b); // Throws an error: b is not defined
```

## Block Scope

With the introduction of `let` and `const` in ES6, JavaScript now has block scope. Variables declared with `let` and `const` are accessible only within the block they are defined in.

```javascript
{
    let c = 20;
    console.log(c); // Output: 20
}

console.log(c); // Throws an error: c is not defined
```

## Lexical Scope

JavaScript uses lexical scoping, also known as static scoping. This means that the accessibility of variables is determined by their position in the code.

```javascript
var a = 10;

function run() {
    console.log(a); // Output: 10
}

run();
```

In the above example, `run()` can access variable `a` because `run()` is lexically within the same scope where `a` is defined.
