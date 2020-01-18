var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require("passport");
var session = require('express-session');
var config = require("config");

require('model/connect');
require('model/schema');

isEarlyBird = true
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'src', 'app', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src', 'app', 'public'), { maxAge: '30 days', dotfiles: 'allow' }));
app.set('Cache-Control', 'max-age=3000');

app.use(
  session(
    config.SESSION
  )
);


//PassportJS middleware
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

require('config/passport')(passport);


app.use(logger('dev'));
app.use('/', require('app/routes'));

  // catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  return res.redirect("/");
});

module.exports = app;
