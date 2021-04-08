// создадим через node.js и запрос таблицу

const ut = require('./modules/utils');  


let query_create = "CREATE TABLE `abiturs` ( \
    `id` INT NOT NULL AUTO_INCREMENT , \
    `lastName` VARCHAR(20) NOT NULL , \
    `rating` INT NOT NULL , \
    `gender` BOOLEAN NOT NULL , \
    `date` DATE NOT NULL , \
    `city` VARCHAR(20) NOT NULL , \
    PRIMARY KEY (`id`))";

ut.conn
    .query(query_create)
    .then(() => { console.log('table created') })
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());

