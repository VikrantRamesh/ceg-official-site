const db = require('../config/db');

// Fetch recent updates
exports.getUpdates = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM updates ORDER BY created_date DESC');
    res.json(rows);  // Send the result as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch updates' });
  }
};

// Fetch statistics (example: total number of clubs, users, and events)
exports.getStatistics = async (req, res) => {
  try {
    const [row] = await db.query('SELECT * FROM statistics');
    res.json(row[0]);  // Send the statistics as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
};
