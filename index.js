const express = require('express');
const mongoose = require('mongoose');

const server = express();

const url = "mongodb://localhost:27017/mydb" // 27017 default port mongodb://localhost:27017/

mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting'))

const port = 6000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});