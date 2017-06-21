'use strict'

const Customer = require('../../models/Customer')

module.exports = (req, res, next) => {
  const customerId = req.params.customerId
  const customer = Customer.remove({
    _id: customerId
  }, function (err, customer) {
    if (err) {
      return res.send(err)
    }
    res.json({ message: 'Customer deleted.' })
  })
}