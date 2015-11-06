/**
 * Created by Julia on 05.11.2015.
 */
//var BaseController = require("./admin"),
//    View = require("../views/admin");
//module.exports = BaseController.extend({
//    name: "Admin",
//    run: function(req, res, next) {
//        var v = new View(res, 'admin-layout');
//        v.render({
//            title: 'Administration'
//        });
//    }
//});
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'Admin',
        layout: 'admin-layout'
    };

    res.render('admin', fakeModel);
});
//router.get('/', function (req, res, next) {
//    var fakeModel = {
//        title: 'Edit Page',
//        layout: 'admin-layout'
//    };
//
//    res.render('film-edit-page', fakeModel);
//});


module.exports = router;
