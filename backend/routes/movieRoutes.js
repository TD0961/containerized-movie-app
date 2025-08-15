const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Case 1: List all movies
router.get('/', movieController.listMovies);

// Case 2: Search movies
router.get('/search', movieController.searchMovies);

// Add new movie from OMDB
router.post('/', movieController.addMovie);

module.exports = router;