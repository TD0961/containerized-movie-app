require('dotenv').config();
const { fetchMovie } = require('./services/omdb');

(async () => {
  try {
    // Test 1: Fetch a known movie
    const movie = await fetchMovie('Guardians of the Galaxy Vol. 2');
    console.log('✅ TEST 1: Success! Movie data:\n', movie);

    // Test 2: Handle missing movie
    try {
      await fetchMovie('Nonexistent Movie XYZ');
    } catch (err) {
      if (err.message.includes('Movie not found')) {
        console.log('✅ TEST 2: Correctly handled missing movie');
      } else {
        console.log('❌ TEST 2: Unexpected error:', err.message);
      }
    }
  } catch (err) {
    console.log('❌ Unexpected error:', err.message);
  }
})();