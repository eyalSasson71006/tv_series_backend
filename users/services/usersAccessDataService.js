const { generateToken } = require("../../auth/JWTService");
const db = require("../../DB/connectToDB");


async function getAllUsers() {
    let [result] = await db.query('SELECT * FROM users');
    return result;
}

async function loginUser(userData) {
    let { email, password } = userData;
    let [result] = await db.query('SELECT * FROM users WHERE email=? AND password=?', [email, password]);    
    if (result.length < 1) {
        throw new Error("User not found");
    }
    const token = generateToken(userData);
    return token;
}

async function registerUser(user) {
    const { image, email, password } = user;
    if (!password) return;
    let [existingUser] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    if (existingUser.length > 0) {
        throw new Error("User with this email already exists");
    };
    let [result] = await db.query(
        'INSERT INTO users (image, email, password) VALUES (?, ?, ?)',
        [image, email, password],
    );
    return result;
}

module.exports = { getAllUsers, registerUser, loginUser };