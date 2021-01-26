const AWS = require('aws-sdk');
const db = require('./index.js');
const config = require('../aws_config.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const itemCount = 10000000;

const creds = new AWS.Credentials(config.aws_access_key_id, config.aws_secret_access_key);
AWS.config.credentials = creds;
AWS.config.update({ region: 'us-west-1' });

const s3 = new AWS.S3({ apiVersion: '2008-10-17' });
const bucketParams = {
	Bucket: 'tpt-imagesmodule-sdc',
};

const urls = [];

const jsonGen = (id) => {
	const imageCount = Math.floor(Math.random() * 4 + 1);
	const allImages = [];
	for (let j = 0; j < imageCount; j += 1) {
		const randomUrl = Math.floor(Math.random() * urls.length);
		allImages.push(urls[randomUrl]);
	}
	const obj = {};
	obj['images'] = allImages;
	obj['item'] = String(id);
	return obj;
};

s3.listObjects(bucketParams, (err, data) => {
	if (err) {
		console.log('Error', err);
	} else {
		data.Contents.forEach((obj) => {
			urls.push(`https://tpt-imagesmodule-sdc.s3.amazonaws.com/${obj.Key}`);
		});
		writer.pipe(fs.createWriteStream('database/data.csv'));
		for (let i = 1; i <= itemCount; i += 1) {
			let seedItem = jsonGen(i);
			writer.write(seedItem);
		}
		writer.end();
		console.log('done');
	}
});
