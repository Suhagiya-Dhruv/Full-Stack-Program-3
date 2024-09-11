const express = require('express');
const mongoose = require('mongoose');
const UserScheme = require('./user');
const bcrypt = require('bcrypt');

const server = express();

server.use(express.json());

const url = "mongodb://localhost:27017/mydb" // 27017 default port mongodb://localhost:27017
mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting'))

const port = 6000;

server.post('/create', async function (req, res) {
    // Error Handling
    try {
        const data = req.body;

        const userFind = await UserScheme.findOne({ email: req.body.email })

        if (userFind) {
            return res.send("Email already exits")
        }

        const password = await bcrypt.hash(req.body.password, 10);

        await UserScheme.create({ ...data, email: req.body.email.toLowerCase(), password })
        return res.send('Data Received!');

    } catch (err) {
        return res.send(err)
    }
})

server.post('/login', async function (req, res) {
    // Error Handling
    try {
        const data = req.body;

        const userFind = await UserScheme.findOne({ email: req.body.email.toLowerCase() })

        if (!userFind) {
            return res.send("Account not exits")
        }

        const password = await bcrypt.compare(req.body.password, userFind.password);

        if (!password) {
            return res.send("Invalid password");
        }

        return res.send('Login Successfully');

    } catch (err) {
        return res.send(err)
    }
})

server.get("/user", async function (req, res) {
    const data = await UserScheme.find({}, { password: 0, __v:0 }); // {find}, {}

    return res.send(data)
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});