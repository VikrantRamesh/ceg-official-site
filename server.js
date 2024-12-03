const express = require('express');
require('dotenv').config(); // Load environment variables from .env file
const app = require('./server/app');  // Import the main Express app from app.js
const path = require('path');


const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
