/**
 * Created by Julia on 20.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');


router.get("/", function (req, res) {
    db.query('SELECT * FROM address', function (error, contacts) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            var contactModel = {
                layout: 'admin-layout',
                contacts: contacts[0]

            };
            res.render('edit-about-us', contactModel);
        }

    });
});

router.post("/", function (req, res) {

    var postContacts = {
        address: req.body.address,
        phone: req.body.phone,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        skype: req.body.skype,
        map: req.body.map

    };

    db.query('TRUNCATE address', function (error, result) {
        if (error) {
            console.log(error.message);
            res.redirect('/edit-about-us');
        }

        db.query('INSERT INTO address SET ?', postContacts, function (error, result) {
            if (error) {
                console.log(error.message);
            } else {
                res.redirect('/about-us');
            }
        });

    });

});


module.exports = router;