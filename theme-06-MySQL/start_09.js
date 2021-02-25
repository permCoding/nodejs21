const mysql = require("mysql2");
const readln = require("readline-sync");
const ut = require("./utils");

const connection = mysql.createConnection(ut.conn);

let query = "SELECT * FROM smartphones";

connection
	.query(query, (err, results) => {
		dialog(results);
		ut.stop(connection);
});

let dialog = function(results) {
	console.clear();
	ut.menu.map(item=>console.log(item));
	
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
				.sort((a,b)=>a.time-b.time)
				.map(item => 
				console.log(item.name + '\t' + item.time + '\t' + item.power));
			break;
		}
		case 3: {
			results
				.sort((a,b)=>a.power-b.power)
				.map(item => 
				console.log(item.name + '\t' + item.time + '\t' + item.power));
			break;
		}
		default: {
			
		}
	}
}