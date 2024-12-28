const { generateToken } = require("../../auth/JWTService");
const db = require("../../DB/connectToDB");
const { generateUserPassword, comparePasswords } = require("../helpers/bcrypt");


async function getAllUsers() {
    let [result] = await db.query('SELECT * FROM users');
    return result;
}

async function getUserByEmail(email) {
    let [result] = await db.query('SELECT id, email, image, isAdmin FROM users WHERE email=?', [email]);    
    return result[0];
}

async function loginUser(userData) {
    let { email, password } = userData;
    let [result] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    if (result.length < 1) {
        throw new Error("User not found");
    }
    if (!comparePasswords(password, result[0].password)) {
        throw new Error("Invalid password");
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
    let encryptPassword = generateUserPassword(password);
    console.log(encryptPassword);
    
    await db.query(
        'INSERT INTO users (image, email, password) VALUES (?, ?, ?)',
        [image, email, encryptPassword],
    );
}

async function updateUserImage(imagePath, email) {
    await db.query(
        'UPDATE users SET image = ? WHERE email = ?',
        [imagePath, email],
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

module.exports = { getAllUsers, registerUser, loginUser, getUserByEmail, registerUserWithGoogle, updateUserImage };