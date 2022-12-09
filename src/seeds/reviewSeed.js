require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const reviews = require('../models/reviews');



const seed = async () => {
  await reviews.create({
    userName: 'Obi',
    image: 'https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?fit=2560%2C1707',
    email: 'ihavethehighergroundani@gmail.com',
    message: 'My dog is broken...but I love him.',
    stars: 5
  });
  console.log('Seeded reviews into database!');

  mongoose.disconnect();
};
seed();
