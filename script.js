const mainInput = document.getElementById("text");
const main = document.getElementById("main_list");


let value = "";
mainInput.addEventListener('input', (event) => {
    value = event.target.value;
})

function itemAdd() {


    const label = document.createElement("label");
    label.setAttribute("class", "list");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    const div = document.createElement("input");
    div.setAttribute("disabled", "true");
    div.setAttribute("class", "input");
    div.style.width = "500px";
    div.value = value;

    const edit = document.createElement("button");
    edit.setAttribute("onclick", "editItem(this)");
    edit.innerText = "Edit"

    const button = document.createElement("button");
    button.setAttribute("onclick", "deleteItem(this)");
    button.innerText = "Delete"


    label.appendChild(input);
    label.appendChild(div);
    label.appendChild(edit);
    label.appendChild(button);

    main.appendChild(label);

    mainInput.value = ""

}

function deleteItem(item) {
    item.parentNode.remove()
}

function editItem(item) {

    const div = item.parentNode.children[1];
    const edit = item.parentNode.children[2];

    if (edit.innerText === "Save") {
        div.setAttribute("disabled", "true")
        edit.innerText = "Edit";
    } else {
        div.removeAttribute("disabled");
        edit.innerText = "Save"
    }
}