const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Squeak207",
    database: "spread_picker",
  })
  .promise();

module.exports = pool;
