## Table of Contents
1. [Arrays and References](#arrays-and-references)
2. [Object Manipulation](#object-manipulation)
3. [Variable Assignment and Primitives](#variable-assignment-and-primitives)

### Arrays and References

In JavaScript, arrays are reference types. When you modify an array, the changes are reflected in all references to that array.

```javascript
const a = [];

a.push(10);

const b = [1, 2, 3];

a.push(b); // a becomes [10, [1, 2, 3]]
a[1][1] = 5;

console.log("a -> ", a); // a -> [10, [1, 5, 3]]
console.log("b -> ", b); // b -> [1, 5, 3]

b[1] = 10;

console.log("a -> ", a); // a -> [10, [1, 10, 3]]
console.log("b -> ", b); // b -> [1, 10, 3]
```

### Object Manipulation

Objects in JavaScript are also reference types. Changing one reference to an object will reflect in all other references to the same object.

```javascript
const a = {
    a: 10
};

console.log(a); // { a: 10 }

a.b = 20;

console.log(a); // { a: 10, b: 20 }
```

When you create a new object, it is a separate reference.

```javascript
const a = {
    a: 10,
    b: 20,
};

const b = {
    a: 10,
    b: 20,
};

const c = a;

delete c.a;

console.log(a); // { b: 20 }
console.log(b); // { a: 10, b: 20 }
console.log(c); // { b: 20 }
```

### Variable Assignment and Primitives

Primitive types in JavaScript (such as numbers and strings) are copied by value.

```javascript
var b = 10;
var c = b;

c = 5;

console.log(b); // 10
console.log(c); // 5
```