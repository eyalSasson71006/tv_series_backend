const jwt = require('jsonwebtoken');
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
    return jwt.sign({
        _id: user.id,
        isAdmin: user.isAdmin,
        userName: user.userName,
        email: user.email
    }, JWT_SECRET, { expiresIn: '1d' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };