const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Customer",
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Rooms",
    },
    checkIn: Date,
    checkOut: Date,
    reservedAt: {
        type: Date,
        default: () => Date.now(),
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema)