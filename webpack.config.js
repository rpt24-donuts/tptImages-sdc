const path = require('path');
var S3Plugin = require('webpack-s3-plugin');
const aws = require('./aws_config.js');

module.exports = {
	entry: path.join(__dirname, '/client/src/index.jsx'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/client/dist'),
	},
	module: {
		rules: [
			{
				test: [/\.jsx?/],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new S3Plugin({
			include: 'bundle.js',
			s3Options: {
				accessKeyId: aws.aws_access_key_id,
				secretAccessKey: aws.aws_secret_access_key,
			},
			s3UploadOptions: {
				Bucket: 'tpt-imagesmodule-sdc',
			},
		}),
	],
	watch: true,
};
