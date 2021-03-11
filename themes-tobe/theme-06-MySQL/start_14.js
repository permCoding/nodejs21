const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");
const fs = require("fs");

const connection = mysql.createConnection(ut.conn);

let query = "SELECT * FROM smartphones";

let save_to_json = function (name_file, results) {
	fs.writeFileSync(name_file,
		results
			.map(obj => JSON.stringify(obj))
			.join('\r\n')
	);
}

let data_to_json = function (name_file) {
	connection
		.query(query, (err, results) => {
			save_to_json(name_file, results);
		});	
}

let name_file = 'save.json';
data_to_json(name_file);
ut.stop(connection);