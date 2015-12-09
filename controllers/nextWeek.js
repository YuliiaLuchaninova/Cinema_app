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
var daysLeft = curDay + 7;

router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film WHERE CURDATE() + INTERVAL ' + daysLeft + ' DAY >= premiere AND CURDATE() + INTERVAL ' + daysLeft + ' DAY <= enddate', function (error, filmList) {
        if (error) {
            console.log(error.message);

        } else {
            console.log('success');
            var viewModel = {
                layout: 'user-layout',
                filmList: filmList,
                title: 'Cinema'
            }

            res.render('next-week', viewModel);
        }
    });


});
module.exports = router;