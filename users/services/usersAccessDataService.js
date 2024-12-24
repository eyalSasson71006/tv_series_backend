const { generateToken } = require("../../auth/JWTService");
const db = require("../../DB/connectToDB");


async function getAllUsers() {
    let [result] = await db.query('SELECT * FROM users');
    return result;
}

async function getUserByEmail(email) {
    let [result] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    return result[0];
}

async function loginUser(userData) {
    let { email, password } = userData;
    let [result] = await db.query('SELECT * FROM users WHERE email=? AND password=?', [email, password]);
    if (result.length < 1) {
        throw new Error("User not found");
    }
    const token = generateToken(await result[0]);
    return token;
}

async function registerUser(user) {
    const { image, email, password } = user;
    let [existingUser] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    if (existingUser.length > 0) {
        throw new Error("User with this email already exists");
    };
    await db.query(
        'INSERT INTO users (image, email, password) VALUES (?, ?, ?)',
        [image, email, password],
    );
}

async function registerUserWithGoogle(user) {
    const { image, email } = user;
    let [existingUser] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    if (existingUser.length > 0) return existingUser[0];
    await db.query(
        'INSERT INTO users (image, email, password) VALUES (?, ?, ?)',
        [image, email, null],
    );
    let [newUser] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    return newUser[0];
}

module.exports = { getAllUsers, registerUser, loginUser, getUserByEmail, registerUserWithGoogle };