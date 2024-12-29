const express = require("express");
const { getAllSeries, postNewSeries, deleteSeries, likeSeries, getAllLikedSeries, getSeriesData } = require("../services/seriesAccessDataService");
const { auth, optionalAuth } = require("../../middlewares/auth");

const router = express.Router();

router.get('/', optionalAuth, async (req, res) => {
    const userInfo = req.user || null;
    try {
        const series = await getAllSeries(userInfo?.id);
        res.send(series);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/liked', auth, async (req, res) => {
    const userInfo = req.user;
    try {
        const series = await getAllLikedSeries(userInfo.id);
        res.send(series);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', auth, async (req, res) => {
    const { id } = req.params;
    try {
        const series = await getSeriesData(id);
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
    const { id } = req.params;
    const userInfo = req.user;

    try {
        let isLiked = await likeSeries(id, userInfo.id);
        res.send(isLiked);
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