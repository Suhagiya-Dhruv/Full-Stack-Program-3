/* Multi Line comments */

// Data Types

/*

1. Primitive
 - Number
 - String
 - Boolean
 - Null
 - Undefined
 - Symbol

2. Non-Primitive
 - Object

*/


// var a = 10.5; // Number
// console.log(a);

// var s = 'Hello World'; // String
// console.log(s);

// // Let's Go..!

// var s1 = "Let's Go...!";
// console.log(s1);


// // Hello Dhruv How are you ?

// var name = "Dhruv"
// var s3 = "Hello " + name + " How are you ?";
// var s4 = `Hello ${name} How are you ?`; //backtick -> Template literal
// console.log(s3)
// console.log(s4)

// var b = true;
// console.log(!b);

// // Error
// var c = null;
// console.log(c)

//0 , 1 , 2 , 3  // index
 [1, 2, 3, 4] // array

var s = "Hello                How Are you ?                     ";
console.log(s);
console.log(s.split()); // return array
console.log(s.split('')); // return array
console.log(s.split("h")); // array

console.log(s.charAt()); // single character return
console.log(s.charAt(100)); // single character return

var s2 = "I am fine";
console.log(s.concat(s2)); // return new string
console.log(s2.concat(s)); // return new string

console.log(s.concat(s2).concat(" Hello")); // "Hello How Are you ?I am fine".concat("hello")

console.log(s2.length)

console.log(s.trim())
