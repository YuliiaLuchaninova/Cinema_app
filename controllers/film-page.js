var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');

//страница просмотра фильма
router.get('/:id', function (req, res) {

    db.query('SELECT * from film.sql where id = "' + req.params.id + '"', function (error, data) {
        var movie = data[0],
            options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC'
            },
            premiereFormated = movie.premiere.toLocaleString('en', options);

        if (error) {
            console.log(error.message);
            res.redirect('/admin');
        } else {
            if (movie) {
                movie.premiere = premiereFormated;
                movie.layout = 'user-layout';

                res.render('film.sql-page', movie);
            } else {
                res.redirect('/admin');
            }

        }
    });
});

module.exports = router;