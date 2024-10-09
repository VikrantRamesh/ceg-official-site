const adminMiddleware = (req, res, next) => {
    // Check if the user is logged in and is an admin
    if (req.session.user && req.session.user.type === 'admin') {
        next(); // User is an admin, proceed to the next middleware/route handler
    } else {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  
  module.exports = adminMiddleware;
  