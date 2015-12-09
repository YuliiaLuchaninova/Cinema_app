var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');

router.get('/:filmid/:schedule/:hall1', function (req, res, next) {
    var filmid = req.params.filmid;
    var schedule = req.params.schedule;


    db.query('SELECT * FROM film WHERE id =' + '"' + filmid + '"', function (error, movie) {
        var hallModel = {
            title: 'hall',
            id: filmid,
            hall: req.params.hall1,
            movie: movie[0],
            schedule: schedule

        };

        res.render('hall', hallModel);
    });
});

module.exports = router;