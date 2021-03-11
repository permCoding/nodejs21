const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("db/data.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение установлено...');
});

