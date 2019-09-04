const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');
const Book = require('../models/Book');

//GET route -- retrieve meetings
router.get('/', async (req, res) => {
    try {
        const meetings = await Meeting.find();
        res.json(meetings);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:meetingId', async (req, res) => {
    try {
        const meeting = await Meeting.findById(req.params.meetingId);
        res.json(meeting);
    } catch (err) {
        res.json({ message: err });
    }
});

//POST route -- save a meeting
router.post('/', (req, res) => {
    
    Book.findOne({ title: req.body.bookDiscussed }, function (err, book) {
        bookId = book._id;

        const meeting = new Meeting({
            date: req.body.date,
            bookDiscussed: bookId
        });
    
        try {
            const savedMeeting = meeting.save();
            res.json(savedMeeting);
        } catch (err) {
            res.json({ message: err });
        }
    });
});

module.exports = router;