const express = require('express');
const router = express.Router();
const Hotel = require('../../models/Hotel')
const Customer = require('../../models/Customers')

// get all customers
router.get('/', async(req, res) => {
    // res.send('posttt')
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.json({ message: err })
    }
});

// add customers
router.post('/', async(req, res) => {
    // console.log(req.body)
    const customer = new Customer({
        name: req.body.name,
        cin: req.body.cin,
        phone: req.body.phone
    });
    try {
        const saveCustomer = await customer.save();
        res.json(saveCustomer);

    } catch (err) {
        res.json({ message: err });
    }
});

// get one
router.get('/:customerId', async(req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerId);
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
})

// delete one
router.delete('/:customerId', async(req, res) => {
    try {
        const removecustomer = await Customer.remove({ _id: req.params.customerId });
        res.json(removecustomer);
    } catch (err) {
        res.json({ message: err });
    }
})

// update one
router.patch('/:customerId', async(req, res) => {
    try {
        const updatedCustomer = await Customer.updateOne({ _id: req.params.customerId }, { $set: { name: req.body.name, cin: req.body.cin, phone: req.body.phone } });
        res.json(updatedCustomer);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;