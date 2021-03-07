const express = require('express');
const router = express.Router();
const Restaurant = require('../Models/restaurant')

router.get('/', (req, res) => {
    res.send('api is running')
});

router.post('/bookTable', (req, res) => {
    splitdate=(req.body.date.split('T'))
    let restaurant = new Restaurant({
        date: splitdate[0],
        table: req.body.person,
        time: req.body.timeValue,
        location: req.body.location,
    });
    restaurant.save((err, bookTable) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else {
            res.status(200).send(bookTable)
        }
    });
})




router.get('/booking/list', (req, res) => {
    Restaurant.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving booking list :' + err);
        }
    });
});



module.exports = router