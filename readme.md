### JavaScript Array Methods: `map`, `filter`, and `reduce`

#### `map` Method

The `map` method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.

**Key Points:**
- Returns a new array.
- The function you pass to `map` is called once for each element in the array, in order.
- The returned value from the function will be placed in the new array.

**Syntax:**
```javascript
const newArray = array.map((element, index, array) => {
    // Return transformed element
});
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
```

#### `filter` Method

The `filter` method is used to create a new array containing only the elements that pass a certain test defined by a function. It also does not modify the original array.

**Key Points:**
- Returns a new array with all elements that pass the test implemented by the provided function.
- The function you pass to `filter` is called once for each element in the array, in order.
- If the function returns `true`, the element is included in the new array. If it returns `false`, the element is excluded.

**Syntax:**
```javascript
const newArray = array.filter((element, index, array) => {
    // Return true to keep the element, false otherwise
});
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

#### `reduce` Method

The `reduce` method is used to apply a function to each element in the array (from left to right) to reduce it to a single value. It is often used for summing values, accumulating results, or combining values in some way.

**Key Points:**
- Executes a reducer function on each element of the array, resulting in a single output value.
- The `reduce` method takes two arguments: a reducer function and an optional initial value.
- The reducer function has four parameters: accumulator, current value, current index, and the array.

**Syntax:**
```javascript
const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
    // Return updated accumulator
}, initialValue);
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
```

### Summary

- **`map`**: Transforms each element of an array using a function and returns a new array of the same length.
- **`filter`**: Tests each element of an array with a function and returns a new array containing only the elements that pass the test.
- **`reduce`**: Combines all elements of an array into a single value using a function that accumulates a result over each element.
