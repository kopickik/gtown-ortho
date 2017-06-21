'use strict'

const routes = require('express').Router()
const customers = require('./customers')
const apiError = require('./error')

routes.get('/', (req, res, next) => {
  res.status(200).json({message: 'Connected'})
})

routes.use('/customers', customers)
routes.use('/*', apiError)

module.exports = routes