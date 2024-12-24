const db = require('../../DB/connectToDB');

async function getAllSeries(userId = null) {
    if (userId) {
        let [result] = await db.query(
            `
            SELECT 
                tv_series.*, 
                CASE 
                    WHEN favorites.user_id IS NOT NULL THEN true 
                    ELSE false 
                END AS is_favorite
            FROM 
                tv_series
            LEFT JOIN 
                favorites 
            ON 
                tv_series.id = favorites.series_id AND favorites.user_id = ?
            `,
            [userId]
        );        
        return result;
    } else {
        let [result] = await db.query('SELECT * FROM tv_series');
        return result;
    }
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
    let isLiked = false;
    let [result] = await db.query(
        'SELECT * FROM favorites WHERE series_id = ? AND user_id = ?',
        [seriesId, userId],
    );

    if (result.length > 0) {
        await db.query(
            'DELETE FROM favorites WHERE series_id = ? AND user_id = ?',
            [seriesId, userId],
        );
    } else {
        await db.query(
            'INSERT INTO favorites ( series_id, user_id ) VALUES (?, ?)',
            [seriesId, userId],
        );
        isLiked = true;
    }
    return isLiked;
}

async function deleteSeries(id) {
    let [result] = await db.query(
        'DELETE FROM tv_series WHERE id = ?',
        [id]
    );
    return result;
}


module.exports = { getAllSeries, postNewSeries, deleteSeries, likeSeries };