/**
 * Created by Julia on 05.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');


router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film', function (error, filmList) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');

            db.query('SELECT * FROM address', function (error, contacts) {
                var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                    timezone: 'UTC'
                };

                filmList.forEach(function (film) {
                    film.premiere = film.premiere.toLocaleString('en', options);
                });
                var viewModel = {
                    layout: 'admin-layout',
                    filmList: filmList,
                    contacts: contacts[0]
                };
                res.render('admin', viewModel);
            });
        }
    });
});

router.get('/remove/films/:id', function (req, res) {
    db.query('DELETE FROM film WHERE id="' + req.params.id + '"', function (error) {
        if (error) {
            console.log(error.message);
        }
        res.redirect('/admin');
    })

});

module.exports = router;
