/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');
var day = new Date();
var curDay = day.getDay();
if (curDay === 0)
    curDay = 7;
var daysLeft = curDay + 8;

router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film WHERE premiere >= CURDATE()+INTERVAL ' + daysLeft + ' DAY', function (error, filmList) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            var viewModel = {
                layout: 'user-layout',
                filmList: filmList,
                title: 'Cinema'
            };

            res.render('coming-soon', viewModel);
        }
    });
});
module.exports = router;
