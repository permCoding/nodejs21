const mysql = require("mysql2");
const readln = require("readline-sync");

const connection = mysql.createConnection({
  host: "mysql95.1gb.ru",
  user: "gb_psis",
  database: "gb_psis",
  password: "ca8484adc89a"
});

let query = "SELECT * FROM smartphones";

connection
	.query(query, (err, results) => {
		dialog(results);
		stop();
	});

let stop = function () {
	connection.end(() => console.log('___stop___'));
}

let dialog = function(results) {
	console.clear();
	console.log("Вывести данные - 1 | Выйти из программы - 2");

	answer = Number(readln.question()); // читаем с консоли
	if (answer==1) {
			results
		.sort((a,b)=>a.time-b.time)
		.map(item => 
			console.log(item.name + '\t' + item.time + '\t' + item.power))
	}
}