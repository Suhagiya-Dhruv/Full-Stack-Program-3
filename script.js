const div = document.getElementById('text');

const alph = "ABCDEFGHIJKLMNOPQSTUVWXYZ";


function createNewElement(){
    const h2 = document.createElement('h2');
    h2.style.position = "absolute",
    h2.style.top = `${Math.random()*95}%`;
    h2.style.left = `${Math.random()*95}%`;

    h2.innerText = alph.charAt(Math.floor(Math.random()*26))

    div.appendChild(h2);


}

function clickhandler(event) {

    let found = 1;

    for (let i = 0; i < div.children.length; i++) {
        if (div.children[i].innerText.toLowerCase() === event.key) {
            console.log(event.key, "Found")
            div.children[i].remove()
            createNewElement()
            found = 0;
        }
    }

    if(found === 1){
        createNewElement()
        createNewElement()
    }

    if(div.children.length > 15){
        alert("Game over")
    }

}
document.addEventListener("keyup", clickhandler)