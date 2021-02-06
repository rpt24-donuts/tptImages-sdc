const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/dist'));

app.get('/items/:itemid/images', (req, res) => {
	controller.get(req, res);
});

app.delete('/items/:itemid/images', (req, res) => {
	controller.delete(req, res);
});

app.put('/items/:itemid/images', (req, res) => {
	controller.put(req, res);
});

app.post('/items/:itemid/images', (req, res) => {
	console.log('POST');
	controller.post(req, res);
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
