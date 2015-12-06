/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');

router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film WHERE CURDATE()+INTERVAL 1 DAY >= premiere AND CURDATE()+INTERVAL 1 DAY <= enddate', function (error, filmList) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            var viewModel = {
                layout: 'user-layout',
                filmList: filmList,
                title: 'Cinema'
            };

            res.render('tomorrow', viewModel);
        }
    });
});
module.exports = router;