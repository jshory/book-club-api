const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = Schema({
    name: { type: String, unique: true },
    bookList: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

module.exports = mongoose.model('Member', MemberSchema);