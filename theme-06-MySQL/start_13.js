const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");

const connection = mysql.createConnection(ut.conn);

var delete_smart = function (name) {
	let query = "DELETE FROM smartphones ";
	query += "WHERE name = '" + name + "'";
	connection.execute(query, (err) => {
		if (err) { throw err; }
		else { console.log('Данные удалены'); }
	});
}

// let name = 'smart_2020';
let name = readln.question('Enter the name of the smartphone to delete - ');
delete_smart(name);

ut.stop(connection);