const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');
const videoRouter = require('./routes/videoRouter');

const server = express();

server.use(express.json());

const url = "mongodb://localhost:27017/mydb" // 27017 default port mongodb://localhost:27017
mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting'))

const port = 5000;

server.use('/user', userRouter)
server.use('/video', videoRouter)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});