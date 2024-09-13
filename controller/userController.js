const UserScheme = require('../modal/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
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
}

const loginUser = async (req, res) => {
    try {
        const userFind = await UserScheme.findOne({ email: req.body.email.toLowerCase() })

        if (!userFind) {
            return res.send("Account not exits")
        }

        const password = await bcrypt.compare(req.body.password, userFind.password);

        if (!password) {
            return res.send("Invalid password");
        }

        const token = await jwt.sign({ name: userFind.name, email: userFind.email }, 'hello', {
            expiresIn: '10s'
        });
        return res.send(token);

    } catch (err) {
        return res.send(err)
    }
}

const fetchUser = async (req, res) => {
    try {
        const data = await UserScheme.find({}, { password: 0, __v: 0 }); // {find}, {}

        return res.send(data)
    } catch (err) {
        return res.send(err)
    }
}
module.exports = {
    createUser,
    loginUser,
    fetchUser
}