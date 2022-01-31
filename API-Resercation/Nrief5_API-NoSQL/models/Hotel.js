const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        default: 'customer'
    },
})

module.exports = mongoose.model('Hotel', HotelSchema)