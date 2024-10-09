const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Login route
// returns message and user type (redirect to corresponding dahsboard)
router.post('/login', authController.login);

// Logout route
// return message
router.post('/logout', authController.logout);

module.exports = router;
