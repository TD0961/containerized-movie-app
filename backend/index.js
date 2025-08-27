require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
}));

// Routes
app.use('/api/movies', movieRoutes);

// Root check
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Healthcheck for Docker
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handler (must come after routes)
app.use(errorHandler);

// Start server 
let server;

async function start() {
  try {
    await connectDB(); // connect to MongoDB
    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // exit if DB connection fails
  }
}

start();

// Graceful shutdown for Docker/containers
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
  console.log("Shutting down gracefully...");
  if (server) {
    server.close(() => {
      console.log("HTTP server closed.");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}
