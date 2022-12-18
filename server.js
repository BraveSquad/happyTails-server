'use strict';

//--------- DOTENV Config -------------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//------------------CRUD-------------------//

const { handlePostUser, handlePostFav } = require('./src/modules/userHandler')

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

// const verifyUser = require('./src/Auth/auth');

//------------ MONG-DB -------------//

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const { getReviews, deleteReview, updatedReview, handleGetUser } = require('./src/modules/reviews');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//------------ CRUD -------------//

// Review CRUD
// app.get('/review', getReviews);
app.post('/review', getReviews);
// app.delete('/review/:id', deleteReview);
// app.put('/review/:id', updatedReview);
// app.get('/user', handleGetUser);



app.get('/', (request, response) => {
  response.send('WERE MY ANIMALS AT YO!?!?');
});

// app.use(verifyUser);

app.get('*', notFoundHandler);
app.post('/user', handlePostUser);
app.post('/user', handlePostFav);
// Error stuff
app.use(errorHandler);




app.listen(PORT, () => console.log(`listening on ${PORT}`));