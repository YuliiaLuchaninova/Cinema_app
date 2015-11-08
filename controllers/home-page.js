var express = require('express');
var homeModel = require('../models/home-model');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('home-page', homeModel);
});


module.exports = router;
