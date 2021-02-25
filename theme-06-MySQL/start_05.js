const mysql = require("mysql2");
  
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

let dialog = function(results) {
	results
		.sort((a, b) => a.time - b.time)
		.map(item =>
			console.log(item.name + '\t' + item.time + '\t' + item.power));
}

let stop = function () {
	connection.end(() => console.log('___stop___'));
}