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

// Delete 
const deletePlant = (id, callback) => {
    const query = 'DELETE FROM photos WHERE id = $1';
    pool.query(query, [id], callback);
}


////// MEASUREMENTS //////

// Creat Measurement
const addMeasurement = (measurement, name, callback) => {
    const query = 'INSERT INTO measurements (measurement, plantId) VALUES ($1, (SELECT id FROM plants WHERE name = $2))';
    pool.query(query, [measurement, name], callback)
}

// Read Measurement
const getMeasurements = (name, callback) => {
    const query = 'SELECT measurement FROM measurements INNER JOIN plants ON measurements.plantId = plants.id AND plants.name = $1';
    pool.query(query, [name], callback)
}


module.exports = {
    addPlant,
    getPlants,
    deletePlant,
    addMeasurement,
    getMeasurements
}