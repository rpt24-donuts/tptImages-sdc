const username = 'root';
const password = 'password';
const couchdbURL = `http://${username}:${password}@localhost:5984`;
const nano = require('nano')(couchdbURL);
const couchimport = require('couchimport');
const dbname = 'sdcimages';

const seed = async () => {
	const db = nano.db.use(dbname);
	try {
		const info = await db.info();
		console.log('DB Exists!', info);
		await nano.db.destroy(dbname);
	} catch (e) {
		console.log('DB does not exist!');
	}
	await nano.db.create(dbname);
	const opts = { delimiter: ',', url: couchdbURL, database: dbname };
	try {
		await couchimport.importFile('/home/chris/HackReactor/SDC/tptImpages-sdc/database/data.csv', opts, (err, data) => {
			if (err) console.log('Failed to import');
			console.log('CSV Import success', data);
		});
	} catch (e) {
		console.log('Failed to import csv');
	}
};

seed();
