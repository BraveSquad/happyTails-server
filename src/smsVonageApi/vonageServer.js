//--------- Vonage API -------------//
//installed brew install ngrok/ngrok/ngrok to mac
// install choco install ngrok if you have windows
//this is a simplified autoresponser as vonage server

import express from 'express';

const {
  json,
  urlencoded
} = express

const app = express();

app.use(json())
app.use(urlencoded({
  extended: true
}))

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000')
})

app.post('/webhooks/inbound', (req, res) => {
  console.log(req.body);

  res.status(200).end();
});
