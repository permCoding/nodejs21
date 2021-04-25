const mysql = require("mysql2"); // npm i mysql2

const paramsDB = {
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
};

function get_connection() {
	return mysql.createConnection(paramsDB);
}

module.exports.get_conn = get_connection;
