const request = require('supertest');
const express = require('express');

// Build a chainable mock for Mongoose find().sort().limit()
const chainableFindMock = () => ({
  sort: jest.fn().mockReturnValue({
    limit: jest.fn().mockResolvedValue([]),
  }),
});

// Mock the Movie model to avoid real DB calls
jest.mock('../models/Movie', () => ({
  find: jest.fn().mockImplementation(chainableFindMock),
  findOne: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockResolvedValue({ _id: '1', title: 'Mock Movie' }),
}));

// Mock OMDB service to avoid external HTTP
jest.mock('../services/omdb', () => ({
  fetchMovie: jest.fn().mockResolvedValue({
    title: 'Mock Movie',
    year: '2000',
    rating: 8.0,
    poster: 'N/A',
  }),
}));

const movieRoutes = require('../routes/movieRoutes');

const app = express();
app.use(express.json());

// minimal health route to mirror backend/index.js
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api/movies', movieRoutes);

describe('Health and Movies routes', () => {
  it('GET /health should return 200', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /api/movies should return JSON array (mocked)', async () => {
    const res = await request(app).get('/api/movies');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
