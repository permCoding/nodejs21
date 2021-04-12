// удалим таблицу из базы данных

const ut = require('./modules/utils');

let query_truncate = "TRUNCATE abiturs";
let query_delete = "DELETE FROM abiturs";

const conn = ut.get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => console.log('table truncated'))
    .catch((err) => console.error(err))
    .then(conn.end());

