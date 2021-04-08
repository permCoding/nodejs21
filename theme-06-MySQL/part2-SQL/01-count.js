// создадим сначала через phpMyAdmin таблицу
// и там же через запрос добавим данные
// тут проверим доступ к данным

const mysql = require("mysql2"); // npm i mysql2
  

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}).promise();

// conn
//     .query("SELECT COUNT(*) FROM abiturs")
//     .then(([rows,fields]) => {
//         console.log(rows);
//         console.log(fields);
//     });

conn
    .query("SELECT COUNT(*) FROM abiturs")
    .then(([rows]) => rows[0]['COUNT(*)'])
    .then((count) => { console.log('count =', count) })
    .catch((err) => { console.error(err) })
    .then(conn.end());
