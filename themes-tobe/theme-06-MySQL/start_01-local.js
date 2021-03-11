const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_01",
  password: "0000"
});

connection.connect(function(err) {
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение установлено");
    }
});

connection.query("SELECT * FROM products",
    function(err, results, fields) {
        console.log(results);
});

connection.end(()=>console.log('___stop___'));