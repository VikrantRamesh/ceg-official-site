const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(() => console.log('MongoDB connected'))
//    .catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
    console.log("req");
   res.send('MERN App Backend');
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});