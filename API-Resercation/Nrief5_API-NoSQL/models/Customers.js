const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    cin: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        default: 'customer'
    },
})

module.exports = mongoose.model('Customer', CustomerSchema)