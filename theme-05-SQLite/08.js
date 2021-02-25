const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./db/data.db");

let query = `
    SELECT id_team Id, name_team Name, games Games
    FROM teams 
    WHERE name_team = ?
`;

let name = "Челси";

db.get(query, [name], (err, row) => { 
    if (err) {
        console.error(err.message);
    }
    return row
        ? console.log(
            row.Id + "\t" + 
            row.Name + "\t" +
            row.Games)
        : console.log(`Нет записи с таким name - ${name}`);
});

db.close();