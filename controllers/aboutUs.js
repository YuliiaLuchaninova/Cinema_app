/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');

router.get('/', function (req, res, next) {
    db.query('SELECT * from address', function (error, contacts) {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log('success');

            var fakeModel = {
                title: 'About us',
                layout: 'user-layout',
                contacts: contacts
            };

            res.render('about-us', fakeModel);
        }
    })
});
module.exports = router;