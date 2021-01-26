const AWS = require('aws-sdk');
const db = require('./index.js');
const images = require('./config.js');
const config = require('../aws_config.js');

const creds = new AWS.Credentials(config.aws_access_key_id, config.aws_secret_access_key);
AWS.config.credentials = creds;
AWS.config.update({ region: 'us-west-1' });

const s3 = new AWS.S3({ apiVersion: '2008-10-17' });
const bucketParams = {
	Bucket: 'tpt-imagesmodule-sdc',
};

const urls = [];

const insertData = (data) => {
	images.create(data).then(() => {
		const search = {};
		search['1'] = /.*/;
		images.find(search, (err, pics) => {
			if (err) {
				console.log(err);
			} else {
				console.log('pics', pics);
			}
		});
	});
};

s3.listObjects(bucketParams, (err, data) => {
	if (err) {
		console.log('Error', err);
	} else {
		data.Contents.forEach((obj) => {
			urls.push(`https://tpt-imagesmodule-sdc.s3.amazonaws.com/${obj.Key}`);
		});
		const docs = [];
		for (let i = 1; i <= 100; i += 1) {
			const imageCount = Math.floor(Math.random() * 4 + 1);
			const allImages = [];
			for (let j = 0; j < imageCount; j += 1) {
				const randomUrl = Math.floor(Math.random() * urls.length);
				allImages.push(urls[randomUrl]);
			}
			const obj = {};
			obj['images'] = allImages;
			obj['item'] = String(i);
			docs.push(obj);
		}
		insertData(docs);
	}
});
