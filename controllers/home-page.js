var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/home-page', function (req, res, next) {
    var fakeModel = {
        layout: 'user-layout', //<this is how to set main layout of the route
        title: 'Cinema',
        slides: [
            {src: "/images/films_images/banner-upload-141392311894.png"},
            {src: "/images/films_images/banner-upload-144236725384.png"},
            {src: "/images/films_images/banner-upload-144408086885.jpg"}
        ]
    };

    res.render('home-page', fakeModel);
});


module.exports = router;
