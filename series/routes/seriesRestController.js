const express = require("express");
const { getAllSeries, postNewSeries, deleteSeries, likeSeries } = require("../services/seriesAccessDataService");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const series = await getAllSeries();
        res.send(series);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", auth, async (req, res) => {
    const newSeries = req.body;
    const userInfo = req.user;

    if (!userInfo.isAdmin) return res.status(401).send("Unauthorized user, only admins can add content");

    try {
        await postNewSeries(newSeries);
        res.send("series added");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put("/like/:id", auth, async (req, res) => {
    const seriesId = req.params;
    const userInfo = req.user;

    try {
        await likeSeries(seriesId, userInfo.id);
        res.send("series liked");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", auth, async (req, res) => {
    const { id } = req.params;
    const userInfo = req.user;

    if (!userInfo.isAdmin) return res.status(401).send("Unauthorized user, only admins can delete content");

    try {
        await deleteSeries(id);
        res.send("series deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;