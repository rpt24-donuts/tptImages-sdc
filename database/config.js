
const mysql = require('mysql');

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"TpT",
	multipleStatements: true
});

module.exports = db;