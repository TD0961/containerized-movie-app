// middlewares/errorHandler.js
module.exports = (err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
};