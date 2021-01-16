const mongoose = require('mongoose');
const creds = require('../mongo_creds.js');

const mongoUri = 'mongodb://54.173.228.201:27017/tpt'

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
   user: creds.user,
   pass: creds.pass
 ,
  useUnifiedTopology: true
});

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
