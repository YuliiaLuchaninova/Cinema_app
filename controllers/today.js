/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'Today',
        layout: 'user-layout'
    };

    res.render('today', fakeModel);
});
module.exports = router;
