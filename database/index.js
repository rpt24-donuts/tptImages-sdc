const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/tpt';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  connection.db.listCollections().toArray((err, collections) => {
    if (err) {
      console.log(err);
    } else {
      if (collections.length > 0) {
        mongoose.connection.db.dropCollection('images', (err) => {
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
