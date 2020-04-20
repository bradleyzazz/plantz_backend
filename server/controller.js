const model = require('../db/model.js')

//create plant
const addPlant = (req, res) => {
    model.addPlant(req.body.url, req.body.propId, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end(`Successfully added photo`);
        }
    })
}

//read plants
const getPlants = (req, res) => {
    model.getPlants( (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
}   

// //update photo
// const updatePhoto = (req, res) => {
//     let id = req.params.id;
//     let url = req.body.url;

//     model.changePhotoURL(id, url, (err, results) => {
//         if (err) {
//             res.status(400).send(err);
//         } else {
//             res.status(200).end('Successfully updated photo');
//         }
//     });
// }

// //delete photo
// const deletePhoto = (req, res) => {
//     model.removePhoto(req.params.id, (err, results) => {
//         if (err) {
//             res.status(400).send(err);
//         } else {
//             res.status(200).end('Successfully deleted photo');
//         }
//     })
// }

module.exports = {
    addPlant,
    getPlants
};