/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'About us',
        layout: 'user-layout'
    };

    res.render('about-us', fakeModel);
});
module.exports = router;