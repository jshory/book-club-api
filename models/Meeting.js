const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MeetingSchema = Schema({
    date: Date,
    bookDiscussed: { type: Schema.Types.ObjectId, ref: 'Book' }
});

module.exports = mongoose.model('Meeting', MeetingSchema);