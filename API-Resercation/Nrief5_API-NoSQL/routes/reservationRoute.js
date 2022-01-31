const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation')
const Rooms = require('../models/Rooms')


// get all not reserved rooms
router.get('/', async(req, res) => {
    // res.send('posttt')
    try {
        const RoomsNotreserved = await Rooms.find({ status: "notreserved" });
        res.json(RoomsNotreserved);
    } catch (err) {
        res.json({ message: err })
    }
});

// create reservation
router.post('/', async(req, res) => {
    // console.log(req.body)
    const reservation = new Reservation({
        customer: req.body.customer,
        room: req.body.room,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
    });
    console.log(req.body.room);
    try {
        const updatedRoom = await Rooms.updateOne({ _id: req.body.room }, { $set: { status: "reserved" } });
        const saveReservation = await reservation.save();

        res.json({ saveReservation, updatedRoom });

    } catch (err) {
        res.json({ message: err });
    }
});


// get all his reservations
router.get('/:customerId', async(req, res) => {
    try {
        const customerReservations = await Reservation.find({ customer: req.params.customerId })
        res.json(customerReservations);
    } catch (err) {
        res.json({ message: err });
    }
})

// // delete one
// router.delete('/:reservationId', async(req, res) => {
//     try {
//         const removereservation = await Reservation.remove({ _id: req.params.reservationId });
//         res.json(removereservation);
//     } catch (err) {
//         res.json({ message: err });
//     }
// })

// // update one
// router.patch('/:reservationId', async(req, res) => {
//     try {
//         const updatedReservation = await Reservation.updateOne({ _id: req.params.reservationId }, { $set: { customer: req.body.customer, room: req.body.room, checkIn: req.body.checkIn, checkOut: req.body.checkOut } });
//         res.json(updatedReservation);
//     } catch (err) {
//         res.json({ message: err });
//     }
// })


module.exports = router;