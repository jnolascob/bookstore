let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AuthorSchema = Schema({
    name: String,
    birthday: Date
});

module.exports = mongoose.model('Author', AuthorSchema);