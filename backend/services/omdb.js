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
    year: response.data.Year.match(/\d{4}/)?.[0] || 'N/A', // Extract year
    rating: parseFloat(response.data.imdbRating) || 0,
    poster: response.data.Poster.includes('http') 
      ? response.data.Poster 
      : '', // Handle "N/A" posters
    plot: response.data.Plot || 'No description available',
    director: response.data.Director || 'Unknown',
    };
  } catch (err) {
    console.error('[OMDb Service Error]:', err.message);
    throw err;
  }
};

module.exports = { fetchMovie };