const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  image: String,
  email: String,
  favorite: Array
});

const USER = mongoose.model('users', userSchema);

module.exports = USER;
