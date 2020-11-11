const { createPool } = require("mysql");

const pool = createPool({
  host: 'localhost',
  port: 3306,
  user: 'team19',
  password: 'team19',
  database: 'Team19',
  connectionLimit: 10
});

module.exports = pool;