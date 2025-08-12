const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be at least 0'],
    max: [10, 'Rating cannot exceed 10'],
    default: 0
  },
  year: {
    type: String,
    match: [/^\d{4}$/, 'Year must be 4 digits (e.g. "2023")']
  },
  poster: {
    type: String,
    default: ''
  },
  plot: {
    type: String,
    trim: true
  },
  director: {
    type: String,
    trim: true
  },
  // Automatically added by timestamps
  // createdAt: Date
  // updatedAt: Date
}, { 
  timestamps: true,  // Adds createdAt and updatedAt fields
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true }
});

// Index for faster title searches
MovieSchema.index({ title: 1 });

// Prevent duplicate movies
MovieSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(new Error('Movie already exists!'));
  } else {
    next(error);
  }
});

module.exports = mongoose.model('Movie', MovieSchema);