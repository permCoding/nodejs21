const fs = require('fs');
const csvjson = require('csvjson');
const fastcsv = require('fast-csv');
const mysql = require("mysql2"); // npm i mysql2


const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}).promise();


function csv_to_json(nameFile) {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: ',' });
}


function write_to_csv(array, nameFile) {
	let fw = fs.createWriteStream(nameFile);
	fastcsv
		.write(array, { headers: true })
		.pipe(fw);
}


module.exports.conn = conn;
module.exports.csv_to_json = csv_to_json;
module.exports.write_to_csv = write_to_csv;
