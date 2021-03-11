const mysql = require("mysql2");
  
const connection = mysql.createConnection({
    host: "mysql95.1gb.ru",
    user: "gb_psis",
    database: "gb_psis",
    password: "ca8484adc89a"
}).promise();

connection
  .query("SELECT * FROM smartphones")
  .then(([rows,fields])=>{console.log(rows)});

connection
  .end(() => console.log('___stop___'));