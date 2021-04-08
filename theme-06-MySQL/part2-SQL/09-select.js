// теперь удалим таблицу через node.js и запрос
// попробуйте удалить более одного раза

const ut = require('./modules/utils');


let query = "SELECT lastName, rating, city \
FROM abiturs \
WHERE gender = true AND city <> 'Пермь' \
ORDER BY rating DESC, lastName ASC";

ut.conn
    .query(query)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());
