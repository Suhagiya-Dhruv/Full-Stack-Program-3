// Event Listener

// const divElement = document.getElementById("div")

// let count = 0;
// function clickHandler() { // callback function
//     console.log("Div Clicked", count++);
//     if(count === 5){
//         divElement.removeEventListener("click", clickHandler)
//     }
// }

// divElement.addEventListener("click", clickHandler)

// const plusButton = document.getElementById("plus");
// const minusButton = document.getElementById("minus");
// const countShow = document.getElementById("count");

// let count = 0;
// plusButton.addEventListener("click", function plus(){
//     count++;
//     countShow.innerText = "Count : " + count // Count : 0
// });

// minusButton.addEventListener("click", () => {
//     count--;
//     countShow.innerText = "Count : " + count
// });


// const countShow = document.getElementById("count");

// let count = 0;

// function plushandler() {
//     count++;
//     countShow.innerText = "Count : " + count

// }

// const minushandler = () => {
//     count--;
//     countShow.innerText = "Count : " + count
// }


// const button = document.getElementById("button");

// button.addEventListener("dblclick", ()=>{
    // logic
    // console.log("Button double clicked")
// })

document.addEventListener("keypress", (event)=>{ // keyup, keydown, keypress
    // console.log(event)
    console.log(event.key)
    if(event.key === "Enter"){
        alert("Enter Key Pressed");
    }
})