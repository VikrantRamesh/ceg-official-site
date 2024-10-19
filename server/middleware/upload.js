const multer = require('multer');
const path = require('path');

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Get file extension
        const username = req.session.username; // Get user name
        cb(null, `${username}-${file.fieldname}${ext}`); // Unique filename for a user and upload type
    }
});

// Create the upload instance
const upload = multer({ 
    storage: storage,
    limits: { fileSize: process.env.MAX_UPLOAD_SIZE * 1024 * 1024 }
});

module.exports = upload;
