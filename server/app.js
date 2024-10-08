const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const landingRoutes = require('./routes/landing');  // Import landing page routes

// Initialize the Express app
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing if needed
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded request bodies

// API Routes
app.use('/api/landing', landingRoutes);  // Routes for updates and statistics

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler to serve React's index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Export the app module to use in server.js
module.exports = app;
