var express = require('express');
var path = require('path');
global.appRoot = path.resolve(__dirname);
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var hall1Router = require('./controllers/hall');
var registerRouter = require('./controllers/register');
var newsLetterRouter = require('./controllers/newsLetter');
var aboutUsRouter = require('./controllers/aboutUs');
var comingSoonRouter = require('./controllers/comingSoon');
var nextWeekRouter = require('./controllers/nextWeek');
var tomorrowRouter = require('./controllers/tomorrow');
var todayRouter = require('./controllers/today');
var candyBar = require('./controllers/candyBar');
var contactEditRouter = require('./controllers/editAboutUs');
var kidzClub = require('./controllers/kidzClub');
var filmPage = require('./controllers/film-page');
var filmEditRouter = require('./controllers/filmEditPage');
var adminRouter = require('./controllers/admin');
var homeRouter = require('./controllers/home-page');
var users = require('./controllers/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/booking-page', hall1Router);
app.use('/register', registerRouter);
app.use('/news-letter', newsLetterRouter);
app.use('/about-us', aboutUsRouter);
app.use('/coming-soon', comingSoonRouter);
app.use('/next-week', nextWeekRouter);
app.use('/tomorrow', tomorrowRouter);
app.use('/today', todayRouter);
app.use('/candy-bar', candyBar);
app.use('/kidz-club', kidzClub);
app.use('/film-edit-page', filmEditRouter);
app.use('/admin', adminRouter);
app.use('/users', users);
app.use('/films', filmPage);
app.use('/edit-about-us', contactEditRouter);

app.use('/', homeRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
