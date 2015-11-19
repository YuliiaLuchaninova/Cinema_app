var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');
/* GET home page. */

router.get('/', function (req, res, next) {
    db.query('SELECT * FROM film WHERE CURDATE()+INTERVAL 7 DAY >= premiere AND CURDATE()+INTERVAL 7 DAY < enddate', function (error, filmList) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            var viewModel = {
                layout: 'user-layout',
                filmList: filmList,
                title: 'Cinema',
                slides: [
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
