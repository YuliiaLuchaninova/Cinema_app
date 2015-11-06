/**
 * Created by Julia on 06.11.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'Coming soon',
        layout: 'user-layout'
    };

    res.render('coming-soon', fakeModel);
});
module.exports = router;
