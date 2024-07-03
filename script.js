// Promise

// pending
// resolve // fullfiled
// reject


// function apiHit(res, rej) {
// rej()
// res()
//     setTimeout(() => {
//         res("123")
//     },2000)

// rej()
// }

// const data = new Promise(apiHit);

// data.then((data) => {
//     console.log("Promise resolve", data)
// }).catch(() => {
//     console.log("Promise Rejected")
// })


const card = document.getElementById("card");
const data = fetch("https://fakestoreapi.com/products") // return Promise

data.then(response => response.json())
    .then(finalData => {
        // for (let i = 0; i < finalData.length; i++) {
        //     console.log(finalData[i].title)
        // }
        let tag = ""
        finalData.forEach(value => {
            const { id, title, rating, image, price } = value

            tag = tag + `<div class="card">
            <div class="image">
                <img src="${image}" alt="" height="90%" width="90%">
                <div class="rating">${rating.rate}</div>
            </div>
            <div>
                <h2 class="title">${title}</h2>
                <p class="price">₹ ${price}</p>
            </div>
        </div>`

            console.log(tag)
            card.innerHTML = tag
        })
    })
    .catch(err => console.log(err))
