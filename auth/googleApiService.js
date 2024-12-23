const { OAuth2Client } = require('google-auth-library');
require("dotenv").config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload(); // Contains user info
    return payload;
}

module.exports = verifyGoogleToken;