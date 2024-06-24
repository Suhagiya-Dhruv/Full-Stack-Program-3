const mainInput = document.getElementById("text");
const main = document.getElementById("main_list");


let value = "";
mainInput.addEventListener('input', (event) => {
    value = event.target.value;
})

function itemAdd(){
    const label = document.createElement("label");
    label.setAttribute("class", "list");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    const div = document.createElement("div");
    div.innerText = value;

    label.appendChild(input);
    label.appendChild(div);

    main.appendChild(label);

    mainInput.value = ""

}