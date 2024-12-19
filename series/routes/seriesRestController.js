const express = require("express");
const { getAllSeries, postNewSeries, deleteSeries } = require("../services/seriesAccessDataService");
const db = require("../../DB/connectToDB");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const series = await getAllSeries();
        res.send(series);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    const newSeries = req.body;
    try {
        await postNewSeries(newSeries);
        res.send("series added");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await deleteSeries(id);
        res.send("series deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;