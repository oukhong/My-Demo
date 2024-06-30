const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackg9",
    port: 3306, //3306
    namedPlaceholders: true,
});
module.exports = db;