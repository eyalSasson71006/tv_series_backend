const db = require('../../DB/connectToDB');

async function getAllSeries() {
    let [result] = await db.query('SELECT * FROM tv_series');
    return result;

}

async function postNewSeries(newSeries) {
    const { title, genre, release_year, description, image } = newSeries;
    let [result] = await db.query(
        'INSERT INTO tv_series (title, genre, release_year, description, image ) VALUES (?, ?, ?, ?, ?)',
        [title, genre, release_year, description, image],
    );
    return result;
}

async function likeSeries(seriesId, userId) {
    let [result] = await db.query(
        'INSERT INTO favorites ( series_id, user_id ) VALUES (?, ?)',
        [seriesId, userId],
    );
    return result;
}

async function deleteSeries(id) {
    let [result] = await db.query(
        'DELETE FROM tv_series WHERE id = ?',
        [id]
    );
    return result;
}


module.exports = { getAllSeries, postNewSeries, deleteSeries, likeSeries };