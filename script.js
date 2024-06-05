// rest & spread oprator

// function run(a, ...b) {
//     console.log(a, ...b);
// }

// run(5, 2, "Hi", true)

// const a = [1, 2, 3, 4, 5, 6, 7];

// const [b, c, ...d] = a;

// console.log(b, c, ...d)

// const a = {
//     name: "a",
//     fname: "b",
//     lname: "c",
//     address: "surat",
//     pincode: 9878987
// }

// const pincode = a.pincode;
// const name = a.name;

// const { pincode, name, fname, lname, addrss } = a


// console.log(name, pincode, fname, lname, addrss)

// const a = {
//     a: "A",
//     b: "B"
// }

// const b = {
//     c: "C",
//     d: "D"
// }

// const c = {
//     ...a,
//     ...b
// }

// console.log(c)

// const a = {
//     name: "value",
//     fname: "fname",
//     lname: "lname",
//     address: {
//         city: "surat",
//         pincode: "987898"
//     }
// }

// const b = {
//     name: "value1",
//     fname: "fname1",
//     lname: "lname2",
//     address: {
//         ...a.address
//     }
// }

// a.address.city= ""

// console.log(a)
// console.log(b)

// array Method

// push, pop, unshift, shift, join, concat , split

// const a = [1, 2, 3, 4, 5]
// const b = [6, 7, 8, 9, 10]

// const c = a.concat(b)
// const c = a.push(...b)
// const c = [...a, ...b]

// console.log(c)

// map

/*
1. Return new Array
2. If you are not return anything then return undefined value
*/

const a = [1, 2, 3, 4, 5];

// function duplicate(value, index) {
//     console.log(value, index)
//     return value*value
// }
// const b = a.map(duplicate);

// console.log(b)

// const b = a.map(function (value, index) {
//     console.log(value, index)
//     return value*value
// });

// console.log(b)

// const b = a.map((value, index) => {
//     console.log(value, index)
//     return value*value
// });

// console.log(b)

const b = a.map((value) => value * value);

console.log(b)

// map , filter, reduce, slice, splice