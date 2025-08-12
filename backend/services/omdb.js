const axios = require('axios');
const { OMDB_API_KEY } = require('../config/env');

const fetchMovie = async (title) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`
    );

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Movie not found!');
    }

    return {
      title: response.data.Title,
      rating: parseFloat(response.data.imdbRating) || 0,
      year: response.data.Year,
      poster: response.data.Poster || '',
      plot: response.data.Plot,          
      director: response.data.Director,
    };
  } catch (err) {
    console.error('[OMDb Service Error]:', err.message);
    throw err;
  }
};

module.exports = { fetchMovie };