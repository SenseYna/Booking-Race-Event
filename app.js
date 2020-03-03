var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require("./src/config/passport");
require('dotenv').config();
var session = require('express-session');
var config = require("./src/config");

require('./src/model/connect.js');
require('./src/model/schema');

isEarlyBird = false
vipTicket = 12
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
var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

require('./src/config/passport')(passport);


app.use(logger('dev'));
app.use('/', require('./src/app/routes'));

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
