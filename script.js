// Timer

const secValue = document.getElementById("secValue");
const btn = document.getElementById('btn');
let button = 0;
let id;
let curr_sec = 0;

function startHandler() {

    let sec = curr_sec || Number(document.getElementById("sec").value);
    if (button === 0) {
        secValue.innerText = sec;

        if (sec != 0) {
            btn.innerText = "Stop"
            id = setInterval(() => {
                secValue.innerText = --sec;
                curr_sec = sec;
                if (sec == 0) {
                    clearInterval(id)
                    button = 0;
                    btn.innerText = "Start"
                }
            }, 1000)

            button = 1;
        }
    } else {
        clearInterval(id)
        btn.innerText = "Start"
        button = 0;
    }

}