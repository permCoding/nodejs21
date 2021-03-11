const mysql = require("mysql2");
const ut = require("./utils");
const fs = require("fs");
const fastcsv = require('fast-csv');

let save_to_csv = function (name_file, array) {
	let fw = fs.createWriteStream(name_file);
	fastcsv
		.write(array, { headers: true })
		.pipe(fw);	
}

let data_to_csv = function (connection, table, name_file) {
	let query = "SELECT * FROM " + table; // формируем сам запрос
	connection
		.query(query, (err, results) => {
			save_to_csv(name_file, results);
		});
}

const connection = mysql.createConnection(ut.conn); // открыть соединение
let table = 'smartphones';
data_to_csv(connection, table, 'save.csv'); // выполнить действие
ut.stop(connection); // закрыть соединение
