/**
 * Created by Julia on 05.11.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'Edit Page',
        layout: 'admin-layout'
    };

    res.render('film-edit-page', fakeModel);
});
module.exports = router;
