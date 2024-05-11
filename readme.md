## Data Types in JavaScript

JavaScript has several data types, categorized into primitive data types and non-primitive (reference) data types. Let's explore each of them:

### 1. Primitive Data Types

#### a. Undefined
- Represents a variable that has been declared but not assigned a value.
- Example: `var x;`

#### b. Null
- Represents the intentional absence of any object value.
- Example: `var y = null;`

#### c. Boolean
- Represents a logical value indicating `true` or `false`.
- Example: `var isTrue = true;`

#### d. Number
- Represents numeric values.
- Example: `var num = 10;`

#### e. String
- Represents a sequence of characters enclosed within single quotes (`''`), double quotes (`""`), or backticks (template literals) (`` ` ``).
  - Example with single quotes: `var str1 = 'Hello';`
  - Example with double quotes: `var str2 = "World";`
  - Example with template literals: ``var str3 = `JavaScript`;``

  **Basic Properties and Methods of Strings:**
  - `length`: Returns the length of a string.
  - `charAt(index)`: Returns the character at the specified index.
  - `concat(str1, str2)`: Concatenates two or more strings.
  - `split(separator)`: Splits a string into an array of substrings.
  - `trim()`: Removes whitespace from both ends of a string.
  - and more. [Reference: String Object - W3Schools](https://www.w3schools.com/jsref/jsref_obj_string.asp)

#### f. Symbol
- Represents a unique and immutable data type that is often used as an identifier for object properties.

Understanding these primitive data types is crucial for effective JavaScript programming.
