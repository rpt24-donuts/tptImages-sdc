const AWS = require('aws-sdk');
const config = require('../aws_config.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const itemCount = 10;

const creds = new AWS.Credentials(config.aws_access_key_id, config.aws_secret_access_key);
AWS.config.credentials = creds;
AWS.config.update({ region: 'us-west-1' });

const s3 = new AWS.S3({ apiVersion: '2008-10-17' });
const bucketParams = {
	Bucket: 'tpt-imagesmodule-sdc',
};

const urls = [];

const imagesGenerator = () => {
	const imageCount = Math.floor(Math.random() * 4 + 1);
	let allImages = [];
	for (let i = 0; i < imageCount; i += 1) {
		const randomUrl = Math.floor(Math.random() * urls.length);
		allImages.push(urls[randomUrl]);
	}
	return allImages;
};

const writeCount = (writer, encoding, callback) => {
	let i = itemCount;
	let item = 0;
	function write() {
		let ok = true;
		do {
			i -= 1;
			item += 1;
			const images = imagesGenerator();
			const data = `${item},"${images}"\n`;
			if (i === 0) {
				writer.write(data, encoding, callback);
			} else {
				ok = writer.write(data, encoding);
			}
		} while (i > 0 && ok);
		if (i > 0) {
			writer.once('drain', write);
		}
	}
	write();
};

s3.listObjects(bucketParams, (err, data) => {
	if (err) {
		console.log('Error', err);
	} else {
		data.Contents.forEach((obj) => {
			urls.push(`https://tpt-imagesmodule-sdc.s3.amazonaws.com/${obj.Key}`);
		});

		const writeImages = fs.createWriteStream('testdata.csv');
		writeImages.write('item,images\n', 'utf8');
		writeCount(writeImages, 'utf-8', () => {
			writeImages.end();
		});
	}
});
