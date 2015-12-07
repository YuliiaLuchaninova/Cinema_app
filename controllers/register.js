var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');


router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'register',
        layout: 'user-layout'
    };

    res.render('register', fakeModel);
});


router.post('/', function (req, res, next) {

    var user = {
        FirstName: req.body.login,
        mail: req.body.email,
        Password: req.body.password
    };
    db.query('INSERT INTO users SET ?', user, function (error) {
        if (error) {
            console.log(error.message);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;