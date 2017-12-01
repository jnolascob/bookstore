let Book = require('../model/book');

exports.book_create = function(req, res) {
    let book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: req.body.genre
    });

    book.save()
    .then(item => {
        console.log('Book saved!');
        res.status(200).send({ status: 200, message: 'success', data: book });
    })
    .catch(err => {
        console.log('Book - Was occurred an error');
        res.status(400).send({ status: 400, message: 'error', data: '' });
    });
};


exports.book_list = function(req, res, next) {
    Book.find({}, function(err, books) {
        if (err) { return next(err); }
        res.render('books', { title: 'Lista de libros TOP', book_list: books });
      });
};