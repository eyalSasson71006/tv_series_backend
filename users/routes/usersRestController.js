const express = require("express");
const { registerUser, getAllUsers, loginUser } = require("../services/usersAccessDataService");
require("dotenv").config();
const verifyGoogleToken = require("../../auth/googleApiService");
const { generateToken } = require("../../auth/JWTService");

const router = express.Router();

router.post("/google-login", async (req, res) => {
    const { token } = req.body;

    try {
        
        const userData = await verifyGoogleToken(token);
        const appToken = generateToken(userData);
        await registerUser({ email: userData.email, image: userData.picture, password: null });
        res.status(200).json(appToken);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Invalid token" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const token = loginUser(req.body);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
});

router.post("/", async (req, res) => {
    try {
        const newUser = req.body;
        await registerUser(newUser);
        res.send("user added");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;