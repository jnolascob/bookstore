let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GenreSchema = Schema({
    name: String
});

module.exports = mongoose.model('Genre', GenreSchema);