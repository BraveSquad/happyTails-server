const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  userName: String,
  email: String,
  review: String,
  stars: Number
});

const ReviewModel = mongoose.model('reviews', reviewSchema);

module.exports = ReviewModel;
