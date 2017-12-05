let express = require('express');
let session = require('express-session');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let cookieParser = require('cookie-parser');
let mongoose = require('mongoose');

let index = require('./routes/index');
let app = express();
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

// setup mongoDB
let uri = 'mongodb://localhost:27017/bookstore';
mongoose.connect(uri, {useMongoClient: true}).then(
  () => { console.log('success') },
  err => { console.log('error') }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3000);
