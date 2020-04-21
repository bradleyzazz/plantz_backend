const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const Controller = require('./controller.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Plants
app.get('/api/plants', Controller.getPlants)
app.post('/api/plants', Controller.addPlant)
app.delete('/api/plants', Controller.deletePlant)

// Measurements
app.get('/api/measurements', Controller.getMeasurements)
app.post('/api/measurements', Controller.addMeasurement)
// app.delete('/api/measurements', Controller.getMeasurement)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))