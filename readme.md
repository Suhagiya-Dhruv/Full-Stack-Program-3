### Rest and Spread Operators in JavaScript

The rest and spread operators in JavaScript are powerful features for working with arrays and objects. They allow for more flexible and concise code. Let's break down how they work:

#### Rest Operator

The rest operator (`...`) is used to collect all remaining elements into an array. It is typically used in function parameters to handle an indefinite number of arguments or to collect the rest of the elements during destructuring.

**Example with Function Parameters:**
```javascript
function run(a, ...b) {
    console.log(a);  // first argument
    console.log(b);  // array of remaining arguments
}

run(5, 2, "Hi", true);
// Output: 
// 5
// [2, "Hi", true]
```

**Example with Array Destructuring:**
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...rest] = arr;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5, 6, 7]
```

**Example with Object Destructuring:**
```javascript
const obj = {
    name: "a",
    fname: "b",
    lname: "c",
    address: "surat",
    pincode: 9878987
};

const { pincode, name, ...otherDetails } = obj;
console.log(name);        // "a"
console.log(pincode);     // 9878987
console.log(otherDetails); // { fname: "b", lname: "c", address: "surat" }
```

#### Spread Operator

The spread operator (`...`) is used to spread elements of an iterable (like an array or object) into individual elements. It is commonly used to combine arrays or objects.

**Example with Arrays:**
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
```

**Example with Objects:**
```javascript
const obj1 = {
    a: "A",
    b: "B"
};

const obj2 = {
    c: "C",
    d: "D"
};

const combinedObj = {
    ...obj1,
    ...obj2
};
console.log(combinedObj); // { a: "A", b: "B", c: "C", d: "D" }
```

### Array Methods

JavaScript arrays come with many built-in methods to manipulate them. Here are a few commonly used ones:

#### Concatenation and Spreading

**Concat:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

**Spread:**
```javascript
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

#### Map

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(value => value * value);
console.log(squares); // [1, 4, 9, 16, 25]
```