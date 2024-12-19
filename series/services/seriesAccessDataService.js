const db = require('../../DB/connectToDB');

async function getAllSeries() {
    let [result] = await db.query('SELECT * FROM tv_series');
    return result;

}

async function postNewSeries(newSeries) {
    const { title, genre, release_year, description } = newSeries;
    let [result] = await db.query(
        'INSERT INTO tv_series (title, genre, release_year, description) VALUES (?, ?, ?, ?)',
        [title, genre, release_year, description],
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

module.exports = { getAllSeries, postNewSeries, deleteSeries };