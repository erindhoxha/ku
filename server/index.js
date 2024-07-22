const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:yy42zmVPUW9mhHaX@cluster0.01psebk.mongodb.net/?';

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send({
    name: 'Erind',
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
