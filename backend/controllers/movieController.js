const Movie = require('../models/Movie');
const { fetchMovie } = require('../services/omdb');

// CASE 1: List all movies (homepage)
// In movieController.js, add logging:
exports.listMovies = async (req, res) => {
  try { 
    const movies = await Movie.find().sort({ createdAt: -1 }).limit(50);
    res.json(movies || []);
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// CASE 2: Search existing movies
exports.searchMovies = async (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'Title required' });

  try {
    const movies = await Movie.find({
      title: { $regex: title, $options: 'i' }
    });
    
    if (movies.length > 0) {
      return res.json(movies);
    }
    
    // CASE 2b: Not found in DB → Fetch from OMDB
    const omdbData = await fetchMovie(title);
    const newMovie = await Movie.create(omdbData);
    res.status(201).json(newMovie);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// NEW: Add movie handler
exports.addMovie = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title required' });

    const omdbData = await fetchMovie(title);
    const existingMovie = await Movie.findOne({ title: omdbData.title });
    
    if (existingMovie) {
      return res.status(409).json({ error: 'Movie already exists' });
    }

    const newMovie = await Movie.create(omdbData);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};