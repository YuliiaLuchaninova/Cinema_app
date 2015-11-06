/**
 * Created by Julia on 05.11.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'KidZclub',
        layout: 'user-layout'
    };

    res.render('kidz-club', fakeModel);
});
module.exports = router;