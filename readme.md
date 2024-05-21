### Hoisting

In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows variables to be used before they are declared, albeit with some caveats.

#### Variable Hoisting

```javascript
console.log(a); // undefined
var a = 10;
console.log(b); // undefined
var b = 10;
console.log(b); // 10
```

In the above code snippet, both variable declarations are hoisted to the top, but only the declarations are moved, not the assignments. So, accessing the variables before their assignment results in `undefined`.

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;
```

However, with `let` and `const` declarations, hoisting occurs as well, but there is a temporal dead zone during which accessing the variables will result in a ReferenceError.

#### Function Hoisting

```javascript
run(); // "I am running"
function run() {
    console.log("I am running")
}
```

Functions declared using the `function` keyword are hoisted to the top, so they can be called before their actual declaration in the code.

#### Arrow Functions

Arrow functions, introduced in ES6 (2015), behave differently than traditional function declarations regarding hoisting.

```javascript
run();
const run = () => {
    console.log("I am running")
}
```