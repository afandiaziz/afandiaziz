const express = require('express');
const router = express.Router();

const handler = require('./handlers/profile')
router.get('/', handler.profile);

module.exports = router;
