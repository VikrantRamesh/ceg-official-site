const express = require('express');
const adminMiddleware = require('../middleware/admin');
const adminController = require('../controllers/adminController');

const router = express.Router();

//creating a new club
// takes in username, password and clubname
router.post('/create-club', adminMiddleware, adminController.createClub);

module.exports = router;