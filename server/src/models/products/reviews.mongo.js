const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});