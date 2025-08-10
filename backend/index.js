const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');

connectDB();
const app = express();


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});