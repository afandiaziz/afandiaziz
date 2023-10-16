const express = require('express');
const router = express.Router();

const handler = require('./handlers/stacks')
router.get('/', handler.getStacks);

module.exports = router;
