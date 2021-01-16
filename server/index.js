const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const images = require('../database/config.js');
const creds = require('../mongo_creds.js');

const app = express();

mongoose.connect(`mongodb://${creds.user}:${creds.pass}@54.173.228.201:27017/tpt`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:id/images', (req, res) => {
  const name = req.params.id;
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

module.exports = app;
