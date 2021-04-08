// теперь удалим таблицу через node.js и запрос
// попробуйте удалить более одного раза

const ut = require('./modules/utils');


let query_drop = "DROP TABLE abiturs";

ut.conn
    .query(query_drop)
    .then(() => { console.log('table dropped') })
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());
