'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('mongoose-type-email')

var CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  phoneNumber: String,
  streetAddress: String
})

module.exports = mongoose.model('Customer', CustomerSchema)