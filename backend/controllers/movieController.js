const Movie = require('../models/Movie');
const { fetchMovie } = require('../services/omdb');
const Movies = require('../models/Movie');

exports.getMovie = async (req, res, next) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' }); 
  }

  try {
    const omdbData = await fetchMovie(title);

    const existingMovie = await Movie.findOne({ title: omdbData.title });
    if (existingMovie) {
      return res.status(409).json({ error: 'Movie already exists in the database!' });
    }

    const movie = new Movies(omdbData);
    await movie.save();

    res.status(201).json(movie);
  } catch (err) {
    next(err); 
  }
};