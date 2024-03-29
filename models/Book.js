const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookSchema = Schema({
    title: String,
    year: Number,
    genre: String,
    authorName: String,
    authorBirthYear: Number,
    authorNationality: String,
    authorGender: String,
    memberName: String
});

module.exports = mongoose.model('Book', BookSchema);