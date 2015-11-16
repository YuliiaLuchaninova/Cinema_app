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
            var viewModel = {
                layout: 'admin-layout',
                filmList: filmList
            };
            res.render('admin', viewModel);
        }
    });
});


module.exports = router;
