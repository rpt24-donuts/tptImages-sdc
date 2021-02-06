const { Client } = require('pg');

const client = new Client({
	user: 'postgres',
	database: 'sdcimages',
	password: 'password',
});

client.connect();
module.exports = client;
