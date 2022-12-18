const mongoose = require('mongoose');

const { Schema } = mongoose;

const calendarSchema = new Schema({
  userName: String,
  email: String,
  title: String,
  date: String
});

const Calendar = mongoose.model('calendar', calendarSchema);

module.exports = Calendar;