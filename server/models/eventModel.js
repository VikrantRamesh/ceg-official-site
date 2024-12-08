const pool = require('../config/db');

exports.getEventsByUserId = async (userid) => { //fetches events for a club by userid
  try {
    const [rows] = await pool.query(
      `SELECT id, title, description, link 
         FROM club_events 
         WHERE clubid IN (
           SELECT clubid 
           FROM clubs 
           WHERE userid = ?
         )`,
      [userid]
    );
    return rows;
  } catch (err) {
    console.error('Error fetching club events by userid:', err);
    throw err;
  }
};

exports.getEventsByClubId = async (clubid) => { //fetches events of a club by clubid    
  try {
    const [rows] = await pool.query(
      `SELECT id, title, description, link 
       FROM club_events 
       WHERE clubid = ?`,
      [clubid]
    );
    return rows;
  } catch (err) {
    console.error('Error fetching club events by clubid:', err);
    throw err;
  }
}

exports.addEvent = async (eventinfo, userid) => {
  try {
    const [clubid] = await pool.query(`SELECT id FROM clubs WHERE userid = ?`, [userid]);
    await pool.query(
      `INSERT INTO club_events( clubid, title, description, link )
            VALUES( ? , ? , ? , ?)`, [clubid[0], eventinfo.title, eventinfo.description, eventinfo.link]
    );
  } catch (err) {
    console.error('Error inserting event:', err);
    throw err;
  }
}

exports.updateEvent = async (eventId, eventInfo, userid) => {
  try {
    // Check if the user has access to update this event
    const [clubRows] = await pool.query(
      `SELECT clubid 
       FROM club_events 
       WHERE id = ? AND clubid IN (
         SELECT id 
         FROM clubs 
         WHERE userid = ?
       )`,
      [eventId, userid]
    );

    if (clubRows.length === 0) {
      throw new Error('Unauthorized: You do not have permission to update this event.');
    }

    // Proceed with the update
    await pool.query(
      `UPDATE club_events
       SET title = ?, description = ?, link = ?
       WHERE id = ?`,
      [eventInfo.title, eventInfo.description, eventInfo.link, eventId]
    );
  } catch (err) {
    console.error('Error updating event:', err);
    throw err;
  }
};
