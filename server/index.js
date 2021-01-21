const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const images = require('../database/config.js');
const creds = require('../mongo_creds.js');

const app = express();
//mongodb://${creds.user}:${creds.pass}@54.173.228.201:27017/tpt`
mongoose.connect(`mongodb://localhost/tpt`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:id/images', (req, res) => {
	const name = req.params.id;
	const search = {};
	search[name] = /.*/;
	images.find({ item: name }, (err, pics) => {
		if (err) {
			console.log(err);
		} else {
			res.send(pics[0]);
		}
	});
});

app.delete('/:id/images', (req, res) => {
	const name = req.params.id;
	images.deleteOne({ item: name }, (err, status) => {
		if (err) {
			console.log(err);
		} else {
			if (status.deletedCount === 1) {
				res.sendStatus(200);
			} else {
				res.status(404).send('Product ID not found');
			}
		}
	});
});

app.put('/:id/images', (req, res) => {
	const name = req.params.id;
	req.body.item = name;
	images.findOneAndUpdate({ item: name }, { $set: req.body }, { upsert: true }, (err, status) => {
		if (err) {
			console.log(err);
		} else {
			if (status) {
				res.send(200);
			} else {
				res.status(404).send('Product ID not found');
			}
		}
	});
});

app.post('/:id/images', (req, res) => {
	const name = req.params.id;
	let insert = req.body;
	insert['item'] = name;
	images.find({ item: name }, (err, status) => {
		if (err) {
			console.log(err);
		} else {
			if (status.length > 0) {
				res.status(404).send(`Product ID ${name} exist, can't create duplicate ID`);
			} else {
				images.create(insert, (err, status) => {
					if (err) {
						console.log(err);
					} else {
						res.status(200).send(`New Product Images Posted ${status}`);
					}
				});
			}
		}
	});
});

module.exports = app;
