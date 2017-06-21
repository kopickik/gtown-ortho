'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res) => {
  const customers = Customer.find().lean().then( (err, customers) => {
    if (err) {
      res.send(err)
    }
    res.status(200).send(customers)
  })

  res.status(200).json({ cars });
};