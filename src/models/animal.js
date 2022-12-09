const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema({
  species: String,
  breed: String,
  size: String,
  color: String,
  sex: String,
  cost: Number,
  spayedNeutered: Boolean
});

const ANIMALS = mongoose.model('animals', animalSchema);

module.exports = ANIMALS;
