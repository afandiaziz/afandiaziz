const express = require('express');
const router = express.Router();
const handler = require('../handlers/profile')

router.get('/', handler.getProfile);

module.exports = router;
