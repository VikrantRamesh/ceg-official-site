const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing');  // Import controller


//returns json of the format [{id:1, category:"Student"/"General", message: "msg", link: "link", created_date:timestamp}]
router.get('/updates', landingController.getUpdates);


//returns json of the format {research_centres:"",rd_grants:"",publications:"",patents_pub_gra:"",books_rfid_auto:"",student_clubs:""}
router.get('/statistics', landingController.getStatistics);


module.exports = router;
