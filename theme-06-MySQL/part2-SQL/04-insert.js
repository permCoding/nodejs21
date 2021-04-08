// вставим в таблицу одну запись

const ut = require('./modules/utils');  


let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender, date, city) \
VALUES \
(NULL, 'Сидоров', 207, true, '2002-08-03', 'Пермь')";

ut.conn
    .query(query_insert)
    .then(() => { console.log('row inserted') })
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());
