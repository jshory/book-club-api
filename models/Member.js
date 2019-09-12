const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = Schema({
    name: { type: String, unique: true },
    bookList: [{ type: String, unique: true }]
});

module.exports = mongoose.model('Member', MemberSchema);