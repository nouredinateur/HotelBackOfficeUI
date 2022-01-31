const express = require('express');
const router = express.Router();
const Reservation = require('../../models/Reservation')
const Rooms = require('../../models/Rooms')
const Customers = require('../../models/Customers')


// get all Reservations info
router.get('/', async(req, res) => {
    // res.send('posttt')
    try {
        const allReservations = await Reservation.find();
        res.json(allReservations);
    } catch (err) {
        res.json({ message: err })
    }
});

// // add reservation
// router.post('/', async(req, res) => {
//     // console.log(req.body)
//     const reservation = new Reservation({
//         customer: req.body.customer,
//         room: req.body.room,
//         checkIn: req.body.checkIn,
//         checkOut: req.body.checkOut,
//     });

//     try {
//         const saveReservation = await reservation.save();
//         const updatedRoom = await Rooms.updateOne({ _id: req.body.room }, { $set: { status: "reserved" } });

//         res.json(saveReservation);

//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// get one reservation info
router.get('/:reservationId', async(req, res) => {
    try {
        const reservation = await Reservation.findById({ _id:req.params.reservationId}).populate([{path: "customer"},{path:"room"}])
        console.log(reservation);
        res.json(reservation);
    } catch (err) {
        res.json({ message: err });
    }
})

// delete reservation
router.delete('/:reservationId', async(req, res) => {
    try {
        const removereservation = await Reservation.remove({ _id: req.params.reservationId });
        res.json(removereservation);
    } catch (err) {
        res.json({ message: err });
    }
})

// update reservation
router.patch('/:reservationId', async(req, res) => {
    try {
        const updatedReservation = await Reservation.updateOne({ _id: req.params.reservationId }, { $set: { customer: req.body.customer, room: req.body.room, checkIn: req.body.checkIn, checkOut: req.body.checkOut } });
        res.json(updatedReservation);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;