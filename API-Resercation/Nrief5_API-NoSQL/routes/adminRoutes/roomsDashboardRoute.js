const express = require('express');
const router = express.Router();
const Hotel = require('../../models/Hotel')
const Rooms = require('../../models/Rooms')

// get all rooms
router.get('/', async(req, res) => {
    // res.send('posttt')
    try {
        const rooms = await Rooms.find();
        res.json(rooms);
        
        // console.log(res.json(rooms));
    } catch (err) {
        res.json({ message: err })
    }
});

// add room
router.post('/', async(req, res) => {
    // console.log(req.body)
    const room = new Rooms({
        number: req.body.number,
        status: req.body.status,
        price: req.body.price,
        note: req.body.note
    });
    try {
        const saveRoom = await room.save();
        res.json(saveRoom);

    } catch (err) {
        res.json({ message: err });
    }
});

// get one
router.get('/:roomId', async(req, res) => {
    try {
        const room = await Rooms.findById(req.params.roomId);
        res.json(room);
    } catch (err) {
        res.json({ message: err });
    }
})

// delete one
router.delete('/:roomId', async(req, res) => {
    try {
        const removeRoom = await Rooms.remove({ _id: req.params.roomId });
        res.json(removeRoom);
    } catch (err) {
        res.json({ message: err });
    }
})

// update one
router.patch('/:roomId', async(req, res) => {
    try {
        const updatedRoom = await Rooms.updateOne({ _id: req.params.roomId }, { $set: { number: req.body.number, status: req.body.status, price: req.body.price, note: req.body.note } });
        res.json(updatedRoom);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;