require('dotenv').config();

module.exports = { 
  MONGODB_URI: process.env.MONGODB_URI,
  OMDB_API_KEY: process.env.OMDB_API_KEY,
  PORT: process.env.PORT
};