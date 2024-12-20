const express = require("express");
const { registerUser, getAllUsers } = require("../services/usersAccessDataService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
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

module.exports = router;