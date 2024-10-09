const pool = require('../config/db');

// Fetch user by username
exports.getUserByUserName = async (username) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error('Error fetching user by username:', err);
    throw err;
  }
};

exports.insertUser = async (username, password, type) => {
    try{
        await pool.query('INSERT INTO users (username, password, type) VALUES (?, ?, ?)', [username, password, type]);
    } catch (err) {
        console.error('Error creating user: ',err);
    }
}

exports.updatePassword = async (username, password) => {
    try{
        await pool.query('UPDATE users SET password = ? WHERE username = ?', [password, username]);
    } catch (err) {
        console.error('Error updated password: ',err);
    }
}