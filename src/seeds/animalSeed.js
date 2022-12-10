require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const animals = require('../models/animal');



const seed = async () => {
  await animals.create({
    species: 'Dog',
    photos: [],
    breed: 'Pitbull',
    size: 'medium',
    color: 'black/white',
    sex: 'male',
    cost: 1200,
    spayedNeutered: true
  });
  console.log('Seeded animals into database!');

  mongoose.disconnect();
};
seed();
