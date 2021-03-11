const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./db/data.db");

let query = `SELECT * FROM teams WHERE games = ?`;

db.each(query, [15], (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(`${row.id_team}\t${row.name_team}\t${row.games}`);
});

db.close();