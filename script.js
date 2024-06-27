// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// function parentClick(event) {
//     event.stopPropagation();
//     console.log("Parent Click", event)
// }

// function childClick(event) {
//     event.stopPropagation();
//     console.log("child Click", event)
// }


// function documentClick(event) {
//     console.log("Document Click", event);
// }


// document.addEventListener("click", documentClick)
// parent.addEventListener("click", parentClick)
// child.addEventListener("click", childClick)

/**
 * Data type - Primitive / Non-Primitive
 * function - this - method call function call
 * string , array -> map,  filter, reduce, slice(5,6), splice(5,6)
 * ES6 - 2015 / let const === ==, arrow function, 
 * shallow copy (...)reset/spread / Deep copy JSON.stringfy(), JSON.parse()
 * 
 * */

/*
 * JS -> Web API
 */

// setTimeout() //
// setInterval() //
// clearTimeout() //
// clearInterval() //


// console.log("Line 1")
// const id1 = setTimeout(timeout, 1000)
// console.log("Line 3")

// const id2 = setTimeout(timeout1, 1000)

let count = 0;

const id = setInterval(timeout, 1000)

function timeout() {
    console.log("Line", count++);
    if(count == 5){
        clearInterval(id)
    }
    // clearTimeout(id2)
}

function timeout1() {
    console.log("Line 4");
    // clearTimeout(id1)
}

// console.log(id1, id2)

