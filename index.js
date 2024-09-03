const express = require('express');
const fs = require('fs');
const app = express();

// Middlerware

app.use(express.json()); // allow the body

const data = []; // Database

app.get('/user', (req, res) => {
    res.send(data)
})

app.get('/user/:id', (req, res) => {
    // Logic
    res.send("data")
})

app.post('/user', (req, res) => {

    const user = data.find(item => item.email === req.body.email || item.phone === req.body.phone);

    if(user){
        return res.send("User alreday exits");
    }

    data.push({ ...req.body, id: Date.now() })
    res.send("User Created")
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});