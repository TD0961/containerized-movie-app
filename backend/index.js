require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes'); 
const errorHandler = require('./middlewares/errorHandler');

connectDB();
const app = express();
app.use(express.json());

app.use('/api/movies', movieRoutes); 

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});