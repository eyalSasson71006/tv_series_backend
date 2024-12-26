const express = require("express");
const path = require("path");
const { registerUser, getAllUsers, loginUser, getUserByEmail, registerUserWithGoogle, updateUserImage } = require("../services/usersAccessDataService");
require("dotenv").config();
const verifyGoogleToken = require("../../auth/googleApiService");
const { generateToken } = require("../../auth/JWTService");
const multerUpload = require("../services/multerStorageService");

const router = express.Router();


router.post("/google-login", async (req, res) => {
    const { token } = req.body;

    try {
        const userData = await verifyGoogleToken(token);
        let userDataFromDb = await registerUserWithGoogle({ email: userData.email, image: userData.picture, password: null });
        const appToken = generateToken(userDataFromDb);
        res.status(200).json(appToken);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Invalid token" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const token = await loginUser(req.body);
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

router.get("/:email", async (req, res) => {
    const { email } = req.params;
    try {
        const user = await getUserByEmail(email);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/image-upload', multerUpload.single('imageUpload'), (req, res, next) => {
    try {
        updateUserImage(req.file.path, req.body.email);
        res.send("image uploaded");
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;