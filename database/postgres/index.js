const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'ec2-3-101-76-109.us-west-1.compute.amazonaws.com',
	database: 'sdcimages',
	password: 'password',
	port: 5432,
});

//client.connect();
module.exports = pool;
