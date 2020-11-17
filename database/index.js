const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/tpt';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connected successfully');
  connection.db.listCollections().toArray((err, collections) => {
    if (err) {
      console.log(err);
    } else {
      if (collections.length > 0) {
        console.log('Collections Exists in DB');
        mongoose.connection.db.dropCollection('images', (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log('Collection dropped');
          }
        });
      }
    }
  });
});

module.exports = db;
