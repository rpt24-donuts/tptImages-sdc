const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const images = require('../database/config.js');

const app = express();

const mongoUri = 'mongodb://localhost/tpt';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(__dirname + '/../client/dist'));
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

// app.get('/bundle', (req, res) => {
//   console.log('/ GET')
//   res.sendFile(path.join(__dirname, "../client/dist/bundle.js"));
//   //res.send('file')
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
