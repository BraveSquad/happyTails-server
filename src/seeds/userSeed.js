require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const user = require('../models/user');



const seed = async () => {
  await user.create({
    userName: 'Han',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg',
    email: 'solo.shot.first.2022@gmail.com',
    favorite: ['animal 1', 'animal 2']
  });
  console.log('user seeded in database!');

  mongoose.disconnect();
};
seed();
