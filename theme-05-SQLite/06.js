const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db/data.db");

let query = `SELECT * FROM teams ORDER BY name_team`;

db.all(query, [], (err, rows) => { 
    if (err) {
        console.error(err.message);
    }
    rows.forEach((row) => {
        console.log(
            row.id + "\t" + 
            row.id_team + "\t" + 
            row.name_team + "\t" +
            row.games
        );
    });
});

db.close();