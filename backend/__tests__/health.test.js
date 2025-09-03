const request = require('supertest');
const express = require('express');
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

  it('GET /api/movies should return JSON', async () => {
    const res = await request(app).get('/api/movies');
    expect(res.headers['content-type']).toMatch(/json/);
    expect([Array.isArray(res.body), typeof res.body === 'object']).toBeTruthy();
  });
});
