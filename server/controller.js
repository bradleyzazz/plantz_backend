const model = require('../db/model.js')

//create plant
const addPlant = (req, res) => {
    console.log(req)
    model.addPlant(req.body.name, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end(`Successfully added plant`);
        }
    })
}

//read plants
const getPlants = (req, res) => {
    model.getPlants( (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            
            let names = [];
            results.rows.forEach(row => {
                names.push(row.name)
            });
            console.log(names)
            res.status(200).send(names);
        }
    });
}   

//delete plant
const deletePlant = (req, res) => {
    model.removePhoto(req.body.name, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end('Successfully deleted photo');
        }
    })
}

//create Measurement
const addMeasurement = (req, res) => {
    console.log(req.body)
    model.addMeasurement(req.body.measurement, req.body.name, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end(`Successfully added plant`);
        }
    })
}

//read Measurement
const getMeasurements = (req, res) => {
    model.getMeasurements(req.body.name, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {    
            let measurements = [];
            results.rows.forEach(row => {
                measurements.push(row.measurement)
            });
            console.log(measurements)
            res.status(200).send(measurements);
        }
    });
}   

module.exports = {
    addPlant,
    getPlants,
    deletePlant,
    addMeasurement,
    getMeasurements
};