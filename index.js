const express = require('express');
const mongoose = require('mongoose');
const UserScheme = require('./user');

const server = express();

server.use(express.json());

const url = "mongodb://localhost:27017/mydb" // 27017 default port mongodb://localhost:27017
mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting'))

const port = 6000;

server.post('/create', async function (req, res) {
    const data = req.body;
    await UserScheme.create(data)
    console.log(data);
    res.send('Data Received!');
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});