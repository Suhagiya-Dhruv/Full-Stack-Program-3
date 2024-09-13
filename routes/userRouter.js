const express = require('express');
const { createUser, loginUser, fetchUser } = require('../controller/userController')

const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/user', fetchUser);

module.exports = router;
