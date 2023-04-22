const express = require('express');
const routes = require('./routes/routing');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/myshop',
 { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


  app.listen(port, () => {
          console.log(`Server running on port ${port}`);
        });