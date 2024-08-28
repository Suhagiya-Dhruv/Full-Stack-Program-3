// const { sum, minus } = require("./opration")
// // const { minus } = require("./opration")

// const ans = minus(10, 20)

// console.log(ans);


// File system

/*
Read,
create,
detele
update
*/

const fs = require('fs')


// const data = fs.readFileSync('hello.txt', 'utf-8') // path, encode -  read

// const data = fs.writeFileSync('hello.txt', '<h1>File 1</h1>') // new file, overwrite - create

// const data = fs.unlinkSync('hello.txt') // delete

// const data = fs.appendFileSync('test.txt', '\nline 3');

fs.readFile('hello.txt', 'utf-8', (a, b) => {
    console.log(a, b)
})

// console.log(data)

// task : httpserver