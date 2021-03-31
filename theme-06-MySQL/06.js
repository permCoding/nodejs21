

const u = require('./modules/utils06');

const connection = u.conn.promise();

let query = "SELECT * FROM curators";

connection
    .query(query)
    .then(([rows]) => u.printSorted(rows));

connection.end();
