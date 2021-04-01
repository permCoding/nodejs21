const mysql = require("mysql2"); // npm i mysql2
  
const connection = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

connection.connect(err => {
    if (err) {
        console.error("Error: " + err.message);
    }
    else {
        console.log("\n\tПодключение установлено\n");
    }
});

connection.query("SELECT * FROM curators",
    (err, results) => {
        if (err) console.log(err.message);
        console.log(results);
});

connection.end();

console.log('\tdisconnection\n');
