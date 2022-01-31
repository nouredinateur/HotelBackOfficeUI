const mongoose = require('mongoose');

const RoomsSchema = mongoose.Schema({
    number: {
        type: 'string'
    },
    status: {
        type: 'string',
        default: 'notreserved'
    },
    price: {
        type: 'string',
        default: '100'
    },
    note: {
        type: 'string'
    }
})

module.exports = mongoose.model('Rooms', RoomsSchema)