let express = require('express');
let router = express.Router();

let login_controller = require('../controllers/loginController');
let book_controller = require('../controllers/bookController');

/* GET request */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'BOOK-STORE' });
});

router.get('/login', (req, res, next) => {
  res.render('login', {});
});

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', {});
});

router.get('/books', book_controller.book_list);

router.get('/book/:id', book_controller.book_detail);

router.get('/book-detail', (req, res, next) => {
  res.render('bookDetail', {});
});

/* POST request */
router.post('/login', login_controller.login_post);

/* API request */
router.post('/book/create', book_controller.book_create);

module.exports = router;