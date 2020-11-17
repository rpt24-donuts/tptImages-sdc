const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const images = require('../database/config.js');

const app = express();
const port = 3003;

const mongoUri = 'mongodb://localhost/tpt';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/id', (req, res) => {
  const name = req._parsedOriginalUrl.query;
  const search = {};
  search[name] = /.*/;
  images.find(search, name, (err, pics) => {
    if (err) {
      console.log(err);
    } else {
      res.send(pics[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
