// const a = [1, 5, 18, 7, 12, 5, 8];

// const b = a.map((value) => { return value * 3 });

// console.log(b)

// const c = a.filter((value) => value % 2 == 0)

// console.log(c)

// const d = a.reduce((acc, curr) => {
//     return acc * curr
// })

// console.log(d)

// Slice & Splice

// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const b = a.slice();
// const b = a.slice(2);
// const b = a.slice(2, 5);
// const b = a.slice(-9, -5);


// const b = a.splice();
// const b = a.splice(2);
// const b = a.splice(2, 1);
// const b = a.splice(-9, 5);
// const b = a.splice(6, 2, 60, 70, 80, 90, 100);

// console.log(a);
// console.log(b);


// const a = [1, 5, 18, 7, 12, 5, 51, 46, 84];

// [3, 15, 54, 21, 36, 15, 24]
// [3, 15, 54, 21, 36, 15]

// const b = a.map(a => a*3)
// console.log(b)

// const b = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         b.push(a[i])
//     }
// }

// console.log(b)

// let ans = 0;

// for (let i = 0; i < a.length; i++) {
//       ans = ans + a[i]
// }

// console.log(ans)


// shallow copy vs Deep copy

// const a = {
//     a: 10,
//     b: 20,
//     c: {
//         c1: 11,
//         c2: 12
//     }
// }

// const b = { ...a, c:{...a.c} };
// const b = JSON.stringify(a) // string
// const c = JSON.parse(b) // object

// JSON.parse(JONS.stringify(a))

// c.c.c1 = 15

// console.log(a)
// console.log(b)
// console.log(c)

// DOM -> Document Object Model