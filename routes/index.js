let express = require('express');
let router = express.Router();

let login_controller = require('../controllers/loginController');
let book_controller = require('../controllers/bookController');

/* GET request */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'BOOK-STORE' });
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {});
});

router.get('/books', function(req, res, next) {
  res.render('books', {});
});

/* POST request */
router.post('/login', login_controller.login_post);

/* API request */
router.post('/book/create', book_controller.book_create);

module.exports = router;