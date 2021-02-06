const client = require('../database/postgres/index.js');

const controller = {
	post: (req, res) => {
		const images = stringifyImages(req.body.images);
		const insertQuery = `INSERT into images (item, images) VALUES ('${req.params.itemid}', '${images}');`;
		const findQuery = `SELECT * from images WHERE item = '${req.params.itemid}';`;

		client.query(findQuery, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				if (data.rows.length > 0) {
					res.status(404).send(`Product ID ${req.params.itemid} exists, can't create duplicate ID`);
				} else {
					client.query(insertQuery, (err, status) => {
						if (err) {
							console.log(err);
						} else {
							res.status(200).send(`New Product Images Posted ${status}`);
						}
					});
				}
			}
		});
	},
	get: (req, res) => {
		const findQuery = `SELECT * from images WHERE item = '${req.params.itemid}';`;
		client.query(findQuery, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				if (data.rows.length > 0) {
					res.status(200).send(data.rows);
				} else {
					res.status(404).send('Product ID not found ');
				}
			}
		});
	},
	put: (req, res) => {
		const images = stringifyImages(req.body.images);
		const updateQuery = `UPDATE images SET images = '${images}' WHERE item = '${req.params.itemid}';`;
		client.query(updateQuery, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				if (data.rowCount > 0) {
					res.status(200).send('Successfully updated');
				} else {
					res.status(404).send('Product ID not found ');
				}
			}
		});
	},
	delete: (req, res) => {
		const deleteQuery = `DELETE from images WHERE item = '${req.params.itemid}';`;
		client.query(deleteQuery, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				if (data.rowCount > 0) {
					res.status(200).send(data);
				} else {
					res.status(404).send('Product ID not found ');
				}
			}
		});
	},
};

const stringifyImages = function (imageArr) {
	let result = '';
	for (let i = 0; i < imageArr.length; i++) {
		result += imageArr[i] + ',';
	}
	return result;
};

module.exports = controller;
