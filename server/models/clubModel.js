const pool = require('../config/db');

// club by user id
exports.getClubByUserId = async (userid) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clubs WHERE userid = ?', [userid]);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error('Error fetching club by userid:', err);
    throw err;
  }
};

// club by clubname
exports.getClubByClubName = async (clubname) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clubs WHERE clubname = ?', [clubname]);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error('Error fetching club by userid:', err);
    throw err;
  }
};

// club by user id
exports.getClubByClubId = async (clubid) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clubs WHERE id = ?', [clubid]);
    return rows[0]; // Return the first row
  } catch (err) {
    console.error('Error fetching club by clubid:', err);
    throw err;
  }
};

// get all clubs
exports.getAllClubs = async () => {
  try {
    const results = await pool.query('SELECT id, clubname as name, emoji as icon FROM clubs');
    return results;
  } catch (err) {
    console.error('Error fetching club list: ', err);
    throw err;
  }
};

// update club info
exports.updateClub = async (userId, clubData) => {
  const { description, socials, logo_path, website, members } = clubData;
  let result;

  try {
    if (logo_path !== null) //include logo path if uploaded
      result = await pool.query(
        `UPDATE clubs 
           SET description = ?, socials = ?, logo_path = ?, website = ?, members = ? 
           WHERE userid = ?`,
        [description, JSON.stringify(socials), logo_path, website, JSON.stringify(members), userId]
      );
    else  // dont include logo path if it is null
      result = await pool.query(
        `UPDATE clubs 
          SET description = ?, socials = ?, website = ?, members = ? 
          WHERE userid = ?`,
        [description, JSON.stringify(socials), website, JSON.stringify(members), userId]
      );

    return result; // Return the result to the controller
  } catch (err) {
    console.error('Error updating club: ', err);
    throw err; // Throw error to be handled in the controller
  }
};