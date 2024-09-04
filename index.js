const express = require('express');
const fs = require('fs');
const app = express();

// Middlerware

app.use(express.json()); // allow the body

let data = [
    {
        "name": {
            "firstname": "Dhruv 1",
            "lastname": "Suhagiya"
        },
        "email": "dhruv1@gmail.com",
        "password": "123456789",
        "username": "dhruv_suhagiya",
        "phone": "1234567890",
        "id": 1725427635629
    },
    {
        "name": {
            "firstname": "Dhruv 1",
            "lastname": "Suhagiya"
        },
        "email": "dhruv@gmail.com",
        "password": "123456789",
        "username": "dhruv_suhagiya",
        "phone": "123456780",
        "id": 1725427646514
    }
]; // Database

app.get('/user', (req, res) => {
    res.send(data)
})

app.get('/user/:id', (req, res) => {
    // Logic
    res.send("data")
})

app.post('/user', (req, res) => {

    const user = data.find(item => item.email === req.body.email || item.phone === req.body.phone);

    if (user) {
        return res.send("User alreday exits");
    }

    data.push({ ...req.body, id: Date.now() })
    res.send("User Created")
})

// user Update

// PUT/PATCH

// PUT -> 
// PATCH ->

app.put('/user/:id', (req, res) => {

    const { id } = req.params;
    const data1 = req.body;

    const user = data.find(item => item.id == id);
    if (!user) {
        return res.send("User Not Found")
    }

    for (key in data1) {
        user[key] = data1[key];
    }
    // user.name = data1.name;
    // user.email = data1.email;
    // user.password = data1.password;
    // user.phone = data1.phone;
    // user.username = data1.username;

    res.send(user)

})

app.patch('/user/:id', (req, res) => {

    const { id } = req.params;
    const data1 = req.body;

    const user = data.find(item => item.id == id);
    if (!user) {
        return res.send("User Not Found")
    }

    for (key in data1) {
        if (data1[key] === true) {
            delete user[key];
        }
    }

    res.send(user)

})
// User Delete
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    data = data.filter(item => item.id != id);
    res.send("User Deleted")

})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});