const div = document.getElementById("div")

// let count = 0;

function randomNumber() {
    return (Math.random() * 255).toFixed(0)
}
function addBoxHandler() {

    const box = document.createElement("div"); // Element create
    box.setAttribute("class", "box"); // Attribute set
    const r = randomNumber()
    const g = randomNumber()
    const b = randomNumber()
    
    // const rgb = `background-color: rgb(${r}, ${g}, ${b})`;
    // box.setAttribute("style", rgb) // inline

    const rgb = `rgb(${r}, ${g}, ${b})`;

    box.style.backgroundColor = rgb

    // box.innerText = count;
    // count++;

    div.appendChild(box) // Element add into html

    
    console.log(rgb)

}