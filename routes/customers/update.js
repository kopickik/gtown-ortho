'use strict'

const Customer = require('../../models/Customer')

module.exports = (req, res, next) => {
  const body = req.body
  const customerId = req.params.customerId
  const customer = Customer.findById(customerId, function (err, customer) {
    if (err) {
      return res.send(err)
    }
    customer.firstName = body.firstName
    customer.lastName = body.lastName
    customer.email = body.email
    customer.streetAddress = body.streetAddress
    customer.phoneNumber = body.phoneNumber

    customer.save(function (err) {
      if (err) {
        return res.send(err)
      }
      res.status(200).send({ message: 'Customer updated!' })
    })
  })
}