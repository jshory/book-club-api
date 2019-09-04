const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

//GET routes -- retrieve members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:memberId', async (req, res) => {
    try {
        const member = await Member.findById(req.params.memberId);
        res.json(member);
    } catch (err) {
        res.json({ message: err });
    }
});

//POST route -- save a member
router.post('/', async (req, res) => {
    const member = new Member({
        name: req.body.name
    });

    try {
        const savedMember = await member.save();
        res.json(savedMember);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;