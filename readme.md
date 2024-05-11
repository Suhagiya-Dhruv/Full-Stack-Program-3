# Method Array

In JavaScript, arrays come with built-in methods that allow you to manipulate the data stored within them. Here's an overview of some commonly used array methods:

1. `push(element)`: Adds one or more elements to the end of an array.
2. `pop()`: Removes the last element from an array.
3. `unshift(element)`: Adds one or more elements to the beginning of an array.
4. `shift()`: Removes the first element from an array.
5. `concat(array)`: Combines two or more arrays.
6. `join(separator)`: Joins all elements of an array into a string, with an optional separator.
7. `indexOf(element)`: Returns the index of the first occurrence of a specified element in an array.

Example:
```javascript
var b = [1, 2, 3, 4, 5];
b.push(6); // Adds 6 to the end of the array
b.pop(); // Removes the last element from the array
b.unshift(0); // Adds 0 to the beginning of the array
b.shift(); // Removes the first element from the array
var c = [11,12,13,14,15].concat(b); // Combines two arrays
var d = b.join("-"); // Converts the array into a string with "-" as separator
var e = b.indexOf(3); // Returns the index of the element 3 in the array
```

# Function

Functions in JavaScript are blocks of reusable code that perform a specific task. They can be invoked multiple times with different arguments. Here's how to define and use functions:

```javascript
function run() {
    console.log("Hello");
    return "Hi";
}

run(); // Function call

var result = run(); // Store the return value of the function
console.log(result); // Output: Hi

function sum(a, b) {
    return a + b;
}

var total = sum(50, 58); // Function call with arguments
console.log(total); // Output: 108
```

# Method Call

In JavaScript, methods are functions that are stored as object properties. They can be called using dot notation or by referencing the property directly. Here's an example:

```javascript
var a = {
    name: "Fname",
    fn: function () {
        console.log("Method Call");
    }
};

a.fn(); // Method Call

var b = a.fn;
b(); // Function Call
```
