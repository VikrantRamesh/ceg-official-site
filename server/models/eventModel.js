const pool = require('../config/db');

exports.getEventsByUserId = async (userid) => {
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
  
exports.addEvent = async (eventinfo, userid) => {
    try{
        const [ clubid ] = await pool.query(`SELECT id FROM clubs WHERE userid = ?`,[userid]);
        await pool.query(
            `INSERT INTO club_events( clubid, title, description, link )
            VALUES( ? , ? , ? , ?)`,[clubid[0], eventinfo.title, eventinfo.description, eventinfo.link]
        );
    } catch (err) {
        console.error('Error inserting event:', err);
        throw err;
    }
}