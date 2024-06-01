const mysql = require("mysql2");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "fruitcounting",
  port: 3306,
});
module.exports = pool.promise();
