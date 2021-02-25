const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");

const connection = mysql.createConnection(ut.conn);

let query = "UPDATE smartphones SET name = 'smart_2020' ";
query += "WHERE name = 'smart'";


var update_data = function (query, arr) {
	connection.execute(query, () => console.log('Данные обновлены'));
}

update_data(query, []);
ut.stop(connection);
