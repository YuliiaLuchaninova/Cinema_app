/**
 * Created by Julia on 05.11.2015.
 */
var express = require('express');
var router = express.Router();
var db = require('../mysql/dbConnection');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: appRoot + '/public/films-posters',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({storage: storage});

//вызывается из кнопки Add movie
router.get("/create-film", function (req, res, next) {
    var viewModel = {
        layout: 'admin-layout'
    };

    res.render('create-film-page', viewModel);
});
//Вызывается из формы создания фильма
router.post("/save-film", upload.single('image'), function (req, res) {
    var id = req.body.movieName.replace(",", "").replace(/\s/g, "-").toLowerCase();

    var postFilm = {
        id: id,
        title: req.body.movieName,
        duration: req.body.duration,
        price: req.body.price,
        image: '/films-posters/' + req.file.originalname,
        premiere: req.body.premiere,
        genres: req.body.genre,
        description: req.body.description,
        actors: req.body.actors,
        director: req.body.director,
        YouTube: req.body.youtube,
        enddate: req.body.enddate,
        schedule1: req.body.schedule1,
        schedule2: req.body.schedule2,
        schedule3: req.body.schedule3
    };

    db.query('INSERT INTO film SET ?', postFilm, function (error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            res.redirect('/films/' + id);
        }
    });
});
//страница редактирования фильма
// корневой роут - /film-edit-page
router.get("/:id", function (req, res, next) {
    db.query('SELECT * from film where id = "' + req.params.id + '"', function (error, filmItem) {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log('success');

            var viewModel = {
                layout: 'admin-layout',
                title: filmItem[0].title,
                filmItem: filmItem[0]
            };

            res.render('film-edit-page', viewModel);
        }
    });
});

router.post("/edit-film/:id", upload.single('image'), function (req, res, next) {
    var updatedFilm = {
        id: req.params.id,
        title: req.body.movieName,
        duration: req.body.duration,
        price: req.body.price,
        image: '/films-posters/' + req.file.originalname,
        premiere: req.body.premiere,
        genres: req.body.genre,
        description: req.body.description,
        actors: req.body.actors,
        director: req.body.director,
        YouTube: req.body.youtube
    };

    db.query('UPDATE film SET ? WHERE id="' + req.params.id + '"', updatedFilm, function (error, updatedFilm) {
        if (error) {
            console.log(error.message);
        } else {
            res.redirect('/films/' + req.params.id);
        }
    });
});

module.exports = router;
