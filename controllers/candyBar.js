/**
 * Created by Julia on 05.11.2015.
 */
var express = require('express');
var router = express.Router();
var script = '<script>' +
    '$(function () {' +
    'animator.init("food");})' +
    '</script>';

router.get('/', function (req, res, next) {
    var fakeModel = {
        title: 'Candy Bar',
        layout: 'user-layout',
        pics: [
            {src: "/images/candybar/beer.png", id: "food1"},
            {src: "/images/candybar/bottle.png", id: "food2"},
            {src: "/images/candybar/Coffee_Cup.png", id: "food3"},
            {src: "/images/candybar/cup.png", id: "food4"},
            {src: "/images/candybar/coke_bottle.png", id: "food5"},
            {src: "/images/candybar/helados.png", id: "food6"},
            {src: "/images/candybar/burger.png", id: "food7"},
            {src: "/images/candybar/sandwich.png", id: "food8"},
            {src: "/images/candybar/free.png", id: "food10"},
            {src: "/images/candybar/mm.png", id: "food9"},
            {src: "/images/candybar/choko.png", id: "food10"},
            {src: "/images/candybar/bottle.png", id: "food2"},
            {src: "/images/candybar/Coffee_Cup.png", id: "food3"},
            {src: "/images/candybar/cup.png", id: "food4"},
            {src: "/images/candybar/coke_bottle.png", id: "food5"}
        ],
        script: script
    };

    res.render('candy-bar', fakeModel);
});
module.exports = router;
