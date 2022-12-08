'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('WERE MY ANIMALS AT YO!?!?');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
