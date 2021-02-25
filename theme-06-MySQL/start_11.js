const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");

const connection = mysql.createConnection(ut.conn);

let query = "INSERT INTO smartphones (name, time, power) ";
query += "VALUES ('smart', 10, 10)";


var set_data = function (query, arr) {
	connection.execute(query, () => console.log('Данные добавлены'));
}

set_data(query, []);
ut.stop(connection);