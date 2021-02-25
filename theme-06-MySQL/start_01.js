const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "mysql95.1gb.ru",
  user: "gb_psis",
  database: "gb_psis",
  password: "ca8484adc89a"
});

connection.connect(function(err) {
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение установлено");
    }
});

connection.query("SELECT * FROM smartphones",
    function(err, results, fields) {
        console.log(results);
});

connection.end(()=>console.log('___stop___'));