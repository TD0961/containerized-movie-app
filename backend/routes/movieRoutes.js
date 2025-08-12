const express = require('express');

const { getMovie } = require('../controllers/movieController');

const router = express.Router();
router.get('/', getMovie);

module.exports = router; 