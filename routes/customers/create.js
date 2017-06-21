'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res, next) => {
  const body = req.body
  const customer = new Customer({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    streetAddress: body.streetAddress,
    phoneNumber: body.phoneNumber
  });

  customer.save(function (err) {
    if (err) {
      return res.send(err)
    }
    return res.send({ message: 'Customer created!' })
  })
};
