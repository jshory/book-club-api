const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Member = require('../models/Member');

//GET routes -- retrieve books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
});

//POST route -- save a book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        authorName: req.body.authorName,
        authorBirthYear: req.body.authorBirthYear,
        authorNationality: req.body.authorNationality,
        authorGender: req.body.authorGender,
        memberName: req.body.memberName
    });

    Member.findOne({ name: req.body.memberName }, function (err, member) {
        member.bookList.push(book.title);
        member.save();
    });

    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;