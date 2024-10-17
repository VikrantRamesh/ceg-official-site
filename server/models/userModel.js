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

exports.insertUser = async (username, password, type, clubname) => {
  const connection = await pool.getConnection();
  try {
      await connection.beginTransaction();
      const [response] = await connection.query('INSERT INTO users (username, password, type) VALUES (?, ?, ?)', [username, password, type]);
      const userid = response.insertId;

      await connection.query('INSERT INTO clubs (userid, clubname) VALUES (?, ?)', [userid, clubname]);
      await connection.commit();

  } catch (err) {
      await connection.rollback();
      console.error('Error creating user and club: ', err);
      throw  err;
  } finally {
      connection.release();
  }
};


exports.updatePassword = async (username, password) => {
    try{
        await pool.query('UPDATE users SET password = ? WHERE username = ?', [password, username]);
    } catch (err) {
        console.error('Error updated password: ',err);
        throw err;
    }
}