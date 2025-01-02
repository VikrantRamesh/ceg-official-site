const db = require('../config/db');

// Fetch recent updates
exports.getUpdates = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM updates ORDER BY created_date DESC');
    res.json(rows); // Send the result as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch updates' });
  }
};

// Fetch statistics
exports.getStatistics = async (req, res) => {
  try {
    const [row] = await db.query('SELECT * FROM statistics');
    res.json(row[0]); // Send the statistics as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
};

// Upsert an update (insert or update based on id)
exports.upsertUpdate = async (req, res) => {
  const { id, category, message, link } = req.body;

  try {
    if (id) {
      // Update if id is provided
      const [result] = await db.query(
        'UPDATE updates SET category = ?, message = ?, link = ? WHERE id = ?',
        [category, message, link, id]
      );
      res.json({ message: 'Update successfully modified', affectedRows: result.affectedRows });
    } else {
      // Insert if id is not provided
      const [result] = await db.query(
        'INSERT INTO updates (category, message, link) VALUES (?, ?, ?)',
        [category, message, link]
      );
      res.json({ message: 'Update successfully created', insertId: result.insertId });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upsert update' });
  }
};

// Delete an update by id
exports.deleteUpdate = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM updates WHERE id = ?', [id]);
    if (result.affectedRows > 0) {
      res.json({ message: 'Update successfully deleted' });
    } else {
      res.status(404).json({ message: 'Update not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete update' });
  }
};
