// Hoisting


// phase 1 - Memory Creation
// Phase 2 - Code Execution

// console.log(a)
// var a = 10;

// console.log(b)
// var b = 10;

// console.log(b)

// run()

// function run() {
//     console.log("I am running")
// }


// console.log(a);
// let a = 10;

// console.log(b);
// const b = 10;

// Arrow functions

// ES6 -> 2015

// const run = () => {
//     console.log("I am running")
// }

// run();


// function vs Arrow function

// function run() {
//     console.log("I am running")
// }


// const run = () => {
//     console.log("I am running")
// }

// run();

// function run() {
//     return 10;
// }


// const run = () => 10

// const a = run();

// console.log(a);


// const a = 10;

// console.log(a);

// const b = {
//     a: 20,
//     b: 30,
//     c:40
// }

// b = {} not allow

// b.a = 30
// b.b = 20

// delete b.b

// console.log(b);


// const a = []; // Array

// a = [5] not allow

// a.push(5)

// const b = [0, 1, 2]
// a[1] = b

// a.push(b) // [5, [0, 1, 2]]

// a[1][1] = 5;

// console.log(a); // [] -> [5] -> [5, [0,1,2]]

// console.log(b)


