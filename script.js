// alert("Alert Box")
// confirm("Confirm Box")
// prompt("Prompt Box")


// Change Mode Application -> Dark Mode <-> Light 

// let mode = "white";

// const heading = document.getElementById("h1");
// const body = document.getElementsByTagName("body")[0]
// const changemodehandler = () => {

//     if (mode === "white") {
//         heading.classList.remove("white")
//         heading.classList.add("black")
//         body.classList.add("bg-black")
//         body.classList.remove("bg-white")
//         mode = "black"
//     } else if (mode === "black") {
//         heading.classList.remove("black")
//         heading.classList.add("white")
//         body.classList.remove("bg-black")
//         body.classList.add("bg-white")
//         mode = "white"
//     }
// }

// click, dlbclick, keyup, keydown, keypress

const box = document.getElementById("div")

box.addEventListener("mouseenter", () => {
    console.log("Mouse Enter")
    //Logic
})

box.addEventListener("mouseleave", () => {
    console.log("Mouse Leave")
    // Logic
})

box.addEventListener("mousemove", () => {
    console.log("Mouse Move")
    //Logic
})

box.addEventListener("mouseup", () => {
    console.log("Mouse Up")
    //Logic
})

box.addEventListener("mousedown", () => {
    console.log("Mouse Down")
    //Logic
})



// Rest Button 0
// Dark mode & white mode
// -500 to +500 count with mouse

// change