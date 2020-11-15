const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const schema = new mongoose.Schema({ }, { strict: false });

const Tpt = mongoose.model('images', schema);

module.exports = Tpt;
