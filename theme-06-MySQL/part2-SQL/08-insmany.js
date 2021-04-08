// запрос на многих без поля PRIMARY

const ut = require('./modules/utils');


function get_query(pattern, array) {
    return pattern + array
        .map(item => "('" + Object
            .values(item)
            .slice(1)
            .join("','") + "')")
        .join(',');
}

let query_pattern = "INSERT INTO abiturs \
    (lastName, rating, gender, date, city) VALUES ";

let array = ut.csv_to_json('./csv/abiturs.csv');

let query = get_query(query_pattern, array);
// console.log(query);

ut.conn
    .query(query)
    .then(() => { console.log('row inserted') })
    .catch((err) => { console.error(err) })
    .then(ut.conn.end());
