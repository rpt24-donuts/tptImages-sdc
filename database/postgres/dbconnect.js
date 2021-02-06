const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres',
	database: 'sdcimages',
	password: 'password',
});
pool.query("COPY images(item, images) FROM '/home/chris/HackReactor/SDC/tptImpages-sdc/database/data.csv' DELIMITER ',' CSV HEADER;", (err, res) => {
	console.log(err, res);
	pool.end();
});
