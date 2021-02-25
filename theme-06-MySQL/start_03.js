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
		results
			.map(item =>
				console.log(item.name + '\t' + item.time + '\t' + item.power));
		connection
			.end(() => console.log('___stop___'));
	});

