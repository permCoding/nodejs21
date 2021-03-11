const mysql = require("mysql2");
const readln = require("readline-sync");

const menu = [
	'0. Выйти из программы',
	'1. Вывести данные',
	'2. Сортировать по time',
	'3. Сортировать по power'	
];

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
	menu.map(item=>console.log(item));
	
	answer = Number(readln.question()); // читаем с консоли
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