const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./db/data.db");

let query = `SELECT * FROM teams WHERE name_team = ?`;

let name = "Челси_";

db.get(query, [name], (err, row) => { 
    if (err) {
        console.error(err.message);
    }
    return row
        ? console.log(
            row.id + "\t" + 
            row.id_team + "\t" + 
            row.name_team + "\t" +
            row.games)
        : console.log(`Нет записи с таким name - ${name}`);
});

db.close();