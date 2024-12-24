const { verifyToken } = require("../auth/JWTService");

function auth(req, res, next) {
    try {
        const token = req.header("auth-token");
        if (!token) {
            throw new Error("Please login");
        }
        const userInfo = verifyToken(token);
        if (!userInfo) {
            throw new Error("Unauthorized user");
        }
        req.user = userInfo;
        return next();
    } catch (error) {
        return res.status(401).send(error.message);
    }
}

function optionalAuth(req, res, next) {
    const token = req.header("auth-token");
    if (token) {
        try {
            const userInfo = verifyToken(token);
            if (userInfo) {
                req.user = userInfo;
            }
        } catch (error) {
            console.warn("Invalid token provided:", error.message);
        }
    }
    next(); 
}

module.exports = { auth, optionalAuth };