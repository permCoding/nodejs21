

const _ = require("lodash");
const u = require('./modules/utils');

const connection = u.conn.promise();

let query = "SELECT * FROM curators";

connection
    .query(query)
    .then(([rows]) => {

        console.log('\t___start___');        
        _(rows)
			.map(item => item.nameCur)
            .sortBy()
            .forEach((name,i) => console.log(i+1, name));
        console.log('\t___stop___');

    });

connection.end();
