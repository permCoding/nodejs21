

const u = require('./modules/utils');

const connection = u.conn.promise(); // сделаем промис

u.start();

connection
    .query("SELECT * FROM curators")
    .then(([rows]) => { console.table(rows); })
    .then(() => console.log('\n\t___stop___'))
    .catch((err) => { console.log(err); });

u.stop();
