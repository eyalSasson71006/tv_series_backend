const express = require("express");
const seriesRouterController = require("../series/routes/seriesRestController");

const router = express.Router();

router.use("/series", seriesRouterController);

router.use((req, res) => {
    return res.status(404).send("Path not found");
});

module.exports = router