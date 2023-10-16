const express = require('express');
const router = express.Router();

const handler = require('./handlers/experiences')
router.get('/', handler.getExperiences);

module.exports = router;
