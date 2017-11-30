let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = Schema({
    title: String,
    author: String,
    summary: String,
    isbn: String,
    genre: String
});

module.exports = mongoose.model('Book', BookSchema);