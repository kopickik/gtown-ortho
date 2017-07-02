'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res) => {
  const customers = Customer.find().lean().then( (customers) => {
    if (!customers) { return next(new Error('Couldn\'t find any users.')) }
    res.send(customers)
  })

};