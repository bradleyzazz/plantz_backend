const pool = require('./index.js')

// Create
const addPlant = (name, callback) => {
    const query = 'INSERT INTO plants (name) VALUES ($1)';
    pool.query(query, [name], callback)
}


// Read
const getPlants = (callback) => {
    const query = 'SELECT name FROM plants';
    pool.query(query, callback)
}


// // Update 
// const updatePhoto = (url, id, callback) => {
//     const query = 'UPDATE photos SET url = $1 WHERE id = $2';
//     pool.query(query, [url, id], callback);
// }


// // Delete 
// const removePhoto = (id, callback) => {
//     const query = 'DELETE FROM photos WHERE id = $1';
//     pool.query(query, [id], callback);
}


module.exports = {
    addPlant,
    getPlants,
}