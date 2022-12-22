'use strict';

//--------- DOTENV Config -------------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//------------------CRUD-------------------//

const { handlePostUser, handlePostFav, handleGetUser } = require('./src/modules/userHandler')
const { getAllReviews, deleteReview, updatedReview, createReviews } = require('./src/modules/reviews');

const { handlePostCalendar, handleGetUserAppt, deleteAppt } = require('./src/modules/calendarHandler')

// -----------APP USING EXPRESS & JSON -------------//
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//------------- ERROR HANDLING -------------//

const notFoundHandler = require('./src/handlers/error404');
const errorHandler = require('./src/handlers/error500');


//----------- VERIFICATION-AUTH0 --------------//

const verifyUser = require('./src/Auth/auth');

//------------ MONG-DB -------------//

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//------------  REVIEW CRUD  -------------//
app.get('/', (request, response) => {
  response.send('WERE MY ANIMALS AT YO!?!?');
});

app.use(verifyUser);

// Review CRUD
app.get('/allReviews', getAllReviews);
app.post('/review', createReviews);
app.delete('/review/:id', deleteReview);

app.put('/review/:id', updatedReview);
// app.get('/user', handleGetUser);


//------------  USER CRUD  -------------//
app.get('/newUser', handleGetUser)
app.post('/user', handlePostUser);
app.put('/fav/:id', handlePostFav);
// Error stuff


app.post('/appt', handlePostCalendar);
app.delete('/appt/:id', deleteAppt);
app.get('/calendar', handleGetUserAppt)



app.get('/', (request, response) => {
  response.send('WERE MY ANIMALS AT YO!?!?');
});

app.get('*', notFoundHandler);
app.use(errorHandler);




app.listen(PORT, () => console.log(`listening on ${PORT}`));




module.exports = app;