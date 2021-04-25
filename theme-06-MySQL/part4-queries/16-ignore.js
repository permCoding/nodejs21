// вставим в таблицу одну запись
// id NULL без NULL

const conn = require('./modules/utils').get_conn();

let query_insert = "INSERT ignore INTO abiturs \
(id, lastName, rating, gender, city) \
VALUES \
(1, 'Камикадзе', 216, true, 'Пермь'), \
(51, 'Углова', 196, false, 'Пермь')";

conn.promise()
    .query(query_insert)
    .then(([result]) => console.log('добавлено записей', result.affectedRows))
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
