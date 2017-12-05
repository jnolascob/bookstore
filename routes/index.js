let express = require('express');
let router = express.Router();

let login_controller = require('../controllers/loginController');
let book_controller = require('../controllers/bookController');
let home_controller = require('../controllers/homeController');

/* GET request */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'BOOK-STORE' });
});

router.get('/login', (req, res, next) => {
  res.render('login', {});
});

router.get('/logout', login_controller.logout)

router.get('/home', home_controller.home_validate);

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