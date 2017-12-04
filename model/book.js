let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = Schema({
    title: String,
    author: String,
    summary: String,
    isbn: String,
    genre: String
});

BookSchema
.virtual('url')
.get(function () {
  return '/book/'+this._id;
});

module.exports = mongoose.model('Book', BookSchema);