const mysql = require('mysql2');

// Create the MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Export the pool to use in other parts of your app
module.exports = pool.promise();
