// узнать количество записей в таблице

const ut = require('./modules/utils');

const conn = ut.get_conn();

// conn.promise()
//     .query("SELECT COUNT(*) FROM abiturs")
//     .then(([rows,fields]) => {
//         console.log(rows, '\n', fields);
//     }) // rows => [ TextRow { 'COUNT(*)': 15 } ] 
//     .then(conn.end());

conn.promise()
    .query("SELECT COUNT(*) FROM abiturs")
    .then(([rows]) => rows[0]['COUNT(*)'])
    .then((count) => { console.log('count =', count) })
    .catch((err) => { console.error(err) })
    .then(conn.end());
