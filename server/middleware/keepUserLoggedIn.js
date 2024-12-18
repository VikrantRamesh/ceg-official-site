const addUserDataMiddleware = (req, res, next) => {
    if (process.env.KEEP_ME_LOGGED_IN === 'true') {
        req.session = req.session || {};
        req.session.user = {
            uid: 9, 
            username: 'acmceg', 
            type: 'club'
        };
    }
    next();
};

module.exports = addUserDataMiddleware;