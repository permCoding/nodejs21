const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");

const connection = mysql.createConnection(ut.conn);

let query = "SELECT * FROM smartphones";

var get_data = function (query, password) {
	connection.query(query, function (err, results) {
		new Promise(function (resolve, reject) {
			if (err) throw err;
			connection.query(
				"SELECT * FROM users WHERE login = 'admin' LIMIT 1",
				(err_2, data) => {
					if (data[0].password == password)
						resolve(results);
					else {
						resolve([]);
					}
				}
			)
		}).then(array => {
			if (array.length > 0) {
				dialog(array);
			}
			else {
				console.log("Пароль не подходит :("); 
			}
			ut.stop(connection);
		})
	})
}

let dialog = function (results) {	
	console.clear();	
	ut.menu.map(item => console.log(item));

	answer = Number(readln.question());
	switch (answer) {
		case 1: {
			results
				.map(item =>
					console.log(item.name + '\t' + item.time + '\t' + item.power));
			break;
		}
		case 2: {
			results
				.sort((a, b) => a.time - b.time)
				.map(item =>
					console.log(item.name + '\t' + item.time + '\t' + item.power));
			break;
		}
		case 3: {
			results
				.sort((a, b) => a.power - b.power)
				.map(item =>
					console.log(item.name + '\t' + item.time + '\t' + item.power));
			break;
		}
		default: {

		}
	}
}

let password = 'admin';
password = readln.question('Your password? -> ');
get_data(query, password);