const db = require("../../DB/connectToDB");


async function getAllUsers(){
    let [result] = await db.query('SELECT * FROM users');
    return result;
}

async function registerUser(user){
    const {userName, email, password} = user;
    let [result] = await db.query(
        'INSERT INTO users (userName, email, password) VALUES (?, ?, ?)',
        [userName, email, password],
    );
    return result;
}

module.exports = {getAllUsers, registerUser};