const express = require('express');
const { videoCreateController } = require('../controller/videoController');

const router = express.Router();

router.get('/', videoCreateController);

module.exports = router;