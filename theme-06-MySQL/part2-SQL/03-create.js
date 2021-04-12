// создадим через node.js и запрос таблицу

const ut = require('./modules/utils');  

let query_create = "CREATE TABLE `abiturs` ( \
    `id` INT NOT NULL AUTO_INCREMENT , \
    `lastName` VARCHAR(20) NOT NULL , \
    `rating` INT NOT NULL , \
    `gender` BOOLEAN NOT NULL , \
    `birthDate` DATE NULL , \
    `city` VARCHAR(20) NULL , \
    PRIMARY KEY (`id`))";

const conn = ut.get_conn();

conn.promise()
    .query(query_create)
    .then(() => console.log('table created'))
    .catch((err) => console.error(err))
    .then(conn.end());

