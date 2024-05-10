// Method Array

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(b);

// b.push(11);
// b.pop();

// b.unshift(50);
// b.shift();

// console.log(b.length);

// var c = [11,12,13,14,15].concat(b);
// console.log(c);

// var d1 = b.join(); // string return
// console.log(d1)

// var d2 = b.join(""); // string return
// console.log(d2)

// var d3 = b.join("-"); // string return
// console.log(d3)


// var b1 = ["A", "B", "C", "D", "E", "F"];

// var e = b1.indexOf("E");
// console.log(e);



// Function
// function run(){ // create a function
//     console.log("Hello")
//     return "Hi"
// }

// run() // Function call
// run()

// console.log(typeof(run)) // type of the function is function

// DRY -> Don't Repeat yourself


// console.log(run())

// var re = run();
// console.log(re)


// function sum(a, b) { // argument // callback function
//     return a + b;
// }

// var b = sum(50, 58) // parameter

// console.log(b)

// var b1 = sum(10,50);

// console.log(b1);

// Method call

var a = {
    name: "Fname",
    fn: function () {
        console.log("Method Call")
    }
}

// console.log(a.name);

a.fn() // Method Call

var b = a.fn;

b(); // Function Call

// this - keyword



