// удалим таблицу из базы данных

const ut = require('./modules/utils');


let query_truncate = "TRUNCATE abiturs";
let query_delete = "DELETE FROM abiturs";

ut.conn
    .query(query_truncate)
    .then(() => { console.log('table runcated') })
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());
