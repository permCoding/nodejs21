

const u = require('./modules/utils');

const connection = u.conn.promise(); // сделаем промис

u.start(); // ___start___

connection
    .query("SELECT * FROM curators")
    .then(([rows]) => { console.table(rows) })
    .then(() => console.log('\t___stop___'))
    .then(() => console.log('\tdisconnection\n'))
    .catch((err) => { console.log(err) });

u.stop();

console.log('\t___oops___');
