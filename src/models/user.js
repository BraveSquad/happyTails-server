const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  picture: String,
  email: String,
  favorite: Array,
  isLoading: Boolean
});

const USER = mongoose.model('users', userSchema);

module.exports = USER;
