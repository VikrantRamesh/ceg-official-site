const pool = require('../config/db');

// Fetch user by username
exports.getUserByUserName = async (username) => {
  try {
    console.log(username);
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    console.log(rows);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error('Error fetching user by username:', err);
    throw err;
  }
};
