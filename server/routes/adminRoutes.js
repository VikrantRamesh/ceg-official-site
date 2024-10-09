const express = require('express');
const adminMiddleware = require('../middleware/admin');
const adminController = require('../controllers/adminController');

const router = express.Router();

//creating a new club
router.post('/create-club', adminMiddleware, adminController.createClub);

module.exports = router;