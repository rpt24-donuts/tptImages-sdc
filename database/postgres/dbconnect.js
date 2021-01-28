const { Pool, Client } = require('pg');
const pool = new Pool({
	user: 'postgres',
	database: 'sdcimages',
	password: 'password',
});
pool.query("COPY images(images, item) FROM '/home/chris/HackReactor/SDC/tptImpages-sdc/database/data.csv' DELIMITER ',' CSV HEADER;", (err, res) => {
	console.log(err, res);
	pool.end();
});
// const client = new Client({
// 	user: 'dbuser',
// 	host: 'database.server.com',
// 	database: 'mydb',
// 	password: 'secretpassword',
// 	port: 3211,
// });
// client.connect();
// client.query('SELECT NOW()', (err, res) => {
// 	console.log(err, res);
// 	client.end();
// });
