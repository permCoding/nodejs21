const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db/data.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение установлено...');
});

db.serialize(() => {
    db.each(`SELECT * FROM teams ORDER BY name_team DESC`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(
            row.id + "\t" + 
            row.id_team + "\t" + 
            row.name_team + "\t" +
            row.games
        );
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение разорвано');
});