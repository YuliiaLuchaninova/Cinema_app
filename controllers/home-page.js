var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');


var day = new Date();
var curDay = day.getDay();
if (curDay === 0)
    curDay = 7;
var daysLeft = 7 - curDay;


router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film WHERE CURDATE() + INTERVAL ' + daysLeft + ' DAY >= premiere AND CURDATE() + INTERVAL ' + daysLeft + ' DAY <= enddate', function (error, filmList) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            var viewModel = {
                layout: 'user-layout',
                filmList: filmList,
                title: 'Cinema',
                slides: [
                    {src: "/images/films_images/dragon (1).jpg"},
                    {src: "/images/films_images/interstellar.jpg"},
                    {src: "/images/films_images/banner-upload-141392311894.png"},
                    {src: "/images/films_images/banner-upload-144236725384.png"},
                    {src: "/images/films_images/banner-upload-144408086885.jpg"}
                ]
            };

            res.render('home-page', viewModel);
        }
    });
});


module.exports = router;
