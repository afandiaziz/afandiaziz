const express = require('express');
const router = express.Router();

router.use('/profile', require('./profile'));
router.use('/experiences', require('./experiences'))
router.use('/stacks', require('./stacks'))

module.exports = router;
