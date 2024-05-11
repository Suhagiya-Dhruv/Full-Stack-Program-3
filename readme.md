## Non-primitive data types in JavaScript 

Non-primitive data types in JavaScript, also known as reference types, include objects, arrays, and functions. Unlike primitive data types, which store the actual values, non-primitive data types store references to memory locations where the data is stored. Here's a brief overview of each:

### 1. Objects
- Objects are complex data types that can store collections of key-value pairs.
- They can represent real-world entities or abstract concepts.
- Examples:
  ```javascript
  var person = { name: "John", age: 30 };
  var car = { brand: "Toyota", model: "Camry" };
  ```

### 2. Arrays
- Arrays are special kinds of objects that store collections of data, typically in sequential order.
- They can contain elements of any data type, including other arrays and objects.
- Examples:
  ```javascript
  var numbers = [1, 2, 3, 4, 5];
  var fruits = ["apple", "banana", "orange"];
  ```

### 3. Functions
- Functions are objects that can be invoked to perform a specific task.
- They can be defined using function declarations, function expressions, arrow functions, or as methods of objects.
- Examples:
  ```javascript
  function greet(name) {
      return "Hello, " + name + "!";
  }

  var add = function(a, b) {
      return a + b;
  };
  ```

Non-primitive data types provide more flexibility and functionality compared to primitive data types. Understanding how to work with them is essential for building complex JavaScript applications.
